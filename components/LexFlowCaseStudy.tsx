import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText, Mail } from "lucide-react";
import type { ReactNode } from "react";

import { site, type Project } from "@/data/portfolio";

type LexFlowCaseStudyProps = {
  project: Project;
};

type ResearchOutputKind = "journey" | "architecture" | "evidence" | "mockCourt";
type WireframeKind = "onboarding" | "evidence" | "timeline" | "aiPanel" | "mockCourt";

const caseNav = [
  { href: "#overview", label: "Overview" },
  { href: "#problem", label: "Problem" },
  { href: "#research", label: "Research" },
  { href: "#insights", label: "Insights" },
  { href: "#solution", label: "Solution" },
  { href: "#prototype", label: "Prototype" },
  { href: "#testing", label: "Testing" },
  { href: "#reflection", label: "Reflection" },
];

const researchMethods = [
  {
    title: "Touchpoint analysis",
    body: "Analyzed legal-service touchpoints and online consultation flow to locate where users moved from general questions into formal case preparation.",
  },
  {
    title: "User interviews",
    body: "Interviewed legal-service users and legal professionals to understand uncertainty, coordination burden, and expectations for expert review.",
  },
  {
    title: "Journey mapping",
    body: "Mapped the journey from consultation to case preparation, including intake, evidence organization, status updates, and rehearsal needs.",
  },
  {
    title: "Interaction testing",
    body: "Tested evidence-card and mock-court interactions to see whether users could connect documents, case logic, and next-step preparation.",
  },
];

const researchOutputs: { title: string; body: string; kind: ResearchOutputKind }[] = [
  {
    title: "User journey map",
    body: "Consultation-to-preparation phases, stress points, and visibility gaps.",
    kind: "journey",
  },
  {
    title: "Information architecture",
    body: "A product structure for intake, evidence, progress, support, and practice.",
    kind: "architecture",
  },
  {
    title: "Evidence-card system",
    body: "A way to translate scattered documents into reusable case-prep units.",
    kind: "evidence",
  },
  {
    title: "Mock-court service flow",
    body: "A rehearsal path for roles, prompts, evidence review, and procedure practice.",
    kind: "mockCourt",
  },
];

const insights = [
  {
    title: "Visibility creates trust",
    body: "Legal service felt intimidating when users could not see status, next steps, or what evidence mattered.",
  },
  {
    title: "Evidence handling is UX",
    body: "Documents, clue cards, and preparation tasks were not back-office details. They shaped how users understood the case.",
  },
  {
    title: "AI should support expert workflows",
    body: "A legal assistant is most credible when it clarifies workflow, language, and preparation while keeping expert review visible.",
  },
];

const solutionPillars = [
  {
    title: "Guided Intake",
    body: "Helps users describe case needs and understand required information before moving into legal support.",
  },
  {
    title: "Evidence Workspace",
    body: "Organizes documents, evidence cards, and case notes so scattered materials become usable preparation.",
  },
  {
    title: "Case Progress",
    body: "Shows milestones and next steps so users can understand where the case stands and what needs attention.",
  },
  {
    title: "Mock-Court Practice",
    body: "Helps users rehearse legal procedures before formal interaction, keeping practice connected to case materials.",
  },
];

const wireframeSketches: { title: string; body: string; kind: WireframeKind }[] = [
  {
    title: "Onboarding / consultation",
    body: "A guided entry flow asks for case needs, urgency, and missing information before consultation.",
    kind: "onboarding",
  },
  {
    title: "Evidence workspace",
    body: "Documents, evidence cards, and notes sit together so users can prepare around one case logic.",
    kind: "evidence",
  },
  {
    title: "Case timeline",
    body: "Milestones make legal progress visible from consultation through preparation and next steps.",
    kind: "timeline",
  },
  {
    title: "AI support panel",
    body: "AI guidance explains process steps and suggests preparation prompts while keeping expert review visible.",
    kind: "aiPanel",
  },
  {
    title: "Mock-court practice",
    body: "A rehearsal screen connects roles, prompts, evidence cards, and feedback before formal interaction.",
    kind: "mockCourt",
  },
];

const testingFindings = [
  "Users understood the legal process better when shown as a visible timeline.",
  "Evidence cards helped users connect scattered documents to case preparation.",
  "Lawyers needed more professional controls, such as filtering, document preview, and case-status management.",
];

