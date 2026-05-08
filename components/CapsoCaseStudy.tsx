import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText, Mail } from "lucide-react";
import type { ReactNode } from "react";

import { site, type Project } from "@/data/portfolio";

type CapsoCaseStudyProps = {
  project: Project;
};

type ResearchOutputKind = "persona" | "journey" | "needs" | "prompt";
type WireframeKind = "upload" | "mood" | "style" | "captions" | "edit";

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

const overviewFacts = [
  {
    label: "Project type",
    value: "AI-assisted mobile captioning app",
  },
  {
    label: "Role",
    value: "UX research, product strategy, mobile UX, AI prototyping, interaction design",
  },
  {
    label: "Scope",
    value: "Caption generation flow, context interpretation, tone/style selection, editable output",
  },
  {
    label: "Built from",
    value: "Survey insights, persona, user journey, AI prompt logic, mobile prototype",
  },
  {
    label: "My contribution",
    value:
      "I translated the vague problem of ‘not knowing what to write’ into a structured AI caption workflow based on image context, emotional tone, and editable writing options.",
  },
];

const researchMethods = [
  {
    title: "Expression habit review",
    body: "Reviewed online posting behavior and captioning pain points to understand why users fall back on familiar phrases and internet slang.",
  },
  {
    title: "Survey synthesis",
    body: "Used a survey signal of 103 responses and 96 valid responses to understand expression difficulty without treating the sample as a universal claim.",
  },
  {
    title: "Persona and journey",
    body: "Created a persona and posting journey around the moment after photo selection, when the user wants to post but cannot settle on words.",
  },
  {
    title: "Tone and context analysis",
    body: "Analyzed how image context, tone, style, voice, and caption length affect what kind of AI support would feel useful.",
  },
];

const researchOutputs: { title: string; body: string; kind: ResearchOutputKind }[] = [
  {
    title: "Persona",
    body: "A social poster who has visual confidence but hesitates when writing has to match the moment.",
    kind: "persona",
  },
  {
    title: "Posting journey map",
    body: "A flow from capture to hesitation, search, generic caption reuse, and delayed posting.",
    kind: "journey",
  },
  {
    title: "Caption need map",
    body: "A structure connecting scene context, tone, style, audience, and desired voice.",
    kind: "needs",
  },
  {
    title: "AI prompt structure",
    body: "A prompt logic that combines image context, tone, style, voice, and editable output options.",
    kind: "prompt",
  },
];

const insights = [
  {
    title: "Caption writing is a context-matching problem, not just a text-generation problem.",
    body: "The caption has to fit the photo, the context, the tone, the audience, and the user’s voice.",
  },
  {
    title: "Users need control over tone and style, not one generic AI answer.",
    body: "Tone, style, and voice controls make the output feel steered by the user instead of dropped in from a generic writing tool.",
  },
  {
    title: "Useful AI support should reduce blank-page anxiety while keeping the user’s voice editable.",
    body: "Capso gives users a faster first draft they can refine into their own words.",
  },
];

const solutionPillars = [
  {
    title: "Image Context Input",
    body: "Understands the photo or visual moment users want to post before generating language.",
  },
  {
    title: "Mood & Tone Selection",
    body: "Lets users guide tone and style, from playful and warm to reflective or concise.",
  },
  {
    title: "AI Caption Generation",
    body: "Produces multiple caption options based on image context, tone, style, voice, and writing constraints.",
  },
  {
    title: "Editable Output",
    body: "Lets users refine, save, regenerate, or adapt editable output so the final post still feels personally owned.",
  },
];

const wireframeSketches: { title: string; body: string; kind: WireframeKind }[] = [
  {
    title: "Photo upload / selection",
    body: "The entry point starts with the visual moment, using camera or library selection as the first step.",
    kind: "upload",
  },
  {
    title: "Mood selector",
    body: "Users choose the tone before asking AI to write.",
    kind: "mood",
  },
  {
    title: "Style / voice options",
    body: "Short controls help users steer style, voice, and length without heavy setup.",
    kind: "style",
  },
  {
    title: "Generated caption list",
    body: "Multiple options make the output feel like a menu of starting points instead of one final answer.",
    kind: "captions",
  },
  {
    title: "Edit / regenerate flow",
    body: "Users can revise, save, or regenerate to avoid captions that sound too generic or AI-written.",
    kind: "edit",
  },
];

const evaluationFindings = [
  "Users need quick entry with minimal setup.",
  "Generated captions should offer multiple tone and style choices.",
  "Users need easy editing to avoid AI-sounding output.",
  "The interface should avoid making writing feel like a complicated task.",
];

