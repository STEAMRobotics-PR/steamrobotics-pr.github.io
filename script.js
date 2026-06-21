import * as THREE from 'three';

const translations = {
  it: {
    skip: 'Salta al contenuto',
    navFtc: 'FIRST Tech Challenge', navAbout: 'Chi siamo', navEngineering: 'Engineering', navRobot: 'Robot', navTeam: 'Team', navPartners: 'Partner', navJourney: 'Stories', navStories: 'Stories', navSponsorPage: 'Sponsor',
    heroEyebrow: 'FIRST Tech Challenge · Parma, Italy',
    heroTitle: 'Engineering a team before engineering the robot.',
    heroLead: 'STEAM Robotics è il team FTC 34690: studenti, mentor, CAD, Java, prototipi, autonomia, documentazione e partnership in un unico progetto reale.',
    heroCta1: 'Esplora il progetto', heroCta2: 'Diventa partner', statTeam: 'FTC Team', statSeason: 'Prima stagione', statMembers: 'Membri', statMentors: 'Mentor', sponsorBeltLabel: 'Partner network',
    ftcKicker: 'FIRST Tech Challenge', ftcTitle: 'Non è una gara di robot. È una stagione di ingegneria.',
    ftcText: 'La FIRST Tech Challenge porta team di studenti a progettare, costruire e programmare robot per una sfida annuale. Dentro ci sono strategia, collaborazione, prototipi, codice, documentazione, outreach e competizione.',
    ftcCard1Title: 'Analizzare', ftcCard1Text: 'Regole, campo, punteggio, rischi e priorità.', ftcCard2Title: 'Prototipare', ftcCard2Text: 'Soluzioni rapide prima del CAD definitivo.', ftcCard3Title: 'Programmare', ftcCard3Text: 'TeleOp, autonomia, sensori e telemetria.', ftcCard4Title: 'Raccontare', ftcCard4Text: 'Portfolio, outreach, partner e presentazione.',
    aboutVideoHud: 'mouse + scroll video scrub', aboutKicker: 'Chi siamo', aboutTitle: 'Un team scolastico, ma con standard da progetto tecnico vero.',
    aboutText1: 'STEAM Robotics nasce all’interno del Liceo STEAM International di Parma. Il team partecipa alla FTC come laboratorio reale: responsabilità, scelte tecniche, documentazione, test e collaborazione tra studenti e mentor.',
    aboutText2: 'Siamo alla prima stagione FTC, ma i membri arrivano da esperienze in competizioni STEM, software, CAD, design, comunicazione e lavoro di squadra.',
    engineeringKicker: 'Aree di lavoro', engineeringTitle: 'Quattro reparti, un solo robot affidabile.',
    eng1Title: 'Meccanica & CAD', eng1Text: 'Analisi del gioco, prototipi, sottosistemi, CAD, assemblaggio e test sul campo.', eng2Title: 'Software & controllo', eng2Text: 'Java FTC, TeleOp, autonomous, sensori, telemetria e codice mantenibile.', eng3Title: 'Elettronica & integrazione', eng3Text: 'Cablaggio, motori, servo, controller, affidabilità elettrica e debug.', eng4Title: 'Outreach & comunicazione', eng4Text: 'Sponsor, portfolio, stories, sito, presentazioni e rapporti con il territorio.',
    robotKicker: 'Season robot / in progress', robotTitle: 'Per ora: una nuvola di punti. Poi: CAD reale.', robotText: 'La preview non finge un robot che non esiste. Mostra un render tecnico astratto, pronto a essere sostituito con il modello 3D della stagione quando il CAD sarà abbastanza stabile.', robotCta: 'Approfondimento tecnico, più avanti →',
    teamKicker: 'Team', teamTitle: 'Persone diverse, stessa missione tecnica.',
    partnersKicker: 'Sponsors & partners', partnersTitle: 'Vuoi essere partner del team?', partnersText: 'Cerchiamo aziende, professionisti, istituzioni e realtà locali interessate a sostenere un progetto educativo concreto: robotica, software, meccanica, comunicazione e cultura tecnica.', partnersCta1: 'Come funzionano gli accordi', partnersCta2: 'Contattaci',
    journeyKicker: 'Season journey + stories', journeyTitle: 'Scorrendo, gli eventi diventano una timeline.', journeyText: 'La sezione unisce percorso tecnico e storie del team. La pagina stories raccoglie gallerie e testi completi degli eventi.', journeyCta: 'Apri stories complete →'
  },
  en: {
    skip: 'Skip to content',
    navFtc: 'FIRST Tech Challenge', navAbout: 'About', navEngineering: 'Engineering', navRobot: 'Robot', navTeam: 'Team', navPartners: 'Partners', navJourney: 'Stories', navStories: 'Stories', navSponsorPage: 'Sponsors',
    heroEyebrow: 'FIRST Tech Challenge · Parma, Italy',
    heroTitle: 'Engineering a team before engineering the robot.',
    heroLead: 'STEAM Robotics is FTC Team 34690: students, mentors, CAD, Java, prototypes, autonomy, documentation and partnerships in one real engineering project.',
    heroCta1: 'Explore the project', heroCta2: 'Become a partner', statTeam: 'FTC Team', statSeason: 'First season', statMembers: 'Members', statMentors: 'Mentors', sponsorBeltLabel: 'Partner network',
    ftcKicker: 'FIRST Tech Challenge', ftcTitle: 'It is not just a robot competition. It is a full engineering season.',
    ftcText: 'FIRST Tech Challenge brings student teams together to design, build and program robots for an annual challenge. It includes strategy, collaboration, prototypes, code, documentation, outreach and competition.',
    ftcCard1Title: 'Analyze', ftcCard1Text: 'Rules, field, scoring, risks and priorities.', ftcCard2Title: 'Prototype', ftcCard2Text: 'Fast solutions before final CAD.', ftcCard3Title: 'Program', ftcCard3Text: 'TeleOp, autonomy, sensors and telemetry.', ftcCard4Title: 'Communicate', ftcCard4Text: 'Portfolio, outreach, partners and presentation.',
    aboutVideoHud: 'mouse + scroll video scrub', aboutKicker: 'About us', aboutTitle: 'A school team, with real engineering standards.',
    aboutText1: 'STEAM Robotics was born inside Liceo STEAM International in Parma. The team approaches FTC as a real lab: responsibilities, technical decisions, documentation, testing and collaboration between students and mentors.',
    aboutText2: 'We are entering our first FTC season, but members bring experience from STEM competitions, software, CAD, design, communication and teamwork.',
    engineeringKicker: 'Engineering areas', engineeringTitle: 'Four departments, one reliable robot.',
    eng1Title: 'Mechanical & CAD', eng1Text: 'Game analysis, prototypes, subsystems, CAD, assembly and field testing.', eng2Title: 'Software & control', eng2Text: 'FTC Java, TeleOp, autonomous, sensors, telemetry and maintainable code.', eng3Title: 'Electronics & integration', eng3Text: 'Wiring, motors, servos, controllers, electrical reliability and debugging.', eng4Title: 'Outreach & communication', eng4Text: 'Sponsors, portfolio, stories, website, presentations and local relationships.',
    robotKicker: 'Season robot / in progress', robotTitle: 'For now: a point cloud. Later: real CAD.', robotText: 'The preview does not fake a robot that does not exist yet. It shows an abstract technical render, ready to be replaced by the season 3D model once the CAD is stable enough.', robotCta: 'Technical deep dive, later →',
    teamKicker: 'Team', teamTitle: 'Different people, same technical mission.',
    partnersKicker: 'Sponsors & partners', partnersTitle: 'Want to partner with the team?', partnersText: 'We are looking for companies, professionals, institutions and local organizations interested in supporting a concrete educational project: robotics, software, mechanics, communication and technical culture.', partnersCta1: 'How agreements work', partnersCta2: 'Contact us',
    journeyKicker: 'Season journey + stories', journeyTitle: 'As you scroll, events become a timeline.', journeyText: 'This section connects the technical season and team stories. The stories page collects galleries and full event reports.', journeyCta: 'Open full stories →'
  }
};

