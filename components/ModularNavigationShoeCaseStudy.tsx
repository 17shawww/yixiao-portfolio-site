import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText, Mail } from "lucide-react";
import type { ReactNode } from "react";

import { site } from "@/data/portfolio";

type ResearchOutputKind = "scenario" | "needs" | "components" | "requirements";
type SketchKind = "side" | "exploded" | "sole" | "cue" | "trail";

const caseNav = [
  { href: "#overview", label: "Overview" },
  { href: "#problem", label: "Problem" },
  { href: "#research", label: "Research" },
  { href: "#research-output", label: "Research output" },
  { href: "#insights", label: "Insights" },
  { href: "#solution", label: "Solution" },
  { href: "#prototype", label: "Prototype" },
  { href: "#testing", label: "Testing" },
  { href: "#reflection", label: "Reflection" },
];

const overviewFacts = [
  {
    label: "Project type",
    value: "Industrial design / wearable navigation concept",
  },
  {
    label: "Role",
    value: "industrial design, product strategy, scenario research, concept development, prototyping",
  },
  {
    label: "Scope",
    value: "outdoor navigation pain points, modular footwear system, adaptable components, navigation cue concept",
  },
  {
    label: "Built from",
    value: "outdoor scenario analysis, footwear structure research, user need framing, concept sketches, prototype thinking",
  },
  {
    label: "My contribution",
    value:
      "I translated outdoor navigation and gear-load problems into a modular footwear concept that combines adaptable shoe components with subtle navigation cues.",
  },
];

const researchMethods = [
  {
    title: "Outdoor scenario analysis",
    body: "Studied movement moments where terrain awareness, directional decisions, and gear handling compete for user attention.",
  },
  {
    title: "Footwear structure research",
    body: "Analyzed shoe support, stability, traction, terrain adaptation, and possible component placement without treating the shoe like a screen.",
  },
  {
    title: "Pain-point mapping",
    body: "Mapped direction checking, terrain change, and gear burden as connected outdoor problems rather than isolated product features.",
  },
  {
    title: "Requirement translation",
    body: "Turned the research into product requirements around comfort, adaptability, clarity, durability, and low-distraction cues.",
  },
];

const researchOutputs: { title: string; body: string; kind: ResearchOutputKind }[] = [
  {
    title: "Outdoor scenario map",
    body: "Trail movement moments where attention shifts between ground, direction, gear, and pace.",
    kind: "scenario",
  },
  {
    title: "User need map",
    body: "A synthesis of glanceable direction support, reduced device checking, and lighter adaptation decisions.",
    kind: "needs",
  },
  {
    title: "Footwear component analysis",
    body: "Upper, midsole, outsole, heel, and side-panel zones considered for comfort, stability, and cue placement.",
    kind: "components",
  },
  {
    title: "Modular system requirements",
    body: "Design constraints for attachment clarity, terrain usefulness, weather tolerance, and visual legibility.",
    kind: "requirements",
  },
];

const insights = [
  {
    title: "Navigation support must be glanceable and low-distraction.",
    body: "The cue system should support direction without asking users to stop, unlock a device, or shift attention away from terrain for too long.",
  },
  {
    title: "Modular footwear should support terrain adaptation without adding complexity.",
    body: "Adaptable parts are only useful if the attachment logic feels obvious and the user does not have to manage a complicated kit outdoors.",
  },
  {
    title: "Physical product design needs to balance function, comfort, durability, and visual clarity.",
    body: "The concept has to read as a wearable outdoor shoe first, with navigation and modularity integrated into the product language.",
  },
];

const conceptModules = [
  {
    title: "Base Footwear Structure",
    body: "A stable outdoor shoe form provides the support, fit, and comfort needed before any modular or navigation layer can be useful.",
  },
  {
    title: "Navigation Cue Module",
    body: "Subtle directional cues are integrated into the shoe system so navigation can become glanceable instead of device-centered.",
  },
  {
    title: "Adaptive Component System",
    body: "Modular parts support different terrain or usage scenarios while keeping the product readable as a shoe, not a collection of gadgets.",
  },
  {
    title: "Energy / Efficiency Considerations",
    body: "The concept considers how to reduce unnecessary user effort during exploration by lowering gear checks, pause points, and adaptation friction.",
  },
];