const iterationDirections = [
  "Improve tone and style labels.",
  "Add more personal style memory.",
  "Make regeneration more transparent.",
  "Reduce steps before the first useful caption.",
];

const svgProps = {
  "aria-hidden": true,
  focusable: false,
} as const;

export function CapsoCaseStudy({ project }: CapsoCaseStudyProps) {
  return (
    <main className="lexflow-case capso-case">
      <nav className="lexflow-case-topbar" aria-label="Capso case study navigation">
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
          <p className="home-section-kicker">Capso case study</p>
          <h1>{project.title}</h1>
          <p className="case-lede">
            Capso is an AI-assisted caption generation app that helps users turn visual moments into expressive, contextual, and editable captions for social posting.
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
          <CapsoHeroDiagram />
        </div>
      </section>

      <CaseSection id="problem" kicker="Problem" title="Photos were easy. Captions were not.">
        <div className="case-grid">
          <div className="case-copy-block">
            <p>
              Users can take and select photos quickly, but writing a caption often creates friction right before posting. Capso is not a generic AI writing tool; it is designed around social posting, visual context, and self-expression.
            </p>
            <p>
              Many users depend on repetitive internet slang or generic expressions because writing from scratch feels effortful. Capso frames captioning as a context, tone, style, and voice-matching problem, not only a writing problem.
            </p>
            <p>
              The product focuses on reducing the effort between capturing a moment and expressing it meaningfully, while keeping the final caption as editable output owned by the user.
            </p>
          </div>
          <div className="case-diagram-panel">
            <ProblemDiagram />
          </div>
        </div>
      </CaseSection>

      <CaseSection id="research" kicker="Research" title="Research reframed caption difficulty as context, tone, and voice.">
        <div className="case-method-grid">
          {researchMethods.map((method) => (
            <article key={method.title} className="case-method-card">
              <h3>{method.title}</h3>
              <p>{method.body}</p>
            </article>
          ))}
        </div>
        <div className="case-diagram-panel case-wide-diagram">
          <ResearchSignalDiagram />
        </div>
        <div className="case-research-output">
          <div className="case-research-output-copy">
            <p className="home-section-kicker">Research output</p>
            <h3>Artifacts that turned expression difficulty into an AI caption workflow.</h3>
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

      <CaseSection id="insights" kicker="Key insights" title="The product opportunity was guided expression, not automatic writing.">
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

      <CaseSection id="solution" kicker="Solution" title="A focused caption workflow turns visual context into editable output.">
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

      <CaseSection id="prototype" kicker="Prototype / Flow" title="Low-fidelity sketches made the caption workflow concrete.">
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
          Simplified flow: Photo &rarr; Context &rarr; Mood &rarr; Generate &rarr; Edit &rarr; Post.
        </p>
      </CaseSection>

      <CaseSection id="testing" kicker="Testing / evaluation" title="Testing focused on reducing writing friction.">
        <div className="case-grid">
          <div className="case-diagram-panel">
            <EvaluationDiagram />
          </div>
          <div className="case-testing-groups">
            <div className="case-testing-block">
              <h3>Prototype review signals</h3>
              <div className="case-testing-list">
                {evaluationFindings.map((note) => (
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

      <CaseSection id="reflection" kicker="Reflection" title="AI writing tools should support expression while preserving personal voice.">
        <div className="case-reflection">
          <p>
            Designing for AI writing means designing for confidence, authorship, and control, not just output speed. Capso’s value comes from reducing caption friction while preserving ownership of the final text.
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

function CapsoHeroDiagram() {
  return (
    <svg viewBox="0 0 760 520" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M102 96c111-76 314-71 418 16 89 75 68 181-48 236-130 61-332 17-408-89-42-59-12-112 38-163Z" />
      <path className="sketch-wash sketch-wash-sage" d="M391 234c75-55 207-46 263 20 50 60 20 138-67 163-94 27-207-13-237-85-16-38 8-70 41-98Z" />
      <path className="sketch-line" d="M94 124h142c18 0 32 14 32 32v214c0 18-14 32-32 32H94c-18 0-32-14-32-32V156c0-18 14-32 32-32Z" />
      <path className="sketch-line-soft" d="M105 156h120M100 372h128" />
      <path className="sketch-line" d="M94 183h142v116H94z" />
      <circle className="sketch-line-soft" cx="131" cy="229" r="19" />
      <path className="sketch-line-soft" d="M97 279l48-48 30 31 18-18 39 35M330 139h136M330 172h92M330 205h118" />
      <path className="sketch-line" d="M300 257h170M300 257c16-27 47-43 84-43 41 0 71 17 86 43" />
      <circle className="sketch-dot" cx="319" cy="257" r="5" />
      <circle className="sketch-dot" cx="385" cy="229" r="5" />
      <circle className="sketch-dot" cx="452" cy="257" r="5" />
      <path className="sketch-line" d="M526 110h146c18 0 32 14 32 32v234c0 18-14 32-32 32H526c-18 0-32-14-32-32V142c0-18 14-32 32-32Z" />
      <path className="sketch-line-soft" d="M538 142h118M538 375h118" />
      <path className="sketch-line" d="M526 173h146v46H526zM526 242h146v46H526zM526 311h146v40H526z" />
      <path className="sketch-line-soft" d="M546 194h88M546 263h74M546 333h96" />
      <path className="sketch-line" d="M268 262h54M470 262h24" />
      <path className="sketch-line-soft" d="M302 249l20 13-20 13M475 249l19 13-19 13" />
      <text className="sketch-label" x="333" y="132">TONE</text>
      <text className="sketch-label" x="558" y="159">AI</text>
    </svg>
  );
}

function ProblemDiagram() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-gray" d="M83 70c77-55 226-48 300 22 62 59 35 143-58 176-101 36-242-4-292-83-26-42 7-80 50-115Z" />
      <path className="sketch-line" d="M64 70h116v112H64zM342 65h114v112H342zM190 232h142v76H190z" />
      <path className="sketch-line-soft" d="M84 100h72M84 124h48M84 149h70M361 96h66M361 120h45M361 145h72M215 260h88M215 284h62" />
      <path className="sketch-line" d="M180 126h68M272 126h70M260 182v50" />
      <path className="sketch-line-soft" d="M229 114l19 12-19 12M323 114l19 12-19 12M264 214l-4 18-12-13M262 214l-2 18 15-10" />
      <circle className="sketch-dot" cx="112" cy="209" r="5" />
      <circle className="sketch-dot" cx="260" cy="209" r="5" />
      <circle className="sketch-dot" cx="408" cy="209" r="5" />
      <path className="sketch-line-soft" d="M112 209c43 31 95 31 148 0M260 209c53-31 102-31 148 0" />
      <text className="sketch-label" x="214" y="120">?</text>
    </svg>
  );
}

function ResearchSignalDiagram() {
  return (
    <svg viewBox="0 0 760 280" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M96 55c111-52 298-48 403 9 86 47 86 124-2 161-101 43-294 28-406-32-75-41-76-99 5-138Z" />
      <path className="sketch-line" d="M70 68h146v136H70zM306 51h148v153H306zM544 68h146v136H544z" />
      <path className="sketch-line-soft" d="M98 104h76M98 131h52M98 158h84M335 87h82M335 115h61M335 143h78M335 171h47M573 104h78M573 131h54M573 158h84" />
      <path className="sketch-line" d="M216 136h90M454 136h90M112 228h118M322 228h118M559 228h104" />
      <path className="sketch-line-soft" d="M284 123l22 13-22 13M522 123l22 13-22 13" />
      <circle className="sketch-dot" cx="132" cy="228" r="5" />
      <circle className="sketch-dot" cx="380" cy="228" r="5" />
      <circle className="sketch-dot" cx="610" cy="228" r="5" />
      <text className="sketch-label" x="96" y="248">103</text>
      <text className="sketch-label" x="343" y="248">96 VALID</text>
      <text className="sketch-label" x="574" y="248">SLANG</text>
    </svg>
  );
}

function ResearchOutputSketch({ kind }: { kind: ResearchOutputKind }) {
  if (kind === "persona") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M31 30c35-24 94-20 122 12 23 27 9 60-31 72-43 13-97-6-115-38-10-17 4-31 24-46Z" />
        <circle className="sketch-line" cx="58" cy="50" r="17" />
        <path className="sketch-line" d="M31 105c8-27 22-40 43-40s35 13 43 40M114 31h40v72h-40z" />
        <path className="sketch-line-soft" d="M123 49h22M123 65h18M123 81h24" />
      </svg>
    );
  }

  if (kind === "journey") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-sage" d="M25 34c36-27 100-24 128 8 24 28 9 62-31 74-44 13-101-5-117-39-8-17 3-29 20-43Z" />
        <path className="sketch-line-soft" d="M23 72h136" />
        {[30, 66, 102, 138].map((x) => (
          <g key={x}>
            <circle className="sketch-dot" cx={x} cy="72" r="4" />
            <path className="sketch-line" d={`M${x - 14} 30h28v24h-28z`} />
          </g>
        ))}
        <path className="sketch-line-soft" d="M38 88h34M82 88h31M122 88h28" />
      </svg>
    );
  }

  if (kind === "needs") {
    return (
      <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-gray" d="M31 29c34-23 92-20 122 10 25 26 13 60-27 74-43 15-100-3-119-35-10-17 3-32 24-49Z" />
        <path className="sketch-line" d="M68 41h44v44H68zM21 24h35v25H21zM124 24h35v25h-35zM21 91h35v25H21zM124 91h35v25h-35z" />
        <path className="sketch-line-soft" d="M56 41h12M112 41h12M56 104h12M112 104h12M82 62h16" />
        <circle className="sketch-dot" cx="90" cy="63" r="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 180 130" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M30 32c35-25 95-21 123 10 23 27 8 60-31 72-42 13-97-5-115-37-10-18 3-31 23-45Z" />
      <path className="sketch-line" d="M24 28h132v78H24z" />
      <path className="sketch-line-soft" d="M40 48h52M40 65h78M40 82h45M104 48h34M104 82h28" />
      <path className="sketch-line" d="M44 112h92" />
      <path className="sketch-line-soft" d="M119 100l17 12-17 12" />
      <text className="sketch-label" x="111" y="64">AI</text>
    </svg>
  );
}

