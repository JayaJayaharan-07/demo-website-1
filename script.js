/* ════════════════════════════════════════
   VIDEO DATA  –  Update filenames, titles,
   descriptions and stats here
════════════════════════════════════════ */
const videos = [
  {
    file: "videos/website1 video.mp4",
    title: "Daily Thanthi News Website",
    desc: "Completed building the Daily Thanthi website, inspired by Tamil Nadu’s No.1 Tamil newspaper known for its wide readership, trusted journalism, and long-standing legacy in the media industry.",
    tag: "Live News",
    url: "dailythanthi.com",
    views: "57.5k+", likes: "3.2k+", comments: "4"
  },
  {
    file: "videos/website5 video.mp4",
    title: "DT NEXT Website",
    desc: "DT Next–inspired website, modeled after DT Next, a popular digital news platform that is part of the Daily Thanthi Group, one of Tamil Nadu’s most trusted and widely read media organizations.",
    tag: "English News",
    url: "Dtnext.com",
    views: "65.2k+", likes: "4k+", comments: "6"
  },
  {
    file: "videos/website6 video.mp4",
    title: "Thanthi Tv Website",
    desc: "Thanthi TV news website UI clone, inspired by one of Tamil Nadu’s most trusted news channels.",
    tag: "News Channel",
    url: "Thanthitv.in",
    views: "35.7k+", likes: "1.8k+", comments: "2"
  },
  {
    file: "videos/website2 video.mp4",
    title: "Thanthi One Website",
    desc: "Frontend Project | Thanthi One Movie Website.Designed and developed a Thanthi One-style movie streaming website Ui.",
    tag: "OTT Platform",
    url: "thanthione.com",
    views: "41.3k+", likes: "2.5k+", comments: "5"
  },
  {
    file: "videos/website3 video.mp4",
    title: "BMW BRAND website",
    desc: "BMW website clone built using HTML, CSS, and JavaScript. From layout design to animations, I focused on creating a sleek and dynamic experience that reflects the BMW brand’s premium feel.",
    tag: "Bmw Brand",
    url: "Bmwmotors.com",
    views: "38.9k+", likes: "2.1k+", comments: "3"
  },
  {
    file: "videos/website4 video.mp4",
    title: "REAL-ESTATE WEBSITE",
    desc: "Real-Estate Website project using HTML, CSS, and JavaScript. This project includes modern UI design, responsive layouts, and smooth navigation to provide an engaging property browsing experience.",
    tag: "REAL-ESTATE",
    url: "Dreamlands.com",
    views: "29.4k+", likes: "1.6k+", comments: "7"
  },
  {
    file: "videos/website7 video.mp4",
    title: "Mobile responsive",
    desc: "The mobile-responsive view of my news website inspired by Daily Thanthi.",
    tag: "Daily Thanthi",
    url: "dailythanthi.com",
    views: "52.1k+", likes: "3.8k+", comments: "9"
  },
  {
    file: "videos/website8 video.mp4",
    title: "Mobile responsive",
    desc: "mobile-responsive view of the Thanthi One Movie Website that I developed.",
    tag: "Thanthi One",
    url: "ThanthiOne.com",
    views: "44.7k+", likes: "2.9k+", comments: "11"
  },
  {
    file: "videos/website9 video.mp4",
    title: "Wild animal detection",
    desc: "Ai-powered wildlife monitoring system designed to automatically detect animals in real-time.",
    tag: "Sentinelwild-AI",
    url: "SentinelwildAi.com",
    views: "49.7k+", likes: "4.9k+", comments: "21"
  }

];

/* ════════════════════════════════════════
   DOM REFERENCES
════════════════════════════════════════ */
const grid       = document.getElementById('videoGrid');
const overlay    = document.getElementById('modalOverlay');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalDesc  = document.getElementById('modalDesc');
const modalUrl   = document.getElementById('modalUrl');
const modalClose = document.getElementById('modalClose');
const toast      = document.getElementById('toast');

/* ════════════════════════════════════════
   TOAST
════════════════════════════════════════ */
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ════════════════════════════════════════
   MODAL  –  open / close
