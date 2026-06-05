# Learning Reflections — Shan Oomes Portfolio

One entry per phase. Written after completing the phase, before starting the next.

---

## Index

- [Phase 1 — Foundation & Cleanup](#phase-1)
- [Phase 2 — Identity, SEO & Meta](#phase-2)
- [Phase 3 — Hero Section](#phase-3)
- [Phase 4 — About Me & Skills](#phase-4)
- [Phase 5 — AIDA Project Page](#phase-5)
- [Phase 6 — Earlier Projects](#phase-6)
- [Phase 7 — Visuals & Media](#phase-7)
- [Phase 8 — Design Polish, Contact & Social](#phase-8)
- [Phase 9 — Feedback, Launch & What's Next ✅](#phase-9)

---

<a name="phase-1"></a>
## Phase 1 — Foundation & Cleanup

The most satisfying kind of work: finding broken things and fixing them. The `app.js` reference had been silently throwing a 404 on every page load. The jQuery AJAX calls to `/data` and `/services` were never going to work — those endpoints don't exist. Removing them didn't change anything visible, but it meant the site stopped lying about what it could do.

The `<marquee>` replacement was the most interesting task. Replacing a deprecated HTML element with a pure CSS animation made me think about how much of the web still runs on things that technically work but shouldn't be there.

Hardest thing: deciding what counted as "done" when the fixes were invisible to anyone not reading the console.

---

<a name="phase-2"></a>
## Phase 2 — Identity, SEO & Meta

The meta description was "FIX biedt uitgebreide ICT-ondersteuning voor thuis…" — copy from a client project I'd worked on before. That was a wake-up call. Anyone sharing this page on LinkedIn would have seen that in the preview. Fixed immediately.

Writing the new description forced me to articulate what I actually do in one sentence. That turned out to be harder than any of the technical work this phase. "Data Science & AI student specialising in NLP, computer vision, and applied machine learning" was the third draft. The first two were either too vague or too long.

Setting up CSS custom properties (`--color-bg`, `--color-text`, etc.) felt like admin at the time but it paid off immediately in Phase 3. Every later change became a one-line edit instead of a search-and-replace.

---

<a name="phase-3"></a>
## Phase 3 — Hero Section

Replacing the architect stock photo was long overdue. The hero now uses my own photo and a one-sentence tagline that actually says what I do. The animated role title ("Data Scientist" → "AI Developer" → "ML Engineer") cycles on a 3-second keyframe — subtle enough not to distract, visible enough to add some life.

The `document.write()` cross-pattern script was a pattern I hadn't seen before. It generated a grid of SVG cross elements at runtime. Replacing it with static HTML and CSS was straightforward, but understanding why it existed in the first place took longer.

The two CTA buttons (View Projects, Download CV) finally make the hero section do something. Before this phase, there was no clear next action for a visitor.

---

<a name="phase-4"></a>
## Phase 4 — About Me & Skills

Rewrote the About section three times. The first draft was still academic — full sentences, passive voice, "utilising various methodologies." The second was too casual. The third landed somewhere in between: direct, first person, specific about what I've worked on.

Adding the skills section exposed a gap: I had been listing broad areas (NLP, computer vision) without being specific about the tools. "Hugging Face Transformers" is more useful to a recruiter than "NLP." The decision to use chips (icon + label) rather than percentage bars was easy — percentage bars for skills feel dishonest. What does "Python: 85%" even mean?

---

<a name="phase-5"></a>
## Phase 5 — AIDA Project Page

Writing the AIDA page was the first time I had to explain this project to someone who wasn't at my graduation presentation. The Context → Challenge → What I built → Results → What I learned structure forced me to be honest about what the project actually was — not just what I hoped it would be.

The hardest part to put into words: explaining why RAG was the right approach. "The model needed to answer questions about documents it had never seen" is clearer than "we implemented a retrieval-augmented generation pipeline using semantic similarity search." I rewrote that section four times.

---

<a name="phase-6"></a>
## Phase 6 — Earlier Projects

The Move Intermodal project had two sentences in the original site. Writing a full page for it meant going back through my notes and being honest about what I actually built versus what I had planned to build. The RL scheduler worked in simulation — I should say that clearly rather than leaving it ambiguous.

The Banijay project page was the most fun to write. The problem was interesting (understanding audience behaviour from social media data) and the approach was clean enough to explain clearly.

---

<a name="phase-7"></a>
## Phase 7 — Visuals & Media

Architecture diagrams made the project pages feel real. Before this phase, the pages were walls of text — technically accurate but not compelling. Adding a diagram showing how the AIDA system connects Azure Form Recognizer → SBERT → retrieval → response generation made the architecture immediately obvious.

The NPEC diagram was the hardest to design — the pipeline has more steps (image ingestion → preprocessing → trait extraction → output) and fitting that into a horizontal flow that works on mobile took two attempts.

---

<a name="phase-8"></a>
## Phase 8 — Design Polish, Contact & Social

This phase was the biggest design change of the whole project. Moving from a generic developer template to the Off-White-inspired luxury editorial aesthetic required rebuilding almost every component from scratch. The design token system (design-tokens.css) made this possible — having `--color-bg`, `--font-serif`, `--section-padding-y` as variables meant I could change the entire visual direction by editing one file.

Typography was the most impactful change. Playfair Display for headings against Inter for body text immediately made the site feel more considered. The 12px uppercase section labels with a bottom border are a direct reference to Off-White's editorial layouts.

The CV modal with a timeline was a better solution than a downloadable PDF — it's faster to scan and more flexible to update.

---

<a name="phase-9"></a>
## Phase 9 — Feedback, Launch & What's Next ✅

The last phase brought two additions that made the biggest difference to how the site feels: an animated aurora background in the hero, and a proper dark mode implementation.

**The aurora** started as a React component with framer-motion, which I had to translate into pure CSS keyframe animations. The result — layered repeating-linear-gradients with a radial-gradient mask and a 60-second background-position animation — is actually simpler to understand than the original and has no JavaScript dependency.

**Dark mode** turned out to be harder than expected. The initial implementation worked in isolation, but auditing every section revealed roughly ten places where hardcoded colour values (`var(--color-black)`, `var(--color-white)`) broke under the dark theme. The fix in each case was the same: replace primitives with semantic tokens (`var(--color-bg)`, `var(--color-text)`) so the dark mode overrides flow through automatically. The lesson: build with semantic tokens from the start — fixing it after the fact is ten times the work.

The two-circle toggle animation (two dots that swap positions on click) is a small detail that ended up being one of the things people noticed most. The anti-FOUC inline script in `<head>` means the theme loads before first paint — no flash of wrong colours.

What I'm most proud of across the whole 18 weeks: the site went from a broken copy of a client project to something that actually represents who I am and how I think. Every phase taught me something different — not just about web development, but about how to explain what I do to someone who hasn't seen my code.

It's live at shanoomes.nl. That's the point.
