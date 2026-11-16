# Sentrim Lake Elementaita Workshops 2026 - Online Digital Programs

Official online mobile programs and agendas for two concurrent political leadership cohort trainings held at **Sentrim Lake Elementaita, Kenya** from **16 – 20 November 2026**.

Hosted and organized by **The Oslo Center (TOC)** with support from the **Christian Democratic International Centre (KIC)**.

---

## 🌐 Live Online Programs & Links

- **Main Hub & Portal**: [https://elementaita-programs-2026.pages.dev/](https://elementaita-programs-2026.pages.dev/)
- **WYDE Youth Program**: [https://elementaita-programs-2026.pages.dev/wyde](https://elementaita-programs-2026.pages.dev/wyde)
- **EWIP Kenya Program**: [https://elementaita-programs-2026.pages.dev/ewip](https://elementaita-programs-2026.pages.dev/ewip)
- **Printable Table Standees & QR Signs**: [https://elementaita-programs-2026.pages.dev/qr-print.html](https://elementaita-programs-2026.pages.dev/qr-print.html)
- **GitHub Pages Fallback**: [https://pizzel.github.io/elementaita-programs-2026/](https://pizzel.github.io/elementaita-programs-2026/)

---

## 📱 QR Codes for Attendees

Pre-generated high-resolution QR codes (1200x1200px PNG + scalable vector SVG) are available in `assets/qr/`:

| Program | Direct Link | High-Res PNG | Vector SVG |
|---|---|---|---|
| **Main Workshop Portal** | `index.html` | [`assets/qr/portal-qr.png`](assets/qr/portal-qr.png) | [`assets/qr/portal-qr.svg`](assets/qr/portal-qr.svg) |
| **WYDE Youth: Navigating the Ballot** | `wyde.html` | [`assets/qr/wyde-qr.png`](assets/qr/wyde-qr.png) | [`assets/qr/wyde-qr.svg`](assets/qr/wyde-qr.svg) |
| **EWIP Kenya: Empowering Women in Politics** | `ewip.html` | [`assets/qr/ewip-qr.png`](assets/qr/ewip-qr.png) | [`assets/qr/ewip-qr.svg`](assets/qr/ewip-qr.svg) |

---

## 🎯 Features

1. **Dual Program Switcher**: Instant zero-lag toggle between WYDE Youth and EWIP Kenya agendas.
2. **Day-by-Day Interactive Tabs**: Filter by Day 1 (16 Nov), Day 2 (17 Nov), Day 3 (18 Nov), Day 4 (19 Nov), and Day 5 (20 Nov) or view all days.
3. **Real-time Search & Filter**: Search sessions by topic, trainer/consultant name, or location.
4. **"Add to Calendar" (.ics)**: 1-click download of `.ics` calendar invites for each session.
5. **Trainer & Consultant Directory**: Profiles for Asha Mwilu, Barbara Malowa, George Adulu, Stephen Maribie, Phoebe Mungai, Salome Oyugi, and TOC team leads.
6. **Mobile-First & Offline PWA**: Built with Service Worker caching (`sw.js`) and Web Manifest (`manifest.json`) so it works even when connectivity fluctuates at Lake Elementaita.
7. **Print Optimized**: Print-friendly CSS formats the agenda cleanly for paper handouts or table tents.

---

## 📁 Repository Structure

```text
├── index.html                 # Main unified portal
├── wyde.html                  # Standalone WYDE Youth page
├── ewip.html                  # Standalone EWIP Kenya page
├── qr-print.html              # Printable QR table standees / signs
├── data.js                    # Complete workshop syllabus & speakers
├── sw.js                      # Offline service worker
├── manifest.json              # Web App manifest (PWA)
├── assets/
│   ├── css/
│   │   └── style.css          # Design system & mobile styles
│   ├── js/
│   │   └── app.js             # Interactive logic & calendar generation
│   ├── images/
│   │   ├── wyde-header-banner.png  # Official WYDE partner banner
│   │   ├── ewip-logo.png           # Official EWIP logo
│   │   └── kic-logo.png            # Official KIC logo
│   └── qr/
│       ├── portal-qr.png / .svg    # QR code for main portal
│       ├── wyde-qr.png / .svg      # QR code for WYDE
│       └── ewip-qr.png / .svg      # QR code for EWIP
```