const members = [
  { name: 'Lorenzo Castellan', type: 'Mentor', spec: 'ICT / Engineering', role: 'Mentor · ICT / Engineering', initials: 'LC', quote: '“Build the process first. The robot follows.”', experience: 'Esperienze: didattica tecnica, ICT, engineering process.', image: '', logos: [{ label: 'STEAM', tooltip: 'Liceo STEAM International', href: 'https://steam.school/' }, { label: 'ICT', tooltip: 'ICT & engineering', href: '#' }] },
  { name: 'Andrea Tedeschi', type: 'Mentor', spec: 'Design / CAD', role: 'Mentor · Technology / CAD', initials: 'AT', quote: '“A good prototype teaches more than a perfect idea.”', experience: 'Esperienze: tecnologia, CAD, progettazione e laboratorio.', image: '', logos: [{ label: 'CAD', tooltip: 'CAD design', href: '#' }, { label: 'LAB', tooltip: 'Lab practice', href: '#' }] },
  { name: 'Luca Sacchini', type: 'Student mentor', spec: 'Software / Java', role: 'Student mentor · Java development', initials: 'LS', quote: '“Readable code survives the match.”', experience: 'Esperienze: Java, web, backend, automazione e tool interni.', image: '', logos: [{ label: 'JAV', tooltip: 'Java development', href: '#' }, { label: 'WEB', tooltip: 'Web & backend', href: '#' }] },
  { name: 'Patrick Silingardi', type: 'Student mentor', spec: 'Business / Marketing', role: 'Student mentor · Business / Marketing', initials: 'PS', quote: '“The project must work, but it must also be understood.”', experience: 'Esperienze: comunicazione, business, marketing e presentazione.', image: '', logos: [{ label: 'MKT', tooltip: 'Marketing', href: '#' }, { label: 'COM', tooltip: 'Communication', href: '#' }] },
  { name: 'Students crew', type: 'Students', spec: 'Build / Code / Outreach', role: 'FTC students · Build, code, outreach', initials: 'SR', quote: '“Different tasks, one pit.”', experience: 'Aree: CAD, meccanica, elettronica, software, design, documentazione.', image: '', logos: [{ label: 'FTC', tooltip: 'FIRST Tech Challenge', href: 'https://www.firstinspires.org/robotics/ftc' }, { label: 'CAD', tooltip: 'CAD & mechanics', href: '#' }, { label: 'SW', tooltip: 'Software', href: '#' }] }
];