function SolutionSystemDiagram() {
  return (
    <svg viewBox="0 0 520 390" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M72 88c86-62 254-58 340 9 76 59 53 145-46 187-112 48-269 13-328-70-32-46-14-87 34-126Z" />
      <path className="sketch-wash sketch-wash-sage" d="M215 152c63-45 168-38 214 17 40 47 17 106-51 127-75 23-165-8-187-63-12-29-1-56 24-81Z" />

      <rect className="sketch-line" x="26" y="118" width="62" height="74" rx="4" />
      <rect className="sketch-line" x="111" y="118" width="62" height="74" rx="4" />
      <rect className="sketch-line" x="196" y="118" width="62" height="74" rx="4" />
      <rect className="sketch-line" x="281" y="118" width="62" height="74" rx="4" />
      <rect className="sketch-line" x="366" y="118" width="62" height="74" rx="4" />
      <rect className="sketch-line" x="451" y="118" width="62" height="74" rx="4" />

      <path className="sketch-line-soft" d="M38 168l20-23 13 14 8-8 8 17M45 138h24" />
      <circle className="sketch-dot" cx="50" cy="144" r="4" />
      <path className="sketch-line-soft" d="M126 139h30M126 155h23M126 171h34" />
      <path className="sketch-line-soft" d="M209 147c8-8 16-8 24 0M222 147c8-8 16-8 24 0M212 168h30" />
      <path className="sketch-line-soft" d="M295 141h34M295 158h24M295 174h31" />
      <text className="sketch-label" x="315" y="145" textAnchor="middle" style={{ fontSize: 12 }}>AI</text>
      <path className="sketch-line-soft" d="M381 143h30M381 160h22M381 176h34M410 139l7 7-29 30-10 3 3-10 29-30Z" />
      <path className="sketch-line-soft" d="M464 157h34M487 143l18 14-18 14M467 176h26" />

      <path className="sketch-line" d="M88 155h23M173 155h23M258 155h23M343 155h23M428 155h23" />
      <path className="sketch-line-soft" d="M99 145l12 10-12 10M184 145l12 10-12 10M269 145l12 10-12 10M354 145l12 10-12 10M439 145l12 10-12 10" />

      <text className="sketch-label" x="57" y="224" textAnchor="middle" style={{ fontSize: 12 }}>PHOTO</text>
      <text className="sketch-label" x="142" y="224" textAnchor="middle" style={{ fontSize: 12 }}>CONTEXT</text>
      <text className="sketch-label" x="227" y="224" textAnchor="middle" style={{ fontSize: 12 }}>MOOD</text>
      <text className="sketch-label" x="312" y="224" textAnchor="middle" style={{ fontSize: 12 }}>GENERATE</text>
      <text className="sketch-label" x="397" y="224" textAnchor="middle" style={{ fontSize: 12 }}>EDIT</text>
      <text className="sketch-label" x="482" y="224" textAnchor="middle" style={{ fontSize: 12 }}>POST</text>

      <path className="sketch-line-soft" d="M91 275h338" />
      <circle className="sketch-dot" cx="91" cy="275" r="4" />
      <circle className="sketch-dot" cx="158" cy="275" r="4" />
      <circle className="sketch-dot" cx="225" cy="275" r="4" />
      <circle className="sketch-dot" cx="292" cy="275" r="4" />
      <circle className="sketch-dot" cx="359" cy="275" r="4" />
      <circle className="sketch-dot" cx="429" cy="275" r="4" />
    </svg>
  );
}

