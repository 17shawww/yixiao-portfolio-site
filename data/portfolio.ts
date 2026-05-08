import siteConfig from "@/config/config.json";

export type Detail = {
  label: string;
  value: string;
};

export type ProjectTheme = {
  accent: string;
  soft: string;
  glow: string;
};

export type CaseCard = {
  title: string;
  body: string;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  aspectRatio?: string;
  fit?: "contain" | "cover";
  objectPosition?: string;
};

export type ProjectStat = {
  value: string;
  label: string;
  note?: string;
};

export type ResearchLens = {
  question: string;
  methods: string[];
  productDecision: string;
  tradeoff: string;
  evidenceArtifact: string;
};

export type EvidenceChart = {
  title: string;
  note: string;
  type: "bars" | "steps" | "pillars";
  items: ProjectStat[];
};

export type DecisionBlock = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  media?: ProjectMedia;
  mediaItems?: ProjectMedia[];
  chart?: EvidenceChart;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  featured: boolean;
  presentation: "system" | "signal" | "editorial";
  heroImage: string;
  heroAlt: string;
  decorImage?: string;
  summary: string;
  teaser: string;
  tags: string[];
  theme: ProjectTheme;
  quickFacts: Detail[];
  snapshots: ProjectStat[];
  researchLens: ResearchLens;
  evidenceCharts: EvidenceChart[];
  decisionBlocks: DecisionBlock[];
  heroGallery: ProjectMedia[];
  supportVisual: ProjectMedia;
  overview: {
    intro: string;
    takeaway: string;
  };
  problem: {
    intro: string;
    cards: CaseCard[];
    media: ProjectMedia;
  };
  whatIDid: {
    intro: string;
    steps: ProcessStep[];
    media: ProjectMedia;
  };
  insights: {
    callout: string;
    cards: CaseCard[];
  };
  solution: {
    intro: string;
    cards: CaseCard[];
    gallery: ProjectMedia[];
  };
  outcome: {
    stats: ProjectStat[];
    bullets: string[];
  };
  reflection: {
    text: string;
  };
};

export type OtherWork = {
  title: string;
  year: string;
  category: string;
  image: string;
  alt: string;
  description: string;
};

