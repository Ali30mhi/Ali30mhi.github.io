/* Portfolio — to add a project, add an entry to PROJECTS. */
const USER = 'Ali30mhi';

const PROJECTS = [
  {
    repo: 'earthquake-globe', live: 'https://ali30mhi.github.io/earthquake-globe/', stack: ['JavaScript', 'three.js', 'ESP32'],
    en: 'Real-time 3D earthquake globe with live USGS data, history since 1900, Persian/English, offline mode and a DIY ESP32 seismic sensor.',
    fa: 'کره‌ی سه‌بعدی زنده‌ی زلزله با داده‌های USGS، سوابق از ۱۹۰۰، رابط فارسی و انگلیسی، حالت آفلاین و یک حسگر لرزه‌ی خانگی با ESP32.',
  },
  {
    repo: 'tehran-metro-3d', stack: ['JavaScript', 'three.js', 'OpenStreetMap'],
    en: 'Interactive 3D visualization of the Tehran Metro network on a city map, built with Three.js and OpenStreetMap data.',
    fa: 'نمایش تعاملی و سه‌بعدی شبکه‌ی مترو تهران روی نقشه‌ی شهر، ساخته‌شده با Three.js و داده‌های OpenStreetMap.',
  },
  {
    repo: 'Darsyar', live: 'https://ali30mhi.github.io/Darsyar/', stack: ['HTML', 'CSS', 'JavaScript'],
    en: 'Persian study timer with streaks, a 12-week heatmap and shareable progress cards. One HTML file, no sign-up.',
    fa: 'تایمر مطالعه‌ی فارسی با زنجیره‌ی روزهای مطالعه، نقشه‌ی ۱۲ هفته‌ای و کارت پیشرفت قابل اشتراک. یک فایل HTML، بدون ثبت‌نام.',
  },
  {
    repo: 'Study-plan-generator', stack: ['Python'],
    en: 'Exam-aware study schedules with timed sessions and Google Calendar export.',
    fa: 'ساخت برنامه‌ی مطالعه بر اساس تاریخ امتحان‌ها، با جلسه‌های زمان‌بندی‌شده و خروجی برای تقویم گوگل.',
  },
  {
    repo: 'forth-interpreter', stack: ['C'],
    en: 'Forth interpreter with a small VM, colored REPL and turtle graphics in the terminal.',
    fa: 'مفسر زبان Forth با یک ماشین مجازی کوچک، محیط تعاملی رنگی و گرافیک لاک‌پشتی در ترمینال.',
  },
  {
    repo: 'PomodoroTimer', stack: ['Python', 'PySide6'],
    en: 'Desktop Pomodoro app with stats, tray icon and rain sounds.',
    fa: 'اپ دسکتاپ پومودورو با آمار مطالعه، آیکون در سینی سیستم و صدای باران.',
  },
  {
    repo: 'MatrixGame', stack: ['Java'],
    en: 'Rotate any rectangular matrix by multiples of 90°.',
    fa: 'چرخاندن هر ماتریس مستطیلی به اندازه‌ی مضرب‌های ۹۰ درجه.',
  },
  {
    repo: 'recursive-gray-converter', stack: ['C'],
    en: 'Binary to Gray code converter with input validation.',
    fa: 'تبدیل عدد دودویی به کد گری با بررسی درستی ورودی.',
  },
];