const timelineItems = [
  { date: '2026 · kickoff', title: { it: 'Kickoff & strategy', en: 'Kickoff & strategy' }, body: { it: 'Regolamento, priorità, scoring, vincoli e rischio tecnico. Il primo lavoro è capire cosa vale davvero prima di progettare.', en: 'Rules, priorities, scoring, constraints and technical risk. The first task is understanding what actually matters before designing.' }, image: 'assets/story-placeholder.svg' },
  { date: '2026 · workshop', title: { it: 'Workshop & outreach', en: 'Workshop & outreach' }, body: { it: 'Incontri, presentazioni e attività con scuola e territorio. Ogni evento diventa materiale per raccontare il progetto.', en: 'Meetings, presentations and activities with the school and local community. Each event becomes material to tell the project.' }, image: 'assets/story-placeholder.svg' },
  { date: '2026 · prototype', title: { it: 'Prototipi rapidi', en: 'Rapid prototypes' }, body: { it: 'Test veloci, misure, video e fallimenti utili. L’obiettivo è scartare presto le idee fragili.', en: 'Fast tests, measurements, videos and useful failures. The goal is to reject fragile ideas early.' }, image: 'assets/story-placeholder.svg' },
  { date: '2026 · build', title: { it: 'CAD & build', en: 'CAD & build' }, body: { it: 'Dal concept al robot integrato, con attenzione a robustezza, manutenzione e montaggio reale.', en: 'From concept to integrated robot, focusing on robustness, maintenance and real assembly.' }, image: 'assets/story-placeholder.svg' },
  { date: '2027 · event', title: { it: 'Competition day', en: 'Competition day' }, body: { it: 'Match, judging, portfolio, alleanze e lezioni da portare a casa per la prossima iterazione.', en: 'Matches, judging, portfolio, alliances and lessons to bring home for the next iteration.' }, image: 'assets/story-placeholder.svg' }
];

const root = document.documentElement;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let currentLang = 'it';

function setLanguage(lang) {
  currentLang = translations[lang] ? lang : 'it';
  root.lang = currentLang;
  localStorage.setItem('steam-robotics-lang', currentLang);
  document.body.dataset.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[currentLang][key]) {
      node.textContent = translations[currentLang][key];
    }
  });

  const langToggle = document.querySelector('[data-lang-toggle]');
  langToggle?.setAttribute('data-current', currentLang);

  const left = document.querySelector('[data-lang-left]');
  const right = document.querySelector('[data-lang-right]');

  const expanded = document.querySelector('.lang-expanded');

  if (expanded) {
    const spans = expanded.querySelectorAll('span');

    if (spans.length >= 2) {
      const leftSpan = spans[0];
      const rightSpan = spans[1];

      const itFlag = `
        <svg class="flag" viewBox="0 0 18 12">
          <rect width="6" height="12" fill="#159b4b"/>
          <rect x="6" width="6" height="12" fill="#fff"/>
          <rect x="12" width="6" height="12" fill="#e5332a"/>
        </svg>
      `;

      const enFlag = `
        <svg class="flag" viewBox="0 0 18 12">
          <rect width="18" height="12" fill="#1f4fa3"/>
          <path d="M0 0l18 12M18 0L0 12" stroke="#fff" stroke-width="2.2"/>
          <path d="M0 0l18 12M18 0L0 12" stroke="#d92f3a" stroke-width="1"/>
          <path d="M9 0v12M0 6h18" stroke="#fff" stroke-width="3"/>
          <path d="M9 0v12M0 6h18" stroke="#d92f3a" stroke-width="1.6"/>
        </svg>
      `;

      if (currentLang === 'it') {
        if (left) left.textContent = 'IT';
        if (right) right.textContent = 'EN';

        leftSpan.querySelector('svg')?.remove();
        rightSpan.querySelector('svg')?.remove();

        leftSpan.insertAdjacentHTML('afterbegin', itFlag);
        rightSpan.insertAdjacentHTML('afterbegin', enFlag);
      } else {
        if (left) left.textContent = 'EN';
        if (right) right.textContent = 'IT';

        leftSpan.querySelector('svg')?.remove();
        rightSpan.querySelector('svg')?.remove();

        leftSpan.insertAdjacentHTML('afterbegin', enFlag);
        rightSpan.insertAdjacentHTML('afterbegin', itFlag);
      }
    }
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  metaDescription?.setAttribute(
    'content',
    currentLang === 'it'
      ? 'STEAM Robotics è il team FIRST Tech Challenge 34690 di Parma: engineering, CAD, software Java, outreach e teamwork.'
      : 'STEAM Robotics is FIRST Tech Challenge Team 34690 from Parma, Italy: engineering, CAD, Java software, outreach and teamwork.'
  );

  updateTimeline(activeTimelineIndex, true);
}

