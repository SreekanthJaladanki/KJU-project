/**
 * CAMPUS PULSE // STUDENT EVENTS HUB
 * Comprehensive Client-Side Application Logic
 * Black & White Collegiate Design System
 */

(function () {
  'use strict';

  // Helper to format dates relative to current execution time
  const now = new Date();
  
  function getRelativeDate(daysOffset) {
    const d = new Date(now);
    d.setDate(d.getDate() + daysOffset);
    return d.toISOString().split('T')[0];
  }

  function formatDisplayDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const day = d.toLocaleDateString('en-US', { weekday: 'short' });
    const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const dateNum = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return { dayOfWeek: day, month, dateNum, full: `${day}, ${month} ${dateNum}, ${year}` };
  }

  // Initial comprehensive dataset of college events
  const INITIAL_EVENTS = [
    {
      id: 'ev-101',
      title: 'TECH CRUCIBLE: 36-Hour National Collegiate Hackathon',
      category: 'Technology',
      club: 'ACM Student Chapter & Robotics Lab',
      date: getRelativeDate(0), // Today!
      time: '09:00 AM – 09:00 PM (Phase 1)',
      venue: 'Alan Turing Computing Complex, Level 3',
      hallCode: 'LAB-7',
      fee: 'FREE FOR STUDENTS',
      capacity: 250,
      registered: 228,
      status: 'LIVE NOW',
      summary: 'The premier collegiate hackathon of the semester. Build AI agents, distributed systems, and hardware hacks. Mentorship from top engineers.',
      description: 'Tech Crucible brings together over 200 student builders, designers, and systems architects for an intensive 36-hour sprint. Tackle problem tracks in Autonomous Systems, Generative AI for Education, Web3 Decentralization, and Green Computing. Hardware kits, Raspberry Pis, and high-speed gigabit workstations provided.',
      agenda: [
        { time: '09:00 AM', title: 'Team Check-in & Hardware Kit Issuance', desc: 'Verify Student ID at Turing Foyer and collect team badge' },
        { time: '10:30 AM', title: 'Opening Keynote & Problem Statement Reveal', desc: 'Dr. Elena Rostova reveals the grand design challenge' },
        { time: '01:00 PM', title: 'Complimentary Student Lunch & Networking', desc: 'Central Cafeteria Quad' },
        { time: '04:00 PM', title: 'Midway Architecture Mentorship Review', desc: 'Industry mentors inspect progress in Lab 7' },
        { time: '08:30 PM', title: 'Day 1 Code Freeze & Evening Standup', desc: 'Sync state and prepare for overnight coding' }
      ],
      speakers: [
        { name: 'Dr. Elena Rostova', role: 'Distinguished Fellow, AI Institute' },
        { name: 'Karthik Varma', role: 'Principal Architect, Cloud Systems' }
      ],
      tags: ['hackathon', 'coding', 'ai', 'robotics', 'turing-lab', 'free-food']
    },
    {
      id: 'ev-102',
      title: 'ACOUSTIC SUNDOWN & JAZZ ENSEMBLE NIGHT',
      category: 'Culture',
      club: 'Collegiate Music & Performing Arts Society',
      date: getRelativeDate(0), // Today!
      time: '06:00 PM – 09:30 PM',
      venue: 'Open-Air Amphitheatre, Central Lawn',
      hallCode: 'HUB-0',
      fee: 'FREE ENTRY (All Batches)',
      capacity: 500,
      registered: 412,
      status: 'FILLING FAST',
      summary: 'An open-air evening of jazz solos, acoustic indie bands, and student songwriting debuts under the campus stars.',
      description: 'Join the campus music guild for an intimate evening of live acoustic melodies, jazz fusion, and vocal performances. Featuring 8 selected student bands and an open jam circle for aspiring musicians. Free hot cider and snacks provided by the Student Union.',
      agenda: [
        { time: '06:00 PM', title: 'Doors Open & Acoustic Warmup', desc: 'Lawn seating on first-come basis' },
        { time: '06:30 PM', title: 'Jazz Quartet Showcase', desc: 'Performing classic standards and brass arrangements' },
        { time: '08:00 PM', title: 'Original Student Songwriter Circle', desc: 'Debut singles written and performed by students' },
        { time: '09:00 PM', title: 'Community Open Mic Jam', desc: 'Plug & play session for any attendee with an instrument' }
      ],
      speakers: [
        { name: 'Maya Lin', role: 'President, Music Guild' },
        { name: 'Prof. Julian Vance', role: 'Faculty Advisor, Performing Arts' }
      ],
      tags: ['music', 'jazz', 'concert', 'amphitheatre', 'acoustic', 'evening']
    },
    {
      id: 'ev-103',
      title: 'SYMPOSIUM: QUANTUM COMPUTING & POST-SILICON ALGORITHMS',
      category: 'Academics',
      club: 'Dept. of Physics & Computer Science',
      date: getRelativeDate(0), // Today!
      time: '03:00 PM – 05:30 PM',
      venue: 'Grand Dr. Kalam Auditorium, Hall B',
      hallCode: 'AUD-A',
      fee: 'FREE ADMISSION',
      capacity: 350,
      registered: 310,
      status: 'UPCOMING',
      summary: 'Distinguished guest lecture exploring quantum superposition algorithms, qubits on silicon photonics, and superconducting circuits.',
      description: 'A deep-dive research talk on the frontier of quantum computation. Covering algorithmic principles like Shor and Grover, error mitigation strategies, and practical implementations on IBM Quantum and photonic hardware. Q&A session and research intern recruitment discussion following the talk.',
      agenda: [
        { time: '03:00 PM', title: 'Dean Introduction & Research Overview', desc: 'Opening remarks on university quantum lab progress' },
        { time: '03:20 PM', title: 'Keynote: Superconducting Qubits & Decoherence', desc: 'Dr. Marcus Thorne presents experimental telemetry' },
        { time: '04:45 PM', title: 'Interactive Student Q&A & Research Pathways', desc: 'How undergrads can publish in quantum algorithms' }
      ],
      speakers: [
        { name: 'Dr. Marcus Thorne', role: 'Chair of Quantum Physics, CERN Affiliate' },
        { name: 'Dr. Shruti Nair', role: 'Head of Theoretical Computing' }
      ],
      tags: ['quantum', 'physics', 'lecture', 'algorithms', 'auditorium']
    },
    {
      id: 'ev-104',
      title: 'FULL-STACK CLOUD SYSTEMS MASTERCLASS: DOCKER & K8s',
      category: 'Workshop',
      club: 'Developer Student Club (DSC)',
      date: getRelativeDate(1), // Tomorrow!
      time: '10:00 AM – 03:30 PM',
      venue: 'Software Systems Lab 4, Block D',
      hallCode: 'LAB-4',
      fee: 'FREE (Certificate Included)',
      capacity: 80,
      registered: 74,
      status: 'FILLING FAST',
      summary: 'Hands-on zero-to-production bootcamp. Containerize microservices, write Helm charts, and deploy across cloud clusters.',
      description: 'Bring your laptop with Docker Desktop pre-installed. In this practical 5-hour lab, participants will write multi-stage Dockerfiles, configure container networks, manage persistent storage volumes, and orchestrate zero-downtime rolling updates on a live Kubernetes cluster.',
      agenda: [
        { time: '10:00 AM', title: 'Linux Namespaces & Container Runtimes Primer', desc: 'Under the hood of container isolation' },
        { time: '11:30 AM', title: 'Hands-on Lab: Multi-stage Docker Builds', desc: 'Optimizing container sizes from 1GB to 25MB' },
        { time: '01:00 PM', title: 'Lunch Break & Peer Code Review', desc: 'Cafeteria Level 1' },
        { time: '01:45 PM', title: 'Kubernetes Pods, Services & Ingress Deployment', desc: 'Deploying a live multi-tier web application' },
        { time: '03:15 PM', title: 'Certificate of Competency Issuance', desc: 'Digital verification link sent to attendee email' }
      ],
      speakers: [
        { name: 'Rohan Deshmukh', role: 'Cloud Platform Architect & DSC Lead' }
      ],
      tags: ['workshop', 'docker', 'kubernetes', 'cloud', 'devops', 'certificate']
    },
    {
      id: 'ev-105',
      title: 'INTER-COLLEGIATE 3V3 BASKETBALL SHOOTOUT CHAMPIONSHIP',
      category: 'Sports',
      club: 'Athletics & Physical Education Council',
      date: getRelativeDate(2), // 2 days later
      time: '08:30 AM – 04:00 PM',
      venue: 'Vikram Sarabhai Sports Arena, Indoor Court 1',
      hallCode: 'ARENA',
      fee: 'FREE ENTRY FOR SPECTATORS',
      capacity: 600,
      registered: 450,
      status: 'UPCOMING',
      summary: 'Fast-paced half-court basketball tournament featuring 24 collegiate squads competing for the semester championship trophy.',
      description: 'The annual 3v3 Basketball Tournament pits the sharpest squads across all departments and neighboring universities against each other. High-tempo 10-minute games, referee panel from the State Basketball Association, cheer performances, and a half-time 3-point shootout contest open to the student audience.',
      agenda: [
        { time: '08:30 AM', title: 'Team Briefing & Warmups', desc: 'Official roster verification' },
        { time: '09:15 AM', title: 'Knockout Round Matches (Groups A to D)', desc: 'Continuous action on two simultaneous courts' },
        { time: '12:30 PM', title: 'Halftime 3-Point Contest for Audience', desc: 'Win collegiate athletic merchandise' },
        { time: '02:00 PM', title: 'Semi-Finals & Grand Championship Game', desc: 'Court 1 with live campus commentary' },
        { time: '03:45 PM', title: 'Medal & Trophy Ceremony', desc: 'Presented by Dean of Student Affairs' }
      ],
      speakers: [
        { name: 'Coach David Miller', role: 'Head Coach, Varsity Athletics' }
      ],
      tags: ['basketball', 'sports', 'athletics', 'tournament', 'championship']
    },
    {
      id: 'ev-106',
      title: 'CAMPUS ANIME & ESPORTS LAN SPECTACULAR',
      category: 'Social',
      club: 'Gaming & Interactive Media Guild',
      date: getRelativeDate(3), // Weekend
      time: '11:00 AM – 08:00 PM',
      venue: 'Student Activities Complex, Multi-Purpose Hall',
      hallCode: 'HUB-2',
      fee: 'FREE ADMISSION',
      capacity: 300,
      registered: 280,
      status: 'FILLING FAST',
      summary: 'Retro arcade stations, Smash Bros & Valorant mini-tournaments, cosplay exhibition, and manga exchange library.',
      description: 'Celebrate collegiate gaming culture! Featuring an 8-station high-refresh LAN setup for team tactical shooters, Nintendo Switch party game lounges, a student anime art gallery, and a cosplay contest with prizes judged by senior animation faculty.',
      agenda: [
        { time: '11:00 AM', title: 'Exhibition Hall Opens & Free-Play Arcades', desc: 'Casual games and community board games' },
        { time: '01:00 PM', title: 'Smash Bros Ultimate Bracket Stage', desc: '1v1 Double elimination tournament' },
        { time: '04:00 PM', title: 'Cosplay Showcase & Photo Run', desc: 'Student showcase on the main ramp' },
        { time: '06:00 PM', title: 'Grand Finals LAN Showmatch', desc: 'Projected on the big screen with student casting' }
      ],
      speakers: [
        { name: 'Kenji Sato', role: 'Cosplay Lead & Digital Illustrator' },
        { name: 'Sarah Ahmed', role: 'President, Esports League' }
      ],
      tags: ['gaming', 'esports', 'anime', 'cosplay', 'lan', 'weekend']
    },
    {
      id: 'ev-107',
      title: 'UI/UX DESIGN CRITIQUE & DESIGN SYSTEM LAB',
      category: 'Workshop',
      club: 'Student Design Collective (SDC)',
      date: getRelativeDate(4),
      time: '01:30 PM – 05:00 PM',
      venue: 'Creative Studio 2, Humanities Block',
      hallCode: 'DES-2',
      fee: 'FREE FOR STUDENTS',
      capacity: 60,
      registered: 48,
      status: 'UPCOMING',
      summary: 'Learn brutalist typography, micro-interactions, accessibility tokens, and portfolio teardowns with senior product designers.',
      description: 'Master the art of creating clean, production-ready interfaces. We will deconstruct why black-and-white minimalist systems dominate modern high-end software, conduct live portfolio reviews, and build an interactive Figma component library with auto-layout and variable modes.',
      agenda: [
        { time: '01:30 PM', title: 'Typography & Spatial Hierarchy in Modern UI', desc: 'Monochrome contrast ratios & Swiss grid rules' },
        { time: '02:45 PM', title: 'Live Portfolio Teardowns', desc: 'Constructive review of submitted student case studies' },
        { time: '04:00 PM', title: 'Hands-on: Design Tokens in Figma', desc: 'Building scalable responsive components' }
      ],
      speakers: [
        { name: 'Aiden Vance', role: 'Staff Product Designer & SDC Mentor' }
      ],
      tags: ['design', 'ui-ux', 'figma', 'typography', 'portfolio']
    },
    {
      id: 'ev-108',
      title: 'ANNUAL CAMPUS DEBATE: THE ETHICS OF AUTONOMOUS WARFARE & AI',
      category: 'Academics',
      club: 'Collegiate Debating & Literary Society',
      date: getRelativeDate(5),
      time: '04:00 PM – 07:00 PM',
      venue: 'Senate Hall, Administration Block 2F',
      hallCode: 'SEN-1',
      fee: 'FREE ENTRY (Open Floor Q&A)',
      capacity: 180,
      registered: 130,
      status: 'UPCOMING',
      summary: 'Oxford-style parliamentary debate featuring 8 collegiate debaters analyzing artificial intelligence regulations and societal impacts.',
      description: 'Motion: "This House Would Institute an Unconditional Ban on Lethal Autonomous Systems in Global Defense." Join us for an intellectually fierce debate followed by floor speeches where any student can pose arguments to the house.',
      agenda: [
        { time: '04:00 PM', title: 'House Opening & Rules of the House', desc: 'Speaker of the house introduces motion' },
        { time: '04:20 PM', title: 'Government & Opposition Prime Speeches', desc: '7-minute timed arguments' },
        { time: '05:45 PM', title: 'Floor Open for Student Interventions', desc: 'Point of information & audience remarks' },
        { time: '06:30 PM', title: 'House Vote & Division of the Chamber', desc: 'Audience votes by physical division' }
      ],
      speakers: [
        { name: 'Prof. Harriet Ward', role: 'Chair of Ethics & Jurisprudence' }
      ],
      tags: ['debate', 'ethics', 'ai', 'parliamentary', 'literature']
    },
    {
      id: 'ev-109',
      title: 'STARTUP PITCH SUMMIT: CAMPUS FOUNDERS & ANGEL INVESTORS',
      category: 'Technology',
      club: 'Incubation Centre & Entrepreneurship Cell (E-Cell)',
      date: getRelativeDate(6),
      time: '10:00 AM – 02:00 PM',
      venue: 'Innovation Hub, Research Park Ground Floor',
      hallCode: 'INN-1',
      fee: 'FREE (Registration Mandatory)',
      capacity: 150,
      registered: 142,
      status: 'FILLING FAST',
      summary: 'Ten student-led tech startups pitch their MVPs to venture capitalists and alumnus angel investors for pre-seed grants.',
      description: 'Witness the next generation of collegiate entrepreneurs. Selected startup teams will pitch for 5 minutes followed by 5 minutes of rapid-fire grilling by visiting venture capitalists. Total grant pool of \$25,000 in non-dilutive campus seed funding will be awarded.',
      agenda: [
        { time: '10:00 AM', title: 'Welcome Address & Investor Panel Introduction', desc: 'Overview of campus incubation grant funds' },
        { time: '10:30 AM', title: 'Batch 1: AI & DeepTech Pitches', desc: '5 student teams present prototypes' },
        { time: '12:00 PM', title: 'Batch 2: CleanTech & Consumer Apps', desc: '5 student teams present prototypes' },
        { time: '01:15 PM', title: 'Grant Announcement & Mixer Lunch', desc: 'Connect with investors & startup founders' }
      ],
      speakers: [
        { name: 'Vikram Mehta', role: 'General Partner, Frontier Seed Capital' },
        { name: 'Claire Dupont', role: 'Founder & College Alumna (Forbes 30U30)' }
      ],
      tags: ['startup', 'pitch', 'investors', 'entrepreneurship', 'grants']
    }
  ];

  // Storage key for user-submitted and bookmarked events
  const STORAGE_KEYS = {
    EVENTS: 'campus_pulse_events_data_v1',
    BOOKMARKS: 'campus_pulse_bookmarks_v1',
    THEME: 'campus_pulse_theme_v1'
  };

  // State Management
  const state = {
    events: [],
    bookmarks: new Set(),
    activeCategory: 'all',
    searchQuery: '',
    timeframeFilter: 'all',
    sortBy: 'date-asc',
    viewMode: 'grid', // 'grid' | 'list'
    savedOnly: false,
    selectedEventId: null
  };

  // DOM Elements
  const elements = {
    eventsContainer: document.getElementById('eventsContainer'),
    emptyState: document.getElementById('emptyState'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    dateFilterSelect: document.getElementById('dateFilterSelect'),
    sortSelect: document.getElementById('sortSelect'),
    savedFilterBtn: document.getElementById('savedFilterBtn'),
    savedCountBadge: document.getElementById('savedCountBadge'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    liveClock: document.getElementById('liveClock'),
    resultsCount: document.getElementById('resultsCount'),
    activeFiltersBar: document.getElementById('activeFiltersBar'),
    filterChipsContainer: document.getElementById('filterChipsContainer'),
    resetAllFiltersBtn: document.getElementById('resetAllFiltersBtn'),
    showTodayOnlyBtn: document.getElementById('showTodayOnlyBtn'),
    openSubmitModalBtn: document.getElementById('openSubmitModalBtn'),
    footerSubmitBtn: document.getElementById('footerSubmitBtn'),
    toastHub: document.getElementById('toastHub'),

    // Category Buttons
    catPills: document.querySelectorAll('.cat-pill'),
    viewBtns: document.querySelectorAll('.view-btn'),

    // Stats
    statTotalEvents: document.getElementById('statTotalEvents'),
    statTodayEvents: document.getElementById('statTodayEvents'),
    statActiveClubs: document.getElementById('statActiveClubs'),
    statFreeEntry: document.getElementById('statFreeEntry'),

    // Category Counts
    countCatAll: document.getElementById('countCatAll'),
    countCatTech: document.getElementById('countCatTech'),
    countCatCulture: document.getElementById('countCatCulture'),
    countCatWorkshop: document.getElementById('countCatWorkshop'),
    countCatSports: document.getElementById('countCatSports'),
    countCatAcademics: document.getElementById('countCatAcademics'),
    countCatSocial: document.getElementById('countCatSocial'),

    // Event Details Modal Elements
    eventDetailsModal: document.getElementById('eventDetailsModal'),
    closeDetailsModalBtn: document.getElementById('closeDetailsModalBtn'),
    modalCategory: document.getElementById('modalCategory'),
    modalStatusChip: document.getElementById('modalStatusChip'),
    modalEventCode: document.getElementById('modalEventCode'),
    modalEventTitle: document.getElementById('modalEventTitle'),
    modalClub: document.getElementById('modalClub'),
    modalDate: document.getElementById('modalDate'),
    modalTime: document.getElementById('modalTime'),
    modalVenue: document.getElementById('modalVenue'),
    modalFee: document.getElementById('modalFee'),
    modalBannerCat: document.getElementById('modalBannerCat'),
    modalBannerTitle: document.getElementById('modalBannerTitle'),
    modalBannerMono: document.getElementById('modalBannerMono'),
    modalDescription: document.getElementById('modalDescription'),
    modalTimeline: document.getElementById('modalTimeline'),
    modalSpeakers: document.getElementById('modalSpeakers'),
    modalCapacityRatio: document.getElementById('modalCapacityRatio'),
    modalCapacityFill: document.getElementById('modalCapacityFill'),
    modalBookmarkBtn: document.getElementById('modalBookmarkBtn'),
    modalBookmarkText: document.getElementById('modalBookmarkText'),
    modalShareBtn: document.getElementById('modalShareBtn'),
    modalCalendarBtn: document.getElementById('modalCalendarBtn'),
    modalRegisterBtn: document.getElementById('modalRegisterBtn'),

    // Registration Modal Elements
    registerModal: document.getElementById('registerModal'),
    closeRegisterModalBtn: document.getElementById('closeRegisterModalBtn'),
    rsvpForm: document.getElementById('rsvpForm'),
    cancelRsvpBtn: document.getElementById('cancelRsvpBtn'),
    ticketResultView: document.getElementById('ticketResultView'),
    ticketCode: document.getElementById('ticketCode'),
    ticketEventTitle: document.getElementById('ticketEventTitle'),
    ticketVenue: document.getElementById('ticketVenue'),
    ticketStudentName: document.getElementById('ticketStudentName'),
    ticketStudentId: document.getElementById('ticketStudentId'),
    ticketDate: document.getElementById('ticketDate'),
    ticketSeat: document.getElementById('ticketSeat'),
    printPassBtn: document.getElementById('printPassBtn'),
    closeTicketViewBtn: document.getElementById('closeTicketViewBtn'),

    // Submit Event Modal Elements
    submitModal: document.getElementById('submitModal'),
    closeSubmitModalBtn: document.getElementById('closeSubmitModalBtn'),
    cancelSubmitBtn: document.getElementById('cancelSubmitBtn'),
    proposeEventForm: document.getElementById('proposeEventForm'),
    newEventDate: document.getElementById('newEventDate')
  };

  // =========================================================================
  // INITIALIZATION
  // =========================================================================
  function init() {
    loadTheme();
    loadBookmarks();
    loadEvents();
    initClock();
    setupEventListeners();
    render();

    // Default min date for submit form to today
    if (elements.newEventDate) {
      elements.newEventDate.value = getRelativeDate(1);
      elements.newEventDate.min = getRelativeDate(0);
    }
  }

  // =========================================================================
  // DATA PERSISTENCE & LOADING
  // =========================================================================
  function loadEvents() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EVENTS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          state.events = parsed;
          return;
        }
      }
    } catch (e) {
      console.warn('Could not read stored events:', e);
    }
    // Fallback to initial comprehensive list
    state.events = [...INITIAL_EVENTS];
    saveEventsToStorage();
  }

  function saveEventsToStorage() {
    try {
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(state.events));
    } catch (e) {
      console.warn('Could not persist events:', e);
    }
  }

  function loadBookmarks() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      if (saved) {
        state.bookmarks = new Set(JSON.parse(saved));
      }
    } catch (e) {
      state.bookmarks = new Set();
    }
    updateBookmarkBadge();
  }

  function saveBookmarks() {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(Array.from(state.bookmarks)));
    } catch (e) {
      console.warn('Failed saving bookmarks:', e);
    }
    updateBookmarkBadge();
  }

  function toggleBookmark(eventId, eventObj) {
    if (state.bookmarks.has(eventId)) {
      state.bookmarks.delete(eventId);
      showToast('Removed from your saved schedule');
    } else {
      state.bookmarks.add(eventId);
      const title = eventObj ? eventObj.title : 'Event';
      showToast(`Saved to your schedule: "${title.slice(0, 28)}..."`);
    }
    saveBookmarks();
    render();

    // Update modal button if open
    if (state.selectedEventId === eventId) {
      updateModalBookmarkState();
    }
  }

  function updateBookmarkBadge() {
    if (elements.savedCountBadge) {
      elements.savedCountBadge.textContent = state.bookmarks.size;
    }
  }

  // =========================================================================
  // THEME MANAGEMENT (MONOCHROME DARK / LIGHT)
  // =========================================================================
  function loadTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
    setTheme(savedTheme);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    showToast(`Switched to ${next.toUpperCase()} MONOCHROME theme`);
  }

  // =========================================================================
  // LIVE CLOCK
  // =========================================================================
  function initClock() {
    function update() {
      const d = new Date();
      if (elements.liveClock) {
        elements.liveClock.textContent = d.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
      }
    }
    update();
    setInterval(update, 1000);
  }

  // =========================================================================
  // FILTERING, SEARCHING & SORTING
  // =========================================================================
  function getFilteredEvents() {
    const todayStr = getRelativeDate(0);
    const tomorrowStr = getRelativeDate(1);
    
    // Calculate weekend dates
    const currentDay = now.getDay();
    const daysUntilSaturday = (6 - currentDay + 7) % 7;
    const saturdayStr = getRelativeDate(daysUntilSaturday);
    const sundayStr = getRelativeDate(daysUntilSaturday + 1);

    return state.events.filter(event => {
      // 1. Saved filter
      if (state.savedOnly && !state.bookmarks.has(event.id)) {
        return false;
      }

      // 2. Category filter
      if (state.activeCategory !== 'all' && event.category !== state.activeCategory) {
        return false;
      }

      // 3. Search query
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const inTitle = event.title.toLowerCase().includes(q);
        const inClub = event.club.toLowerCase().includes(q);
        const inVenue = event.venue.toLowerCase().includes(q);
        const inDesc = event.description.toLowerCase().includes(q);
        const inTags = event.tags && event.tags.some(t => t.toLowerCase().includes(q));
        const inSpeakers = event.speakers && event.speakers.some(s => s.name.toLowerCase().includes(q) || s.role.toLowerCase().includes(q));

        if (!inTitle && !inClub && !inVenue && !inDesc && !inTags && !inSpeakers) {
          return false;
        }
      }

      // 4. Timeframe filter
      if (state.timeframeFilter === 'today') {
        if (event.date !== todayStr) return false;
      } else if (state.timeframeFilter === 'tomorrow') {
        if (event.date !== tomorrowStr) return false;
      } else if (state.timeframeFilter === 'this-week') {
        const diff = (new Date(event.date) - new Date(todayStr)) / (1000 * 60 * 60 * 24);
        if (diff < 0 || diff > 7) return false;
      } else if (state.timeframeFilter === 'weekend') {
        if (event.date !== saturdayStr && event.date !== sundayStr) {
          // Check if day of week is sat or sun
          const d = new Date(event.date + 'T00:00:00');
          if (d.getDay() !== 0 && d.getDay() !== 6) return false;
        }
      }

      return true;
    }).sort((a, b) => {
      // Sort logic
      if (state.sortBy === 'date-asc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (state.sortBy === 'date-desc') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (state.sortBy === 'popular') {
        return (b.registered || 0) - (a.registered || 0);
      } else if (state.sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }

  // =========================================================================
  // RENDERING
  // =========================================================================
  function render() {
    updateMetricsAndCounts();
    const filtered = getFilteredEvents();

    if (elements.resultsCount) {
      elements.resultsCount.textContent = filtered.length;
    }

    renderActiveFilterChips();

    // Toggle Empty State
    if (filtered.length === 0) {
      elements.eventsContainer.innerHTML = '';
      elements.emptyState.hidden = false;
      return;
    }

    elements.emptyState.hidden = true;
    renderEventCards(filtered);
  }

  function renderEventCards(eventsList) {
    const todayStr = getRelativeDate(0);

    const cardsHtml = eventsList.map(ev => {
      const dateInfo = formatDisplayDate(ev.date);
      const isBookmarked = state.bookmarks.has(ev.id);
      const isToday = ev.date === todayStr;
      const statusClass = ev.status === 'LIVE NOW' ? 'status-badge live' : 'status-badge';

      return `
        <article 
          class="event-card" 
          data-id="${ev.id}" 
          role="button" 
          tabindex="0" 
          aria-label="View details for ${escapeHtml(ev.title)}"
        >
          <!-- Card Header Strip -->
          <div class="card-header-strip">
            <span class="category-tag">[ ${escapeHtml(ev.category.toUpperCase())} ]</span>
            <div class="card-top-actions">
              <span class="${statusClass}">${escapeHtml(ev.status || (isToday ? 'TODAY' : 'UPCOMING'))}</span>
              <button 
                type="button" 
                class="bookmark-icon-btn ${isBookmarked ? 'bookmarked' : ''}" 
                data-action="bookmark" 
                data-id="${ev.id}" 
                title="${isBookmarked ? 'Remove bookmark' : 'Save event'}"
                aria-label="${isBookmarked ? 'Remove bookmark' : 'Save event'}"
              >
                <svg class="icon" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Card Body -->
          <div class="card-body">
            <div class="card-date-row">
              <div class="date-box">
                <span class="date-month">${dateInfo.month}</span>
                <span class="date-day">${dateInfo.dateNum}</span>
              </div>
              <span class="time-slot">${escapeHtml(ev.time)}</span>
            </div>

            <h3 class="card-title">${escapeHtml(ev.title)}</h3>
            <div class="card-club">BY: ${escapeHtml(ev.club)}</div>
            <p class="card-desc">${escapeHtml(ev.summary || ev.description)}</p>

            <div class="card-venue-row">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${escapeHtml(ev.venue)}</span>
            </div>
          </div>

          <!-- Card Footer Strip -->
          <div class="card-footer-bar">
            <span class="attendee-indicator">${ev.registered || 0} / ${ev.capacity} Attendees</span>
            <span class="card-cta-link">
              <span>EXPLORE</span>
              <span class="arrow-icon" aria-hidden="true">→</span>
            </span>
          </div>
        </article>
      `;
    }).join('');

    elements.eventsContainer.innerHTML = cardsHtml;
  }

  function updateMetricsAndCounts() {
    const todayStr = getRelativeDate(0);
    const total = state.events.length;
    const todayCount = state.events.filter(e => e.date === todayStr).length;

    // Unique clubs
    const clubs = new Set(state.events.map(e => e.club));

    if (elements.statTotalEvents) elements.statTotalEvents.textContent = total;
    if (elements.statTodayEvents) elements.statTodayEvents.textContent = todayCount;
    if (elements.statActiveClubs) elements.statActiveClubs.textContent = clubs.size;
    if (elements.statFreeEntry) elements.statFreeEntry.textContent = total;

    // Category pills counts
    if (elements.countCatAll) elements.countCatAll.textContent = total;
    if (elements.countCatTech) elements.countCatTech.textContent = state.events.filter(e => e.category === 'Technology').length;
    if (elements.countCatCulture) elements.countCatCulture.textContent = state.events.filter(e => e.category === 'Culture').length;
    if (elements.countCatWorkshop) elements.countCatWorkshop.textContent = state.events.filter(e => e.category === 'Workshop').length;
    if (elements.countCatSports) elements.countCatSports.textContent = state.events.filter(e => e.category === 'Sports').length;
    if (elements.countCatAcademics) elements.countCatAcademics.textContent = state.events.filter(e => e.category === 'Academics').length;
    if (elements.countCatSocial) elements.countCatSocial.textContent = state.events.filter(e => e.category === 'Social').length;
  }

  function renderActiveFilterChips() {
    const chips = [];

    if (state.activeCategory !== 'all') {
      chips.push({ type: 'category', label: `Category: ${state.activeCategory}` });
    }
    if (state.searchQuery) {
      chips.push({ type: 'search', label: `Search: "${state.searchQuery}"` });
    }
    if (state.timeframeFilter !== 'all') {
      chips.push({ type: 'timeframe', label: `Time: ${state.timeframeFilter}` });
    }
    if (state.savedOnly) {
      chips.push({ type: 'saved', label: 'Saved Events Only' });
    }

    if (chips.length > 0) {
      elements.activeFiltersBar.hidden = false;
      elements.filterChipsContainer.innerHTML = chips.map(c => `
        <span class="filter-chip">
          <span>${escapeHtml(c.label)}</span>
          <button type="button" class="chip-remove" data-remove-filter="${c.type}" aria-label="Remove filter">✕</button>
        </span>
      `).join('');
    } else {
      elements.activeFiltersBar.hidden = true;
      elements.filterChipsContainer.innerHTML = '';
    }
  }

  // =========================================================================
  // EVENT DETAILS MODAL (NATIVE <dialog> WITH BACKDROP)
  // =========================================================================
  function openEventDetails(eventId) {
    const event = state.events.find(e => e.id === eventId);
    if (!event) return;

    state.selectedEventId = eventId;
    const dateInfo = formatDisplayDate(event.date);

    // Populate modal fields
    elements.modalCategory.textContent = `[ ${event.category.toUpperCase()} ]`;
    elements.modalStatusChip.textContent = event.status || 'UPCOMING';
    elements.modalEventCode.textContent = `#${event.id.toUpperCase()}`;
    elements.modalEventTitle.textContent = event.title;
    elements.modalClub.textContent = `ORGANIZED BY: ${event.club.toUpperCase()}`;

    elements.modalDate.textContent = dateInfo.full;
    elements.modalTime.textContent = event.time;
    elements.modalVenue.textContent = `${event.venue} (Code: ${event.hallCode || 'CAMPUS'})`;
    elements.modalFee.textContent = event.fee || 'FREE ENTRY';

    elements.modalBannerCat.textContent = `CAMPUS PULSE // ${event.category.toUpperCase()}`;
    elements.modalBannerTitle.textContent = event.title;
    elements.modalBannerMono.textContent = `OFFICIAL COLLEGE DIRECTORY // HALL: ${event.hallCode || 'MAIN'}`;

    elements.modalDescription.textContent = event.description;

    // Populate Timeline / Agenda
    if (event.agenda && event.agenda.length > 0) {
      elements.modalTimeline.innerHTML = event.agenda.map(item => `
        <div class="timeline-item">
          <span class="timeline-time">${escapeHtml(item.time)}</span>
          <div class="timeline-title">${escapeHtml(item.title)}</div>
          <div class="timeline-desc">${escapeHtml(item.desc || '')}</div>
        </div>
      `).join('');
      document.getElementById('modalAgendaSection').hidden = false;
    } else {
      document.getElementById('modalAgendaSection').hidden = true;
    }

    // Populate Speakers
    if (event.speakers && event.speakers.length > 0) {
      elements.modalSpeakers.innerHTML = event.speakers.map(s => {
        const initials = s.name.split(' ').map(n => n[0]).join('').slice(0, 2);
        return `
          <div class="speaker-card">
            <div class="speaker-avatar">${initials}</div>
            <div class="speaker-info">
              <span class="speaker-name">${escapeHtml(s.name)}</span>
              <span class="speaker-role">${escapeHtml(s.role)}</span>
            </div>
          </div>
        `;
      }).join('');
      document.getElementById('modalSpeakersSection').hidden = false;
    } else {
      document.getElementById('modalSpeakersSection').hidden = true;
    }

    // Capacity progress
    const pct = Math.min(100, Math.round(((event.registered || 0) / event.capacity) * 100));
    elements.modalCapacityRatio.textContent = `${event.registered || 0} / ${event.capacity} (${pct}%) Registered`;
    elements.modalCapacityFill.style.width = `${pct}%`;

    // Bookmark state
    updateModalBookmarkState();

    // Show native dialog modal
    if (elements.eventDetailsModal.showModal) {
      elements.eventDetailsModal.showModal();
    } else {
      elements.eventDetailsModal.setAttribute('open', '');
    }
  }

  function updateModalBookmarkState() {
    const isSaved = state.bookmarks.has(state.selectedEventId);
    if (elements.modalBookmarkBtn) {
      if (isSaved) {
        elements.modalBookmarkBtn.classList.add('active');
        elements.modalBookmarkText.textContent = 'Saved in Schedule ✓';
      } else {
        elements.modalBookmarkBtn.classList.remove('active');
        elements.modalBookmarkText.textContent = 'Save to My Schedule';
      }
    }
  }

  function closeEventDetails() {
    if (elements.eventDetailsModal.close) {
      elements.eventDetailsModal.close();
    } else {
      elements.eventDetailsModal.removeAttribute('open');
    }
    state.selectedEventId = null;
  }

  // =========================================================================
  // RSVP & DIGITAL TICKET GENERATOR
  // =========================================================================
  function openRegisterModal() {
    const event = state.events.find(e => e.id === state.selectedEventId);
    if (!event) return;

    elements.rsvpForm.hidden = false;
    elements.ticketResultView.hidden = true;
    elements.registerModalTitle.textContent = `RESERVE PASS // ${event.category.toUpperCase()}`;

    // Reset form fields
    elements.rsvpForm.reset();

    if (elements.registerModal.showModal) {
      elements.registerModal.showModal();
    } else {
      elements.registerModal.setAttribute('open', '');
    }
  }

  function closeRegisterModal() {
    if (elements.registerModal.close) {
      elements.registerModal.close();
    } else {
      elements.registerModal.removeAttribute('open');
    }
  }

  function handleRsvpSubmit(e) {
    e.preventDefault();
    const event = state.events.find(e => e.id === state.selectedEventId);
    if (!event) return;

    const studentName = document.getElementById('rsvpStudentName').value.trim();
    const studentId = document.getElementById('rsvpStudentId').value.trim();
    const email = document.getElementById('rsvpEmail').value.trim();
    const department = document.getElementById('rsvpDepartment').value;

    if (!studentName || !studentId || !email) {
      showToast('Please fill out all required ticket fields');
      return;
    }

    // Increment registered count
    event.registered = (event.registered || 0) + 1;
    saveEventsToStorage();

    // Generate random pass code & seat
    const passCode = 'PASS-' + Math.floor(10000 + Math.random() * 90000);
    const zones = ['ZONE A', 'ZONE B', 'TIER 1', 'BALCONY', 'MAIN FLOOR'];
    const randomZone = zones[Math.floor(Math.random() * zones.length)];
    const randomRow = 'ROW ' + (Math.floor(Math.random() * 15) + 1);

    // Populate Ticket Pass
    elements.ticketCode.textContent = `#${passCode}`;
    elements.ticketEventTitle.textContent = event.title;
    elements.ticketVenue.textContent = `${event.venue} • ${event.time}`;
    elements.ticketStudentName.textContent = studentName.toUpperCase();
    elements.ticketStudentId.textContent = studentId.toUpperCase();
    elements.ticketDate.textContent = formatDisplayDate(event.date).full;
    elements.ticketSeat.textContent = `${randomZone} // ${randomRow}`;

    // Switch view to ticket
    elements.rsvpForm.hidden = true;
    elements.ticketResultView.hidden = false;

    showToast(`Entry pass confirmed for ${studentName}!`);
    render();
  }

  // =========================================================================
  // SUBMIT NEW EVENT FORM
  // =========================================================================
  function openSubmitModal() {
    elements.proposeEventForm.reset();
    if (elements.newEventDate) {
      elements.newEventDate.value = getRelativeDate(1);
    }

    if (elements.submitModal.showModal) {
      elements.submitModal.showModal();
    } else {
      elements.submitModal.setAttribute('open', '');
    }
  }

  function closeSubmitModal() {
    if (elements.submitModal.close) {
      elements.submitModal.close();
    } else {
      elements.submitModal.removeAttribute('open');
    }
  }

  function handleProposeEventSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('newEventTitle').value.trim();
    const category = document.getElementById('newEventCategory').value;
    const club = document.getElementById('newEventClub').value.trim();
    const venue = document.getElementById('newEventVenue').value.trim();
    const date = document.getElementById('newEventDate').value;
    const time = document.getElementById('newEventTime').value.trim();
    const desc = document.getElementById('newEventDesc').value.trim();
    const speaker = document.getElementById('newEventSpeaker').value.trim();
    const capacity = parseInt(document.getElementById('newEventCapacity').value, 10) || 100;

    if (!title || !club || !venue || !date || !time || !desc) {
      showToast('Please fill in all mandatory event details.');
      return;
    }

    const newId = 'ev-' + (Date.now().toString().slice(-4));
    const newEvent = {
      id: newId,
      title: title.toUpperCase(),
      category: category,
      club: club,
      date: date,
      time: time,
      venue: venue,
      hallCode: 'CAMPUS',
      fee: 'FREE FOR STUDENTS',
      capacity: capacity,
      registered: 1,
      status: 'UPCOMING',
      summary: desc.slice(0, 160) + (desc.length > 160 ? '...' : ''),
      description: desc,
      agenda: [
        { time: time.split('–')[0]?.trim() || '02:00 PM', title: 'Opening & Welcome', desc: 'Introductions by organizing club' },
        { time: 'TBD', title: 'Main Session & Activities', desc: 'Core track presentation' }
      ],
      speakers: speaker ? [{ name: speaker, role: 'Lead Speaker / Host' }] : [],
      tags: [category.toLowerCase(), 'student-initiative', 'campus-life']
    };

    // Prepend to event list so it appears right away
    state.events.unshift(newEvent);
    saveEventsToStorage();
    closeSubmitModal();

    showToast(`Published: "${newEvent.title.slice(0, 24)}..."`);
    render();
  }

  // =========================================================================
  // CALENDAR (.ICS) FILE GENERATION
  // =========================================================================
  function downloadIcsCalendar(event) {
    if (!event) return;

    const startDate = event.date.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//CampusPulse//StudentEvents//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}@campuspulse.college.edu`,
      `DTSTAMP:${startDate}T090000Z`,
      `DTSTART:${startDate}T090000Z`,
      `DTEND:${startDate}T170000Z`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.summary || event.description}`,
      `LOCATION:${event.venue}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${event.id}-calendar-invite.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Downloaded .ics calendar invite');
  }

  // =========================================================================
  // TOAST NOTIFICATIONS
  // =========================================================================
  function showToast(message) {
    if (!elements.toastHub) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="pulse-dot"></span>
      <span>${escapeHtml(message)}</span>
    `;

    elements.toastHub.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  // =========================================================================
  // UTILITY: ESCAPE HTML
  // =========================================================================
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // =========================================================================
  // EVENT LISTENERS SETUP
  // =========================================================================
  function setupEventListeners() {
    // 1. Search Bar
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      elements.clearSearchBtn.hidden = state.searchQuery.length === 0;
      render();
    });

    elements.clearSearchBtn.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.clearSearchBtn.hidden = true;
      elements.searchInput.focus();
      render();
    });

    // Keyboard shortcut '/' to search
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== elements.searchInput) {
        if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          elements.searchInput.focus();
        }
      }
    });

    // 2. Category Tabs
    elements.catPills.forEach(pill => {
      pill.addEventListener('click', () => {
        elements.catPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.activeCategory = pill.dataset.category || 'all';
        render();
      });
    });

    // 3. Timeframe Dropdown
    elements.dateFilterSelect.addEventListener('change', (e) => {
      state.timeframeFilter = e.target.value;
      render();
    });

    // 4. Sort Dropdown
    elements.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      render();
    });

    // 5. View Switch (Grid / List)
    elements.viewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.viewMode = btn.dataset.view;

        if (state.viewMode === 'list') {
          elements.eventsContainer.classList.remove('view-grid');
          elements.eventsContainer.classList.add('view-list');
        } else {
          elements.eventsContainer.classList.remove('view-list');
          elements.eventsContainer.classList.add('view-grid');
        }
      });
    });

    // 6. Saved Events Quick Filter
    elements.savedFilterBtn.addEventListener('click', () => {
      state.savedOnly = !state.savedOnly;
      elements.savedFilterBtn.classList.toggle('active', state.savedOnly);
      render();
      if (state.savedOnly) {
        showToast(`Showing ${state.bookmarks.size} saved event(s)`);
      }
    });

    // 7. Show Only Today Action
    elements.showTodayOnlyBtn.addEventListener('click', () => {
      elements.dateFilterSelect.value = 'today';
      state.timeframeFilter = 'today';
      render();
    });

    // 8. Reset All Filters
    elements.resetAllFiltersBtn.addEventListener('click', resetAllFilters);
    elements.emptyResetBtn.addEventListener('click', resetAllFilters);

    function resetAllFilters() {
      state.activeCategory = 'all';
      state.searchQuery = '';
      state.timeframeFilter = 'all';
      state.savedOnly = false;
      elements.searchInput.value = '';
      elements.clearSearchBtn.hidden = true;
      elements.dateFilterSelect.value = 'all';
      elements.savedFilterBtn.classList.remove('active');
      elements.catPills.forEach(p => {
        p.classList.toggle('active', p.dataset.category === 'all');
      });
      render();
      showToast('All filters have been reset');
    }

    // 9. Remove individual filter chips
    elements.activeFiltersBar.addEventListener('click', (e) => {
      const chipBtn = e.target.closest('[data-remove-filter]');
      if (!chipBtn) return;
      const type = chipBtn.dataset.removeFilter;

      if (type === 'category') {
        state.activeCategory = 'all';
        elements.catPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
      } else if (type === 'search') {
        state.searchQuery = '';
        elements.searchInput.value = '';
        elements.clearSearchBtn.hidden = true;
      } else if (type === 'timeframe') {
        state.timeframeFilter = 'all';
        elements.dateFilterSelect.value = 'all';
      } else if (type === 'saved') {
        state.savedOnly = false;
        elements.savedFilterBtn.classList.remove('active');
      }
      render();
    });

    // 10. Event Cards Delegate Click (Click to open details OR bookmark)
    elements.eventsContainer.addEventListener('click', (e) => {
      const bookmarkBtn = e.target.closest('[data-action="bookmark"]');
      if (bookmarkBtn) {
        e.stopPropagation();
        const eventId = bookmarkBtn.dataset.id;
        const eventObj = state.events.find(ev => ev.id === eventId);
        toggleBookmark(eventId, eventObj);
        return;
      }

      const card = e.target.closest('.event-card');
      if (card) {
        const eventId = card.dataset.id;
        openEventDetails(eventId);
      }
    });

    // Enter / Space accessibility on cards
    elements.eventsContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.event-card');
        if (card && e.target === card) {
          e.preventDefault();
          openEventDetails(card.dataset.id);
        }
      }
    });

    // 11. Modal Close Buttons
    elements.closeDetailsModalBtn.addEventListener('click', closeEventDetails);
    elements.eventDetailsModal.addEventListener('click', (e) => {
      // Backdrop click closes modal
      if (e.target === elements.eventDetailsModal) {
        closeEventDetails();
      }
    });

    // Modal Actions: Bookmark, Share, Calendar, Register
    elements.modalBookmarkBtn.addEventListener('click', () => {
      if (state.selectedEventId) {
        const eventObj = state.events.find(ev => ev.id === state.selectedEventId);
        toggleBookmark(state.selectedEventId, eventObj);
      }
    });

    elements.modalShareBtn.addEventListener('click', () => {
      const shareUrl = window.location.href.split('#')[0] + `#event-${state.selectedEventId}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl)
          .then(() => showToast('Event link copied to clipboard!'))
          .catch(() => showToast('Link ready: ' + shareUrl));
      } else {
        showToast('Link ready: ' + shareUrl);
      }
    });

    elements.modalCalendarBtn.addEventListener('click', () => {
      const event = state.events.find(e => e.id === state.selectedEventId);
      downloadIcsCalendar(event);
    });

    elements.modalRegisterBtn.addEventListener('click', openRegisterModal);

    // Registration Modal
    elements.closeRegisterModalBtn.addEventListener('click', closeRegisterModal);
    elements.cancelRsvpBtn.addEventListener('click', closeRegisterModal);
    elements.closeTicketViewBtn.addEventListener('click', closeRegisterModal);
    elements.registerModal.addEventListener('click', (e) => {
      if (e.target === elements.registerModal) {
        closeRegisterModal();
      }
    });
    elements.rsvpForm.addEventListener('submit', handleRsvpSubmit);
    elements.printPassBtn.addEventListener('click', () => window.print());

    // Submit Event Modal
    elements.openSubmitModalBtn.addEventListener('click', openSubmitModal);
    elements.footerSubmitBtn.addEventListener('click', openSubmitModal);
    elements.closeSubmitModalBtn.addEventListener('click', closeSubmitModal);
    elements.cancelSubmitBtn.addEventListener('click', closeSubmitModal);
    elements.submitModal.addEventListener('click', (e) => {
      if (e.target === elements.submitModal) {
        closeSubmitModal();
      }
    });
    elements.proposeEventForm.addEventListener('submit', handleProposeEventSubmit);

    // Theme Toggle Button
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Start app
  document.addEventListener('DOMContentLoaded', init);

})();
