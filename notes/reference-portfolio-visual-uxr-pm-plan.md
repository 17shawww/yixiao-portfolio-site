# Reference Portfolio Visual + PM/UXR Optimization Plan

Date: 2026-04-24

Reference sites:
- https://www.aashishreddy.com/
- https://uxfol.io/ShreyaSeguPortfolio
- https://gemmag.webflow.io/

## What Is Worth Learning

### 1. Stronger Opening Identity

Reference signal:
- Aashish Reddy uses a dark editorial hero with a subtle grid, large serif typography, and one highlighted phrase. The page feels memorable before any project detail appears.
- Gemma Gao uses a playful hand-drawn identity and small decorative marks, which makes the portfolio feel personal instead of template-like.

What to learn:
- The first screen should communicate a point of view, not only name + title.
- A distinctive typography pairing can do more than extra decoration.
- One repeated accent motif is enough to create personality.

How to apply:
- Keep Yixiao's PM/UXR positioning, but give it a clearer voice:
  - "I turn messy human problems into product decisions."
  - "Research-led product thinking for AI, services, and consumer tools."
- Add a subtle personal visual system:
  - structured research grid
  - annotated note marks
  - thin connector lines
  - small "decision stamp" tags
- Avoid making the site too dark overall, but consider a darker hero band or dark project opener for stronger contrast.

## 2. Reduce Image Information Load

Reference signal:
- Gemma's case studies split visuals into focused chunks: one product screen or one feature moment per image.
- Text sits next to or below visuals as a short explanation of design goal, user scenario, and solution.
- Images are not overloaded with all flows, all screens, and all research on one canvas.

What to learn:
- Each image should answer one question.
- Do not use whole Figma boards as the main case-study image when they contain multiple unrelated artifacts.
- Recruiters should be able to understand a visual in 3-5 seconds.

How to apply:
- Re-export from Figma as smaller focused frames:
  - one final UI cluster
  - one journey/flow crop
  - one research synthesis crop
  - one feature close-up
  - one before/after or decision diagram
- Replace current large board images in project pages with progressive slices.
- Keep full-board images only in optional gallery sections, not hero or key explanations.

## 3. Use "Image Block + Text Block" Rhythm

Reference signal:
- Gemma repeatedly uses a readable pattern:
  - image
  - design goal
  - user scenario
  - solution
- This makes the case study feel like a sequence of product decisions rather than a giant report.

What to learn:
- A PM/UXR portfolio should tell the decision trail.
- Each section can be one small argument:
  - what user need appeared
  - what decision followed
  - what changed in the product

How to apply:
- Add a reusable `DecisionBlock` component:
  - left/right alternating image
  - eyebrow: "User signal", "Product decision", "Tradeoff", or "Outcome"
  - title: one crisp sentence
  - 2-3 bullet points max
- Use this instead of long paragraphs inside project pages.

Suggested structure per project:
- Hero: strongest final visual, not full board.
- Research signal: small data chart or journey map crop.
- Decision 1: problem → product decision.
- Decision 2: user insight → feature choice.
- Decision 3: tradeoff → MVP scope.
- Outcome: metrics, validation, next step.

## 4. Add Data Visuals for PM/UXR Credibility

Reference signal:
- Strong PM/UXR portfolios often make evidence visible through simple numbers, charts, and summaries.
- Gemma uses explicit metrics such as "65%" and "80%" in case-study narrative.

What to learn:
- Your portfolio should show not just design outputs, but how evidence informed direction.
- Data does not need to be complex. Small, well-labeled charts are often better.

How to apply:
- Create custom data cards and small charts:
  - Capso: 103 survey responses, 96 valid responses, 76.2% textual aphasia.
  - LexFlow: 4 stakeholder roles, one service journey, AI + service touchpoints.
  - Stylr: 3 product pillars: learning, community, try-on.
- Add simple visual forms:
  - horizontal bar chart
  - segmented evidence strip
  - stakeholder map
  - decision matrix
  - before/after complexity comparison