function LowFiWireframeSketch({ kind }: { kind: WireframeKind }) {
  if (kind === "upload") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-sage" d="M47 39c54-34 139-27 174 17 31 38 8 83-48 98-62 16-138-11-160-57-12-23 8-41 34-58Z" />
        <path className="sketch-line" d="M71 24h118c14 0 24 10 24 24v108H47V48c0-14 10-24 24-24Z" />
        <path className="sketch-line" d="M67 61h126v70H67z" />
        <circle className="sketch-line-soft" cx="99" cy="85" r="13" />
        <path className="sketch-line-soft" d="M70 121l42-38 25 28 17-17 36 27M89 147h82" />
      </svg>
    );
  }

  if (kind === "mood") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M47 36c55-35 143-27 178 18 30 39 5 84-54 98-63 15-139-14-159-60-10-24 10-41 35-56Z" />
        <path className="sketch-line" d="M54 28h152v124H54z" />
        <path className="sketch-line-soft" d="M78 57h74" />
        {[77, 118, 159].map((x) => (
          <g key={x}>
            <circle className="sketch-line" cx={x} cy="96" r="16" />
            <path className="sketch-line-soft" d={`M${x - 7} 101c5 5 10 5 15 0`} />
          </g>
        ))}
        <path className="sketch-line" d="M82 129h96" />
      </svg>
    );
  }

  if (kind === "style") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-gray" d="M48 40c54-34 137-27 172 16 31 37 10 82-46 98-62 17-139-10-161-56-12-24 8-42 35-58Z" />
        <path className="sketch-line" d="M43 31h174v118H43z" />
        <path className="sketch-line-soft" d="M65 58h64M65 84h40M65 110h74" />
        <path className="sketch-line" d="M151 54h42M151 80h42M151 106h42" />
        <circle className="sketch-dot" cx="151" cy="54" r="4" />
        <circle className="sketch-dot" cx="193" cy="80" r="4" />
        <circle className="sketch-dot" cx="172" cy="106" r="4" />
      </svg>
    );
  }

  if (kind === "captions") {
    return (
      <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M48 37c55-35 142-27 177 18 30 39 5 85-53 99-64 15-141-14-160-61-10-24 10-40 36-56Z" />
        <path className="sketch-line" d="M43 30h174v122H43z" />
        <path className="sketch-line" d="M62 54h136v25H62zM62 88h136v25H62zM62 122h136v20H62z" />
        <path className="sketch-line-soft" d="M75 70h88M75 104h72M75 136h96" />
        <text className="sketch-label" x="170" y="71">AI</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 180" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M47 39c54-34 139-27 174 17 31 38 8 83-48 98-62 16-138-11-160-57-12-23 8-41 34-58Z" />
      <path className="sketch-line" d="M45 32h170v118H45z" />
      <path className="sketch-line-soft" d="M67 59h108M67 83h83M67 107h100" />
      <path className="sketch-line" d="M66 124h46M126 124h48M187 124h11" />
      <path className="sketch-line-soft" d="M190 112l12 12-12 12M93 118v12M87 124h12" />
      <text className="sketch-label" x="67" y="143">EDIT</text>
    </svg>
  );
}

function EvaluationDiagram() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-gray" d="M90 78c75-55 216-50 288 13 63 55 42 137-45 175-95 41-236 8-290-68-29-42 2-82 47-120Z" />
      <path className="sketch-line" d="M86 76h132v112H86zM302 76h132v112H302zM174 238h172v72H174z" />
      <path className="sketch-line-soft" d="M112 111h72M112 137h48M112 163h76M328 111h72M328 137h48M328 163h76M203 264h112M203 287h74" />
      <path className="sketch-line" d="M218 132h84M260 188v50" />
      <path className="sketch-line-soft" d="M282 119l20 13-20 13M264 220l-4 18-12-13M262 220l-2 18 15-10" />
      <circle className="sketch-dot" cx="143" cy="216" r="5" />
      <circle className="sketch-dot" cx="260" cy="216" r="5" />
      <circle className="sketch-dot" cx="377" cy="216" r="5" />
      <path className="sketch-line-soft" d="M143 216c34 22 74 22 117 0M260 216c43-22 82-22 117 0" />
    </svg>
  );
}
