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
  setupSmoothScrolling();
  renderProgram(currentProgramKey);
  renderFacilitators();
  setupSearch();
  setupModals();
  registerServiceWorker();

  // Smart auto-scroll to current day & session
  setTimeout(() => {
    autoDetectAndScroll(true);
  }, 350);

  // Periodic re-check every 60 seconds
  setInterval(() => {
    autoDetectAndScroll(false);
  }, 60000);

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

  setTimeout(() => {
    autoDetectAndScroll(true);
  }, 250);
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
    
    <!-- Live Status Banner (Displays when session is ongoing) -->
    <div id="live-status-banner" class="live-status-banner">
      <div class="live-status-info">
        <span class="live-indicator-dot"></span>
        <span id="live-status-text">Checking live program...</span>
      </div>
      <button class="live-jump-btn" onclick="jumpToActiveProgram()">
        ⚡ Scroll to Session
      </button>
    </div>

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

// Robust Day and Time Calculation
function getEventCurrentState(program) {
  const urlParams = new URLSearchParams(window.location.search);
  const testDay = urlParams.get('testDay') || urlParams.get('day');
  const testTime = urlParams.get('testTime') || urlParams.get('time');

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(now.getDate()).padStart(2, '0');
  let currentDate = `${year}-${month}-${dayOfMonth}`;

  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  let currentTime = `${hours}:${mins}`;

  let matchedDay = null;

  // 1. Check if user passed ?day= in URL (e.g. ?day=3 or ?day=wednesday)
  if (testDay) {
    const dLower = String(testDay).toLowerCase().trim();
    if (dLower === '1' || dLower.includes('mon')) matchedDay = program.days[0];
    else if (dLower === '2' || dLower.includes('tue')) matchedDay = program.days[1];
    else if (dLower === '3' || dLower.includes('wed')) matchedDay = program.days[2];
    else if (dLower === '4' || dLower.includes('thu')) matchedDay = program.days[3];
    else if (dLower === '5' || dLower.includes('fri')) matchedDay = program.days[4];
  }

  // 2. If not specified via URL, match by exact calendar date
  if (!matchedDay) {
    matchedDay = program.days.find(d => d.date === currentDate);
  }

  // 3. If still not matched, check by Day of Week (1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri)
  if (!matchedDay) {
    const dayOfWeek = now.getDay();
    if (dayOfWeek === 1) matchedDay = program.days[0];
    else if (dayOfWeek === 2) matchedDay = program.days[1];
    else if (dayOfWeek === 3) matchedDay = program.days[2];
    else if (dayOfWeek === 4) matchedDay = program.days[3];
    else if (dayOfWeek === 5) matchedDay = program.days[4];
  }

  // If time override is passed in URL
  if (testTime) {
    currentTime = testTime.trim();
  }

  if (!matchedDay) {
    return {
      isEventDay: false,
      currentDate,
      currentTime,
      matchedDay: null,
      activeSession: null,
      activeSessionIndex: -1
    };
  }

  // Check matching active session
  let activeSession = null;
  let activeSessionIndex = -1;
  let nextSession = null;

  for (let i = 0; i < matchedDay.sessions.length; i++) {
    const s = matchedDay.sessions[i];
    if (s.startTime <= currentTime && currentTime < s.endTime) {
      activeSession = s;
      activeSessionIndex = i;
      break;
    } else if (currentTime < s.startTime && !nextSession) {
      nextSession = s;
    }
  }

  return {
    isEventDay: true,
    currentDate,
    currentTime,
    matchedDay,
    activeSession,
    activeSessionIndex,
    nextSession
  };
}