export const site = {
  name: siteConfig.name,
  portfolioTitle: "PM / UX Research Portfolio",
  heroTitle: "Product thinker and UX researcher turning messy user problems into clearer product decisions.",
  heroSummary:
    "I use research, systems thinking, and product framing to define what should be built, why it matters, and how teams can make better decisions with evidence.",
  description:
    "Portfolio of Yixiao Peng, a PM and UX research-focused product thinker with an industrial design foundation and research-driven digital product experience.",
  location: "New Brunswick, NJ",
  email: "pengyixiaoshaw@gmail.com",
  linkedin: "https://www.linkedin.com/in/yixiao-peng",
  resumeUrl: "/resume/Yixiao_Peng_Resume.pdf",
  about:
    "I am a product and UX research-focused designer with an industrial design background and current graduate study in computer and information sciences at Rutgers. My work sits between user evidence, product strategy, and interaction design.",
  aboutExtended:
    "I care most about turning ambiguity into direction: legal services that need trust, AI tools that need human control, and consumer products that need a sharper reason to exist.",
  homeHighlights: [
    {
      title: "User evidence",
      body: "Interviews, surveys, journey maps, and synthesis used to clarify the real problem behind the surface request.",
    },
    {
      title: "Product judgment",
      body: "Framing opportunities, constraints, tradeoffs, and MVP direction before jumping into interface polish.",
    },
    {
      title: "Decision storytelling",
      body: "Turning research and product logic into clear case studies that teams, recruiters, and stakeholders can scan quickly.",
    },
  ],
  roleFocus: [
    {
      label: "Target roles",
      value: "APM, Product Analyst, UX Research, Product Strategy",
    },
    {
      label: "Strongest signal",
      value: "Research-led product framing across AI, service, and mobile concepts",
    },
    {
      label: "Working style",
      value: "Structured discovery, crisp synthesis, and practical tradeoffs",
    },
  ],
  education: [
    {
      school: "Rutgers University",
      detail:
        "Master of Business & Science (Computer and Information Sciences, UXD concentration), expected May 2027",
    },
    {
      school: "Fuzhou University, Xiamen Academy of Arts and Design",
      detail: "Bachelor of Engineering in Industrial Design, 2021-2025",
    },
  ],
  expertise: [
    {
      label: "User Research",
      value:
        "User interviews, surveys, usability testing, contextual inquiry, synthesis, persona creation, journey mapping, and research reporting.",
    },
    {
      label: "Product Management",
      value:
        "Problem framing, opportunity sizing, feature prioritization, tradeoff analysis, information architecture, and service design.",
    },
    {
      label: "Product Communication",
      value:
        "Figma, FigJam, Miro, Google Forms, Tableau, spreadsheet-based analysis, presentation storytelling, and prototype documentation.",
    },
  ],
  publications: [
    {
      title: "Capso: An LLM-based Verbal Aphasia Assistance App",
      meta: "Applied and Computational Engineering, 2025",
      href: "https://doi.org/10.54254/2755-2721/2024.20570",
    },
    {
      title:
        "The Impact of Simulated Lunar Dynamic Lighting Conditions on Object Information Recognition and Visual Perception",
      meta: "HCI International 2025 (LNCS, Springer)",
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "lexflow",
    title: "LexFlow",
    type: "Product Strategy + UX Research",
    year: "2024",
    featured: true,
    presentation: "system",
    heroImage: "/assets/images/lexflow/atoms/app-screens.png",
    heroAlt: "LexFlow final app screens and legal-service touchpoints",
    decorImage: "/assets/images/decor/lexflow-structure.png",
    summary:
      "An AI-assisted legal-service platform that makes case intake, evidence preparation, and trial support easier to follow.",
    teaser: "Clarifying legal services from first consultation to mock-court practice.",
    tags: ["Legal tech", "Service design", "Research synthesis", "AI workflows"],
    theme: {
      accent: "#5C7BDA",
      soft: "#EEF3FF",
      glow: "rgba(92, 123, 218, 0.22)",
    },
    quickFacts: [
      {
        label: "Project type",
        value: "AI-assisted legal-service platform",
      },
      { label: "Role", value: "UX research, service flow mapping, product strategy, interaction structure, prototype testing" },
      { label: "Scope", value: "guided onboarding, evidence workspace, case progress, mock-court practice" },
      { label: "Built from", value: "legal-service context scan, law firm service touchpoints, user interviews, journey mapping, prototype testing" },
      {
        label: "My contribution",
        value:
          "I translated fragmented legal-service touchpoints into a guided workflow covering intake, evidence preparation, case progress, and mock-court practice.",
      },
    ],
    snapshots: [
      { value: "4 roles", label: "Mapped across the service", note: "Lawyer, client, judge, recorder" },
      { value: "1 flow", label: "From intake to trial prep", note: "Case matching to mock court" },
      { value: "AI + service", label: "Unified in one concept", note: "Guidance, documents, and progress" },
    ],
    researchLens: {
      question:
        "How might a legal-service product reduce uncertainty for clients while also lowering coordination burden for legal professionals?",
      methods: ["Market scan", "Law-firm site study", "Multi-role journey mapping", "Concept prototyping"],
      productDecision:
        "Frame LexFlow as a guided service system instead of a single legal chatbot, because the core pain lived across intake, evidence, progress, and preparation.",
      tradeoff:
        "Prioritized service clarity and shared milestones over deep legal automation so the concept stayed trustworthy for first-time legal users.",
      evidenceArtifact: "Service blueprint, role map, information architecture, and final platform flow",
    },
    evidenceCharts: [
      {
        title: "Service complexity became the product opportunity.",
        note: "The concept had to support multiple actors and a long legal journey, not just one isolated screen.",
        type: "steps",
        items: [
          { value: "4 roles", label: "Stakeholders", note: "Lawyer, client, judge, recorder" },
          { value: "5 phases", label: "Service journey", note: "Intake, matching, prep, rehearsal, progress" },
          { value: "1 system", label: "Decision frame", note: "Make the process visible before automating it" },
        ],
      },
    ],
    decisionBlocks: [
      {
        eyebrow: "User signal",
        title: "The legal journey felt invisible before it felt difficult.",
        body:
          "The clearest issue was not only legal complexity. It was the lack of shared visibility across case intake, evidence preparation, and next steps.",
        bullets: ["Clients needed milestones they could understand.", "Professionals needed less scattered coordination.", "Trust depended on making progress visible."],
        mediaItems: [
          {
            src: "/assets/images/lexflow/atoms/journey-map.png",
            alt: "LexFlow user journey map as a separate visual asset",
            caption: "Journey map: where stress and visibility gaps appear.",
            aspectRatio: "1024 / 383",
            fit: "contain",
          },
          {
            src: "/assets/images/lexflow/atoms/information-architecture.png",
            alt: "LexFlow information architecture as a separate visual asset",
            caption: "IA: the service system organized into four stages.",
            aspectRatio: "1002 / 646",
            fit: "contain",
          },
        ],
        media: {
          src: "/assets/images/lexflow/atoms/journey-map.png",
          alt: "Focused crop of LexFlow service flow",
          caption: "Journey and architecture split into smaller evidence assets.",
          aspectRatio: "2200 / 1170",
          fit: "contain",
          objectPosition: "48% 50%",
        },
      },
      {
        eyebrow: "Product decision",
        title: "Frame the product as a guided legal-service system, not a chatbot.",
        body:
          "A single AI assistant would hide too much of the workflow. The product needed to organize people, documents, progress, and preparation in one visible system.",
        bullets: ["Centralize case status and evidence.", "Keep AI as support, not the entire product.", "Use service mapping as the backbone."],
        mediaItems: [
          {
            src: "/assets/images/lexflow/atoms/app-screens.png",
            alt: "LexFlow final app screens shown separately",
            caption: "Final app touchpoints: consultation, attorney matching, evidence, and case status.",
            aspectRatio: "967 / 291",
            fit: "contain",
          },
          {
            src: "/assets/images/lexflow/atoms/service-flow.png",
            alt: "LexFlow service flow separated from the original presentation board",
            caption: "Service flow: intake to preparation and mock-court support.",
            aspectRatio: "998 / 366",
            fit: "contain",
          },
        ],
        media: {
          src: "/assets/images/lexflow/atoms/app-screens.png",
          alt: "Focused crop of LexFlow interface system",
          caption: "Service flow from intake to preparation and mock court.",
          aspectRatio: "2200 / 966",
          fit: "contain",
          objectPosition: "52% 52%",
        },
      },
      {
        eyebrow: "Tradeoff",
        title: "Make procedure learnable before making automation deeper.",
        body:
          "For first-time legal users, rehearsal and explanation were more valuable than aggressive automation. The mock-court layer made the service easier to understand.",
        bullets: ["Reduce first-time anxiety.", "Explain roles through practice.", "Give legal users a tangible preparation layer."],
        mediaItems: [
          {
            src: "/assets/images/lexflow/atoms/card-system.png",
            alt: "LexFlow evidence and clue cards extracted as a separate visual",
            caption: "Card system: evidence and clue pieces make the case tangible.",
            aspectRatio: "752 / 181",
            fit: "contain",
          },
          {
            src: "/assets/images/lexflow/atoms/prototype-card-test.png",
            alt: "LexFlow prototype card testing photo",
            caption: "Prototype test: physical cards helped users rehearse legal logic.",
            aspectRatio: "538 / 253",
            fit: "cover",
          },
          {
            src: "/assets/images/lexflow/atoms/prototype-feedback.png",
            alt: "LexFlow prototype feedback photo",
            caption: "Feedback moment: testing exposed where beginners needed guidance.",
            aspectRatio: "379 / 246",
            fit: "cover",
          },
        ],
        media: {
          src: "/assets/images/lexflow/atoms/card-system.png",
          alt: "Focused LexFlow mock-court toolkit visual",
          caption: "Focused Figma crop: app surfaces and mock-court toolkit without the full presentation slide.",
          aspectRatio: "90 / 59",
          fit: "contain",
          objectPosition: "50% 46%",
        },
      },
    ],
    heroGallery: [
      {
        src: "/assets/images/lexflow/atoms/app-screens.png",
        alt: "LexFlow final app screens and legal-service touchpoints",
        caption: "Final screens: the clearest product outcome.",
        aspectRatio: "967 / 291",
        fit: "contain",
      },
      {
        src: "/assets/images/lexflow/atoms/service-flow.png",
        alt: "LexFlow service flow separated from the original presentation board",
        caption: "Service flow: the case journey made visible.",
        aspectRatio: "998 / 366",
        fit: "contain",
      },
      {
        src: "/assets/images/lexflow/atoms/card-system.png",
        alt: "LexFlow evidence and clue cards extracted as a separate visual",
        caption: "Evidence and clue cards: a tangible preparation layer.",
        aspectRatio: "752 / 181",
        fit: "contain",
      },
      {
        src: "/assets/images/lexflow/atoms/journey-map.png",
        alt: "LexFlow journey map split into a smaller readable asset",
        caption: "Journey map: the user signal behind the product direction.",
        aspectRatio: "1024 / 383",
        fit: "contain",
      },
    ],
    supportVisual: {
      src: "/assets/images/generated/lexflow-support.png",
      alt: "Abstract LexFlow support visual showing a structured service map with connected cards",
      caption: "Generated support visual: a service map motif that reinforces trust, milestones, and connected legal workflows.",
      aspectRatio: "1600 / 1000",
      fit: "cover",
    },
    overview: {
      intro:
        "LexFlow reframes legal support as a guided service, not a black box. The concept combines attorney matching, case preparation, evidence management, progress tracking, and mock-court practice in one connected experience.",
      takeaway:
        "The project started as a workflow problem but quickly became a trust problem: users needed visibility, understandable language, and a sense of control.",
    },
    problem: {
      intro: "Legal services felt fragmented for professionals and intimidating for first-time clients.",
      cards: [
        {
          title: "Too much administrative drag",
          body: "Lawyers described paperwork, evidence handling, and manual coordination as a major drain on time.",
        },
        {
          title: "The process felt opaque",
          body: "Clients often could not tell where their case stood or what would happen next.",
        },
        {
          title: "Communication raised stress",
          body: "Legal terminology and status updates were hard to interpret, especially under pressure.",
        },
        {
          title: "Preparation lacked structure",
          body: "There was no simple way to connect consultation, document review, and trial rehearsal.",
        },
      ],
      media: {
        src: "/assets/images/lexflow/atoms/journey-map.png",
        alt: "LexFlow service flow visual shown as a polished system board",
        caption: "The clearest problem signal was structural: the legal journey lacked a visible, shared flow.",
        aspectRatio: "6782 / 2544",
      },
    },
    whatIDid: {
      intro:
        "I combined market framing, on-site observation, and multi-role interviews to translate legal-service pain points into a clearer platform concept.",
      steps: [
        {
          title: "Studied the legal-service context",
          body: "I started with industry growth, AI adoption signals, and the operational reality of a local law-firm environment.",
        },
        {
          title: "Mapped the full service journey",
          body: "I looked across lawyers, clients, judges, and recorders to understand where anxiety, delay, and confusion built up.",
        },
        {
          title: "Prototyped the service layer",
          body: "The final concept included a digital platform, case-prep workflow, and a mock-court system for education and rehearsal.",
        },
      ],
      media: {
        src: "/assets/images/lexflow/atoms/information-architecture.png",
        alt: "LexFlow information architecture and journey map",
        caption: "Journey mapping and information architecture translated messy service steps into a usable system.",
      },
    },
    insights: {
      callout: "When legal progress is invisible, users feel lost even if the service itself is technically correct.",
      cards: [
        {
          title: "Trust depends on visibility",
          body: "People needed clear milestones, not just expert advice behind the scenes.",
        },
        {
          title: "Education lowers emotional burden",
          body: "A rehearsal-style experience made legal procedure feel less abstract and less threatening.",
        },
        {
          title: "Operations shape perception",
          body: "Evidence handling, documentation, and communication are part of the user experience, not back-office detail.",
        },
      ],
    },
    solution: {
      intro: "The solution paired service clarity with tools that make preparation feel structured and approachable.",
      cards: [
        {
          title: "Guided case intake and matching",
          body: "Users enter case details, see matched attorneys, and move into consultation with a clearer starting point.",
        },
        {
          title: "Shared preparation workflow",
          body: "Documents, evidence, and next steps stay in one place instead of being split across channels.",
        },
        {
          title: "AI-assisted support",
          body: "The concept uses AI for file generation, recommendations, Q&A, and case summaries.",
        },
        {
          title: "Mock-court practice",
          body: "A role-based simulation reduces first-time stress and helps people understand legal procedure before formal proceedings.",
        },
      ],
      gallery: [
        {
          src: "/assets/images/lexflow/atoms/app-screens.png",
          alt: "LexFlow service concept board combining interface outcomes and trial-preparation tools",
          caption: "The final concept turned a legal workflow into something users could understand and move through",
          aspectRatio: "6782 / 2544",
        },
        {
          src: "/assets/images/lexflow/atoms/prototype-card-test.png",
          alt: "LexFlow board game and trial simulation toolkit",
          caption: "The mock-court toolkit turned case logic into something more tangible and teachable",
        },
        {
          src: "/assets/images/lexflow/atoms/card-system.png",
          alt: "LexFlow refined interface presentation with product screens in a browser-style layout",
          caption: "The digital touchpoints made progress, evidence, and next steps readable at a glance",
          aspectRatio: "6782 / 2544",
        },
      ],
    },
    outcome: {
      stats: [
        { value: "Clearer timelines", label: "Users could better understand case progress" },
        { value: "Centralized evidence", label: "Preparation moved into one coherent system" },
        { value: "Lower pressure", label: "Mock-court practice made the process feel more approachable" },
      ],
      bullets: [
        "Prototype feedback highlighted timeline clarity, centralized documents, and the immersive feel of the mock-court concept.",
        "The next iteration should simplify onboarding, add richer previews, and give advanced legal users more depth and filtering.",
      ],
    },
    reflection: {
      text:
        "Legal UX is about trust, clarity, and preparation. AI can guide people through the process while keeping professional judgment visible. Complex services need structure, not just simpler language.",
    },
  },
  {
    slug: "capso",
    title: "Capso",
    type: "AI Product + User Research",
    year: "2024",
    featured: true,
    presentation: "signal",
    heroImage: "/assets/images/capso/atoms/phone-generate.png",
    heroAlt: "Capso final caption-generation screen",
    decorImage: "/assets/images/decor/capso-signal.png",
    summary:
      "An AI-assisted captioning tool designed to help users express what they mean when photos are easy to take but words are hard to find.",
    teaser: "Helping people move past caption fatigue without losing their own voice.",
    tags: ["Creative AI", "User research", "LLM prototype", "MVP framing"],
    theme: {
      accent: "#DD7B66",
      soft: "#FFF0EA",
      glow: "rgba(221, 123, 102, 0.24)",
    },
    quickFacts: [
      { label: "Role", value: "UX researcher, product thinker, prototype lead" },
      { label: "Scope", value: "Problem framing, survey analysis, mobile flow, AI caption workflow" },
      { label: "Prototype", value: "Flask-based concept connected to the OpenAI API" },
    ],
    snapshots: [
      { value: "103", label: "Survey responses collected" },
      { value: "96", label: "Valid responses analyzed" },
      { value: "76.2%", label: "Reported caption-writing difficulty" },
    ],
    researchLens: {
      question:
        "How might an AI writing product help people move from photo-taking to posting without making captions feel generic or outsourced?",
      methods: ["Survey analysis", "Persona synthesis", "Posting journey map", "LLM prototype test"],
      productDecision:
        "Design around a lightweight assistive caption flow, where users steer tone and keywords instead of receiving a fully automated answer.",
      tradeoff:
        "Kept the MVP focused on caption generation and editing rather than a larger social platform, because the observed friction was the writing moment.",
      evidenceArtifact: "Survey dataset, persona map, caption workflow, and Flask + OpenAI prototype direction",
    },
    evidenceCharts: [
      {
        title: "The evidence pointed to a real expression gap.",
        note: "Capso had the clearest quantitative signal, so the page makes that research visible early.",
        type: "bars",
        items: [
          { value: "103", label: "Survey responses", note: "Collected during discovery" },
          { value: "96", label: "Valid responses", note: "Used for analysis" },
          { value: "76.2%", label: "Reported caption-writing difficulty", note: "Core problem signal" },
        ],
      },
    ],
    decisionBlocks: [
      {
        eyebrow: "Research signal",
        title: "People could capture the moment, but not the words.",
        body:
          "The survey showed that caption-writing friction was common enough to become a focused AI product opportunity.",
        bullets: ["The pain appeared after the photo was taken.", "Users wanted speed without losing personal tone.", "Short-form output mattered more than long AI writing."],
        chart: {
          title: "Caption friction in the survey",
          note: "A compact evidence chart is easier to scan than a dense research slide.",
          type: "bars",
          items: [
            { value: "103", label: "Responses" },
            { value: "96", label: "Valid" },
            { value: "76.2%", label: "Textual aphasia" },
          ],
        },
      },
      {
        eyebrow: "Product decision",
        title: "Build an assistive caption flow, not a voice-replacement tool.",
        body:
          "The MVP centers on photo input, tone, keywords, and quick edits so users can steer AI without feeling replaced by it.",
        bullets: ["Start from camera or library.", "Let users guide mood and style.", "Return short, editable caption options."],
        mediaItems: [
          {
            src: "/assets/images/capso/atoms/phone-home.png",
            alt: "Capso discovery screen",
            caption: "Browse: image input starts from familiar photo behavior.",
            aspectRatio: "399 / 858",
            fit: "contain",
          },
          {
            src: "/assets/images/capso/atoms/phone-generate.png",
            alt: "Capso caption generation screen",
            caption: "Generate: the AI moment stays short and editable.",
            aspectRatio: "399 / 858",
            fit: "contain",
          },
        ],
        media: {
          src: "/assets/images/capso/atoms/phone-generate.png",
          alt: "Focused crop of Capso mobile caption flow",
          caption: "Final mobile surfaces for the caption-generation loop.",
          aspectRatio: "90 / 59",
          fit: "contain",
          objectPosition: "50% 50%",
        },
      },
      {
        eyebrow: "Prototype check",
        title: "Validate feasibility through a lightweight LLM prototype path.",
        body:
          "The project connected UX framing with a Flask and OpenAI API direction, showing how the product idea could move beyond a visual mockup.",
        bullets: ["Keep the technical scope narrow.", "Test the caption-generation loop.", "Use prototype work to expose product constraints."],
        mediaItems: [
          {
            src: "/assets/images/capso/atoms/phone-mood.png",
            alt: "Capso mood selection screen",
            caption: "Mood: users steer the tone instead of accepting a generic result.",
            aspectRatio: "399 / 858",
            fit: "contain",
          },
          {
            src: "/assets/images/capso/atoms/flow-map.png",
            alt: "Capso information architecture flow map",
            caption: "Flow map: keep the MVP focused around caption assistance.",
            aspectRatio: "564 / 403",
            fit: "contain",
          },
        ],
        media: {
          src: "/assets/images/capso/atoms/phone-mood.png",
          alt: "Capso prototype and system exploration",
          caption: "Generation and mood-selection states from the core loop.",
          aspectRatio: "105 / 59",
          fit: "contain",
          objectPosition: "50% 46%",
        },
      },
    ],
    heroGallery: [
      {
        src: "/assets/images/capso/atoms/phone-generate.png",
        alt: "Capso final caption-generation screen",
        caption: "Generate captions from image context.",
        aspectRatio: "399 / 858",
        fit: "contain",
      },
      {
        src: "/assets/images/capso/atoms/phone-home.png",
        alt: "Capso discovery screen",
        caption: "Start from a visual photo library.",
        aspectRatio: "399 / 858",
        fit: "contain",
      },
      {
        src: "/assets/images/capso/atoms/phone-album.png",
        alt: "Capso photo album screen",
        caption: "Select the image moment first.",
        aspectRatio: "399 / 858",
        fit: "contain",
      },
      {
        src: "/assets/images/capso/atoms/phone-mood.png",
        alt: "Capso mood selection screen",
        caption: "Use mood as the control layer.",
        aspectRatio: "399 / 858",
        fit: "contain",
      },
    ],
    supportVisual: {
      src: "/assets/images/generated/capso-support.png",
      alt: "Abstract Capso support visual showing a soft mobile caption workflow",
      caption: "Generated support visual: a lightweight product-flow motif for photo input, tone selection, and caption output.",
      aspectRatio: "1600 / 1000",
      fit: "cover",
    },
    overview: {
      intro:
        "Capso is a concept for an AI-powered captioning app built around a specific behavioral gap: people can capture a moment instantly, but often struggle to describe it in a way that feels personal, clear, and worth sharing.",
      takeaway:
        "The real need was not full automation. Users wanted a faster way to start writing without sounding generic.",
    },
    problem: {
      intro: "Photo sharing was easy. Finding language that felt personal was not.",
      cards: [
        {
          title: "Caption fatigue",
          body: "Users wanted to share quickly but did not want to spend long stretches writing from scratch.",
        },
        {
          title: "Dependence on internet slang",
          body: "Repeated use of shorthand and meme language flattened expression over time.",
        },
        {
          title: "Weak emotional precision",
          body: "People could describe what they saw less easily than what they actually felt about it.",
        },
        {
          title: "Existing tools missed the moment",
          body: "Most products optimized image editing, not the writing task that comes right after.",
        },
      ],
      media: {
        src: "/assets/images/capso/atoms/flow-map.png",
        alt: "Capso product framing and flow visual in a browser-style composition",
        caption: "The clearest evidence lived in the flow: the friction starts after the photo is already taken.",
        aspectRatio: "6782 / 2544",
      },
    },
    whatIDid: {
      intro:
        "I researched expression habits, built personas around posting behavior, and translated the findings into a caption workflow that stays lightweight and configurable.",
      steps: [
        {
          title: "Quantified the pattern",
          body: "The survey and secondary research showed that caption-writing difficulty was common enough to shape a clear product opportunity.",
        },
        {
          title: "Mapped the posting journey",
          body: "The friction point appeared after the image was taken, right when users wanted to post and could not find the words.",
        },
        {
          title: "Designed an AI-assisted flow",
          body: "I built a system around image input, mood, keywords, and quick editing so users could steer the output without getting buried in controls.",
        },
      ],
      media: {
        src: "/assets/images/capso/atoms/research-panel.png",
        alt: "Capso prototype test, design system, and low-fidelity exploration",
        caption: "Prototype testing and design-system work kept the experience lightweight instead of over-automated.",
      },
    },
    insights: {
      callout: "Users did not want AI to write for them. They wanted help getting started faster and sounding more like themselves.",
      cards: [
        {
          title: "Prompts work better than essays",
          body: "Short outputs gave users a usable starting point without asking them to sort through too much AI text.",
        },
        {
          title: "Emotion matters as much as scene description",
          body: "A useful caption should carry tone and feeling, not just restate visible content.",
        },
        {
          title: "Personalization keeps the output credible",
          body: "Mood, style, and keyword inputs prevented the result from reading like generic AI filler.",
        },
      ],
    },
    solution: {
      intro: "Capso was shaped as a fast mobile workflow that fits the moment immediately after taking or selecting a photo.",
      cards: [
        {
          title: "Two natural entry points",
          body: "Users can start from the live camera or choose an existing photo from their library.",
        },
        {
          title: "Contextual text generation",
          body: "The system combines image content with keywords, mood, and style preferences to generate caption options.",
        },
        {
          title: "Lightweight editing",
          body: "The experience narrows the interface to essential refinement instead of turning it into a full writing app.",
        },
        {
          title: "Working prototype direction",
          body: "The concept included a Flask-based technical test connected to the OpenAI API.",
        },
      ],
      gallery: [
        {
          src: "/assets/images/capso/atoms/phone-mood.png",
          alt: "Capso refined mobile interface shown in a clean editorial presentation",
          caption: "The final UI keeps the workflow quick, expressive, and easy to steer",
          aspectRatio: "6782 / 2544",
        },
        {
          src: "/assets/images/capso/atoms/phone-generate.png",
          alt: "Capso polished mobile preview combining final UI and AI-assisted caption flow",
          caption: "The product story lands through a compact progression from image to AI-assisted caption output",
          aspectRatio: "6782 / 2544",
        },
        {
          src: "/assets/images/capso/atoms/research-panel.png",
          alt: "Capso design presentation, system, and prototype test",
          caption: "Brand system, low-fi exploration, and technical validation behind the final direction",
        },
      ],
    },
    outcome: {
      stats: [
        { value: "Published", label: "Later developed into a research paper" },
        { value: "LLM concept", label: "Connected UX framing with a working AI prototype direction" },
        { value: "Short-form focus", label: "Optimized around speed, tone, and scannability" },
      ],
      bullets: [
        "The project pointed to a focused need for caption support that respects the user’s voice.",
        "It connected UX research, product framing, visual design, and technical prototyping in one coherent case study.",
      ],
    },
    reflection: {
      text:
        "Capso clarified a product principle I still use: AI writing tools are most useful when they restore confidence and momentum, not when they try to become the voice of the user.",
    },
  },
  {
    slug: "stylr",
    title: "Stylr",
    type: "Consumer Product + User Research",
    year: "2024",
    featured: true,
    presentation: "editorial",
    heroImage: "/assets/images/stylr/atoms/profile-phone.png",
    heroAlt: "Stylr final profile and discovery interface on a phone mockup",
    decorImage: "/assets/images/decor/stylr-editorial.png",
    summary:
      "A fashion-learning and discovery app that helps users build personal style through inspiration, community, commerce, and virtual try-on.",
    teaser: "Designing a fashion product that teaches taste instead of only pushing products.",
    tags: ["Consumer product", "Fashion research", "Community", "Virtual try-on"],
    theme: {
      accent: "#8B4B67",
      soft: "#F9ECF1",
      glow: "rgba(139, 75, 103, 0.18)",
    },
    quickFacts: [
      { label: "Role", value: "Product researcher, mobile UX, product strategy" },
      { label: "Scope", value: "Research, positioning, product flow, commerce concept" },
      { label: "Direction", value: "Community, learning, and virtual try-on in one app" },
    ],
    snapshots: [
      { value: "Learning", label: "Fashion education, not just product listings" },
      { value: "Community", label: "Style discovery through social content" },
      { value: "Try-on", label: "Virtual closet and mirror direction" },
    ],
    researchLens: {
      question:
        "How might a fashion product help users build style confidence before asking them to buy?",
      methods: ["User interviews", "Competitive review", "Behavior mapping", "Mobile product architecture"],
      productDecision:
        "Position Stylr as a learning and discovery product, not only a shopping app, because users needed taste-building support before purchase intent.",
      tradeoff:
        "Balanced social, editorial, and commerce features while keeping the first concept centered on discovery and confidence rather than inventory depth.",
      evidenceArtifact: "Competitive gap map, user flow, virtual try-on concept, and mobile UI system",
    },
    evidenceCharts: [
      {
        title: "Stylr reframed fashion as confidence-building.",
        note: "The product direction came from three connected user needs rather than a single shopping flow.",
        type: "pillars",
        items: [
          { value: "Learn", label: "Build taste", note: "Fashion education and inspiration" },
          { value: "Try", label: "Lower risk", note: "Virtual closet and mirror" },
          { value: "Share", label: "Make it social", note: "Community-based discovery" },
        ],
      },
    ],
    decisionBlocks: [
      {
        eyebrow: "User signal",
        title: "Users did not need more products; they needed more confidence.",
        body:
          "The opportunity was not another shopping feed. It was a product that helps people learn taste, test outfits, and make style decisions with less risk.",
        bullets: ["Fashion education was missing from the experience.", "Trend content did not translate into personal taste.", "Trying combinations safely lowered decision anxiety."],
        mediaItems: [
          {
            src: "/assets/images/stylr/atoms/user-flow.png",
            alt: "Stylr user flow separated as a standalone visual",
            caption: "User flow: learning, discovery, saving, and shopping separated into steps.",
            aspectRatio: "889 / 439",
            fit: "contain",
          },
          {
            src: "/assets/images/stylr/atoms/framework.png",
            alt: "Stylr low-fidelity framework separated as a standalone visual",
            caption: "Framework: low-fi screens clarified how the product would scale.",
            aspectRatio: "555 / 460",
            fit: "contain",
          },
        ],
        media: {
          src: "/assets/images/stylr/atoms/user-flow.png",
          alt: "Focused crop of Stylr learning and discovery flow",
          caption: "User flow and low-fi framework split into readable pieces.",
          aspectRatio: "550 / 209",
          fit: "contain",
          objectPosition: "48% 50%",
        },
      },
      {
        eyebrow: "Product decision",
        title: "Make Stylr a style-learning product before a shopping product.",
        body:
          "The product system connects editorial inspiration, community outfits, saving, and shopping so commerce feels like a result of confidence instead of pressure.",
        bullets: ["Start with discovery and education.", "Use community as practical inspiration.", "Keep buying connected but secondary."],
        mediaItems: [
          {
            src: "/assets/images/stylr/atoms/phone-pair.png",
            alt: "Stylr onboarding and category phone mockups",
            caption: "Onboarding: a clearer entry into style preferences.",
            aspectRatio: "336 / 394",
            fit: "contain",
          },
          {
            src: "/assets/images/stylr/atoms/angled-phone.png",
            alt: "Stylr angled product mockup",
            caption: "Discovery: social, shopping, and saved looks in one system.",
            aspectRatio: "391 / 316",
            fit: "contain",
          },
          {
            src: "/assets/images/stylr/atoms/profile-phone.png",
            alt: "Stylr profile and discovery phone mockup",
            caption: "Profile: fashion identity becomes a product surface.",
            aspectRatio: "355 / 483",
            fit: "contain",
          },
        ],
        media: {
          src: "/assets/images/stylr/atoms/profile-phone.png",
          alt: "Focused crop of Stylr final UI",
          caption: "Final app design and polished product mockups.",
          aspectRatio: "550 / 209",
          fit: "contain",
          objectPosition: "50% 50%",
        },
      },
      {
        eyebrow: "Feature bet",
        title: "Use virtual try-on to turn inspiration into experimentation.",
        body:
          "The try-on layer gives users a safer way to test looks before buying, which supports the product's confidence-building position.",
        bullets: ["Make experimentation playful.", "Reduce purchase anxiety.", "Connect closet planning with discovery."],
        mediaItems: [
          {
            src: "/assets/images/stylr/atoms/virtual-closet.png",
            alt: "Stylr virtual closet and mirror concept",
            caption: "Virtual closet: translate inspiration into outfit testing.",
            aspectRatio: "602 / 368",
            fit: "cover",
          },
          {
            src: "/assets/images/stylr/atoms/vr-room-a.png",
            alt: "Stylr VR room scene showing virtual try-on",
            caption: "VR scene: try-on becomes spatial and playful.",
            aspectRatio: "213 / 121",
            fit: "cover",
          },
          {
            src: "/assets/images/stylr/atoms/vr-room-b.png",
            alt: "Stylr VR room scene showing interface overlay",
            caption: "VR overlay: product controls stay close to the mirror experience.",
            aspectRatio: "213 / 120",
            fit: "cover",
          },
        ],
        media: {
          src: "/assets/images/stylr/atoms/virtual-closet.png",
          alt: "Stylr virtual mirror and closet concept",
          caption: "Virtual closet and mirror direction as the clearest confidence feature.",
          aspectRatio: "550 / 209",
          fit: "contain",
          objectPosition: "50% 48%",
        },
      },
    ],
    heroGallery: [
      {
        src: "/assets/images/stylr/atoms/phone-pair.png",
        alt: "Stylr onboarding phone mockups",
        caption: "Onboarding: preference capture before recommendations.",
        aspectRatio: "336 / 394",
        fit: "contain",
      },
      {
        src: "/assets/images/stylr/atoms/angled-phone.png",
        alt: "Stylr angled final mobile mockup",
        caption: "Polished UI: fashion discovery as a mobile system.",
        aspectRatio: "391 / 316",
        fit: "contain",
      },
      {
        src: "/assets/images/stylr/atoms/profile-phone.png",
        alt: "Stylr final profile and discovery interface on a phone mockup",
        caption: "Final product surface: style identity and discovery.",
        aspectRatio: "355 / 483",
        fit: "contain",
      },
      {
        src: "/assets/images/stylr/atoms/virtual-closet.png",
        alt: "Stylr virtual closet and mirror concept",
        caption: "Try-on: confidence before purchase.",
        aspectRatio: "602 / 368",
        fit: "cover",
      },
      {
        src: "/assets/images/stylr/atoms/user-flow.png",
        alt: "Stylr user flow separated as a standalone visual",
        caption: "Flow: learning and commerce stay connected.",
        aspectRatio: "889 / 439",
        fit: "contain",
      },
    ],
    supportVisual: {
      src: "/assets/images/generated/stylr-support.png",
      alt: "Abstract Stylr support visual showing fashion editorial cards and palette swatches",
      caption: "Generated support visual: an editorial composition that supports style discovery, palette building, and try-on exploration.",
      aspectRatio: "1600 / 1000",
      fit: "cover",
    },
    overview: {
      intro:
        "Stylr treats fashion as a process of learning and self-expression rather than pure consumption. The concept brings together inspiration, community, shopping, and virtual try-on so users can discover and test what feels like their own style.",
      takeaway:
        "The central opportunity was confidence: people wanted to develop taste, not just scroll through products and trends.",
    },
    problem: {
      intro: "Users were surrounded by fashion content but still lacked a clear path to building personal style.",
      cards: [
        {
          title: "Little fashion education",
          body: "Formal education rarely helps people learn clothing aesthetics in a practical, ongoing way.",
        },
        {
          title: "Trend overload",
          body: "Users saw endless outfit content but struggled to translate it into something that matched their own identity.",
        },
        {
          title: "Low experimentation confidence",
          body: "People wanted to try more combinations but feared making the wrong choice or looking off-trend.",
        },
        {
          title: "Shopping apps felt too transactional",
          body: "Existing products often pushed buying behavior without helping users build taste or judgment.",
        },
      ],
      media: {
        src: "/assets/images/stylr/atoms/user-flow.png",
        alt: "Stylr flow visual showing the relationship between learning, discovery, and try-on",
        caption: "The challenge was structuring fashion learning, discovery, and commerce without collapsing into a marketplace.",
        aspectRatio: "3078 / 966",
      },
    },
    whatIDid: {
      intro:
        "I researched outfit habits and motivations, compared adjacent products, and translated the findings into a flow that blends social discovery with style learning.",
      steps: [
        {
          title: "Interviewed around style behavior",
          body: "I looked at where people learned about outfits, what they wanted from style, and what stopped them from experimenting more.",
        },
        {
          title: "Mapped the competitive gap",
          body: "Products like SNKRS and GOAT showed strong commerce signals but weaker support for style education and self-expression.",
        },
        {
          title: "Designed the product system",
          body: "The concept unified onboarding, recommendation, community posts, shopping, and try-on into one product story.",
        },
      ],
      media: {
        src: "/assets/images/stylr/atoms/virtual-closet.png",
        alt: "Stylr virtual mirror and closet concept",
        caption: "The try-on concept came from a need to make experimentation feel safer and more playful.",
      },
    },
    insights: {
      callout: "Users were not asking for more products. They were asking for help building taste and making decisions with more confidence.",
      cards: [
        {
          title: "Style confidence is learned",
          body: "People need repeated exposure, guidance, and feedback to trust their own aesthetic choices.",
        },
        {
          title: "Community makes inspiration usable",
          body: "Browsing real outfits and seeing how others style pieces makes the learning process feel concrete.",
        },
        {
          title: "Trying before buying lowers risk",
          body: "Virtual experimentation gives users room to explore without immediately committing to a purchase.",
        },
      ],
    },
    solution: {
      intro: "Stylr became a fashion platform that teaches, inspires, and converts without losing its editorial feel.",
      cards: [
        {
          title: "Personalized discovery feed",
          body: "Daily recommendations, style categories, and trending products give users a tailored starting point.",
        },
        {
          title: "Community-based learning",
          body: "Users browse other outfits, follow accounts, and treat the feed as both inspiration and informal education.",
        },
        {
          title: "Integrated shopping flow",
          body: "Discovery, saving, and buying stay connected instead of forcing users to jump between disconnected modes.",
        },
        {
          title: "Virtual closet and mirror",
          body: "A try-on direction creates safer space for experimentation and outfit planning.",
        },
      ],
      gallery: [
        {
          src: "/assets/images/stylr/atoms/angled-phone.png",
          alt: "Stylr refined mobile interface in an editorial-style presentation",
          caption: "The final UI gave the product a cleaner, more premium fashion-editorial feel",
          aspectRatio: "3078 / 966",
        },
        {
          src: "/assets/images/stylr/atoms/virtual-closet.png",
          alt: "Stylr virtual try-on concept",
          caption: "Virtual closet and mirror direction created safer space for experimentation",
        },
        {
          src: "/assets/images/stylr/atoms/profile-phone.png",
          alt: "Stylr editorial mobile preview combining final UI and virtual try-on direction",
          caption: "The product system stays consistent across social, editorial, and commerce moments",
          aspectRatio: "3078 / 966",
        },
      ],
    },
    outcome: {
      stats: [
        { value: "One concept", label: "Connected education, inspiration, and commerce" },
        { value: "Clear system", label: "Established a reusable mobile visual language" },
        { value: "Broader value", label: "Positioned the app beyond purely transactional shopping" },
      ],
      bullets: [
        "The project produced a full mobile flow, interface language, and business framing for a fashion-learning product.",
        "It showed how social content, shopping behavior, and self-expression can support each other when they are treated as one experience.",
      ],
    },
    reflection: {
      text:
        "Stylr reminded me that the best product direction often sits between categories. The value here came from blending social, editorial, and commerce signals into something that felt more like a style companion than a store.",
    },
  },
];

export const otherWork: OtherWork[] = [
  {
    title: "Sensory Garden Labyrinth",
    year: "2024",
    category: "Spatial Experience Design",
    image: "/assets/images/sensory-garden/cover.png",
    alt: "Sensory Garden Labyrinth polished preview composition",
    description:
      "A multisensory garden maze that uses scent, touch, and color to help visitors reconnect with the physical world and step away from device dependence.",
  },
  {
    title: "Modular Navigation Shoe",
    year: "2024",
    category: "Industrial + Product Design",
    image: "/assets/images/navigation-shoe/cover.png",
    alt: "Modular Navigation Shoe polished preview composition",
    description:
      "A footwear concept that combines modular add-ons, kinetic energy recovery, and integrated navigation to reduce gear burden in outdoor exploration.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
