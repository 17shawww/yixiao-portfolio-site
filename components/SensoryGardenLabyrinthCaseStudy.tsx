import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText, Mail } from "lucide-react";
import type { ReactNode } from "react";

import { site } from "@/data/portfolio";

type ResearchOutputKind = "journey" | "touchpoints" | "palette" | "structure";
type PrototypeKind = "path" | "tactile" | "scent" | "color" | "pause";

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
    value: "Spatial experience design / sensory UX concept",
  },
  {
    label: "Role",
    value: "spatial research, experience strategy, sensory mapping, concept development, prototyping",
  },
  {
    label: "Scope",
    value: "garden path structure, sensory checkpoints, tactile cues, plant-based interaction, embodied experience",
  },
  {
    label: "Built from",
    value:
      "sensory experience research, spatial journey mapping, plant and material exploration, low-fidelity spatial sketches",
  },
  {
    label: "My contribution",
    value:
      "I translated a broad prompt about screen-centered routines into a spatial UX system built around touch, scent, movement, color, and path rhythm.",
  },
];

const researchMethods = [
  {
    title: "Sensory behavior review",
    body: "Reviewed how tactile surfaces, scent, color contrast, visual rhythm, and movement cues can shape attention in physical environments.",
  },
  {
    title: "Spatial journey mapping",
    body: "Mapped the visitor journey from entry transition to sensory checkpoints, pause nodes, and exit reflection.",
  },
  {
    title: "Plant and material exploration",
    body: "Explored aromatic plants, textured edges, color groupings, and durable surface cues for distinct sensory moments.",
  },
  {
    title: "Experience requirement translation",
    body: "Translated sensory goals into spatial requirements for path sequence, checkpoint spacing, tactile access, and low-distraction cues.",
  },
];

const researchOutputs: { title: string; body: string; kind: ResearchOutputKind }[] = [
  {
    title: "Sensory journey map",
    body: "A path-based map showing how visitors move through entry, touch, scent, color, pause, and exit moments.",
    kind: "journey",
  },
  {
    title: "Touchpoint system",
    body: "A checkpoint system for distributing tactile, scent, color, and pause cues across the route.",
    kind: "touchpoints",
  },
  {
    title: "Plant / material palette",
    body: "A reference for matching plants, surfaces, and edge conditions to specific sensory roles.",
    kind: "palette",
  },
  {
    title: "Labyrinth structure",
    body: "A spatial sequence that uses curves, turns, and resting points to pace movement and attention.",
    kind: "structure",
  },
];

const insights = [
  {
    title: "Sensory cues should invite attention, not demand it.",
    body: "The garden should guide visitors through subtle environmental changes instead of relying on signs, screens, or heavy instruction.",
  },
  {
    title: "The path is the interaction.",
    body: "Movement, turning, pausing, and noticing become the main interaction model, so the route itself has to carry the experience logic.",
  },
  {
    title: "Comfort depends on rhythm, balance, and restraint.",
    body: "Plants and materials should support pacing, legibility, sensory balance, and comfort rather than only visual decoration.",
  },
];

const conceptModules = [
  {
    title: "Entry transition",
    body: "A calm starting zone gives visitors a clear threshold between everyday screen-based routines and the garden path.",
  },
  {
    title: "Sensory checkpoints",
    body: "Touch, scent, color, and sound cues are placed as checkpoints so visitors can notice one sensory mode at a time.",
  },
  {
    title: "Labyrinth path rhythm",
    body: "Curves, pauses, and directional changes create a readable spatial rhythm without making the route feel overly controlled.",
  },
  {
    title: "Reflection exit",
    body: "The ending area closes the sequence with a simple pause point before visitors leave the path.",
  },
];

const prototypeSketches: { title: string; body: string; kind: PrototypeKind }[] = [
  {
    title: "Path structure",
    body: "A winding route that organizes entry, progression, pause, and exit without requiring signage-heavy guidance.",
    kind: "path",
  },
  {
    title: "Tactile edge",
    body: "Textured surfaces and planted edges that make touch available without forcing contact.",
    kind: "tactile",
  },
  {
    title: "Scent checkpoint",
    body: "Aromatic plant clusters positioned as subtle markers in the visitor sequence.",
    kind: "scent",
  },
  {
    title: "Color rhythm",
    body: "Color changes used to mark progression, contrast, and shifts in spatial tone.",
    kind: "color",
  },
  {
    title: "Pause node",
    body: "Small resting points that support stopping, orienting, or continuing at the visitor's pace.",
    kind: "pause",
  },
];