const iterationDirections = [
  "Simplify onboarding language for first-time users.",
  "Add richer document previews.",
  "Provide advanced controls for legal professionals.",
];

const svgProps = {
  "aria-hidden": true,
  focusable: false,
} as const;

export function LexFlowCaseStudy({ project }: LexFlowCaseStudyProps) {
  return (
    <main className="lexflow-case">
      <nav className="lexflow-case-topbar" aria-label="LexFlow case study navigation">
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
          <p className="home-section-kicker">LexFlow case study</p>
          <h1>{project.title}</h1>
          <p className="case-lede">
            {project.summary} The case frames legal support as a guided service system, with AI used to clarify intake, evidence, progress, and preparation.
          </p>
          <div className="case-facts" aria-label="Project facts">
            {project.quickFacts.map((fact) => (
              <div key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="sketch-panel case-hero-sketch">
          <LexFlowHeroDiagram />
        </div>
      </section>

      <CaseSection id="problem" kicker="Problem" title="Legal support felt opaque before it felt usable.">
        <div className="case-grid">
          <div className="case-copy-block">
            <p>
              The project began with a service gap: legal journeys can be hard to follow because intake, documents, evidence, attorney communication, and preparation often happen across disconnected touchpoints.
            </p>
            <p>
              For first-time legal users, that fragmentation creates anxiety. For legal professionals, it creates coordination work. LexFlow focuses on making the process visible enough to trust.
            </p>
          </div>
          <div className="case-diagram-panel">
            <ProblemDiagram />
          </div>
        </div>
      </CaseSection>

      <CaseSection id="research" kicker="Research" title="The research translated legal complexity into service structure.">
        <div className="case-method-grid">
          {researchMethods.map((method) => (
            <article key={method.title} className="case-method-card">
              <h3>{method.title}</h3>
              <p>{method.body}</p>
            </article>
          ))}
        </div>
        <div className="case-diagram-panel case-wide-diagram">
          <ResearchMapDiagram />
        </div>
        <div className="case-research-output">
          <div className="case-research-output-copy">
            <p className="home-section-kicker">Research output</p>
            <h3>Artifacts that turned legal-service research into product structure.</h3>
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

      <CaseSection id="insights" kicker="Key insights" title="The product opportunity lived between clarity, trust, and preparation.">
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

      <CaseSection id="solution" kicker="Solution" title="A guided legal workflow, not a stand-alone chatbot.">
        <div className="case-grid case-solution-grid">
          <div className="case-pillar-list">
            {solutionPillars.map((pillar) => (
              <article key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
          <div className="case-diagram-panel">
            <SolutionSystemDiagram />
          </div>
        </div>
      </CaseSection>

      <CaseSection id="prototype" kicker="Prototype / Flow" title="Low-fidelity sketches turn service steps into product surfaces.">
        <div className="case-wireframe-grid">
          {wireframeSketches.map((screen) => (
            <article key={screen.title} className="case-wireframe-card">
              <div className="case-wireframe-visual">
                <LowFiWireframeSketch kind={screen.kind} />
              </div>
              <h3>{screen.title}</h3>
              <p>{screen.body}</p>
            </article>
          ))}
        </div>
        <p className="case-section-note">
          These sketches avoid polished screenshots and show the intended product logic: guide intake, structure evidence, make progress visible, keep AI as support, and help users rehearse before formal legal interaction.
        </p>
      </CaseSection>

      <CaseSection id="testing" kicker="Testing / evaluation" title="Testing centered on whether the legal workflow became easier to understand.">
        <div className="case-grid">
          <div className="case-diagram-panel">
            <TestingDiagram />
          </div>
          <div className="case-testing-groups">
            <div className="case-testing-block">
              <h3>Testing findings</h3>
              <div className="case-testing-list">
                {testingFindings.map((note) => (
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

      <CaseSection id="reflection" kicker="Reflection" title="Legal UX should translate expertise into understandable action.">
        <div className="case-reflection">
          <p>{project.reflection.text}</p>
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

function LexFlowHeroDiagram() {
  return (
    <svg viewBox="0 0 760 520" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M123 91c103-78 300-71 390 20 78 80 44 194-69 245-130 58-326 9-385-96-31-55 7-112 64-169Z" />
      <path className="sketch-wash sketch-wash-blush" d="M424 250c76-51 199-39 248 24 45 58 14 136-71 159-89 24-195-18-217-88-11-36 9-68 40-95Z" />
      <path className="sketch-line" d="M300 72h154l35 41H265l35-41Z" />
      <path className="sketch-line" d="M286 113h186M310 113v106M377 113v106M444 113v106M272 219h214" />
      <path className="sketch-line-soft" d="M307 243h143M335 264h93M354 285h55" />

      <path className="sketch-line" d="M81 102h132v160H81zM543 111h132v160H543z" />
      <path className="sketch-line-soft" d="M106 139h73M106 168h55M106 197h82M568 147h74M568 176h53M568 205h82" />
      <path className="sketch-line" d="M112 310h102v62H112zM250 310h102v62H250zM388 310h102v62H388zM526 310h102v62H526z" />
      <path className="sketch-line-soft" d="M132 334h58M270 334h58M408 334h58M546 334h58M132 352h36M270 352h44M408 352h34M546 352h42" />
      <path className="sketch-line" d="M213 341h37M352 341h36M490 341h36" />
      <path className="sketch-line-soft" d="M233 331l17 10-17 10M372 331l16 10-16 10M510 331l16 10-16 10" />
      <path className="sketch-line" d="M198 146c42-25 86-25 130 0M431 146c42-24 85-24 128 0" />
      <path className="sketch-line-soft" d="M180 403h396M218 421h94M352 421h98M492 421h58" />
      <circle className="sketch-dot" cx="218" cy="403" r="5" />
      <circle className="sketch-dot" cx="352" cy="403" r="5" />
      <circle className="sketch-dot" cx="492" cy="403" r="5" />
      <circle className="sketch-dot" cx="576" cy="403" r="5" />
      <text className="sketch-label" x="586" y="141">AI</text>
    </svg>
  );
}

function ProblemDiagram() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-gray" d="M82 76c77-54 216-45 284 24 58 58 31 139-59 172-95 35-232-3-277-78-24-39 9-82 52-118Z" />
      <path className="sketch-line" d="M61 74h128v102H61zM312 57h142v118H312zM75 232h132v84H75zM318 232h128v84H318z" />
      <path className="sketch-line-soft" d="M84 104h76M84 127h56M84 150h78M336 91h80M336 116h55M336 141h86M96 263h78M96 287h52M340 263h72M340 287h54" />
      <path className="sketch-line" d="M189 125c44-26 85-26 123 0M212 275c37-17 72-17 106 0M257 125v150" />
      <path className="sketch-line-soft" d="M238 144l19-19 19 19M238 256l19 19 19-19" />
      <circle className="sketch-dot" cx="257" cy="125" r="5" />
      <circle className="sketch-dot" cx="257" cy="275" r="5" />
      <path className="sketch-line" d="M225 185h64v52h-64z" />
      <path className="sketch-line-soft" d="M238 206h39M238 222h28" />
    </svg>
  );
}

function ResearchMapDiagram() {
  return (
    <svg viewBox="0 0 760 280" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M98 52c108-48 283-44 383 5 83 41 92 116 18 154-90 47-293 38-405-18-80-40-76-103 4-141Z" />
      <path className="sketch-line" d="M70 73h150v132H70zM300 49h160v156H300zM548 73h148v132H548z" />
      <path className="sketch-line-soft" d="M98 112h86M98 140h62M98 168h91M329 84h96M329 112h72M329 140h88M329 168h56M577 112h80M577 140h54M577 168h82" />
      <path className="sketch-line" d="M219 139h81M460 139h88" />
      <path className="sketch-line-soft" d="M278 126l22 13-22 13M526 126l22 13-22 13" />
      <path className="sketch-line" d="M104 227c60-18 118-18 174 0M328 227c60-18 120-18 178 0M562 227c44-14 87-14 129 0" />
      <circle className="sketch-dot" cx="145" cy="227" r="5" />
      <circle className="sketch-dot" cx="386" cy="227" r="5" />
      <circle className="sketch-dot" cx="622" cy="227" r="5" />
    </svg>
  );
}

function ResearchOutputSketch({ kind }: { kind: ResearchOutputKind }) {
  if (kind === "journey") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-sage" d="M31 35c34-26 96-23 123 8 24 28 12 62-26 75-44 15-103-2-122-36-10-18 4-33 25-47Z" />
        <path className="sketch-line-soft" d="M25 72h130" />
        {[28, 64, 100, 136].map((x) => (
          <g key={x}>
            <circle className="sketch-dot" cx={x} cy="72" r="4" />
            <path className="sketch-line" d={`M${x - 15} 26h30v25h-30z`} />
            <path className="sketch-line-soft" d={`M${x - 9} 37h18M${x - 9} 44h12`} />
          </g>
        ))}
        <path className="sketch-line-soft" d="M31 95h34M74 95h38M121 95h30" />
      </svg>
    );
  }

  if (kind === "architecture") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-gray" d="M28 32c35-24 91-18 119 13 24 27 10 60-30 70-41 10-95-8-112-39-9-17 5-31 23-44Z" />
        <path className="sketch-line" d="M22 27h48v30H22zM109 27h48v30h-48zM63 75h54v34H63z" />
        <path className="sketch-line-soft" d="M34 40h24M119 40h27M75 89h30M75 100h22" />
        <path className="sketch-line" d="M70 42h39M90 57v18" />
        <path className="sketch-line-soft" d="M94 64l-4 11-7-9M92 64l-2 11 10-6" />
      </svg>
    );
  }

  if (kind === "evidence") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M33 31c35-25 92-21 120 9 25 27 11 61-29 74-43 14-98-5-116-37-10-18 4-32 25-46Z" />
        <path className="sketch-line" d="M28 27h42v50H28zM77 42h42v50H77zM126 27h42v50h-42z" />
        <path className="sketch-line-soft" d="M38 43h22M38 55h18M87 58h22M87 70h18M136 43h22M136 55h18" />
        <path className="sketch-line" d="M49 77c20 18 45 24 77 0" />
        <circle className="sketch-dot" cx="49" cy="77" r="4" />
        <circle className="sketch-dot" cx="98" cy="92" r="4" />
        <circle className="sketch-dot" cx="147" cy="77" r="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M29 36c33-29 97-27 126 5 25 27 10 64-31 76-45 13-103-7-119-41-8-18 5-29 24-40Z" />
      <path className="sketch-line" d="M63 20h54l13 17H50l13-17ZM55 37h70M70 37v29M90 37v29M110 37v29M48 66h84" />
      <path className="sketch-line" d="M24 84h42v26H24zM76 84h42v26H76zM128 84h42v26h-42z" />
      <path className="sketch-line-soft" d="M34 99h22M86 99h22M138 99h22M66 97h10M118 97h10" />
    </svg>
  );
}

function SolutionSystemDiagram() {
  return (
    <svg viewBox="0 0 520 390" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M86 68c77-62 221-57 296 11 69 62 47 151-40 190-101 46-249 10-303-73-30-47 0-89 47-128Z" />
      <path className="sketch-line" d="M197 70h125c15 0 27 12 27 27v210c0 15-12 27-27 27H197c-15 0-27-12-27-27V97c0-15 12-27 27-27Z" />
      <path className="sketch-line-soft" d="M218 95h78M216 310h84" />
      <path className="sketch-line" d="M197 127h124v44H197zM197 194h124v44H197zM197 260h124v34H197z" />
      <path className="sketch-line-soft" d="M216 147h76M216 214h61M216 279h70" />
      <path className="sketch-line" d="M58 127h78v58H58zM382 127h86v58h-86zM62 250h84v58H62zM377 250h88v58h-88z" />
      <path className="sketch-line-soft" d="M76 150h42M400 150h45M82 273h42M395 273h48" />
      <path className="sketch-line" d="M136 156h61M321 156h61M146 278h51M321 278h56" />
      <path className="sketch-line-soft" d="M177 146l20 10-20 10M362 146l20 10-20 10M176 268l21 10-21 10M342 268l-21 10 21 10" />
      <text className="sketch-label" x="407" y="151">AI</text>
    </svg>
  );
}

function LowFiWireframeSketch({ kind }: { kind: WireframeKind }) {
  if (kind === "onboarding") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M48 39c52-34 135-28 172 15 32 36 12 81-43 98-61 18-139-8-163-55-12-24 8-42 34-58Z" />
        <path className="sketch-line" d="M36 28h120v124H36zM174 39h48v102h-48z" />
        <path className="sketch-line-soft" d="M54 52h67M54 72h82M54 92h56M54 122h34M96 122h35M185 61h24M185 82h25M185 103h20" />
        <path className="sketch-line" d="M52 110h92M52 134h38M100 134h44" />
        <circle className="sketch-dot" cx="54" cy="122" r="3.5" />
        <circle className="sketch-dot" cx="185" cy="128" r="3.5" />
        <text className="sketch-label" x="181" y="56">Q</text>
      </svg>
    );
  }

  if (kind === "evidence") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-sage" d="M48 35c54-35 139-26 175 18 31 38 8 84-48 99-63 16-139-12-162-58-12-23 9-42 35-59Z" />
        <path className="sketch-line" d="M27 32h206v123H27zM52 32v123M178 32v123" />
        <path className="sketch-line-soft" d="M36 54h10M36 73h10M36 92h10M64 55h44M64 72h28M190 55h27M190 75h21M190 111h26" />
        <path className="sketch-line" d="M70 93h44v34H70zM124 72h42v34h-42z" />
        <path className="sketch-line-soft" d="M80 107h22M134 86h22M114 110c12-2 21-7 28-17" />
        <circle className="sketch-dot" cx="114" cy="110" r="3.5" />
        <circle className="sketch-dot" cx="142" cy="93" r="3.5" />
      </svg>
    );
  }

  if (kind === "timeline") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-gray" d="M43 40c57-37 143-29 177 16 30 40 5 86-54 99-63 14-138-14-156-61-10-25 8-40 33-54Z" />
        <path className="sketch-line" d="M30 42h200v98H30z" />
        <path className="sketch-line-soft" d="M52 84h154" />
        {[54, 92, 130, 168, 206].map((x) => (
          <g key={x}>
            <circle className="sketch-dot" cx={x} cy="84" r="4" />
            <path className="sketch-line" d={`M${x - 18} 104h36v22h-36z`} />
            <path className="sketch-line-soft" d={`M${x - 10} 116h20`} />
          </g>
        ))}
        <path className="sketch-line-soft" d="M48 61h70M48 144h82" />
      </svg>
    );
  }

  if (kind === "aiPanel") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M49 38c52-34 136-26 171 17 31 38 10 82-46 97-61 17-137-10-160-56-12-23 9-41 35-58Z" />
        <path className="sketch-line" d="M31 34h197v119H31zM151 34v119" />
        <path className="sketch-line-soft" d="M48 58h68M48 79h48M48 105h76M48 128h52M166 62h42M166 84h31M166 118h43" />
        <path className="sketch-line" d="M162 47h52v55h-52zM162 112h52v28h-52z" />
        <path className="sketch-line-soft" d="M176 70c11-10 21-10 31 0M177 130h23" />
        <text className="sketch-label" x="171" y="63">AI</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M45 38c56-36 143-27 177 18 30 39 6 85-52 99-64 15-140-14-160-61-10-25 10-41 35-56Z" />
      <path className="sketch-line" d="M86 28h82l19 24H67l19-24ZM73 52h108M96 52v38M126 52v38M156 52v38M62 90h130" />
      <path className="sketch-line" d="M31 111h54v34H31zM103 108h54v40h-54zM175 111h54v34h-54z" />
      <path className="sketch-line-soft" d="M44 129h28M116 126h28M188 129h28M85 130h18M157 130h18" />
      <circle className="sketch-dot" cx="59" cy="100" r="4" />
      <circle className="sketch-dot" cx="130" cy="100" r="4" />
      <circle className="sketch-dot" cx="201" cy="100" r="4" />
    </svg>
  );
}

function TestingDiagram() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M91 77c72-55 212-51 285 12 63 55 42 136-44 174-94 42-238 8-290-68-29-42 4-81 49-118Z" />
      <path className="sketch-line" d="M93 78h142v112H93zM286 78h142v112H286zM149 238h222v72H149z" />
      <path className="sketch-line-soft" d="M119 113h82M119 140h56M119 166h73M312 113h78M312 140h52M312 166h70M178 266h156M178 288h112" />
      <path className="sketch-line" d="M235 134h51M260 190v48" />
      <path className="sketch-line-soft" d="M264 221l-4 17-11-14M262 221l-2 17 15-10" />
      <circle className="sketch-dot" cx="162" cy="212" r="5" />
      <circle className="sketch-dot" cx="260" cy="212" r="5" />
      <circle className="sketch-dot" cx="358" cy="212" r="5" />
    </svg>
  );
}