Implementation:
- Build a reusable `EvidenceChart` component in React/Tailwind.
- Store chart data in `data/portfolio.ts`.
- Use SVG/CSS bars instead of screenshot charts so the visuals are crisp and editable.

## 5. Interaction and Motion

Reference signal:
- Aashish uses slow reveal and strong atmosphere.
- Gemma uses Webflow-style scroll reveals and visual pauses.
- Motion is subtle; it supports pacing rather than becoming the content.

What to learn:
- Motion should make the case study feel paced.
- A portfolio for PM/UXR should not feel too flashy; motion should clarify reading order.

How to apply:
- Keep current fade/scale motion, but make it more intentional:
  - hero text reveals first
  - hero image follows
  - evidence cards appear in sequence
  - decision blocks slide in from alternating sides
- Add small hover behavior:
  - project cards lift slightly
  - image crops reveal caption tags
  - data bars animate once when visible
- Avoid heavy parallax or distracting cursor effects.

Implementation:
- Extend current CSS motion utilities:
  - `.motion-slide-left`
  - `.motion-slide-right`
  - `.motion-reveal-bar`
  - `.caption-chip`
- Use CSS only first. Add Framer Motion only if later interaction needs become more complex.

## 6. How to Re-export Figma Images

Priority:
1. Final product screen or polished mockup.
2. Feature close-up with one clear function.
3. Flow/journey map crop with readable labels.
4. Research synthesis chart or diagram.
5. Full board only when used as background texture or secondary gallery.

Recommended export set:

LexFlow:
- `cover.png`: final legal-service dashboard or polished platform screen.
- `stakeholders.png`: four-role stakeholder map.
- `service-flow.png`: cropped service flow, not full board.
- `evidence-workflow.png`: evidence/doc preparation UI or diagram.
- `mock-court.png`: mock-court concept as a standalone visual.

Capso:
- `cover.png`: final caption-generation mobile flow.
- `survey-chart.png`: 76.2% textual aphasia chart.
- `caption-flow.png`: image input → tone/keywords → output.
- `prototype.png`: Flask/OpenAI prototype or system diagram.
- `persona.png`: short persona or posting journey crop.

Stylr:
- `cover.png`: strongest final app screen cluster.
- `style-learning.png`: learning/content feed feature.
- `try-on.png`: virtual mirror/closet feature.
- `commerce-flow.png`: browse → save → try → buy.
- `confidence-map.png`: user problem or style-confidence journey.

Export specs:
- PNG at 2x.
- Prefer transparent-background PNG for device/UI clusters.
- Keep each image around one idea.
- Avoid exporting giant boards with dense text.
- Filename should match function, not slide number.

## 7. Personal Style Direction for Yixiao

Recommended style: "Research Notebook x Product Strategy Studio"

Why this fits:
- PM/UXR direction needs credibility and clarity.
- Your projects span AI, service systems, fashion, and physical/product thinking.
- A notebook/studio visual language can connect research evidence with polished product decisions.

Visual ingredients:
- warm off-white paper background
- precise grid lines
- thin connector paths
- small annotation labels
- serif display type for personality
- clean sans-serif for case-study content
- restrained accent colors per project

Signature motif:
- "Decision trail" lines that connect:
  - user signal
  - insight
  - product decision
  - outcome

This gives the site a recognizable personality without making it look like a pure visual design portfolio.

## 8. Recommended Next Implementation Order

1. Re-export focused Figma images for one project first, preferably Capso.
2. Build `DecisionBlock` and `EvidenceChart` components.
3. Redesign one case-study page with alternating small image/text sections.
4. Apply the same pattern to LexFlow and Stylr.
5. Refresh homepage project cards to use focused thumbnails instead of whole-board images.
6. Add stronger hero art direction and personal "decision trail" motif.
7. Polish motion after layout and image structure are stable.

## 9. Success Criteria

- No single project visual should try to explain more than one major idea.
- Every section should be understandable by scanning title + image + 2 bullets.
- Recruiters should understand:
  - what problem was studied
  - what evidence was used
  - what decision followed
  - what tradeoff was made
  - what outcome or learning resulted
- The site should feel more personal than a template, but still credible for PM and UXR roles.