const reviewQuestions = [
  "Whether the path sequence is understandable without signs or screens.",
  "Whether touch, scent, color, and movement are balanced instead of overwhelming.",
  "Whether tactile and pause moments can support different mobility and sensory needs.",
  "Whether plant and material choices are durable enough for maintenance and real garden use.",
];

const iterationDirections = [
  "Clarify the order and spacing of sensory checkpoints.",
  "Reduce visual clutter in the path structure and edge conditions.",
  "Improve accessibility for different mobility and sensory needs.",
  "Refine plant and material choices for durability, care, and seasonal maintenance.",
];

const journeySteps = ["Enter", "Touch", "Scent", "Color", "Pause", "Exit"];

const svgProps = {
  "aria-hidden": true,
  focusable: false,
} as const;

export function SensoryGardenLabyrinthCaseStudy() {
  return (
    <main className="lexflow-case sensory-garden-case">
      <nav className="lexflow-case-topbar" aria-label="Sensory Garden Labyrinth case study navigation">
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
          <p className="home-section-kicker">Spatial experience case study</p>
          <h1>Sensory Garden Labyrinth</h1>
          <p className="case-lede">
            Sensory Garden Labyrinth is a multisensory spatial experience concept exploring how plants, tactile cues, color, scent, and path rhythm can guide attention through a physical environment.
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
          <GardenHeroDiagram />
        </div>
      </section>

      <CaseSection id="problem" kicker="Problem" title="Screen-based routines can pull attention away from body, movement, and space.">
        <div className="case-grid">
          <div className="case-copy-block">
            <p>
              Many everyday routines center attention on visual, task-based screen interaction, leaving fewer moments for touch, scent, posture, movement, and surrounding space.
            </p>
            <p>
              The design opportunity was to create a physical route that shifts attention through environmental cues instead of instructions, notifications, or interface prompts.
            </p>
            <p>
              A garden labyrinth provides a structured but open-ended path where sensory checkpoints can guide movement, pausing, orientation, and environmental noticing.
            </p>
          </div>
          <div className="case-diagram-panel">
            <ProblemDiagram />
          </div>
        </div>
      </CaseSection>

      <CaseSection id="research" kicker="Research" title="Research translated sensory cues into spatial experience requirements.">
        <div className="case-method-grid">
          {researchMethods.map((method) => (
            <article key={method.title} className="case-method-card">
              <h3>{method.title}</h3>
              <p>{method.body}</p>
            </article>
          ))}
        </div>
        <div className="case-diagram-panel case-wide-diagram">
          <ResearchJourneyDiagram />
        </div>
      </CaseSection>

      <CaseSection id="research-output" kicker="Research output" title="Research outputs turned sensory goals into path, checkpoint, and material logic.">
        <div className="case-research-output">
          <div className="case-research-output-copy">
            <p className="home-section-kicker">Output set</p>
            <h3>Maps, palettes, checkpoints, and path logic for a multisensory spatial UX system.</h3>
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

      <CaseSection id="insights" kicker="Key insights" title="The experience needed to be quiet, guided, and bodily.">
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

      <CaseSection id="solution" kicker="Solution" title="A spatial UX system organized around path rhythm and sensory checkpoints.">
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
            <ConceptDiagram />
          </div>
        </div>
      </CaseSection>

      <CaseSection id="prototype" kicker="Prototype / Spatial Sketches" title="Low-fidelity spatial sketches explored how sensory cues could shape movement.">
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
        <div className="sensory-journey-flow" aria-label="Simplified sensory flow">
          {journeySteps.map((step, index) => (
            <div key={step} className="sensory-flow-step">
              <span>{step}</span>
              {index < journeySteps.length - 1 ? <strong aria-hidden="true">&rarr;</strong> : null}
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="testing" kicker="Testing / evaluation" title="The concept review focused on path clarity, sensory balance, accessibility, and maintenance.">
        <div className="case-grid">
          <div className="case-diagram-panel">
            <ReviewDiagram />
          </div>
          <div className="case-testing-groups">
            <div className="case-testing-block">
              <h3>Review questions</h3>
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

      <CaseSection id="reflection" kicker="Reflection" title="Experience design does not always need a screen.">
        <div className="case-reflection">
          <p>
            This project helped me treat interaction as physical, spatial, and sensory. Designing the garden meant shaping attention through movement, material, path rhythm, and atmosphere rather than interface elements alone.
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

function GardenHeroDiagram() {
  return (
    <svg viewBox="0 0 760 520" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M120 72c118-70 302-47 392 48 80 85 51 204-61 255-128 58-316 0-381-107-37-60-9-140 50-196Z" />
      <path className="sketch-wash sketch-wash-blush" d="M418 208c84-49 202-32 249 34 43 61 6 137-82 158-94 22-201-23-218-94-9-38 18-71 51-98Z" />
      <path className="sketch-wash sketch-wash-gray" d="M96 278c74-45 189-31 243 28 47 51 21 117-58 139-84 23-201-13-229-75-15-34 13-69 44-92Z" />

      <path className="sketch-line" d="M147 409c42-113 118-181 228-204 94-20 166 3 203 62 35 56 8 119-63 145-77 28-168 2-201-58-29-53 6-110 78-126 61-13 115 9 135 53 17 37-9 77-59 89-46 11-94-7-105-40-11-31 14-59 57-66" />
      <path className="sketch-line-soft" d="M112 393c75 47 170 69 285 66M145 153c69-36 145-51 228-43M531 139c54 28 91 70 113 125" />

      <path className="sketch-line" d="M124 124c-13-38 10-66 68-83M162 90c12 27 7 54-16 82M194 76c-8 32-25 58-52 78" />
      <path className="sketch-line" d="M588 167c31-24 66-26 105-5M636 134c-2 39-15 73-38 103M681 160c-31 18-63 29-97 34" />
      <path className="sketch-line" d="M170 351c33-13 66-13 98 0M192 327c-12 23-17 47-13 73M239 326c-20 17-42 30-67 39" />
      <path className="sketch-line" d="M515 396c-14-27-12-53 7-78 20 25 22 51 7 78Z" />
      <path className="sketch-line-soft" d="M493 355h58M503 377h38M260 185c24-31 51-45 82-41M276 212c35 0 66 9 94 27M434 312c30 14 62 16 96 5" />
      <path className="sketch-line" d="M327 307c22-14 45-14 68 0M327 328c22 14 45 14 68 0M327 307c-7 7-7 14 0 21M395 307c7 7 7 14 0 21" />

      <circle className="sketch-dot" cx="424" cy="265" r="5" />
      <circle className="sketch-dot" cx="503" cy="339" r="5" />
      <circle className="sketch-dot" cx="303" cy="374" r="5" />
      <circle className="sketch-dot" cx="279" cy="201" r="5" />
      <path className="sketch-line-soft" d="M424 265l-31-23M503 339l-42 13M303 374l-36 23M279 201l-48-2" />
      <text className="sketch-label" x="210" y="194">TOUCH</text>
      <text className="sketch-label" x="401" y="246">SCENT</text>
      <text className="sketch-label" x="461" y="376">COLOR</text>
      <text className="sketch-label" x="243" y="420">PAUSE</text>
    </svg>
  );
}

function ProblemDiagram() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-gray" d="M72 78c78-56 218-48 288 20 61 59 35 140-55 174-98 37-237-2-284-77-25-40 8-82 51-117Z" />
      <path className="sketch-wash sketch-wash-sage" d="M271 175c58-40 145-29 184 23 34 45 12 105-50 124-69 21-151-10-169-68-9-30 8-57 35-79Z" />
      <path className="sketch-line" d="M88 70h112c11 0 19 8 19 19v156c0 11-8 19-19 19H88c-11 0-19-8-19-19V89c0-11 8-19 19-19Z" />
      <path className="sketch-line-soft" d="M113 97h61M113 224h61M98 126h88M98 150h67M98 174h76" />
      <path className="sketch-line" d="M299 88c46-31 93-32 140-4M327 75c4 31-2 59-17 83M379 64c-9 35-28 65-56 89M427 88c-27 17-56 29-87 35" />
      <path className="sketch-line" d="M294 253c37-70 90-109 159-117 62-7 107 18 122 64" />
      <path className="sketch-line-soft" d="M300 277c58 23 116 24 173 2M244 121c33 24 54 61 65 111M219 167h71" />
      <path className="sketch-line-soft" d="M271 153l19 14-21 11M297 211l12 21-24-2" />
      <circle className="sketch-dot" cx="144" cy="288" r="5" />
      <circle className="sketch-dot" cx="342" cy="242" r="5" />
      <circle className="sketch-dot" cx="426" cy="205" r="5" />
      <text className="sketch-label" x="92" y="51">SCREEN</text>
      <text className="sketch-label" x="313" y="318">BODY / SPACE</text>
    </svg>
  );
}

function ResearchJourneyDiagram() {
  return (
    <svg viewBox="0 0 760 280" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M89 52c115-54 305-48 409 12 88 51 81 127-16 165-110 43-305 21-408-43-70-44-63-96 15-134Z" />
      <path className="sketch-line-soft" d="M77 143c70-37 133-41 189-12 50 25 95 22 136-10 47-36 101-32 163 11 39 27 82 29 128 5" />
      <path className="sketch-line" d="M57 143h646" />
      {journeySteps.map((step, index) => {
        const x = 78 + index * 124;
        return (
          <g key={step}>
            <circle className="sketch-dot" cx={x} cy="143" r="6" />
            <path className="sketch-line" d={`M${x - 38} 73h76v44h-76z`} />
            <path className="sketch-line-soft" d={`M${x - 22} 93h44M${x - 18} 105h31`} />
            <text className="sketch-label" x={x - 30} y="177">
              {step.toUpperCase()}
            </text>
            {index < journeySteps.length - 1 ? (
              <path className="sketch-line-soft" d={`M${x + 49} 131l18 12-18 12`} />
            ) : null}
          </g>
        );
      })}
      <path className="sketch-line" d="M98 223c52-18 99-18 142 0M288 223c56-20 108-20 156 0M508 223c48-16 91-16 130 0" />
      <path className="sketch-line-soft" d="M117 58c20-18 47-29 81-32M596 58c24-13 50-14 78-2" />
    </svg>
  );
}

function ResearchOutputSketch({ kind }: { kind: ResearchOutputKind }) {
  if (kind === "journey") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-sage" d="M28 32c36-25 94-21 123 10 25 27 11 61-30 73-43 13-98-5-115-38-9-18 3-31 22-45Z" />
        <path className="sketch-line-soft" d="M25 81c27-25 52-31 77-18 20 11 38 7 55-12" />
        <path className="sketch-line" d="M29 82h126" />
        {[32, 67, 102, 137].map((x) => (
          <g key={x}>
            <circle className="sketch-dot" cx={x} cy="82" r="4" />
            <path className="sketch-line-soft" d={`M${x - 11} 101h22`} />
          </g>
        ))}
      </svg>
    );
  }

  if (kind === "touchpoints") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M31 31c35-25 93-21 121 10 25 27 11 60-29 73-43 13-99-5-116-38-9-17 4-31 24-45Z" />
        <path className="sketch-line" d="M30 39h42v30H30zM108 22h42v30h-42zM32 86h42v30H32zM108 79h42v30h-42z" />
        <path className="sketch-line-soft" d="M72 54h35M129 52v27M74 101h34M51 69v17M42 54h20M119 37h20M44 101h20M120 94h20" />
        <circle className="sketch-dot" cx="90" cy="54" r="4" />
        <circle className="sketch-dot" cx="90" cy="101" r="4" />
      </svg>
    );
  }

  if (kind === "palette") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-gray" d="M28 35c35-27 96-24 124 8 25 28 10 62-31 73-43 13-100-6-116-40-8-17 4-29 23-41Z" />
        <path className="sketch-line" d="M24 84c26-47 59-68 100-62 38 5 57 27 55 65" />
        <path className="sketch-line-soft" d="M43 91h99M59 73c18 8 35 8 50 0M91 51c18-11 37-13 57-5" />
        <path className="sketch-line" d="M46 101c11-9 23-9 35 0M92 101c12-9 24-9 36 0M139 101c10-8 20-8 30 0" />
        <circle className="sketch-dot" cx="58" cy="72" r="4" />
        <circle className="sketch-dot" cx="112" cy="49" r="4" />
        <circle className="sketch-dot" cx="149" cy="85" r="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M30 30c35-24 93-20 121 11 24 27 10 60-29 72-43 13-99-5-116-37-9-18 4-31 24-46Z" />
      <path className="sketch-line" d="M31 97c16-43 46-70 90-79 35-7 60 3 73 29 12 25 0 50-30 62-31 12-70 2-85-22-13-22 1-45 32-52 24-5 45 2 55 18" />
      <path className="sketch-line-soft" d="M25 108c35 14 77 18 126 12" />
      <circle className="sketch-dot" cx="111" cy="35" r="4" />
      <circle className="sketch-dot" cx="78" cy="87" r="4" />
      <circle className="sketch-dot" cx="143" cy="76" r="4" />
    </svg>
  );
}

