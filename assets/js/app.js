// App logic for Sentrim Lake Elementaita Workshops 2026

let currentProgramKey = 'wyde';
let activeDayFilter = 'all'; // 'all' or day number (1..5)
let currentSearchQuery = '';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  // Determine default program from page or URL hash
  const path = window.location.pathname.toLowerCase();
  if (path.includes('ewip')) {
    currentProgramKey = 'ewip';
  } else if (path.includes('wyde')) {
    currentProgramKey = 'wyde';
  } else if (window.location.hash === '#ewip') {
    currentProgramKey = 'ewip';
  } else if (window.location.hash === '#wyde') {
    currentProgramKey = 'wyde';
  }

  // Set up UI components
  setupProgramTabs();
  renderProgram(currentProgramKey);
  renderFacilitators();
  setupSearch();
  setupModals();
  registerServiceWorker();

  // Listen to hash changes
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#ewip') {
      switchProgram('ewip');
    } else if (window.location.hash === '#wyde') {
      switchProgram('wyde');
    }
  });
});

function setupProgramTabs() {
  const tabs = document.querySelectorAll('.program-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      // If we are on index.html with in-page switching
      const targetProg = tab.getAttribute('data-program');
      if (targetProg) {
        e.preventDefault();
        switchProgram(targetProg);
      }
    });
  });
}