function renderDaySelector(program) {
  const container = document.getElementById('day-selector-container');
  if (!container) return;

  const state = getEventCurrentState(program);

  let html = `
    <div class="day-scroll-bar">
      <button class="day-btn ${activeDayFilter === 'all' ? 'active' : ''}" onclick="filterByDay('all')">
        <span>All Days</span>
        <span class="day-sub">16–20 Nov</span>
      </button>
  `;

  program.days.forEach(day => {
    const isAct = activeDayFilter == day.dayNumber;
    const isToday = state.matchedDay && state.matchedDay.dayNumber === day.dayNumber;

    html += `
      <button class="day-btn ${isAct ? 'active' : ''}" onclick="filterByDay(${day.dayNumber})">
        <span>Day ${day.dayNumber} ${isToday ? '🔴' : ''}</span>
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

  if (dayNum !== 'all') {
    const el = document.getElementById(`day-${dayNum}`);
    if (el) {
      smoothScrollToElement(el);
    }
  }
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

  const state = getEventCurrentState(program);

  // Update live status banner
  const banner = document.getElementById('live-status-banner');
  const bannerText = document.getElementById('live-status-text');

  if (banner && bannerText) {
    if (state.isEventDay && state.activeSession) {
      bannerText.innerHTML = `<strong>HAPPENING NOW:</strong> ${state.activeSession.title} <span class="time">(${state.activeSession.time})</span>`;
      banner.classList.add('visible');
    } else if (state.isEventDay && state.nextSession) {
      bannerText.innerHTML = `<strong>TODAY (${state.matchedDay.dayName.split(',')[0]}):</strong> Next session at ${state.nextSession.time} - ${state.nextSession.title}`;
      banner.classList.add('visible');
    } else if (state.isEventDay) {
      bannerText.innerHTML = `<strong>TODAY:</strong> ${state.matchedDay.dayName} · Sentrim Lake Elementaita`;
      banner.classList.add('visible');
    } else {
      banner.classList.remove('visible');
    }
  }

  let filteredDays = program.days;
  if (activeDayFilter !== 'all') {
    filteredDays = program.days.filter(d => d.dayNumber == activeDayFilter);
  }

  let html = '';

  filteredDays.forEach(day => {
    const isToday = state.matchedDay && state.matchedDay.dayNumber === day.dayNumber;

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
            <h3 class="day-section-title">
              📅 ${day.dayName}
              ${isToday ? '<span class="badge badge-orange" style="font-size:10px;">TODAY</span>' : ''}
            </h3>
            <p class="day-section-theme">${day.theme}</p>
          </div>
          <span class="badge badge-gray">${matchedSessions.length} session${matchedSessions.length > 1 ? 's' : ''}</span>
        </div>
        <div class="session-cards-list">
    `;

    matchedSessions.forEach((session, sIdx) => {
      const isThisActive = isToday && state.activeSession && state.activeSession.startTime === session.startTime;
      const catClass = `category-${session.category || 'training'}`;
      const cardId = isThisActive ? 'active-live-card' : `session-${day.dayNumber}-${sIdx}`;

      html += `
        <div class="session-card ${catClass} ${isThisActive ? 'is-active' : ''}" id="${cardId}" data-time="${session.startTime}">
          <div class="session-header">
            <div class="time-badge">
              <span>⏰</span> ${session.time}
            </div>
            <div style="display:flex; gap:6px; align-items:center;">
              ${isThisActive ? '<span class="live-indicator-tag"><span class="live-indicator-dot"></span> LIVE NOW</span>' : ''}
              <span class="badge ${getCategoryBadge(session.category)}">${formatCategory(session.category)}</span>
            </div>
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

// Smooth scroll for all hash links and buttons
function setupSmoothScrolling() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href === '#wyde' || href === '#ewip') return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      smoothScrollToElement(targetElement);
      try {
        history.pushState(null, null, href);
      } catch (err) {}
    }
  });
}

// Smooth scroll accounting for sticky headers
function smoothScrollToElement(el) {
  if (!el) return;
  const header = document.querySelector('.top-header');
  const dayBar = document.querySelector('.day-selector-container');
  const headerOffset = (header ? header.offsetHeight : 60) + (dayBar ? dayBar.offsetHeight : 45) + 15;

  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Automatic detection and smart smooth scrolling
function autoDetectAndScroll(shouldScroll = true) {
  const program = PROGRAMS_DATA.programs[currentProgramKey];
  const state = getEventCurrentState(program);

  // Render fresh state
  renderSessions(program);
  renderDaySelector(program);

  if (!shouldScroll || !state.isEventDay) return;

  // 1. If an exact session is active right now -> center on that session!
  if (state.activeSession) {
    const liveCard = document.getElementById('active-live-card');
    if (liveCard) {
      setTimeout(() => {
        smoothScrollToElement(liveCard);
      }, 100);
      return;
    }
  }

  // 2. If it is an event day (e.g. Wednesday) -> scroll to that day's section!
  const dayEl = document.getElementById(`day-${state.matchedDay.dayNumber}`);
  if (dayEl) {
    setTimeout(() => {
      smoothScrollToElement(dayEl);
    }, 100);
  }
}

// User-triggered jump button
function jumpToActiveProgram() {
  const program = PROGRAMS_DATA.programs[currentProgramKey];
  const state = getEventCurrentState(program);

  if (state.isEventDay) {
    autoDetectAndScroll(true);
  } else {
    // If outside dates, jump to first day
    const firstDay = document.getElementById('day-1') || document.querySelector('.day-section');
    if (firstDay) {
      smoothScrollToElement(firstDay);
    }
  }
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

  const baseUrl = 'https://elementaita-programs-2026.pages.dev';
  let targetUrl = baseUrl;
  if (targetKey === 'wyde') {
    targetUrl = `${baseUrl}/wyde`;
  } else if (targetKey === 'ewip') {
    targetUrl = `${baseUrl}/ewip`;
  }

  document.getElementById('modal-qr-img').src = program.qrImage;
  document.getElementById('modal-qr-title').innerText = `${program.code} Online Program`;
  document.getElementById('modal-qr-url').innerText = targetUrl;
  
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
    navigator.serviceWorker.register('sw.js?v=4').catch(() => {
      // Offline fallback
    });
  }
}
