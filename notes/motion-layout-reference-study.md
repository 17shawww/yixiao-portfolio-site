# Motion, Visual Effects, and Layout Reference Study

Date: 2026-04-23  
Purpose: Build a reference guide for future portfolio improvements focused on motion, interaction, visual effects, and page composition.

## Short Recommendation

This portfolio should use **quiet premium motion**, not heavy "award-site" spectacle.

The best direction is:

- **Editorial page rhythm** for case studies
- **Subtle scroll reveals** for pacing
- **Image-led hover states** for homepage cards
- **Sticky media moments** for long project pages
- **Project-specific motion tone** for `LexFlow`, `Capso`, and `Stylr`

The goal is to make the site feel more alive while still serving recruiters: fast to scan, clear to navigate, and credible as UX/product work.

---

## Reference Set A: Scroll-Led Project Gallery

### References

- [Project scroll animation from Thibaud Fellay Portfolio 24 - Awwwards](https://www.awwwards.com/inspiration/project-scroll-animation-thibaud-fellay-portfolio-24)
- [Awwwards One Page collection](https://www.awwwards.com/awwwards/collections/one-page/)

### What to learn

These references use scroll as a storytelling tool. The page does not just move vertically; project visuals, captions, and gallery states shift as the visitor progresses.

### Useful effects

- Large project image changes as the user scrolls
- Gallery grid turns into a more focused project view
- Section transitions feel continuous instead of stacked
- Visuals move at a slightly different speed than text

### How to apply here

Use this lightly on project pages:

- `LexFlow`: sticky system image on the right while problem, research, and insight text scrolls on the left
- `Capso`: scroll from photo input to caption output as a simple product-flow sequence
- `Stylr`: larger editorial media blocks that enter with slight scale and fade

### Do not copy

- Do not use scrolljacking
- Do not force one-screen-at-a-time navigation
- Do not make users wait for animation before reading
- Do not use looping galleries if they hide the actual project content

---

## Reference Set B: Hover-Driven Project Cards

### References

- [Hover Animation from Olha Uzhykova Personal Website - Awwwards](https://www.awwwards.com/inspiration/portfolio-hover-effect-olha-uzhykova-personal-website-1)
- [Hoverstat.es archive](https://www.hoverstat.es/archive/)
- [Elva Design Group - Godly](https://godly.website/website/elva-design-group-856)

### What to learn

Strong portfolio cards often do not need more text. They need a memorable hover state that reveals hierarchy, direction, and personality.

### Useful effects

- Image subtly scales or shifts on hover
- Project metadata appears with a soft fade
- Cursor movement creates a small parallax response
- Secondary image appears on hover for richer preview
- Card background shifts from neutral to project color

### How to apply here

Homepage featured project cards should feel more like curated posters:

- Default state: strong project image, short title, year/type
- Hover state: image lifts, caption appears, color tint strengthens
- Click target: entire card
- Motion duration: fast enough to feel responsive, slow enough to feel polished

Recommended behavior:

- `LexFlow`: structured hover, minimal movement, blue system tint
- `Capso`: softer hover, slight image float, warm AI/product tint
- `Stylr`: more editorial hover, image scale and crop shift, fashion tone

### Do not copy

- Do not make hover required to understand the project
- Do not hide titles until hover
- Do not use hover-only interactions for important mobile content

---

## Reference Set C: Typographic Motion and Large-Type Layout

### References

- [Animated typography portfolio - Awwwards](https://www.awwwards.com/inspiration/animated-typography-portfolio)
- [Designing a Portfolio Website with Oversized Typography - Designmodo](https://designmodo.com/oversized-typography/)
- [Motion Design Portfolios: 25+ examples - Site Builder Report](https://www.sitebuilderreport.com/inspiration/motion-design-portfolios)
- [100 Best Designer Portfolio Websites of 2026 - Muzli](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/)

### What to learn

Large typography can replace extra decoration. A single confident heading, paired with a strong image, often feels more premium than multiple cards, badges, and explanatory blocks.

### Useful effects

- Text enters with a soft vertical reveal
- Large titles stay static while images move
- Captions appear after images, not before
- Metadata uses small uppercase labels with strong alignment
- Page transitions can reveal title first, then image

### How to apply here

Use typography as structure:

- Homepage: keep `Yixiao Peng` large and stable; animate only supporting line and project visual
- Project pages: reveal project title first, then the hero image, then quick facts
- Section headings: use compact labels and larger editorial titles
- Captions: make them intentional, short, and aligned to image width

### Recommended typography rhythm

- Hero title: large, calm, no letter-spacing tricks
- Section title: strong but smaller than hero
- Eyebrow labels: small, uppercase, limited use
- Captions: 13-14px, muted, close to the visual they describe

### Do not copy

- Do not animate every heading
- Do not use huge type inside small cards
- Do not use distorted text effects on UX case-study content

---

## Reference Set D: Editorial Sticky Layouts

### References

- [Hoverstat.es feature archive](https://www.hoverstat.es/features/one/)
- [Case Study: Portfolio of Bruno Arizio - Codrops](https://tympanus.net/codrops/2019/12/18/case-study-portfolio-of-bruno-arizio/)
- [Industrial & Product Design Portfolio 2023 - Behance](https://www.behance.net/gallery/176681007/Industrial-Product-Design-Portfolio-2023?locale=en_US)

### What to learn

The strongest case-study pages feel like editorial spreads. They use structure, repetition, and image placement to guide attention. Motion is secondary; layout does most of the work.

### Useful patterns

- Sticky image column with scrolling text
- Alternating full-width media bands
- Two-column text/image sections
- Dense process visuals shown as large boards
- Small captions placed like magazine notes
- Progress-like rhythm from overview to outcome

### How to apply here

Use this as the core case-study layout model:

- `Overview`: one large visual plus key facts
- `Problem`: text cards paired with one system/process visual
- `What I Did`: step list with sticky supporting artifact
- `Insights`: cards plus one prominent insight callout
- `Solution`: large gallery spread
- `Outcome`: stats and reflection with minimal movement

### Do not copy

- Do not over-compress images into tiny grids
- Do not let sticky sections become too tall on mobile
- Do not make every section use the same layout

---

## Reference Set E: Interactive Portfolio Playfulness

### References

- [18 Interactive Portfolio Examples - Really Good Designs](https://reallygooddesigns.com/interactive-portfolio-examples/)
- [Iconwerk - Godly](https://godly.website/website/iconwerk-867)
- [TRUE - Godly](https://godly.website/website/true-699)

### What to learn

Interactive details can make a portfolio memorable, but only when they support the work. The best examples use motion to reveal content, not to compete with it.

### Useful effects

- Project cards respond to cursor position
- Media blocks have subtle depth on hover
- Images reveal captions or alternate states
- Small UI elements animate on focus and hover
- Page sections feel connected through consistent timing

### How to apply here

Use playfulness selectively:

- Homepage project cards: slight image lift and project-color glow
- Other Work grid: hover reveals category/year and tight description
- `Stylr`: stronger image scale/crop shift to feel more editorial
- Contact section: subtle button motion only

### Do not copy

- Do not add draggable objects
- Do not add 3D scenes unless they explain a project
- Do not use custom cursors as a primary feature
- Do not let interactions reduce accessibility

---

## Motion System Proposal

Use a small motion system so the site feels consistent.

### Timing

- Micro hover: `160ms-220ms`
- Card hover: `260ms-360ms`
- Section reveal: `520ms-700ms`
- Page transition: `650ms-900ms`

### Easing

Recommended default:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

Use this for:

- image reveal
- card hover
- section entrance
- caption fade

### Motion scale

Keep movement small:

- Image hover scale: `1.02-1.04`
- Card lift: `-4px` to `-8px`
- Text reveal distance: `12px-24px`
- Parallax offset: `8px-28px`

### Accessibility

Support reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Layout System Proposal

### Homepage

Recommended structure:

1. Large editorial hero with one dominant visual
2. Featured project cards with hover states
3. Compact About block
4. Other Work visual wall
5. Contact section

Motion:

- Hero text fades in first
- Hero visual enters with slight scale
- Project cards reveal in a staggered sequence
- Hover effects stay subtle and fast

### Project pages

Recommended structure:

1. Project title and strongest visual
2. Quick facts and outcome snapshot
3. Sticky problem / process visual
4. Insight cards with one emphasized callout
5. Large solution gallery
6. Outcome and reflection

Motion:

- No forced scroll scenes
- Use scroll reveal only when a section enters viewport
- Use sticky media for desktop only
- Disable sticky choreography on mobile

### Other Work

Recommended structure:

- Compact image-first grid
- Larger first item if one project is stronger
- Hover reveals category and short note
- Keep descriptions short

Motion:

- Image scale on hover
- Metadata fade or slide
- No modal unless more project content is added later

---

## Project-Specific Direction

### LexFlow

Motion tone: structured, trustworthy, procedural.

Use:

- clean scroll reveals
- sticky system diagrams
- small hover states
- restrained blue accent
- timeline-like section progression

Avoid:

- playful cursor effects
- bouncy easing
- excessive image distortion

### Capso

Motion tone: modern, AI-assisted, lightweight.

Use:

- soft floating image motion
- small shimmer or gradient movement behind hero media
- product-flow reveal from image input to caption output
- pill/tag interactions

Avoid:

- fake AI effects that imply features not in the project
- heavy neon or futuristic styling
- fast flashing transitions

### Stylr

Motion tone: editorial, youthful, fashion-forward.

Use:

- bolder image scale on hover
- asymmetric media placement
- horizontal gallery moments
- soft reveal timing
- slightly moodier project-color surfaces

Avoid:

- luxury fashion cliches
- over-darkening the whole page
- hiding UX process behind mood imagery

---

## Recommended Implementation Later

### Phase 1: Low-risk polish

- Add CSS-based section reveal classes
- Improve project-card hover states
- Add image lift and soft project-color glow
- Add `prefers-reduced-motion` support

### Phase 2: Editorial case-study rhythm

- Add desktop sticky media sections
- Rework project sections into stronger alternating spreads
- Improve captions and metadata alignment
- Add staggered reveal for insight cards

### Phase 3: Selective advanced motion

- Add Framer Motion only if CSS becomes too limiting
- Add gallery transitions for featured project cards
- Add page transition between homepage and project detail pages
- Keep all advanced motion optional and disabled under reduced motion

### Avoid for now

- Heavy WebGL
- Custom cursor
- Scrolljacking
- Full-screen forced sections
- Complex draggable interactions
- Continuous autoplay animations near dense text

---

## Acceptance Criteria for Future Optimization

The motion and layout update should pass these checks:

- Homepage still explains the portfolio within 5 seconds
- Project cards are understandable without hover
- Motion never blocks reading
- Mobile pages remain simple and fast
- `LexFlow`, `Capso`, and `Stylr` each feel distinct but still part of one site
- Images remain the main visual proof, not decorative animation
- Reduced-motion users get a clean static version

---

## Source List

- [Project scroll animation from Thibaud Fellay Portfolio 24 - Awwwards](https://www.awwwards.com/inspiration/project-scroll-animation-thibaud-fellay-portfolio-24)
- [Hover Animation from Olha Uzhykova Personal Website - Awwwards](https://www.awwwards.com/inspiration/portfolio-hover-effect-olha-uzhykova-personal-website-1)
- [Awwwards One Page collection](https://www.awwwards.com/awwwards/collections/one-page/)
- [Hoverstat.es archive](https://www.hoverstat.es/archive/)
- [Hoverstat.es feature archive](https://www.hoverstat.es/features/one/)
- [Elva Design Group - Godly](https://godly.website/website/elva-design-group-856)
- [Iconwerk - Godly](https://godly.website/website/iconwerk-867)
- [TRUE - Godly](https://godly.website/website/true-699)
- [Case Study: Portfolio of Bruno Arizio - Codrops](https://tympanus.net/codrops/2019/12/18/case-study-portfolio-of-bruno-arizio/)
- [18 Interactive Portfolio Examples - Really Good Designs](https://reallygooddesigns.com/interactive-portfolio-examples/)
- [Motion Design Portfolios: 25+ examples - Site Builder Report](https://www.sitebuilderreport.com/inspiration/motion-design-portfolios)
- [100 Best Designer Portfolio Websites of 2026 - Muzli](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/)
- [Designing a Portfolio Website with Oversized Typography - Designmodo](https://designmodo.com/oversized-typography/)