const I18N = {
  en: {
    docTitle: 'Ali Aslami · Student developer',
    navProjects: 'Projects', navSkills: 'Skills', navWriting: 'Writing', navContact: 'Contact',
    hello: "Hi, I'm", role: 'Student developer',
    bio: 'I like building small, polished tools, mostly things that help students study better. I work mostly with C, Python and Java, and enjoy low-level projects like interpreters.',
    seeProjects: 'See my projects', stRepos: 'public repos', stStars: 'stars', stLangs: 'languages',
    projectsTitle: 'Projects', projectsSub: "Things I've built and shipped. Stars and dates load live from GitHub.",
    code: 'Code', live: '▶ Live', updated: 'updated',
    skillsTitle: 'Skills', skLang: 'Languages', skTools: 'Tools', skHw: 'Hardware', skInterests: 'Interests',
    interests: 'Interpreters, low-level programming, study tools, data visualization',
    writingTitle: 'Writing', soon: 'Coming soon', published: 'New',
    postGlobe: 'Building a live 3D earthquake globe with USGS data',
    postGlobeD: 'How the globe gets real-time data, stays smooth while updating, estimates shaking where you are and works offline.',
    post1: 'How I built a home earthquake sensor with an ESP32',
    post1d: 'From raw accelerometer data to an STA/LTA trigger and a live seismogram in the browser.',
    post2: 'Writing a Forth interpreter in C',
    post2d: 'A tiny stack-based VM, a REPL and turtle graphics, step by step.',
    contactTitle: 'Get in touch',
    contactText: 'The best place to find me is GitHub. Follow along, star a project, or open an issue if you have an idea.',
    contactBtn: 'Find me on GitHub', footer: 'Built by Ali Aslami · hosted on GitHub Pages',
  },
  fa: {
    docTitle: 'Ali Aslami · برنامه‌نویس',
    navProjects: 'پروژه‌ها', navSkills: 'مهارت‌ها', navWriting: 'نوشته‌ها', navContact: 'ارتباط',
    hello: 'سلام، من', role: 'دانشجوی برنامه‌نویس',
    bio: 'ابزارهای کوچک و تمیز می‌سازم، بیشتر چیزهایی که به دانشجوها کمک می‌کند بهتر درس بخوانند. بیشتر با C، پایتون و جاوا کار می‌کنم و پروژه‌های سطح پایین مثل مفسرها را دوست دارم.',
    seeProjects: 'پروژه‌هایم را ببینید', stRepos: 'مخزن عمومی', stStars: 'ستاره', stLangs: 'زبان برنامه‌نویسی',
    projectsTitle: 'پروژه‌ها', projectsSub: 'چیزهایی که ساخته و منتشر کرده‌ام. تعداد ستاره‌ها و تاریخ‌ها مستقیم از گیت‌هاب خوانده می‌شود.',
    code: 'کد', live: '▶ نسخه‌ی زنده', updated: 'به‌روزرسانی',
    skillsTitle: 'مهارت‌ها', skLang: 'زبان‌ها', skTools: 'ابزارها', skHw: 'سخت‌افزار', skInterests: 'علاقه‌ها',
    interests: 'مفسرها، برنامه‌نویسی سطح پایین، ابزارهای مطالعه، مصورسازی داده',
    writingTitle: 'نوشته‌ها', soon: 'به‌زودی', published: 'جدید',
    postGlobe: 'ساختن یک کره‌ی زنده‌ی زلزله با داده‌های USGS',
    postGlobeD: 'اینکه کره چطور داده‌ی زنده می‌گیرد، هنگام به‌روزرسانی روان می‌ماند، لرزش محل شما را تخمین می‌زند و آفلاین کار می‌کند (به انگلیسی).',
    post1: 'چطور یک حسگر زلزله‌ی خانگی با ESP32 ساختم',
    post1d: 'از داده‌ی خام شتاب‌سنج تا الگوریتم STA/LTA و لرزه‌نگار زنده در مرورگر.',
    post2: 'نوشتن مفسر Forth به زبان C',
    post2d: 'یک ماشین مجازی پشته‌ای کوچک، محیط تعاملی و گرافیک لاک‌پشتی، قدم به قدم.',
    contactTitle: 'در ارتباط باشیم',
    contactText: 'بهترین جا برای پیدا کردن من گیت‌هاب است. دنبالم کنید، به پروژه‌ها ستاره بدهید، یا اگر ایده‌ای دارید یک issue باز کنید.',
    contactBtn: 'من در گیت‌هاب', footer: 'ساخته‌ی Ali Aslami · میزبانی روی GitHub Pages',
  },
};

let LANG = localStorage.getItem('lang') || ((navigator.language || '').toLowerCase().startsWith('fa') ? 'fa' : 'en');
const info = { repos: null, stars: null, langs: null, byRepo: {} };
const $ = id => document.getElementById(id);
const t = k => I18N[LANG][k] ?? I18N.en[k] ?? k;
const loc = () => (LANG === 'fa' ? 'fa-IR' : 'en-US');
const num = n => Number(n).toLocaleString(loc());
const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function renderProjects() {
  $('grid').innerHTML = PROJECTS.map(p => {
    const r = info.byRepo[p.repo.toLowerCase()];
    const meta = r
      ? `<span>★ ${num(r.stars)}</span><span>${t('updated')} ${new Date(r.pushed).toLocaleDateString(loc(), { year: 'numeric', month: 'short' })}</span>`
      : '';
    const url = `https://github.com/${USER}/${p.repo}`;
    return `<article class="card">
      <a class="thumb" href="${url}" target="_blank" rel="noopener">
        <img src="https://opengraph.githubassets.com/1/${USER}/${p.repo}" alt="${esc(p.repo)}" loading="lazy">
      </a>
      <div class="body">
        <h3>${esc(p.repo)}</h3>
        <p>${esc(p[LANG])}</p>
        <div class="tags">${p.stack.map(s => `<span>${esc(s)}</span>`).join('')}</div>
        <div class="meta">${meta}</div>
        <div class="actions">
          <a class="btn small" href="${url}" target="_blank" rel="noopener">${t('code')}</a>
          ${p.live ? `<a class="btn small primary" href="${p.live}" target="_blank" rel="noopener">${t('live')}</a>` : ''}
        </div>
      </div>
    </article>`;
  }).join('');
}

function renderStats() {
  $('stRepos').textContent = info.repos == null ? '–' : num(info.repos);
  $('stStars').textContent = info.stars == null ? '–' : num(info.stars);
  $('stLangs').textContent = info.langs == null ? '–' : num(info.langs);
}

function applyLang() {
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'fa' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $('lang').textContent = LANG === 'fa' ? 'EN' : 'فا';
  document.title = t('docTitle');
  renderProjects();
  renderStats();
}

async function loadGitHub() {
  try {
    const [user, repos] = await Promise.all([
      fetch(`https://api.github.com/users/${USER}`).then(r => (r.ok ? r.json() : null)),
      fetch(`https://api.github.com/users/${USER}/repos?per_page=100`).then(r => (r.ok ? r.json() : [])),
    ]);
    if (user) info.repos = user.public_repos;
    if (Array.isArray(repos) && repos.length) {
      info.stars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
      info.langs = new Set(repos.map(r => r.language).filter(Boolean)).size;
      repos.forEach(r => { info.byRepo[r.name.toLowerCase()] = { stars: r.stargazers_count, pushed: r.pushed_at }; });
    }
    renderProjects();
    renderStats();
  } catch (err) {
    console.warn('GitHub API unavailable:', err);
  }
}

$('lang').addEventListener('click', () => {
  LANG = LANG === 'fa' ? 'en' : 'fa';
  localStorage.setItem('lang', LANG);
  applyLang();
});
$('year').textContent = new Date().getFullYear();
applyLang();
loadGitHub();
// end of main.js