const prototypeSketches: { title: string; body: string; kind: SketchKind }[] = [
  {
    title: "Side-view shoe silhouette",
    body: "A low-fidelity profile explores the outdoor shoe as the base form for support, stability, and cue integration.",
    kind: "side",
  },
  {
    title: "Exploded modular components",
    body: "Separate upper, cue, sole, and terrain modules show how the system could be understood as removable layers.",
    kind: "exploded",
  },
  {
    title: "Sole / traction concept",
    body: "Outsole sketching focuses on terrain contact, grip zones, and modular traction logic.",
    kind: "sole",
  },
  {
    title: "Navigation cue placement",
    body: "Cue placement is explored around peripheral visibility, foot movement, and minimal distraction.",
    kind: "cue",
  },
  {
    title: "Usage scenario",
    body: "Trail marks and direction moments frame the shoe as part of outdoor movement rather than a standalone device.",
    kind: "trail",
  },
];

const reviewQuestions = [
  "Whether navigation cues are visible without distracting the user.",
  "Whether modular components feel useful rather than overcomplicated.",
  "Whether the shoe form still reads as wearable and durable.",
  "Whether the concept balances industrial design aesthetics with practical outdoor use.",
];

const iterationDirections = [
  "Simplify module attachment logic.",
  "Clarify navigation cue visibility.",
  "Improve comfort and weight assumptions.",
  "Refine sole structure for different terrain conditions.",
];

const svgProps = {
  "aria-hidden": true,
  focusable: false,
} as const;

