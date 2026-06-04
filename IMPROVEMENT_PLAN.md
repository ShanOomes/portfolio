# Portfolio Improvement Plan — Shan Oomes

Nine phases of two weeks each. Every phase = one reflection entry in your learning log.
If a phase slips, shift the rest by one cycle and update your SMARTER goal's "Readjust" section.

---

## Phase 1 (weeks 1–2): Foundation & Cleanup

**Goal:** Get the codebase into a clean, working state before building anything new.

The current site has several broken pieces left over from a previous project: `app.js` is referenced but doesn't exist, two jQuery AJAX calls hit `/data` and `/services` endpoints that never existed, and a `scrolling-image` scroll handler references an element that isn't in the HTML. These will cause silent errors for anyone visiting the site. Fix them first so every future phase builds on a solid base.

**Tasks**
- Remove the `<script defer src="app.js">` tag from `index.html` — the file doesn't exist.
- Delete the two dead jQuery AJAX blocks in `script.js` (the `/data` and `/services` calls).
- Remove the `scroll` event handler that references `scrolling-image`.
- Drop the jQuery dependency entirely once the AJAX calls are gone.
- Replace the deprecated `<marquee>` element with a pure CSS marquee animation.
- Fix the `filterProjects` function: change `display: 'block'` to `display: ''` so filtered items respect the flex layout.
- Change `<html lang="nl">` to `<html lang="en">` — the content is in English.

*Reflection prompt:* Which broken pieces did I find and fix, and what is the site able to do now that it couldn't do before I started?

---

## Phase 2 (weeks 3–4): Identity, SEO & Meta

**Goal:** Make the site correctly represent who you are — both to visitors and to search engines.

Right now the meta description reads "FIX biedt uitgebreide ICT-ondersteuning voor thuis…" — copy-pasted from a previous client project and never updated. Anyone sharing this page on LinkedIn will see that description in the preview. Fix it, then build out the full head section properly.

**Tasks**
- Replace the meta `description` and `keywords` with content about you as a Data Science & AI student.
- Add Open Graph tags (`og:title`, `og:description`, `og:image`) so the page previews correctly on LinkedIn, WhatsApp, and similar platforms.
- Add a `<link rel="canonical">` pointing to your live domain.
- Add or update `robots.txt` and a basic `sitemap.xml`.
- Move all remaining inline `style=""` attributes in `index.html` into `style.css`.
- Define CSS custom properties (`:root` variables) for your main colors, border-radius, and spacing — this will make every later phase much easier.

*Reflection prompt:* What did I write in the new meta description and About Me draft, and how does it compare to how I would have described myself six months ago?

---

## Phase 3 (weeks 5–6): Hero Section

**Goal:** Replace the generic stock photo hero with a first impression that is personal and memorable.

The current hero is an architect stock photo with "SHAN Portfolio" in white text. It communicates nothing specific. This is the first thing a recruiter sees — it should immediately tell them who you are and what you do.

**Tasks**
- Replace `w3images/architect.jpg` with a personal photo or a custom designed graphic.
- Add a short tagline below your name — one sentence that says what you do and what drives you.
- Add two call-to-action buttons: **View Projects** (smooth-scrolls to `#projects`) and **Download CV** (links to a PDF).
- Add a subtle animated introduction — cycling through role titles like "Data Scientist", "AI Developer", "ML Engineer" — using a CSS keyframe animation (no extra libraries).
- Replace the `document.write()` cross-pattern script (`index.html:93–109`) with static HTML elements — `document.write` is an outdated pattern that blocks rendering.

*Reflection prompt:* What does my hero section look like now, what choices did I make (photo, tagline, colours), and what was the hardest decision to make?

---

## Phase 4 (weeks 7–8): About Me & Skills Section

**Goal:** Give visitors a clear, human picture of who you are and what you can do.

The current About Me text is three solid paragraphs of dense prose. It reads like a cover letter, not a personal page. Alongside it, there is currently no dedicated skills section — a recruiter has to read every project to infer your technical stack.

**Tasks**
- Rewrite the About Me section: shorter, more direct, written for a non-academic reader. Aim for 150–200 words that feel like you talking, not a formal bio.
- Add a new `#skills` section between About and Projects.
- Organise skills into four categories: **Languages** (Python, SQL, PHP, JavaScript), **AI/ML** (PyTorch/TensorFlow, scikit-learn, Hugging Face, OpenCV), **Tools** (Git, Docker, Jupyter), **Other** (web development, robotics).
- Use visual chips (icon + label) in the style of the existing `.flex-item` component — not percentage bars, which tend to feel arbitrary.
- Add the Skills link to the top navbar and the sidebar.

*Reflection prompt:* Which skills did I list, and were there any I almost left out or almost included — and why?

---

## Phase 5 (weeks 9–10): Main Project Page — AIDA

**Goal:** Write a full, compelling project page for your most significant and current work.

**Tasks**
- Create a dedicated page (or large section) for AIDA: problem, approach, what you built, what you learned.
- Structure it as: **Context** → **Challenge** → **What I built** → **Key results** → **What I learned** — in that order.
- Keep the language accessible: explain it to someone outside academia who is technically literate but not an AI researcher.
- Add a link to a GitHub repository or code snippet where relevant.
- Avoid using the word "leveraged."