function initNav() {
  const sideNav = document.querySelector('.side-nav');
  const navExpand = document.querySelector('.nav-expand');
  const mobileMenu = document.querySelector('.mobile-menu');
  const toggle = () => {
    const next = !sideNav?.classList.contains('open');
    sideNav?.classList.toggle('open', next);
    navExpand?.setAttribute('aria-expanded', String(next));
    mobileMenu?.setAttribute('aria-expanded', String(next));
  };
  navExpand?.addEventListener('click', toggle);
  mobileMenu?.addEventListener('click', toggle);
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 760) {
        sideNav?.classList.remove('open');
        navExpand?.setAttribute('aria-expanded', 'false');
        mobileMenu?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.querySelector('[data-lang-toggle]')?.addEventListener('click', () => {
    setLanguage(currentLang === 'it' ? 'en' : 'it');
  });

  const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
  const sections = sectionLinks.map((link) => document.getElementById(link.dataset.sectionLink)).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    sectionLinks.forEach((link) => link.classList.toggle('active', link.dataset.sectionLink === visible.target.id));
  }, { threshold: [0.2, 0.35, 0.5], rootMargin: '-20% 0px -45% 0px' });
  sections.forEach((section) => observer.observe(section));
}

function initRevealAndTilt() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

function initHeroTriangles() {
  const canvas = document.getElementById('hero-triangles');
  const hero = document.querySelector('.hero');
  if (!canvas || !hero || prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, dpr = 1;
  let points = [];
  let triangles = [];
  let mouse = { x: window.innerWidth * .62, y: window.innerHeight * .38 };
  let target = { ...mouse };
  let isVisible = false;
  let rafId = 0;

  function pointIndex(col, row, cols) { return row * cols + col; }

  const build = () => {
    const rect = hero.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = Math.max(1, Math.floor(rect.width));
    h = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cell = Math.max(58, Math.min(92, w / 16));
    const rowHeight = cell * .86;
    const cols = Math.ceil(w / cell) + 4;
    const rows = Math.ceil(h / rowHeight) + 4;
    points = [];
    triangles = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const offsetX = row % 2 ? cell * .5 : 0;
        const x = col * cell - cell * 1.5 + offsetX + (Math.random() - .5) * cell * .16;
        const y = row * rowHeight - rowHeight * 1.5 + (Math.random() - .5) * rowHeight * .18;
        points.push({ x, y, baseX: x, baseY: y, drawX: x, drawY: y, phase: Math.random() * Math.PI * 2 });
      }
    }

    for (let row = 0; row < rows - 1; row++) {
      for (let col = 0; col < cols - 1; col++) {
        const a = pointIndex(col, row, cols);
        const b = pointIndex(col + 1, row, cols);
        const c = pointIndex(col, row + 1, cols);
        const d = pointIndex(col + 1, row + 1, cols);
        if (row % 2 === 0) {
          triangles.push([a, c, b]);
          triangles.push([b, c, d]);
        } else {
          triangles.push([a, c, d]);
          triangles.push([a, d, b]);
        }
      }
    }
  };

  const stop = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  };

  const start = () => {
    if (!isVisible || document.hidden || rafId) return;
    rafId = requestAnimationFrame(draw);
  };

  const setVisible = (next) => {
    isVisible = Boolean(next) && !document.hidden;
    if (isVisible) start();
    else stop();
  };

  const draw = (time = 0) => {
    rafId = 0;
    if (!isVisible || document.hidden) return;

    mouse.x += (target.x - mouse.x) * .12;
    mouse.y += (target.y - mouse.y) * .12;
    hero.style.setProperty('--mx', `${(mouse.x / Math.max(w, 1)) * 100}%`);
    hero.style.setProperty('--my', `${(mouse.y / Math.max(h, 1)) * 100}%`);
    ctx.clearRect(0, 0, w, h);

    for (const p of points) {
      const dx = p.baseX - mouse.x;
      const dy = p.baseY - mouse.y;
      const dist = Math.hypot(dx, dy);
      const influence = Math.max(0, 1 - dist / 210);
      const push = influence * influence * 18;
      const angle = Math.atan2(dy, dx);
      p.drawX = p.baseX + Math.cos(angle) * push + Math.sin(time * .0012 + p.phase) * 1.2;
      p.drawY = p.baseY + Math.sin(angle) * push + Math.cos(time * .0011 + p.phase) * 1.2;
    }

    for (const tri of triangles) {
      const a = points[tri[0]], b = points[tri[1]], c = points[tri[2]];
      const cx = (a.drawX + b.drawX + c.drawX) / 3;
      const cy = (a.drawY + b.drawY + c.drawY) / 3;
      const dist = Math.hypot(cx - mouse.x, cy - mouse.y);
      const near = Math.max(0, 1 - dist / 210);
      const inner = Math.max(0, 1 - dist / 82);
      const reveal = Math.min(1, near * .58 + inner * .42);
      const overlayAlpha = clamp(.74 - reveal * .58, .14, .74);
      const strokeAlpha = .12 + reveal * .45;

      ctx.beginPath();
      ctx.moveTo(a.drawX, a.drawY);
      ctx.lineTo(b.drawX, b.drawY);
      ctx.lineTo(c.drawX, c.drawY);
      ctx.closePath();
      ctx.fillStyle = `rgba(4, 7, 17, ${overlayAlpha})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(86, 240, 255, ${strokeAlpha})`;
      ctx.lineWidth = 1 + inner * .9;
      ctx.stroke();
    }

    for (const p of points) {
      const dist = Math.hypot(p.drawX - mouse.x, p.drawY - mouse.y);
      const near = Math.max(0, 1 - dist / 170);
      ctx.beginPath();
      ctx.arc(p.drawX, p.drawY, 1.35 + near * 2.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(238, 247, 255, ${.32 + near * .62})`;
      ctx.fill();
    }

    start();
  };

  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    target.x = event.clientX - rect.left;
    target.y = event.clientY - rect.top;
  }, { passive: true });

  hero.addEventListener('pointerleave', () => {
    target.x = w * .62;
    target.y = h * .38;
  });

  window.addEventListener('resize', () => {
    build();
    if (isVisible) start();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else setVisible(isElementNearViewport(hero, 160));
  });

  build();

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      setVisible(entries.some((entry) => entry.isIntersecting));
    }, { rootMargin: '160px 0px', threshold: 0 });
    observer.observe(hero);
  } else {
    setVisible(true);
  }
}

function initVideoScrub() {
  const wrapper = document.querySelector('[data-video-scrub]');
  const video = document.getElementById('school-video');

  if (!wrapper || !video) return;
  if (video.dataset.scrubInitialized === 'true') return;
  video.dataset.scrubInitialized = 'true';

  // Keep this close to the standalone test: one target, one seek, one pending retry.
  const SCRUB_USES_SCROLL_WINDOW = true;
  const MIN_TIME_DIFF = 0.035;

  let ready = false;
  let mouseX = 0.5;
  let targetTime = 0;
  let seeking = false;
  let pending = false;
  let raf = null;

  video.autoplay = false;
  video.muted = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.removeAttribute('poster');
  video.pause();

  function markReady() {
    if (ready) return;
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;

    ready = true;
    video.pause();
    requestScrub();
  }

  video.addEventListener('loadedmetadata', markReady);
  video.addEventListener('canplay', markReady);

  if (video.readyState >= 1) markReady();

  document.addEventListener('pointermove', (event) => {
    mouseX = clamp(
      event.clientX / Math.max(window.innerWidth, 1),
      0,
      1
    );

    requestScrub();
  }, { passive: true });

  window.addEventListener('scroll', requestScrub, { passive: true });
  window.addEventListener('resize', requestScrub);

  function requestScrub() {
    if (raf) return;

    raf = requestAnimationFrame(() => {
      raf = null;
      updateTarget();
      seekToTarget();
    });
  }

  function updateTarget() {
    if (!ready || !Number.isFinite(video.duration)) return;

    let pct = mouseX;

    if (SCRUB_USES_SCROLL_WINDOW) {
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = clamp(
        (vh - rect.top) / (vh + rect.height),
        0,
        1
      );

      const start = progress * 0.25;
      const end = 0.75 + progress * 0.25;
      pct = start + mouseX * (end - start);
    }

    targetTime = clamp(
      pct * video.duration,
      0,
      Math.max(0, video.duration - 0.05)
    );

    wrapper.style.setProperty(
      '--fake-ry',
      `${(mouseX - 0.5) * 15}deg`
    );
  }

  function seekToTarget() {
    if (!ready) return;

    if (seeking || video.seeking) {
      pending = true;
      return;
    }

    const diff = Math.abs(video.currentTime - targetTime);
    if (diff < MIN_TIME_DIFF) return;

    seeking = true;

    try {
      video.currentTime = targetTime;
    } catch (err) {
      seeking = false;
      console.warn('[video scrub] seek failed:', err);
    }
  }

  video.addEventListener('seeked', () => {
    seeking = false;
    video.pause();

    if (pending) {
      pending = false;
      requestScrub();
    }
  });

  video.addEventListener('error', () => {
    console.warn('[video scrub] video error:', video.error);
  });

  video.load();
}

function initMarquees() {
  document.querySelectorAll('[data-marquee]').forEach((track) => {
    const axis = track.dataset.marquee;
    const direction = track.dataset.direction || 'left';
    const source = track.querySelector('.marquee-group');
    if (!source) return;

    while (track.children.length < 5) track.appendChild(source.cloneNode(true));

    let offset = 0;
    let boost = 0;
    let size = 1;
    let active = false;
    let rafId = 0;
    const speed = 0.7;
    const positive = direction === 'right' || direction === 'down';
    const observedNode = track.closest('.section-block') || track.parentElement || track;

    const measure = () => {
      size = Math.max(1, axis === 'x' ? source.getBoundingClientRect().width : source.getBoundingClientRect().height);
      if (positive && offset === 0) offset = -size;
    };

    const apply = () => {
      if (axis === 'x') track.style.transform = `translate3d(${offset}px,0,0)`;
      else track.style.transform = `translate3d(0,${offset}px,0)`;
    };

    const stop = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const start = () => {
      if (!active || document.hidden || rafId) return;
      rafId = requestAnimationFrame(step);
    };

    const setActive = (next) => {
      active = Boolean(next) && !document.hidden;
      if (active) start();
      else stop();
    };

    const step = () => {
      rafId = 0;
      if (!active || document.hidden) return;
      if (size <= 1) measure();
      const velocity = speed + boost;
      boost *= .92;
      offset += positive ? velocity : -velocity;
      while (offset >= 0) offset -= size;
      while (offset <= -size) offset += size;
      apply();
      start();
    };

    window.addEventListener('resize', () => {
      measure();
      apply();
    });

    window.addEventListener('wheel', (event) => {
      if (!active) return;
      boost = clamp(boost + Math.min(12, event.deltaY * 0.05), -12, 12);
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else setActive(isElementNearViewport(observedNode, 180));
    });

    measure();
    apply();

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        setActive(entries.some((entry) => entry.isIntersecting));
      }, { rootMargin: '180px 0px', threshold: 0 });
      observer.observe(observedNode);
    } else {
      setActive(true);
    }
  });
}

function initPointCloud() {
  const canvas = document.getElementById('point-cloud');
  const wrap = document.querySelector('[data-point-cloud-wrap]');
  if (!canvas || !wrap || prefersReducedMotion) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' });
  } catch {
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  camera.position.set(0, 1.3, 7.3);
  camera.lookAt(0, .4, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

  const group = new THREE.Group();
  scene.add(group);

  const targetPositions = [];
  const startPositions = [];
  const count = 2000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const colorA = new THREE.Color('#56f0ff');
  const colorB = new THREE.Color('#ff5ecd');
  const colorC = new THREE.Color('#f8d56b');

  function pushPoint(i, x, y, z) {
    targetPositions[i * 3] = x;
    targetPositions[i * 3 + 1] = y;
    targetPositions[i * 3 + 2] = z;
    startPositions[i * 3] = x + (Math.random() - .5) * 7;
    startPositions[i * 3 + 1] = y + 6 + Math.random() * 8;
    startPositions[i * 3 + 2] = z + (Math.random() - .5) * 7;
    positions[i * 3] = startPositions[i * 3];
    positions[i * 3 + 1] = startPositions[i * 3 + 1];
    positions[i * 3 + 2] = startPositions[i * 3 + 2];
    const c = i % 11 === 0 ? colorC : (i % 3 ? colorA : colorB);
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }

  for (let i = 0; i < count; i++) {
    let x, y, z;
    if (i < 390) {
      x = (Math.random() - .5) * 4.2;
      y = (Math.random() - .5) * .65;
      z = (Math.random() - .5) * 2.8;
    } else if (i < 570) {
      x = (Math.random() - .5) * 1.45 + .25;
      y = Math.random() * 2.4 + .15;
      z = (Math.random() - .5) * 1.2;
    } else if (i < 720) {
      x = (Math.random() - .5) * .45 + .35;
      y = Math.random() * .35 + 2.2;
      z = Math.random() * 3.0 - .3;
    } else {
      const a = Math.random() * Math.PI * 2;
      const r = 1.9 + Math.random() * 1.5;
      x = Math.cos(a) * r;
      y = Math.sin(Math.random() * Math.PI * 2) * .8 + .5;
      z = Math.sin(a) * r;
    }
    pushPoint(i, x, y, z);
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({ size: .04, vertexColors: true, transparent: true, opacity: .96, depthWrite: false });
  const cloud = new THREE.Points(geometry, material);
  group.add(cloud);

  const grid = new THREE.GridHelper(7, 18, '#56f0ff', '#203c59');
  grid.position.y = -.62;
  grid.material.transparent = true;
  grid.material.opacity = .22;
  group.add(grid);

  let w = 0, h = 0;
  const resize = () => {
    const rect = wrap.getBoundingClientRect();
    const nextW = Math.max(1, Math.floor(rect.width));
    const nextH = Math.max(1, Math.floor(rect.height));

    // When the section is still hidden / not laid out, do not lock Three.js
    // to a fake 1px viewport. It caused wrong framing after opening the page
    // away from the robot canvas and scrolling back later.
    if (nextW < 20 || nextH < 20) return false;

    w = nextW;
    h = nextH;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    return true;
  };

  const forceResizeSoon = () => {
    resize();
    requestAnimationFrame(() => {
      resize();
      requestAnimationFrame(resize);
    });
  };

  new ResizeObserver(forceResizeSoon).observe(wrap);
  forceResizeSoon();

  let dragging = false;
  let last = { x: 0, y: 0 };
  let autoSpeed = .006;
  let active = false;
  let rafId = 0;
  let lastFrameTime = 0;
  const MAX_FPS = 30;
  const MIN_FRAME_MS = 1000 / MAX_FPS;

  wrap.addEventListener('pointerdown', (event) => {
    dragging = true;
    autoSpeed = 0;
    last.x = event.clientX;
    last.y = event.clientY;
    wrap.setPointerCapture?.(event.pointerId);
  });

  wrap.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    const dx = event.clientX - last.x;
    const dy = event.clientY - last.y;
    last.x = event.clientX;
    last.y = event.clientY;
    group.rotation.y += dx * .008;
    group.rotation.x = clamp(group.rotation.x + dy * .005, -.65, .65);
  });

  const stopDrag = () => {
    if (!dragging) return;
    dragging = false;
    autoSpeed = .006;
  };
  wrap.addEventListener('pointerup', stopDrag);
  wrap.addEventListener('pointercancel', stopDrag);
  wrap.addEventListener('lostpointercapture', stopDrag);

  const stop = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  };

  const startLoop = () => {
    if (!active || document.hidden || rafId) return;
    rafId = requestAnimationFrame(animate);
  };

  let introStartTime = 0;
  let introDone = false;

  const setActive = (next) => {
    active = Boolean(next) && !document.hidden;

    if (active) {
      // Start the intro when the robot canvas actually becomes visible, not at
      // page load. Otherwise opening the page above this section skips the
      // interpolation and leaves the points stuck in their sky start positions.
      if (!introStartTime) introStartTime = performance.now();
      forceResizeSoon();
      startLoop();
    } else {
      stop();
    }
  };

  function animate(now) {
    rafId = 0;
    if (!active || document.hidden) return;

    if (now - lastFrameTime < MIN_FRAME_MS) {
      startLoop();
      return;
    }
    lastFrameTime = now;

    const t = ((introStartTime ? now - introStartTime : 0) / 1000);
    const intro = introDone ? 1 : clamp(t / 2.4, 0, 1);
    const ease = 1 - Math.pow(1 - intro, 3);
    const pos = geometry.attributes.position.array;

    if (!introDone) {
      for (let i = 0; i < count * 3; i += 3) {
        pos[i] = lerp(startPositions[i], targetPositions[i], ease);
        pos[i + 1] = lerp(startPositions[i + 1], targetPositions[i + 1], ease);
        pos[i + 2] = lerp(startPositions[i + 2], targetPositions[i + 2], ease);
      }
      geometry.attributes.position.needsUpdate = true;

      if (intro >= 1) introDone = true;
    }

    if (!dragging) {
      group.rotation.y += intro < 1 ? .052 : autoSpeed;
      const idleX = Math.sin(t * .7) * .07;
      group.rotation.x += (idleX - group.rotation.x) * .018;
    }

    if (resize()) renderer.render(scene, camera);
    startLoop();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else setActive(isElementNearViewport(wrap, 180));
  });

  window.addEventListener('pageshow', () => {
    if (isElementNearViewport(wrap, 180)) setActive(true);
    else forceResizeSoon();
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      setActive(entries.some((entry) => entry.isIntersecting));
    }, { rootMargin: '180px 0px', threshold: 0 });
    observer.observe(wrap);
  } else {
    setActive(true);
  }
}


let activeOperatorIndex = 0;
function initOperators() {
  const strip = document.getElementById('operatorStrip');
  if (!strip) return;
  const renderButtons = () => {
    strip.innerHTML = '';
    members.forEach((member, index) => {
      const button = document.createElement('button');
      button.className = `operator-card${index === activeOperatorIndex ? ' active' : ''}`;
      button.type = 'button';
      button.innerHTML = `<strong>${escapeHtml(member.name)}</strong><span>${escapeHtml(member.type)} · ${escapeHtml(member.spec)}</span>`;
      button.addEventListener('click', () => setOperator(index));
      strip.appendChild(button);
    });
  };
  const setOperator = (index) => {
    activeOperatorIndex = (index + members.length) % members.length;
    const member = members[activeOperatorIndex];
    const photo = document.getElementById('operatorPhoto');
    document.getElementById('operatorRoleLine').textContent = 'FTC_34690 / TEAM_PROFILE / ACTIVE_MEMBER';
    document.getElementById('operatorName').textContent = member.name;
    document.getElementById('operatorBadgeType').textContent = member.type;
    document.getElementById('operatorBadgeSpec').textContent = member.spec;
    document.getElementById('operatorQuote').textContent = member.quote;
    document.getElementById('operatorExperienceText').textContent = member.experience;
    if (photo) {
      photo.dataset.initials = member.initials;
      photo.style.setProperty('--member-image', `url("${member.image || 'assets/member-placeholder.svg'}")`);
    }
    const logos = document.getElementById('operatorLogoColumn');
    if (logos) {
      logos.innerHTML = '';
      member.logos.forEach((logo) => {
        const a = document.createElement('a');
        a.href = logo.href || '#';
        a.target = logo.href && logo.href !== '#' ? '_blank' : '_self';
        a.rel = 'noreferrer';
        a.dataset.tooltip = logo.tooltip;
        a.textContent = logo.label;
        logos.appendChild(a);
      });
    }
    renderButtons();
  };
  document.querySelector('[data-operator-prev]')?.addEventListener('click', () => setOperator(activeOperatorIndex - 1));
  document.querySelector('[data-operator-next]')?.addEventListener('click', () => setOperator(activeOperatorIndex + 1));
  setOperator(0);
}

let activeTimelineIndex = 0;
let timelineTransitionTimer = null;
function initTimeline() {
  const section = document.querySelector('[data-journey]');
  const track = document.getElementById('timelineDotTrack');
  if (!section || !track) return;
  track.innerHTML = '';
  timelineItems.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = `timeline-dot${index === 0 ? ' active' : ''}`;
    el.innerHTML = `<button type="button" aria-label="${escapeHtml(item.title[currentLang])}"></button><strong>${escapeHtml(item.date)}</strong><small>${String(index + 1).padStart(2, '0')}</small>`;
    el.addEventListener('click', () => updateTimeline(index));
    track.appendChild(el);
  });
  window.addEventListener('scroll', () => requestAnimationFrame(updateFromScroll), { passive: true });
  window.addEventListener('resize', updateFromScroll);
  updateTimeline(0, true);
  updateFromScroll();
}

function updateFromScroll() {
  const section = document.querySelector('[data-journey]');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const maxTravel = Math.max(1, rect.height - window.innerHeight);
  const progress = clamp((-rect.top) / maxTravel, 0, 1);
  const index = Math.round(progress * (timelineItems.length - 1));
  updateTimeline(index);
}

function setTimelineContent(index) {
  const item = timelineItems[index];
  if (!item) return;
  const date = document.getElementById('timelineDate');
  const title = document.getElementById('timelineTitle');
  const body = document.getElementById('timelineBody');
  const image = document.getElementById('timelineImage');
  if (date) date.textContent = item.date;
  if (title) title.textContent = item.title[currentLang];
  if (body) body.textContent = item.body[currentLang];
  if (image) image.src = item.image;
}

function updateTimeline(index, force = false) {
  const item = timelineItems[index];
  if (!item) return;
  const track = document.getElementById('timelineDotTrack');
  if (track) track.style.transform = `translate3d(${-(index * 262)}px,0,0)`;
  document.querySelectorAll('.timeline-dot').forEach((dot, i) => dot.classList.toggle('active', i === index));

  if (!force && index === activeTimelineIndex) return;
  const previous = activeTimelineIndex;
  activeTimelineIndex = index;
  const detail = document.querySelector('.timeline-detail');
  if (!detail || force) {
    setTimelineContent(index);
    return;
  }

  const direction = index >= previous ? 1 : -1;
  detail.style.setProperty('--timeline-dir', direction);
  detail.classList.remove('is-entering');
  detail.classList.add('is-switching');
  clearTimeout(timelineTransitionTimer);
  timelineTransitionTimer = setTimeout(() => {
    setTimelineContent(index);
    detail.classList.remove('is-switching');
    detail.classList.add('is-entering');
    setTimeout(() => detail.classList.remove('is-entering'), 280);
  }, 120);
}


function isElementNearViewport(element, margin = 0) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  const vw = window.innerWidth || document.documentElement.clientWidth || 1;
  const vh = window.innerHeight || document.documentElement.clientHeight || 1;
  return rect.bottom >= -margin && rect.right >= -margin && rect.top <= vh + margin && rect.left <= vw + margin;
}

function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
function lerp(a, b, t) { return a + (b - a) * t; }
function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

setLanguage(localStorage.getItem('steam-robotics-lang') || (navigator.language?.startsWith('en') ? 'en' : 'it'));
initNav();
initRevealAndTilt();
initHeroTriangles();
initVideoScrub();
initMarquees();
initPointCloud();
initOperators();
initTimeline();
