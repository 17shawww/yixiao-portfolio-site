import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink, FileText, Mail } from "lucide-react";

import {
  AboutDeskSketch,
  CapsoSketch,
  ContactSketch,
  GardenSketch,
  HeroPortfolioMapSketch,
  LexFlowSketch,
  MethodSketch,
  ShoeSketch,
} from "@/components/HomeSketches";
import { site } from "@/data/portfolio";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#methods", label: "Methods" },
  { href: "#projects", label: "Projects" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

const methods = [
  {
    title: "User research",
    sketch: "research" as const,
    body: "Interviews, surveys, synthesis, journey mapping, and evidence-led problem framing.",
  },
  {
    title: "Product thinking",
    sketch: "product" as const,
    body: "Clarifying users, constraints, priorities, tradeoffs, and MVP direction before polishing screens.",
  },
  {
    title: "Interaction design",
    sketch: "interaction" as const,
    body: "Flows, information architecture, wireframes, prototypes, and usability-centered interface decisions.",
  },
  {
    title: "Prototyping and making",
    sketch: "prototype" as const,
    body: "AI product experiments, technical prototypes, design systems, and industrial design translation.",
  },
];

const projects = [
  {
    title: "LexFlow",
    href: "/projects/lexflow",
    problem: "Legal-service journeys can feel opaque, fragmented, and hard to trust.",
    solution: "A guided legal workflow for intake, evidence, progress, and case preparation.",
    roleMethods: "User interviews · journey mapping · service design · prototype testing",
    tags: ["Legal Tech", "Service Design", "AI Workflow"],
    sketch: LexFlowSketch,
  },
  {
    title: "Capso",
    href: "/projects/capso",
    problem: "People can capture visual moments quickly but struggle to caption them in their own voice.",
    solution: "An AI-assisted caption flow guided by mood, image context, and editable outputs.",
    roleMethods: "Survey · persona · AI prototyping · mobile UX",
    tags: ["AI Product", "UX Research", "Prototype"],
    sketch: CapsoSketch,
  },
  {
    title: "Modular Navigation Shoe",
    href: "/projects/modular-navigation-shoe",
    problem: "Outdoor navigation and gear can add cognitive and physical load during exploration.",
    solution: "A modular footwear concept combining navigation cues with adaptable outdoor components.",
    roleMethods: "User research · industrial design · Arduino testing · prototyping",
    tags: ["Industrial Design", "Wearable", "Navigation"],
    sketch: ShoeSketch,
  },
  {
    title: "Sensory Garden Labyrinth",
    href: "/projects/sensory-garden-labyrinth",
    problem: "Digital dependence can weaken embodied attention to touch, scent, color, and movement.",
    solution: "A multisensory garden path using plants, tactile cues, and spatial rhythm.",
    roleMethods: "Spatial research · sensory mapping · experience design",
    tags: ["Spatial Design", "Sensory UX", "Wellness"],
    sketch: GardenSketch,
  },
];

const backgroundSignals = [
  {
    label: "Education",
    title: "Rutgers MBS / UXD",
    body: "Graduate study in Computer and Information Sciences with a UXD concentration, connecting product reasoning with technical context.",
  },
  {
    label: "Foundation",
    title: "Industrial Design",
    body: "Fuzhou University training in product form, physical systems, materials, prototyping, and human-centered making.",
  },
  {
    label: "Research signal",
    title: "Published / research-oriented work",
    body: "Portfolio work emphasizes surveys, interviews, synthesis, journey maps, and clear evidence-to-decision storytelling.",
  },
  {
    label: "Prototype range",
    title: "AI and interaction prototyping",
    body: "Projects include AI-assisted product concepts, mobile UX flows, service prototypes, and industrial design experiments.",
  },
];

function Sidebar() {
  return (
    <aside className="home-sidebar">
      <Link href="#home" className="home-mark" aria-label="Yixiao Peng home">
        YP
      </Link>
      <nav aria-label="Homepage sections" className="home-nav">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="home-nav-link">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="home-socials" aria-label="Contact links">
        <Link href={`mailto:${site.email}`} aria-label="Email Yixiao Peng">
          <Mail className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link href={site.resumeUrl} target="_blank" rel="noreferrer" aria-label="Resume PDF">
          <FileText className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}

function MobileTopbar() {
  return (
    <header className="home-mobilebar">
      <Link href="#home" className="font-serif text-xl text-ink">
        Yixiao Peng
      </Link>
      <Link href="#projects" className="home-small-link">
        Work
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </header>
  );
}

export default function HomePage() {
  return (
    <main id="home" className="portfolio-homepage bg-[#F8F5EE] text-ink">
      <Sidebar />
      <MobileTopbar />

      <div className="home-content">
        <section className="home-section home-hero">
          <div className="home-hero-copy">
            <p className="hand-note">Hello, I am</p>
            <h1>Yixiao Peng</h1>
            <p className="home-lede">
              Product strategy, UX research, AI product thinking, and experience design for turning messy user problems into clearer product direction, interaction flows, and prototype stories.
            </p>
            <div className="home-actions">
              <Link href="#projects" className="home-text-link">
                View projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href={site.resumeUrl} target="_blank" rel="noreferrer" className="home-text-link">
                Resume
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="sketch-panel hero-sketch-panel">
            <HeroPortfolioMapSketch />
          </div>
        </section>

        <section id="about" className="home-section home-about">
          <div className="home-section-kicker">About</div>
          <div className="home-about-grid">
            <div>
              <h2>A product-minded researcher with an industrial design foundation.</h2>
              <p>
                I am currently studying Computer and Information Sciences with a UXD concentration at Rutgers, after building an industrial design foundation at Fuzhou University. My portfolio focuses on turning research evidence into product direction, interaction flows, prototypes, and tangible design systems.
              </p>
              <div className="about-proof-points" aria-label="Portfolio focus areas">
                <span>UX research</span>
                <span>Product strategy</span>
                <span>AI product thinking</span>
                <span>Experience design</span>
                <span>Industrial design</span>
              </div>
            </div>
            <div className="sketch-panel about-sketch-panel">
              <AboutDeskSketch />
            </div>
          </div>
        </section>

        <section id="methods" className="home-section">
          <div className="section-intro">
            <p className="home-section-kicker">Design Focus / Methods</p>
            <h2>Evidence first, then structure, then interface.</h2>
          </div>
          <div className="method-grid">
            {methods.map((method) => (
              <article key={method.title} className="method-item">
                <div className="method-sketch">
                  <MethodSketch kind={method.sketch} />
                </div>
                <h3>{method.title}</h3>
                <p>{method.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="home-section home-projects">
          <div className="section-intro section-intro-wide">
            <p className="home-section-kicker">Selected Projects</p>
            <h2>Four case studies across legal tech, AI product design, industrial design, and sensory experience.</h2>
            <p>
              Research, structure, and prototyping shape each direction, from digital services to physical and spatial experiences.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => {
              const Sketch = project.sketch;
              const isReverse = index % 2 === 1;

              return (
                <article key={project.title} className={`project-row ${isReverse ? "project-row-reverse" : ""}`}>
                  <div className="project-copy">
                    <p className="project-index">0{index + 1}</p>
                    <h3>{project.title}</h3>
                    <div className="project-statements">
                      <p className="project-role">
                        <span>Role / Methods</span>
                        {project.roleMethods}
                      </p>
                      <p>
                        <span>Problem</span>
                        {project.problem}
                      </p>
                      <p>
                        <span>Solution</span>
                        {project.solution}
                      </p>
                    </div>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <Link href={project.href} className="home-text-link project-link">
                      View case
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="sketch-panel project-sketch-panel">
                    <Sketch />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="background" className="home-section home-background">
          <div className="section-intro">
            <p className="home-section-kicker">Background / Highlights</p>
            <h2>Real signals behind the portfolio.</h2>
          </div>
          <div className="background-grid">
            {backgroundSignals.map((signal) => (
              <article key={signal.title} className="background-item">
                <p>{signal.label}</p>
                <h3>{signal.title}</h3>
                <span>{signal.body}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="home-section home-contact">
          <div>
            <p className="home-section-kicker">Contact</p>
            <h2>Let&apos;s connect.</h2>
            <p>
              I am open to product, UX research, interaction design, and prototyping conversations where user evidence can shape clearer decisions.
            </p>
            <div className="contact-links">
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
          <div className="sketch-panel contact-sketch-panel">
            <ContactSketch />
          </div>
        </section>
      </div>
    </main>
  );
}