*Reflection prompt:* What is the AIDA page about now — what problem, what I built, what result — and what was the trickiest part to put into words?

---

## Phase 6 (weeks 11–12): Earlier Projects

**Goal:** Add full pages for your two earlier projects and let them show your growth over time.

The existing NLP and Plant Phenotyping project entries are already detailed — they just need visual improvements and a bit of editing. The Move Intermodal project is a stub with only two sentences; it needs to be completed or replaced.

**Tasks**
- Flesh out the **Move Intermodal** card to match the depth of the other two: problem, approach, findings, skills gained.
- Edit the **NPEC** and **Emotion Classification** project descriptions for readability — they are currently dense and academic. Break up long paragraphs, tighten sentences.
- Add a collapsible "expand / collapse" toggle on each project card so the page doesn't require excessive scrolling to reach the next project.
- Add a fourth filter button: **Robotics** — the NPEC project fits but isn't covered by the current filter set.
- Improve the filter button styling — currently unstyled browser-default buttons.

*Reflection prompt:* What projects are now on the site, what did I add or rewrite this phase, and what am I most satisfied with about how they're presented?

---

## Phase 7 (weeks 13–14): Visuals & Media

**Goal:** Make the project pages visually engaging with real screenshots, diagrams, and architecture visuals.

All three project cards are currently text-only. Visuals are the fastest way to communicate what you built and to make someone stop scrolling.

**Tasks**
- Add at least one visual to each project card: a screenshot, output example, architecture diagram, or result graphic.
- Add `loading="lazy"` to all images and convert to WebP format where possible.
- Add `srcset` to the hero image so it loads an appropriately sized version on smaller screens.
- Verify every image has a meaningful `alt` attribute (not just `"image"`).
- Test that all images render correctly on mobile.

*Reflection prompt:* What visuals did I add and where did they come from — and which one do I think works best and why?

---

## Phase 8 (weeks 15–16): Design Polish, Contact & Social

**Goal:** Make the site feel finished and professional, and make it possible for people to actually reach you.

The contact form currently submits to `/submit-form` — a backend endpoint that does not exist. If anyone fills it out and hits Send, nothing happens. Fix this before launch.

**Tasks**
- Wire the contact form to [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com) — free tiers, no backend needed.
- Add a visible success/error message after form submission rather than a silent redirect.
- Remove the hardcoded `height: 900px` on the contact section — replace with `min-height` and padding so it adapts to its content.
- Verify the reCAPTCHA is properly connected to your chosen form backend.
- Add social links (LinkedIn, GitHub) to the footer and as additional sidebar icons.
- Audit and improve typography: font sizes, line heights, heading hierarchy, and spacing consistency across all sections.
- Run a Lighthouse audit. Address any accessibility (WCAG AA) failures — colour contrast, focus states, and screen-reader labels.

*Reflection prompt:* What does the site look and feel like now compared to two phases ago, and is the contact form actually working — did I test it?

---

## Phase 9 (weeks 17–18): Feedback, Launch & What's Next

**Goal:** Get outside eyes on the site, make final improvements, and go public.

**Tasks**
- Ask two people — ideally one technical (peer or mentor) and one non-technical (family, recruiter, friend) — for honest feedback. Write down every piece before deciding what to act on.
- Proofread every page: spelling, grammar, broken links, and mobile layout.
- Wire up the existing `.hidden` / `.show` scroll animation classes in `style.css` — they are defined but never triggered because no IntersectionObserver applies them to the actual page sections.
- Add a dark mode toggle to the navbar that respects `prefers-color-scheme` by default. Use the CSS custom properties from Phase 2 to make this straightforward.
- Set up analytics (Google Analytics or [Plausible](https://plausible.io)) with event tracking on CV downloads, project link clicks, and contact form submissions.
- Share on LinkedIn with a short post about the process, not just the result.

*Reflection prompt:* What feedback did I get, what did I change as a result, and what does the live site look like now — what am I most proud of across the whole 18 weeks?

---

## Summary Table

| Phase | Weeks | Focus | Reflection prompt |
|-------|-------|-------|-------------------|
| 1 | 1–2 | Foundation & cleanup | Which broken pieces did I fix, and what can the site do now that it couldn't before? |
| 2 | 3–4 | Identity, SEO & meta | What did I write in the meta description, and how does it compare to how I'd have described myself six months ago? |
| 3 | 5–6 | Hero section | What does my hero look like now, what choices did I make, and what was hardest to decide? |
| 4 | 7–8 | About me & skills section | Which skills did I list, and were there any I almost left out or almost included — and why? |
| 5 | 9–10 | AIDA project page | What is the AIDA page about now, and what was the trickiest part to put into words? |
| 6 | 11–12 | Earlier projects | What projects are on the site now, and what am I most satisfied with about how they're presented? |
| 7 | 13–14 | Visuals & media | What visuals did I add, and which one works best and why? |
| 8 | 15–16 | Design polish, contact & social | What does the site look like now compared to two phases ago, and is the contact form actually working? |
| 9 | 17–18 | Feedback, launch & next steps | What feedback did I get, what did I change, and what am I most proud of across the whole 18 weeks? |