function ConceptDiagram() {
  return (
    <svg viewBox="0 0 520 390" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M74 70c83-59 233-54 312 10 70 57 51 141-38 181-99 45-250 11-306-69-32-46-14-83 32-122Z" />
      <path className="sketch-wash sketch-wash-blush" d="M238 152c61-42 158-33 198 18 35 45 12 101-52 121-69 22-154-8-175-61-11-28 4-55 29-78Z" />
      <path className="sketch-line" d="M62 73h96v54H62zM338 73h102v54H338zM62 270h112v58H62zM323 270h122v58H323z" />
      <path className="sketch-line-soft" d="M84 99h50M361 99h55M87 298h63M348 298h70" />
      <path className="sketch-line" d="M170 300c35-94 93-148 176-160 66-9 113 17 126 75M170 300c62 33 128 36 197 8" />
      <path className="sketch-line-soft" d="M158 100c55-17 115-7 180 28M118 127c12 53 30 101 52 143M389 127c-9 53-24 101-45 143" />
      <path className="sketch-line" d="M235 190c17-10 36-10 57 0M222 230c30-19 65-20 104-3M255 275c20 13 42 13 67 0" />
      <circle className="sketch-dot" cx="170" cy="300" r="5" />
      <circle className="sketch-dot" cx="255" cy="190" r="5" />
      <circle className="sketch-dot" cx="337" cy="228" r="5" />
      <circle className="sketch-dot" cx="345" cy="308" r="5" />
      <text className="sketch-label" x="83" y="64">ENTRY</text>
      <text className="sketch-label" x="348" y="64">CHECKPOINTS</text>
      <text className="sketch-label" x="74" y="352">RHYTHM</text>
      <text className="sketch-label" x="343" y="352">REFLECTION</text>
    </svg>
  );
}