export function ModularNavigationShoeCaseStudy() {
  return (
    <main className="lexflow-case shoe-case">
      <nav className="lexflow-case-topbar" aria-label="Modular Navigation Shoe case study navigation">
        <Link href="/#projects" className="case-back-link">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>
        <div className="case-top-links">
          {caseNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <section id="overview" className="case-section case-hero-section">
        <div className="case-hero-copy">
          <p className="home-section-kicker">Industrial design case study</p>
          <h1>Modular Navigation Shoe</h1>
          <p className="case-lede">
            Modular Navigation Shoe is an outdoor footwear concept exploring how modular components and low-distraction navigation cues can support trail movement without forcing users to constantly check a separate device.
          </p>
          <div className="case-facts" aria-label="Project facts">
            {overviewFacts.map((fact) => (
              <div key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="sketch-panel case-hero-sketch">
          <ShoeHeroDiagram />
        </div>
      </section>

      <CaseSection id="problem" kicker="Problem" title="Navigation should not pull attention away from the ground.">
        <div className="case-grid">
          <div className="case-copy-block">
            <p>
              Outdoor exploration can require attention to both terrain and direction. The user has to read the ground, control pace, manage fatigue, and still know where to go next.
            </p>
            <p>
              Separate navigation devices or constant phone checking can interrupt movement, especially when hands are occupied or the terrain changes quickly.
            </p>
            <p>
              Footwear already mediates the relationship between body, ground, and environment. The opportunity was to explore whether footwear could carry part of the navigation and adaptation burden.
            </p>
          </div>
          <div className="case-diagram-panel">
            <ProblemDiagram />
          </div>
        </div>
      </CaseSection>

      <CaseSection id="research" kicker="Research" title="Research connected outdoor movement needs with footwear structure.">
        <div className="case-method-grid">
          {researchMethods.map((method) => (
            <article key={method.title} className="case-method-card">
              <h3>{method.title}</h3>
              <p>{method.body}</p>
            </article>
          ))}
        </div>
        <div className="case-diagram-panel case-wide-diagram">
          <ResearchDiagram />
        </div>
      </CaseSection>

      <CaseSection id="research-output" kicker="Research output" title="Research outputs translated outdoor uncertainty into product requirements.">
        <div className="case-research-output">
          <div className="case-research-output-copy">
            <p className="home-section-kicker">Output set</p>
            <h3>Hand-drawn maps for scenario, need, component, and system logic.</h3>
          </div>
          <div className="case-output-grid">
            {researchOutputs.map((output) => (
              <article key={output.title} className="case-output-card">
                <div className="case-output-sketch">
                  <ResearchOutputSketch kind={output.kind} />
                </div>
                <h4>{output.title}</h4>
                <p>{output.body}</p>
              </article>
            ))}
          </div>
        </div>
      </CaseSection>

      <CaseSection id="insights" kicker="Key insights" title="The concept had to stay quiet, useful, and physically believable.">
        <div className="case-insight-grid">
          {insights.map((insight, index) => (
            <article key={insight.title} className="case-insight-card">
              <span>0{index + 1}</span>
              <h3>{insight.title}</h3>
              <p>{insight.body}</p>
            </article>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="solution" kicker="Solution" title="A modular outdoor shoe that supports direction, terrain adaptation, and lower-effort movement.">
        <div className="case-grid case-solution-grid">
          <div className="case-pillar-list">
            {conceptModules.map((module) => (
              <article key={module.title}>
                <h3>{module.title}</h3>
                <p>{module.body}</p>
              </article>
            ))}
          </div>
          <div className="case-diagram-panel">
            <SystemConceptDiagram />
          </div>
        </div>
      </CaseSection>

      <CaseSection id="prototype" kicker="Prototype / Form Exploration" title="Low-fidelity sketches explored how navigation could become part of a wearable product.">
        <div className="case-wireframe-grid">
          {prototypeSketches.map((sketch) => (
            <article key={sketch.title} className="case-wireframe-card">
              <div className="case-wireframe-visual">
                <PrototypeSketch kind={sketch.kind} />
              </div>
              <h3>{sketch.title}</h3>
              <p>{sketch.body}</p>
            </article>
          ))}
        </div>
        <div className="shoe-concept-flow" aria-label="Simplified concept flow">
          {["Terrain", "Movement", "Cue", "Adaptation", "Continue"].map((step, index) => (
            <div key={step} className="shoe-flow-step">
              <span>{step}</span>
              {index < 4 ? <strong aria-hidden="true">&rarr;</strong> : null}
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="testing" kicker="Testing / evaluation" title="The concept review focused on clarity, usefulness, and wearability.">
        <div className="case-grid">
          <div className="case-diagram-panel">
            <EvaluationDiagram />
          </div>
          <div className="case-testing-groups">
            <div className="case-testing-block">
              <h3>Design review questions</h3>
              <div className="case-testing-list">
                {reviewQuestions.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </div>
            <div className="case-testing-block">
              <h3>Iteration direction</h3>
              <div className="case-testing-list">
                {iterationDirections.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CaseSection>

      <CaseSection id="reflection" kicker="Reflection" title="Wearable interaction starts with the body, not the screen.">
        <div className="case-reflection">
          <p>
            Physical interaction design is not only about screens. Wearable design must respect the body, movement, and environment, and this project helped connect industrial design thinking with user experience strategy.
          </p>
          <div className="case-contact-links">
            <Link href={`mailto:${site.email}`} className="contact-link">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </Link>
            <Link href={site.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </Link>
            <Link href={site.resumeUrl} target="_blank" rel="noreferrer" className="contact-link">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Resume PDF
            </Link>
          </div>
        </div>
      </CaseSection>
    </main>
  );
}

function CaseSection({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="case-section">
      <div className="case-section-intro">
        <p className="home-section-kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ShoeHeroDiagram() {
  return (
    <svg viewBox="0 0 760 520" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-gray" d="M107 99c111-79 316-74 419 18 87 78 60 190-60 242-137 59-341 7-406-100-35-58-4-111 47-160Z" />
      <path className="sketch-wash sketch-wash-sage" d="M414 236c78-54 205-40 254 25 45 60 11 137-75 159-93 24-201-22-220-92-10-36 11-65 41-92Z" />

      <path className="sketch-line" d="M92 299c62-13 109-38 142-76 35-42 88-63 157-56 49 5 82 28 101 65 18 35 53 52 107 52 26 0 42 11 47 30 5 17-7 33-31 40-138 41-309 42-507 6-25-5-29-25-16-61Z" />
      <path className="sketch-line-soft" d="M151 307c115 26 262 24 441-3M211 262c75 29 153 32 235 9M255 209c23 28 58 45 106 49M421 198c34 23 59 53 74 91" />
      <path className="sketch-line" d="M249 216c32-24 75-31 128-23 23 4 43 15 60 34" />
      <path className="sketch-line-soft" d="M274 223c15-18 37-26 67-24M276 241h132M285 257h113M307 229l73 17M321 214l-22 44M363 217l-29 47" />
      <path className="sketch-line" d="M154 358c11 31 37 48 80 53M284 369c9 28 33 44 72 48M417 370c6 26 25 41 58 45" />
      <path className="sketch-line-soft" d="M178 376h43M242 383h48M322 389h47M408 388h42M493 380h39" />
      <path className="sketch-line" d="M223 327c87 16 203 14 349-6" />

      <path className="sketch-line" d="M196 89l78-39 45 45-82 40-41-46ZM373 55l87 29-31 60-91-31 35-58ZM534 108l59 56-47 43-60-55 48-44Z" />
      <path className="sketch-line-soft" d="M225 73l63 57M389 83l65 22M507 142l55 48" />
      <path className="sketch-line" d="M137 117c42-44 94-66 158-65M148 117l-4-44M148 117l49-2" />
      <path className="sketch-line-soft" d="M137 117c34 12 59 32 77 63M148 117c24-19 55-31 93-36" />

      <path className="sketch-line" d="M553 54c29-13 57-8 80 15M591 43c-2 31-11 58-29 82M622 67c-23 14-47 23-74 28" />
      <path className="sketch-line" d="M572 412c-12-22-11-43 5-63 16 20 17 41 5 63Z" />
      <path className="sketch-line-soft" d="M555 376h43M563 394h27" />

      <path className="sketch-line-soft" d="M101 174c64 16 122 7 174-28M476 114c42 8 76 28 102 60M508 334c19 15 42 23 70 24" />
      <circle className="sketch-dot" cx="251" cy="331" r="5" />
      <circle className="sketch-dot" cx="320" cy="340" r="5" />
      <circle className="sketch-dot" cx="390" cy="340" r="5" />
      <circle className="sketch-dot" cx="466" cy="326" r="4" />
      <path className="sketch-line-soft" d="M242 315l18-18M313 324l18-20M383 323l17-19M458 309l20-17" />
      <text className="sketch-label" x="551" y="339">CUE</text>
    </svg>
  );
}

function ProblemDiagram() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M76 72c82-56 225-47 297 21 62 59 35 143-60 177-101 36-241-4-292-82-27-42 9-82 55-116Z" />
      <path className="sketch-line" d="M57 251c64-52 122-61 174-28 40 26 77 24 111-6 31-27 69-27 116 0" />
      <path className="sketch-line-soft" d="M74 279c73-33 134-36 183-9M272 270c47-30 101-39 160-27" />
      <path className="sketch-line" d="M88 86h126v92H88zM324 76h120v96H324zM205 219h109v72H205z" />
      <path className="sketch-line-soft" d="M109 114h74M109 139h52M109 160h67M345 106h68M345 130h48M345 153h70M225 246h63M225 268h43" />
      <path className="sketch-line" d="M214 132h45M279 132h45M260 178v41" />
      <path className="sketch-line-soft" d="M240 120l19 12-19 12M305 120l19 12-19 12M264 202l-4 17-11-13M262 202l-2 17 14-10" />
      <circle className="sketch-dot" cx="139" cy="213" r="5" />
      <circle className="sketch-dot" cx="260" cy="213" r="5" />
      <circle className="sketch-dot" cx="381" cy="213" r="5" />
      <text className="sketch-label" x="231" y="127">LOOK UP</text>
    </svg>
  );
}

function ResearchDiagram() {
  return (
    <svg viewBox="0 0 760 280" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M95 55c111-52 299-48 404 9 87 47 86 123-2 161-101 43-294 28-407-32-76-41-75-99 5-138Z" />
      <path className="sketch-line" d="M69 72h145v130H69zM309 49h143v153H309zM552 72h141v130H552z" />
      <path className="sketch-line-soft" d="M96 106h74M96 133h51M96 160h83M335 84h80M335 112h62M335 140h76M335 168h46M578 106h77M578 133h54M578 160h82" />
      <path className="sketch-line" d="M214 137h95M452 137h100M107 230c49-16 94-16 137 0M332 230c51-17 98-17 143 0M582 230c39-13 76-13 112 0" />
      <path className="sketch-line-soft" d="M286 124l23 13-23 13M529 124l23 13-23 13" />
      <circle className="sketch-dot" cx="151" cy="230" r="5" />
      <circle className="sketch-dot" cx="381" cy="230" r="5" />
      <circle className="sketch-dot" cx="638" cy="230" r="5" />
      <text className="sketch-label" x="95" y="248">SCENARIO</text>
      <text className="sketch-label" x="334" y="248">STRUCTURE</text>
      <text className="sketch-label" x="566" y="248">REQUIREMENTS</text>
    </svg>
  );
}

function ResearchOutputSketch({ kind }: { kind: ResearchOutputKind }) {
  if (kind === "scenario") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-sage" d="M26 34c37-27 101-24 129 8 24 28 9 62-31 74-44 13-102-5-118-39-8-17 3-29 20-43Z" />
        <path className="sketch-line-soft" d="M21 83c31-31 61-39 90-23 18 10 34 8 48-5" />
        <path className="sketch-line" d="M34 88l24-36 27 25 21-32 36 43" />
        <path className="sketch-line-soft" d="M29 103h128M49 103l13 12M91 103l13 12M133 103l13 12" />
        <circle className="sketch-dot" cx="70" cy="72" r="4" />
        <circle className="sketch-dot" cx="118" cy="62" r="4" />
      </svg>
    );
  }

  if (kind === "needs") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M30 30c36-24 94-20 123 11 24 27 10 60-30 73-43 13-99-5-116-38-10-17 3-31 23-46Z" />
        <path className="sketch-line" d="M70 44h41v41H70zM19 23h38v25H19zM123 23h38v25h-38zM21 92h40v24H21zM121 92h40v24h-40z" />
        <path className="sketch-line-soft" d="M57 36h13M111 36h12M61 104h60M90 44v-14M90 85v19M82 64h18" />
        <circle className="sketch-dot" cx="90" cy="64" r="4" />
      </svg>
    );
  }

  if (kind === "components") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-gray" d="M28 34c35-24 96-22 125 9 24 27 9 61-31 73-44 13-101-6-117-39-8-17 4-29 23-43Z" />
        <path className="sketch-line" d="M23 83c28-6 50-17 64-34 16-19 42-28 72-23" />
        <path className="sketch-line-soft" d="M38 88c35 8 77 7 126-2M72 61c29 13 58 14 88 3" />
        <path className="sketch-line" d="M48 103h31M90 103h32M133 103h28" />
        <circle className="sketch-dot" cx="57" cy="78" r="4" />
        <circle className="sketch-dot" cx="99" cy="55" r="4" />
        <circle className="sketch-dot" cx="139" cy="74" r="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M30 32c36-25 96-21 124 10 24 27 9 60-31 72-43 13-98-5-116-37-10-18 3-31 23-45Z" />
      <path className="sketch-line" d="M31 27h44v30H31zM105 27h44v30h-44zM31 77h44v30H31zM105 77h44v30h-44z" />
      <path className="sketch-line-soft" d="M42 42h22M116 42h22M42 92h22M116 92h22M75 42h30M53 57v20M127 57v20M75 92h30" />
      <circle className="sketch-dot" cx="90" cy="42" r="4" />
      <circle className="sketch-dot" cx="90" cy="92" r="4" />
    </svg>
  );
}

function SystemConceptDiagram() {
  return (
    <svg viewBox="0 0 520 390" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-gray" d="M73 91c86-62 253-59 340 9 77 59 53 145-46 187-111 48-269 13-328-70-32-46-13-87 34-126Z" />
      <path className="sketch-wash sketch-wash-blush" d="M210 151c63-45 169-38 215 17 40 47 17 106-51 127-75 23-166-8-188-63-12-29-1-56 24-81Z" />

      <path className="sketch-line" d="M41 195c48-9 84-27 109-55 25-29 65-44 118-38 34 4 58 20 72 47 13 25 39 37 80 37 19 0 31 8 35 22 4 13-5 24-23 29-105 30-234 31-382 5-17-3-20-18-9-47Z" />
      <path className="sketch-line-soft" d="M86 202c86 19 196 17 330-2M140 166c55 20 113 21 174 5" />
      <path className="sketch-line" d="M151 145c22-23 58-33 106-28 21 3 40 13 56 30" />
      <path className="sketch-line-soft" d="M169 152c13-13 31-18 54-16M173 168h94M184 181h80M205 153l56 19M221 139l-21 43M252 141l-26 45" />
      <path className="sketch-line" d="M82 224c78 15 183 14 315-4" />
      <path className="sketch-line-soft" d="M109 234h36M162 239h42M226 239h39M291 237h35M351 231h35" />

      <path className="sketch-line" d="M87 66h92v48H87zM214 42h92v48h-92zM341 66h92v48h-92zM199 284h122v54H199z" />
      <path className="sketch-line-soft" d="M108 90h50M236 66h48M362 90h50M225 306h72M225 322h49" />
      <path className="sketch-line" d="M179 90h35M306 90h35M260 90v194" />
      <path className="sketch-line-soft" d="M195 80l19 10-19 10M322 80l19 10-19 10M264 265l-4 19-12-14M262 265l-2 19 15-11" />
      <circle className="sketch-dot" cx="260" cy="185" r="5" />
      <text className="sketch-label" x="108" y="58">BASE</text>
      <text className="sketch-label" x="229" y="34">CUE</text>
      <text className="sketch-label" x="353" y="58">MODULE</text>
      <text className="sketch-label" x="218" y="362">EFFORT</text>
    </svg>
  );
}

function PrototypeSketch({ kind }: { kind: SketchKind }) {
  if (kind === "side") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-gray" d="M45 39c55-34 140-27 176 17 31 38 8 83-49 98-62 16-139-11-161-57-12-23 8-41 34-58Z" />
        <path className="sketch-line" d="M29 105c31-6 55-19 73-39 18-21 47-31 86-27 25 3 43 15 54 35 10 19 28 28 54 28 12 0 20 5 23 14 2 9-4 17-15 20-72 21-159 22-262 4-13-2-17-13-13-35Z" />
        <path className="sketch-line" d="M104 72c20-21 52-30 95-25 18 2 34 11 48 25" />
        <path className="sketch-line-soft" d="M62 111c59 13 135 12 227-1M100 86c44 16 88 17 133 4M105 130h37M159 134h39M216 133h35M122 78c11-10 27-14 48-12M124 93h80M135 105h69M148 79l47 22M162 67l-21 39M188 69l-24 43" />
        <circle className="sketch-dot" cx="91" cy="122" r="3.5" />
        <circle className="sketch-dot" cx="139" cy="129" r="3.5" />
        <circle className="sketch-dot" cx="190" cy="130" r="3.5" />
      </svg>
    );
  }

  if (kind === "exploded") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M48 37c55-35 143-27 178 18 30 39 5 84-54 98-63 15-139-14-159-60-10-24 10-41 35-56Z" />
        <path className="sketch-line" d="M33 124c39-8 70-24 92-50 20-23 52-35 95-33" />
        <path className="sketch-line-soft" d="M61 132c58 12 119 11 184-3" />
        <path className="sketch-line" d="M48 37l48-23 26 27-50 24-24-28ZM132 20l55 19-19 35-56-20 20-34ZM205 53l35 33-27 25-36-33 28-25Z" />
        <path className="sketch-line-soft" d="M75 67l-9 34M151 74l-9 37M211 111l-7 31M84 29l25 25M145 38l31 10M192 79l31 25M87 117h86M96 127h74" />
        <circle className="sketch-dot" cx="89" cy="103" r="3.5" />
        <circle className="sketch-dot" cx="139" cy="111" r="3.5" />
        <circle className="sketch-dot" cx="190" cy="113" r="3.5" />
      </svg>
    );
  }

  if (kind === "sole") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-sage" d="M47 38c56-36 143-27 177 18 30 39 6 85-52 99-64 15-140-14-160-61-10-25 10-41 35-56Z" />
        <path className="sketch-line" d="M65 37c60-13 112 0 156 39 20 18 23 41 9 59-16 20-49 25-98 15-48-10-83-27-105-51-18-20-5-51 38-62Z" />
        <path className="sketch-line-soft" d="M72 68h38M133 58h35M188 81h33M60 103h42M125 108h41M183 122h31" />
        <circle className="sketch-dot" cx="95" cy="126" r="4" />
        <circle className="sketch-dot" cx="142" cy="132" r="4" />
        <circle className="sketch-dot" cx="191" cy="140" r="4" />
      </svg>
    );
  }

  if (kind === "cue") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-gray" d="M49 39c54-34 138-27 173 17 31 38 8 83-48 98-62 16-138-11-160-57-12-23 8-41 35-58Z" />
        <path className="sketch-line" d="M46 114c34-7 61-21 80-43 18-21 47-31 88-26 24 3 41 14 51 34 9 17 25 25 49 25" />
        <path className="sketch-line-soft" d="M73 121c61 12 132 10 213-5" />
        <path className="sketch-line" d="M128 75c18-17 45-23 80-18 16 3 30 11 43 25" />
        <path className="sketch-line-soft" d="M144 84h77M156 96h61M164 73l41 21M179 64l-19 37" />
        <path className="sketch-line" d="M164 60c23-11 45-7 64 12M198 48c-1 26-9 48-24 67M224 68c-19 12-40 20-63 23" />
        <path className="sketch-line-soft" d="M168 78h38M181 92h24" />
        <text className="sketch-label" x="172" y="135">GLANCE</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M47 37c55-35 142-27 177 18 30 39 5 85-53 99-64 15-141-14-160-61-10-24 10-40 36-56Z" />
      <path className="sketch-line" d="M24 129c40-49 77-61 111-36 27 20 53 14 78-18" />
      <path className="sketch-line-soft" d="M36 145c51-17 104-15 158 8M65 92l22-35 25 24 19-30 31 36" />
      <path className="sketch-line" d="M182 45l37 18-36 20 9-20-10-18Z" />
      <circle className="sketch-dot" cx="74" cy="120" r="4" />
      <circle className="sketch-dot" cx="132" cy="101" r="4" />
      <circle className="sketch-dot" cx="198" cy="81" r="4" />
    </svg>
  );
}

function EvaluationDiagram() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M88 77c75-55 218-50 290 13 62 55 41 136-45 174-96 42-238 8-291-68-29-42 1-82 46-119Z" />
      <path className="sketch-line" d="M74 80h124v101H74zM322 80h124v101H322zM174 239h172v72H174z" />
      <path className="sketch-line-soft" d="M99 111h68M99 136h48M99 158h76M348 111h68M348 136h48M348 158h76M202 264h112M202 287h74" />
      <path className="sketch-line" d="M198 132h47M275 132h47M260 181v58" />
      <path className="sketch-line-soft" d="M226 120l19 12-19 12M303 120l19 12-19 12M264 221l-4 18-12-13M262 221l-2 18 15-10" />
      <circle className="sketch-dot" cx="135" cy="213" r="5" />
      <circle className="sketch-dot" cx="260" cy="213" r="5" />
      <circle className="sketch-dot" cx="385" cy="213" r="5" />
      <path className="sketch-line-soft" d="M135 213c37 25 78 25 125 0M260 213c47-25 89-25 125 0" />
      <text className="sketch-label" x="213" y="126">REVIEW</text>
    </svg>
  );
}
