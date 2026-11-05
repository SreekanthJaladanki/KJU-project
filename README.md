# CAMPUS PULSE // Collegiate Events Directory

A modern, high-contrast **Black & White** web platform for students to explore, filter, bookmark, and register for events happening across the campus.

---

## ✦ Key Features

- **Strict Black & White Aesthetic**:
  - High-contrast Swiss-style editorial typography, brutalist borders, and clean monochrome geometry.
  - Supports both **Midnight Monochrome (Dark)** and **Paper Monochrome (Light)** modes via the header toggle.
- **Interactive Event Cards**:
  - Clear date badges, category tags (`[ TECH ]`, `[ CULTURAL ]`, `[ WORKSHOP ]`, `[ SPORTS ]`, `[ ACADEMICS ]`, `[ SOCIAL ]`).
  - Live status indicators (`LIVE NOW`, `UPCOMING`, `FILLING FAST`).
  - Venue locations with campus hall codes and attendee capacity progress.
  - Quick bookmarking to save events to personal schedules (saved in `localStorage`).
- **Comprehensive Event Details Modal**:
  - Click any event to open a native accessible `<dialog>` modal with backdrop blur.
  - Complete agenda & timeline breakdown, speaker profiles, entry instructions, and venue details.
  - **Add to Calendar**: Generates an `.ics` file on demand for Apple Calendar, Google Calendar, or Outlook.
  - **Share Event**: Copies direct event links to clipboard with toast notification.
- **Digital Entry Pass & RSVP Generator**:
  - Instant RSVP reservation form for students.
  - Generates an authentic perforated **Monochrome College Entry Pass** complete with seat allocation, attendee roll number, and high-contrast digital QR code.
  - One-click print/download capability with dedicated `@media print` styling.
- **Search & Dynamic Filters**:
  - Instant search across title, club name, speakers, venues, and keywords with keyboard shortcut (`/`).
  - Filter by category pills, timeframe (`Happening Today`, `Tomorrow`, `This Week`, `This Weekend`).
  - Sorting by date, popularity, or title.
  - View switcher: Toggle between **Grid View** and **Compact List View**.
- **Propose / Submit Event**:
  - Club leads and student organizers can publish new events directly to the directory with instant validation and dynamic injection.

---

## ✦ File Structure

```
├── index.html     # Semantic, accessible HTML5 structure & native dialogs
├── styles.css     # Pure Black & White design system, transitions & print styles
├── app.js         # Reactive data layer, event filtering, RSVP & pass generation
└── README.md      # Documentation and overview
```

---

## ✦ Quick Start

You can view the page immediately by opening `index.html` in any web browser, or serve it locally:

```bash
# Using Python built-in server:
python3 -m http.server 8000
```

Then visit:
`http://localhost:8000`