function switchProgram(progKey) {
  currentProgramKey = progKey;
  window.location.hash = progKey;

  // Update tabs visual state
  document.querySelectorAll('.program-tab').forEach(tab => {
    if (tab.getAttribute('data-program') === progKey) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  renderProgram(progKey);
}

function renderProgram(progKey) {
  const program = PROGRAMS_DATA.programs[progKey];
  if (!program) return;

  // Update Primary theme color
  document.documentElement.style.setProperty('--primary', program.themeColor);

  // Render Hero
  renderHero(program);

  // Render Day Selector
  renderDaySelector(program);

  // Render Sessions
  renderSessions(program);
}

function renderHero(program) {
  const heroContainer = document.getElementById('program-hero-container');
  if (!heroContainer) return;

  let logoHtml = '';
  if (program.id === 'wyde') {
    logoHtml = `
      <img src="${program.bannerImage}" alt="WYDE & Partners Banner" class="hero-banner-img" />
    `;
  } else {
    logoHtml = `
      <div class="ewip-header-logos">
        <img src="${program.logoImage}" alt="EWIP Kenya Logo" />
        <img src="${program.kicLogoImage}" alt="KIC Logo" />
      </div>
    `;
  }

  const welcomeParagraphs = program.welcomeText.map(p => `<p>${p}</p>`).join('');

  heroContainer.innerHTML = `
    ${logoHtml}
    <div class="hero-meta-badges">
      <span class="badge ${program.id === 'wyde' ? 'badge-blue' : 'badge-orange'}">${program.badge}</span>
      <span class="badge badge-gray">📍 ${PROGRAMS_DATA.meta.venue}</span>
      <span class="badge badge-gray">📅 ${PROGRAMS_DATA.meta.dates}</span>
    </div>
    <h2 class="hero-title">${program.title}</h2>
    <p class="hero-subtitle">${program.cohort} · ${program.targetAudience}</p>
    
    <div class="hero-details-grid">
      <div class="hero-detail-item">
        <span class="icon">🏛️</span>
        <div><strong>Hosted by:</strong> ${program.hostOrg}</div>
      </div>
      <div class="hero-detail-item">
        <span class="icon">🌍</span>
        <div><strong>Led & Supported by:</strong> ${program.leadOrg}</div>
      </div>
      <div class="hero-detail-item">
        <span class="icon">📍</span>
        <div><strong>Location:</strong> Sentrim Lake Elementaita, Kenya</div>
      </div>
    </div>

    <div class="accordion">
      <button class="accordion-trigger" onclick="toggleAccordion(this)">
        <span>📖 Read Welcome Remarks & Overview</span>
        <span class="arrow">▼</span>
      </button>
      <div class="accordion-content">
        ${welcomeParagraphs}
      </div>
    </div>
  `;
}

function toggleAccordion(btn) {
  btn.classList.toggle('open');
  const content = btn.nextElementSibling;
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
}

function renderDaySelector(program) {
  const container = document.getElementById('day-selector-container');
  if (!container) return;

  let html = `
    <div class="day-scroll-bar">
      <button class="day-btn ${activeDayFilter === 'all' ? 'active' : ''}" onclick="filterByDay('all')">
        <span>All Days</span>
        <span class="day-sub">16–20 Nov</span>
      </button>
  `;

  program.days.forEach(day => {
    const isAct = activeDayFilter == day.dayNumber;
    html += `
      <button class="day-btn ${isAct ? 'active' : ''}" onclick="filterByDay(${day.dayNumber})">
        <span>Day ${day.dayNumber}</span>
        <span class="day-sub">${day.dayName.split(',')[1].trim()}</span>
      </button>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function filterByDay(dayNum) {
  activeDayFilter = dayNum;
  const program = PROGRAMS_DATA.programs[currentProgramKey];
  renderDaySelector(program);
  renderSessions(program);
}

function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.toLowerCase().trim();
    const program = PROGRAMS_DATA.programs[currentProgramKey];
    renderSessions(program);
  });
}

function renderSessions(program) {
  const container = document.getElementById('sessions-container');
  if (!container) return;

  let filteredDays = program.days;
  if (activeDayFilter !== 'all') {
    filteredDays = program.days.filter(d => d.dayNumber == activeDayFilter);
  }

  let html = '';

  filteredDays.forEach(day => {
    // Filter sessions by search query if present
    const matchedSessions = day.sessions.filter(s => {
      if (!currentSearchQuery) return true;
      const q = currentSearchQuery;
      return (
        s.title.toLowerCase().includes(q) ||
        (s.subtitle && s.subtitle.toLowerCase().includes(q)) ||
        (s.description && s.description.toLowerCase().includes(q)) ||
        (s.responsible && s.responsible.toLowerCase().includes(q)) ||
        (s.location && s.location.toLowerCase().includes(q))
      );
    });

    if (matchedSessions.length === 0) return;

    html += `
      <div class="day-section" id="day-${day.dayNumber}">
        <div class="day-section-header">
          <div>
            <h3 class="day-section-title">📅 ${day.dayName}</h3>
            <p class="day-section-theme">${day.theme}</p>
          </div>
          <span class="badge badge-gray">${matchedSessions.length} session${matchedSessions.length > 1 ? 's' : ''}</span>
        </div>
        <div class="session-cards-list">
    `;

    matchedSessions.forEach(session => {
      const catClass = `category-${session.category || 'training'}`;
      html += `
        <div class="session-card ${catClass}">
          <div class="session-header">
            <div class="time-badge">
              <span>⏰</span> ${session.time}
            </div>
            <span class="badge ${getCategoryBadge(session.category)}">${formatCategory(session.category)}</span>
          </div>
          
          <h4 class="session-title">${session.title}</h4>
          ${session.subtitle ? `<h5 class="session-subtitle">${session.subtitle}</h5>` : ''}
          ${session.description ? `<p class="session-desc">${session.description}</p>` : ''}
          
          <div class="session-footer">
            <div class="facilitator-pill">
              <span class="icon">👤</span>
              <span>${session.responsible}</span>
            </div>
            <div class="session-actions">
              <button class="action-btn-sm" onclick="downloadSessionICS('${session.title.replace(/'/g, "\\'")}', '${day.date}', '${session.startTime}', '${session.endTime}', '${session.responsible.replace(/'/g, "\\'")}')">
                📅 Add to Calendar
              </button>
            </div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  if (!html) {
    html = `
      <div style="text-align:center; padding: 40px 20px; background:#fff; border-radius:12px; border:1px solid #e2e8f0;">
        <p style="font-size:16px; font-weight:600; color:#64748b; margin-bottom:8px;">No sessions found matching "${currentSearchQuery}"</p>
        <button class="btn-secondary" onclick="clearSearch()">Clear Search</button>
      </div>
    `;
  }

  container.innerHTML = html;
}

function getCategoryBadge(cat) {
  switch (cat) {
    case 'meal': return 'badge-orange';
    case 'strategic': return 'badge-purple';
    case 'evaluation': return 'badge-green';
    case 'admin': return 'badge-gray';
    default: return 'badge-blue';
  }
}

function formatCategory(cat) {
  switch (cat) {
    case 'meal': return 'Meal / Break';
    case 'strategic': return 'Strategic Session';
    case 'evaluation': return 'Evaluation & Synthesis';
    case 'admin': return 'Logistics';
    default: return 'Interactive Workshop';
  }
}

function clearSearch() {
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  currentSearchQuery = '';
  renderSessions(PROGRAMS_DATA.programs[currentProgramKey]);
}

function renderFacilitators() {
  const container = document.getElementById('facilitators-grid');
  if (!container) return;

  let html = '';
  PROGRAMS_DATA.speakers.forEach(sp => {
    html += `
      <div class="facilitator-card">
        <h4 class="fac-name">${sp.name}</h4>
        <div class="fac-role">${sp.role}</div>
        <p class="fac-bio">${sp.bio}</p>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Calendar .ics Generator
function downloadSessionICS(title, dateStr, startTime, endTime, speaker) {
  const cleanDate = dateStr.replace(/-/g, '');
  const startClean = startTime.replace(':', '') + '00';
  const endClean = endTime.replace(':', '') + '00';
  
  const dtStart = `${cleanDate}T${startClean}`;
  const dtEnd = `${cleanDate}T${endClean}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//The Oslo Center//Elementaita Workshops 2026//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DESCRIPTION:Facilitator: ${speaker} | Sentrim Lake Elementaita Workshops 2026`,
    'LOCATION:Sentrim Lake Elementaita, Kenya',
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title.slice(0, 25).replace(/[^a-zA-Z0-9]/g, '_')}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// QR Code Modal handling
function setupModals() {
  const qrModal = document.getElementById('qr-modal');
  if (!qrModal) return;

  // Close when clicking outside
  qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
      closeQRModal();
    }
  });
}

function openQRModal(progKey) {
  const targetKey = progKey || currentProgramKey;
  const program = PROGRAMS_DATA.programs[targetKey];
  const modal = document.getElementById('qr-modal');
  if (!modal || !program) return;

  const currentUrl = window.location.origin + window.location.pathname;
  let targetUrl = currentUrl;
  if (targetKey === 'wyde') {
    targetUrl = targetUrl.replace(/ewip\.html|index\.html|\/$/, '') + '/wyde.html';
  } else if (targetKey === 'ewip') {
    targetUrl = targetUrl.replace(/wyde\.html|index\.html|\/$/, '') + '/ewip.html';
  }

  document.getElementById('modal-qr-img').src = program.qrImage;
  document.getElementById('modal-qr-title').innerText = `${program.code} Online Program`;
  document.getElementById('modal-qr-url').innerText = targetUrl;
  
  // Set download links
  const downloadPngBtn = document.getElementById('btn-download-qr-png');
  if (downloadPngBtn) {
    downloadPngBtn.href = program.qrImage;
    downloadPngBtn.download = `${program.id}-qr-code.png`;
  }

  const downloadSvgBtn = document.getElementById('btn-download-qr-svg');
  if (downloadSvgBtn) {
    downloadSvgBtn.href = program.qrSvg;
    downloadSvgBtn.download = `${program.id}-qr-code.svg`;
  }

  modal.classList.add('active');
}

function closeQRModal() {
  const modal = document.getElementById('qr-modal');
  if (modal) modal.classList.remove('active');
}

function copyProgramUrl() {
  const url = document.getElementById('modal-qr-url').innerText;
  navigator.clipboard.writeText(url).then(() => {
    alert('Program link copied to clipboard!');
  }).catch(() => {
    prompt('Copy link:', url);
  });
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
      // Offline caching optional fallback
    });
  }
}
