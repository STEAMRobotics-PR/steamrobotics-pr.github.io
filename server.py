from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import os
import mimetypes

class RangeRequestHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path)

        if os.path.isdir(path):
            return super().send_head()

        if not os.path.exists(path):
            self.send_error(404, "File not found")
            return None

        file_size = os.path.getsize(path)
        range_header = self.headers.get("Range")

        ctype = mimetypes.guess_type(path)[0] or "application/octet-stream"

        if range_header:
            try:
                units, range_spec = range_header.strip().split("=")
                if units != "bytes":
                    raise ValueError("Only bytes range supported")

                start_str, end_str = range_spec.split("-")

                if start_str:
                    start = int(start_str)
                else:
                    start = 0

                if end_str:
                    end = int(end_str)
                else:
                    end = file_size - 1

                start = max(0, start)
                end = min(end, file_size - 1)

                if start > end:
                    self.send_error(416, "Requested Range Not Satisfiable")
                    return None

                length = end - start + 1

                f = open(path, "rb")
                f.seek(start)

                self.send_response(206)
                self.send_header("Content-type", ctype)
                self.send_header("Accept-Ranges", "bytes")
                self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
                self.send_header("Content-Length", str(length))
                self.end_headers()

                self.range = (start, end)
                return f

            except Exception as err:
                print("Range error:", err)
                self.send_error(400, "Bad Range header")
                return None

        f = open(path, "rb")
        self.send_response(200)
        self.send_header("Content-type", ctype)
        self.send_header("Content-Length", str(file_size))
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        return f

    def copyfile(self, source, outputfile):
        range_data = getattr(self, "range", None)

        if not range_data:
            return super().copyfile(source, outputfile)

        start, end = range_data
        remaining = end - start + 1
        buffer_size = 64 * 1024

        while remaining > 0:
            chunk = source.read(min(buffer_size, remaining))
            if not chunk:
                break

            try:
                outputfile.write(chunk)
            except ConnectionResetError:
                break
            except BrokenPipeError:
                break

            remaining -= len(chunk)

        self.range = None


if __name__ == "__main__":
    port = 5656
    server = ThreadingHTTPServer(("0.0.0.0", port), RangeRequestHandler)

    print(f"Serving with Range support:")
    print(f"http://0.0.0.0:{port}")

    server.serve_forever()