════════════════════════════════════════ */
function openModal(v) {
  modalVideo.src         = v.file;
  modalTitle.textContent = v.title;
  modalDesc.textContent  = v.desc;
  modalUrl.textContent   = 'https://' + v.url;
  overlay.classList.add('open');
  modalVideo.play().catch(() => {});
}

function closeModal() {
  overlay.classList.remove('open');
  modalVideo.pause();
  modalVideo.src = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ════════════════════════════════════════
   BUILD CARDS
════════════════════════════════════════ */
videos.forEach((v, i) => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-thumb">
      <!-- Browser chrome -->
      <div class="browser-bar">
        <div class="b-dot r"></div>
        <div class="b-dot y"></div>
        <div class="b-dot g"></div>
        <div class="browser-url">https://${v.url}</div>
      </div>

      <!-- Video preview -->
      <div class="video-wrap">
        <video src="${v.file}" muted loop preload="metadata" playsinline></video>
      </div>

      <!-- Play button -->
      <div class="play-overlay">
        <div class="play-circle">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>

      <!-- Category tag -->
      <span class="card-tag">${v.tag}</span>
    </div>

    <!-- Card body -->
    <div class="card-body">
      <div class="card-title">${v.title}</div>
      <div class="card-desc">${v.desc}</div>
    </div>

    <!-- Card footer -->
    <div class="card-footer">
      <div class="stats">

        <!-- Views -->
        <div class="stat views">
          <svg viewBox="0 0 24 24">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11
                     11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5
                     5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3
                     3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
          ${v.views}
        </div>

        <!-- Likes -->
        <div class="stat likes">
          <svg viewBox="0 0 24 24">
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
                     c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10
                     c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05
                     c.09-.23.14-.47.14-.73v-2z"/>
          </svg>
          ${v.likes}
        </div>

        <!-- Comments -->
        <div class="stat comments">
          <svg viewBox="0 0 24 24" fill="#94a3b8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          ${v.comments}
        </div>

      </div>

      <!-- Share -->
      <div class="share-wrap">
        <button class="share-btn" id="sbtn-${i}" aria-label="Share">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5"  r="3"/>
            <circle cx="6"  cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59"  y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51"  x2="8.59"  y2="10.49"/>
          </svg>
        </button>

        <div class="share-popup" id="spop-${i}">
          <span class="share-opt so-copy" id="scopy-${i}" title="Copy link">🔗</span>
          <a class="share-opt so-twitter"
             href="https://twitter.com/intent/tweet?text=${encodeURIComponent(v.title)}"
             target="_blank" title="Share on X">𝕏</a>
          <a class="share-opt so-wa"
             href="https://api.whatsapp.com/send?text=${encodeURIComponent(v.title + ' - ' + window.location.href)}"
             target="_blank" title="WhatsApp">💬</a>
          <a class="share-opt so-fb"
             href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}"
             target="_blank" title="Facebook">f</a>
        </div>
      </div>
    </div>
  `;

  /* Open modal on thumbnail or title click */
  card.querySelector('.card-thumb').addEventListener('click', () => openModal(v));
  card.querySelector('.card-title').addEventListener('click', () => openModal(v));

  /* Hover preview – play/pause thumbnail video */
  const thumbVid = card.querySelector('.video-wrap video');
  card.addEventListener('mouseenter', () => thumbVid.play().catch(() => {}));
  card.addEventListener('mouseleave', () => {
    thumbVid.pause();
    thumbVid.currentTime = 0;
  });

  /* Share popup toggle */
  const sbtn = card.querySelector(`#sbtn-${i}`);
  const spop = card.querySelector(`#spop-${i}`);

  sbtn.addEventListener('click', e => {
    e.stopPropagation();
    document.querySelectorAll('.share-popup.open').forEach(p => {
      if (p !== spop) p.classList.remove('open');
    });
    spop.classList.toggle('open');
  });

  /* Copy link */
  card.querySelector(`#scopy-${i}`).addEventListener('click', e => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href + '#video-' + i)
      .then(() => showToast('🔗 Link copied!'));
    spop.classList.remove('open');
  });

  grid.appendChild(card);
});

/* Close all share popups when clicking outside */
document.addEventListener('click', () => {
  document.querySelectorAll('.share-popup.open').forEach(p => p.classList.remove('open'));
});

/* Mobile menu toggle */
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}