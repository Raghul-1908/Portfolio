# Raghul Sekar — Portfolio

A single-page personal portfolio built with plain HTML, CSS, and JavaScript — no framework, no build step. Open `index.html` and it runs.

**Live sections:** Home · About · Skills · Experience · Projects · Education · Blog · Contact

## Tech stack

- HTML5 / CSS3 (custom properties for theming) / vanilla JavaScript
- [Font Awesome 5](https://fontawesome.com/) for icons (loaded via CDN)
- Google Fonts: Poppins (body) + JetBrains Mono (terminal/code accents)
- [Formspree](https://formspree.io/) for the contact form (no backend required)

## Project structure

```
.
├── index.html          # All page content and section markup
├── app.js              # Section switching, theme toggle, boot loading screen
├── styles/
│   ├── styles.css       # Compiled CSS — this is what index.html actually loads
│   ├── styles.scss       # Sass source (kept for reference / future edits)
│   └── _media.scss       # Responsive breakpoints (Sass source)
└── resume.pdf           # Your résumé — add this file yourself (see below)
```

> **Note:** `styles.css` is hand-maintained directly and is the file the site
> actually uses. The `.scss` files are the original source layout; if you edit
> them, you'll need a Sass compiler to regenerate `styles.css`, or just keep
> editing `styles.css` by hand (simplest option, no tooling required).

## Running locally

No build step needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally for a cleaner experience (recommended, avoids some browser
  file:// restrictions):
  ```bash
  npx serve .
  # or
  python3 -m http.server 8000
  ```

## Adding your résumé

Both "Download CV" buttons link to `resume.pdf` in the project root. Drop your
actual résumé file in as `resume.pdf` (same folder as `index.html`) and the
buttons will work immediately — no code changes needed.

## Editing content

Everything is in `index.html` — there's no separate config file. To update:

- **Projects** — edit the `.portfolio-item` blocks inside `<section id="portfolio">`.
- **Skills** — edit the `.skill-category` blocks inside `<section id="about">`;
  each skill's fill level is set via inline `style="width: X%"` on the bar.
- **Experience / Education** — edit the `.timeline-item` blocks inside their
  respective `<section>`.
- **Blog** — currently three "Coming Soon" placeholder cards inside
  `<section id="blog">`. Replace the icon/title/text and remove the
  `soon-tag` span once you have real posts.
- **Contact form** — the form posts to your Formspree endpoint, set in the
  `action` attribute of the `<form>` tag in `<section id="contact">`.

## Theming

Colors are controlled by CSS custom properties at the top of `styles/styles.css`:

```css
:root {
  --color-primary: ...;   /* page background */
  --color-secondary: ...; /* main accent color */
  --color-accent-2: ...;  /* secondary accent (loading screen, highlights) */
  --color-grey-5: ...;    /* card/panel background */
  --color-grey-6: ...;    /* darker panel background (console, loader) */
  ...
}
```

`.light-mode` (toggled by the sun/moon button, bottom-right) defines the same
variables for light mode. Change these values to retheme the entire site —
everything references the variables, so there are no hardcoded colors to hunt
down elsewhere.

## Loading screen

On page load, a terminal-style "boot sequence" types out a few status lines
before fading into the site (`app.js`, bottom section). It respects
`prefers-reduced-motion` and always dismisses within 3.5 seconds even if
something goes wrong, so it never blocks access to the site.

## Deploying

This is a static site — any static host works:

- **Vercel / Netlify** — drag-and-drop the folder or connect a GitHub repo.
- **GitHub Pages** — push to a repo and enable Pages on the `main` branch.

No environment variables or build commands are required.