function PrototypeSketch({ kind }: { kind: PrototypeKind }) {
  if (kind === "path") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-sage" d="M47 37c55-35 142-27 177 18 30 39 6 85-53 99-64 15-140-14-160-61-10-24 10-40 36-56Z" />
        <path className="sketch-line" d="M47 138c23-58 61-93 116-103 47-8 82 7 99 44 15 34-5 70-49 82-45 12-96-7-111-42-13-30 7-62 48-70 34-7 64 7 74 35" />
        <path className="sketch-line-soft" d="M40 151c51 18 110 20 178 4" />
        <circle className="sketch-dot" cx="150" cy="49" r="4" />
        <circle className="sketch-dot" cx="101" cy="119" r="4" />
      </svg>
    );
  }

  if (kind === "tactile") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-gray" d="M47 39c53-35 138-27 174 17 31 38 8 83-49 98-62 16-138-11-160-57-12-23 8-41 35-58Z" />
        <path className="sketch-line" d="M47 119c52-37 107-46 166-27" />
        <path className="sketch-line-soft" d="M48 140c58 17 119 17 183 0M65 93l16 34M95 84l16 45M127 80l16 48M160 82l16 44M192 91l16 33" />
        <path className="sketch-line" d="M58 68c18-13 37-15 58-5M142 58c23-13 48-13 75 1" />
        <circle className="sketch-dot" cx="82" cy="127" r="4" />
        <circle className="sketch-dot" cx="155" cy="128" r="4" />
      </svg>
    );
  }

  if (kind === "scent") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M49 37c54-34 139-27 174 17 31 38 8 84-49 99-63 16-139-11-160-58-12-23 9-41 35-58Z" />
        <path className="sketch-line" d="M84 118c-12-25-9-49 10-73 23 26 26 51 9 75M144 122c-14-30-10-58 13-85 26 29 29 58 10 87M199 122c-12-24-9-47 9-70 22 25 25 48 9 70" />
        <path className="sketch-line-soft" d="M73 76h42M131 70h52M188 82h40M54 132c59 20 118 21 178 3" />
        <path className="sketch-line-soft" d="M76 47c-11-14-10-27 2-38M132 39c-11-13-10-25 3-36M194 52c-11-13-10-25 2-36" />
        <circle className="sketch-dot" cx="97" cy="119" r="4" />
        <circle className="sketch-dot" cx="158" cy="123" r="4" />
      </svg>
    );
  }

  if (kind === "color") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-sage" d="M46 38c56-36 143-27 178 18 30 39 5 84-53 99-64 15-140-14-160-61-10-25 10-41 35-56Z" />
        <path className="sketch-line" d="M35 115c37-44 78-61 122-50 35 8 60 32 77 70" />
        <path className="sketch-line-soft" d="M53 129h158M67 93c16 9 34 10 54 2M130 78c20 13 42 14 68 4" />
        <path className="sketch-line" d="M44 50h42v28H44zM109 35h42v28h-42zM175 54h42v28h-42zM86 111h42v28H86zM150 115h42v28h-42z" />
        <circle className="sketch-dot" cx="65" cy="94" r="4" />
        <circle className="sketch-dot" cx="171" cy="100" r="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-gray" d="M48 39c54-35 138-27 174 17 31 38 8 83-49 98-62 16-138-11-160-57-12-23 9-41 35-58Z" />
      <path className="sketch-line" d="M51 121c55-40 109-49 163-28" />
      <path className="sketch-line" d="M93 78h82c12 0 22 10 22 22v35H71v-35c0-12 10-22 22-22Z" />
      <path className="sketch-line-soft" d="M91 102h86M88 122h92M113 78c-5-21 5-37 30-49M143 29c17 14 25 30 24 49" />
      <circle className="sketch-dot" cx="77" cy="136" r="4" />
      <circle className="sketch-dot" cx="197" cy="136" r="4" />
    </svg>
  );
}

function ReviewDiagram() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M87 77c76-55 219-50 291 13 63 55 42 136-44 174-96 42-238 8-292-68-29-42 1-82 45-119Z" />
      <path className="sketch-line" d="M84 75h124v92H84zM312 75h124v92H312zM168 238h184v72H168z" />
      <path className="sketch-line-soft" d="M109 105h72M109 130h52M337 105h72M337 130h54M198 265h124M198 287h82" />
      <path className="sketch-line" d="M208 121h45M267 121h45M260 167v71" />
      <path className="sketch-line-soft" d="M235 109l18 12-18 12M294 109l18 12-18 12M264 220l-4 18-12-13M262 220l-2 18 15-10" />
      <path className="sketch-line" d="M91 219c46-31 91-32 135-2M296 217c47-30 93-30 138 1" />
      <circle className="sketch-dot" cx="146" cy="198" r="5" />
      <circle className="sketch-dot" cx="260" cy="198" r="5" />
      <circle className="sketch-dot" cx="376" cy="198" r="5" />
      <path className="sketch-line-soft" d="M146 198c34 25 72 25 114 0M260 198c41-25 80-25 116 0" />
      <text className="sketch-label" x="205" y="116">REVIEW</text>
    </svg>
  );
}
