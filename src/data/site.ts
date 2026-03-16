export const siteMeta = {
  name: 'Martin Lepage',
  shortName: 'Martin Lepage',
  title: 'Martin Lepage',
  siteUrl: 'https://martinlepage.example',
  description:
    'Montreal-based scholar, writer, and AI governance consultant working across governance, digital culture, ritual and media analysis, queer theory, and experimental authorship.',
  locale: 'en-CA',
  email: 'martinlepage.ai@gmail.com',
  location: 'Montreal, Quebec, Canada',
  jobTitle: 'Scholar, writer, and AI governance consultant',
  linkedIn: 'https://linkedin.com/in/martin-lepage-ai',
  github: 'https://github.com/martinlepage26-bit/',
  orcid: 'https://orcid.org/0009-0006-4320-6254',
  substack: 'https://substack.com/@hexadecimalproject',
  instagram: 'https://www.instagram.com/wheelsofwill_/',
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/papers/', label: 'Papers' },
  { href: '/projects/', label: 'Projects' },
  { href: '/writing/', label: 'Writing' },
  { href: '/resume/', label: 'Resume' },
  { href: '/contact/', label: 'Contact' },
] as const;

export const heroFacts = [
  'PhD in Religious Sciences, UQAM',
  'AI governance and documentation strategy',
  'Independent scholar and public writer',
  'English and French',
];

export const homeHighlights = [
  {
    title: 'Governance with traceability',
    description:
      'Documentation-first consulting for organizations trying to map AI use cases, decisions, approvals, and accountability before a crisis or audit makes the work unavoidable.',
  },
  {
    title: 'Research with interpretive depth',
    description:
      'A qualitative and interdisciplinary practice shaped by ritual studies, queer theory, feminist analysis, media criticism, and long-form cultural interpretation.',
  },
  {
    title: 'Independent projects with form',
    description:
      'Books, essays, archives, governance frameworks, and experimental writing projects that move between intellectual seriousness and symbolic atmosphere.',
  },
] as const;

export const biography = {
  intro:
    'Martin Lepage is a Montreal-based scholar, writer, and AI governance consultant whose work moves between qualitative research, independent authorship, documentation-heavy operational environments, and governance design for emerging AI systems.',
  paragraphs: [
    'His academic background spans ritual studies, queer theory, feminist media analysis, digital culture, and contemporary spiritualities. He completed a PhD in Religious Sciences at Universite du Quebec a Montreal, following earlier degrees in literary studies at Universite Laval.',
    'Professionally, he has worked across research operations, archival preservation, AI-assisted quality review, and clinical trial coordination. That combination gives his consulting practice an unusual shape: interpretive enough to understand messy institutional realities, and operational enough to make governance usable.',
    'His current body of work treats governance, media, and authorship as linked problems of legitimacy, containment, narrative, and evidence. The result is a public profile designed to speak to academic audiences, consulting clients, editors, and media collaborators without splitting those worlds apart.',
  ],
  currentWork:
    'Current work includes AI governance frameworks and risk mapping, publication-ready scholarly writing on witchcraft and postfeminist media, and book-stage projects that range from near-finished manuscripts to proposal-level architectures.',
};

export const researchInterests = [
  'AI governance and decision traceability',
  'Digital culture, platform ritual, and enchantment',
  'Queer theory, gender, and legitimacy',
  'Ritual studies and symbolic systems',
  'Media analysis, postfeminism, and television',
  'Experimental authorship and essay practice',
];

export const timeline = [
  {
    year: '2007',
    title: 'B.A. in Literary Studies',
    detail: 'Completed at Universite Laval.',
  },
  {
    year: '2009',
    title: 'M.A. in Literary Studies',
    detail: 'Graduate work at Universite Laval on symbolic and archetypal representations.',
  },
  {
    year: '2010-2017',
    title: 'Research and Teaching Assistant',
    detail: 'Contributed to teaching and research across sociology, sexology, and religious studies at UQAM.',
  },
  {
    year: '2017',
    title: 'PhD in Religious Sciences',
    detail: 'Completed at UQAM with doctoral research on queer ritual negotiations in Montreal neopagan communities.',
  },
  {
    year: '2019-2021',
    title: 'National Film Board of Canada',
    detail: 'Worked in materials and preservation, with an archival and systems-focused workflow.',
  },
  {
    year: '2022',
    title: 'Lead Quality Evaluator',
    detail: 'Assessed AI-assisted customer service environments, escalation logic, and output reliability.',
  },
  {
    year: '2023-2025',
    title: 'Clinical and Academic Research Coordination',
    detail: "Led research-support and documentation workflows at Clinique medicale L'Actuel in Montreal.",
  },
  {
    year: '2025-2026',
    title: 'Clinical Trial Coordination and Governance Practice',
    detail: 'Combined high-compliance trial operations with AI governance framing, risk mapping, and decision documentation.',
  },
] as const;

export const resumeData = {
  summary:
    'Business-ready AI governance and research operations professional with experience across clinical trials, AI-assisted quality evaluation, archival systems, and scholarly research. Strong at bringing structure to fast-moving work: mapping AI use cases, identifying risk, improving traceability, supporting compliance, and producing decision-ready documentation.',
  experience: [
    {
      title: 'Clinical Trial Coordinator',
      organization: 'Novartis Canada (via Calian Group)',
      location: 'Remote',
      dates: 'Oct 2025 - Jan 2026',
      bullets: [
        'Coordinated large-scale pharmaceutical trial activity in a high-compliance environment and kept documentation review-ready under tight timelines.',
        'Managed cross-functional communication across distributed stakeholders to keep operational and regulatory materials moving.',
        'Delivered structured, audit-ready materials for time-sensitive trial work.',
      ],
    },
    {
      title: 'Assistant Research Coordinator (Clinical and Academic)',
      organization: "Clinique medicale L'Actuel",
      location: 'Montreal',
      dates: 'Aug 2023 - Oct 2025',
      bullets: [
        'Directed research protocol coordination, stakeholder engagement, and documentation workflows across clinical and academic settings.',
        'Improved grant, reporting, and formal project materials through clearer documentation pipelines.',
        'Maintained project integrity across ethical, clinical, and academic standards.',
      ],
    },
    {
      title: 'Research and Laboratory Assistant',
      organization: "Clinique medicale L'Actuel",
      location: 'Montreal',
      dates: 'Jan 2023 - Aug 2023',
      bullets: [
        'Managed sample processing, database input, and research tracking for multi-phase work.',
        'Supported cleaner data reporting and stronger workflow consistency.',
      ],
    },
    {
      title: 'Lead Quality Evaluator (EN/FR)',
      organization: 'Concentrix (Toyota Connected)',
      location: 'Remote',
      dates: '2022',
      bullets: [
        'Evaluated decision quality in AI-assisted customer service environments in English and French.',
        'Identified risk signals in escalation logic, judgment consistency, and potential output bias.',
        'Turned review findings into practical recommendations to improve workflow reliability and trustworthiness.',
      ],
    },
    {
      title: 'Materials and Preservation Clerk',
      organization: 'National Film Board of Canada',
      location: 'Canada',
      dates: '2019 - 2021',
      bullets: [
        'Maintained digital and physical media preservation workflows for complex archival assets.',
        'Documented lifecycle controls and retrieval processes to improve traceability.',
      ],
    },
    {
      title: 'Research and Teaching Assistant',
      organization: 'UQAM',
      location: 'Montreal',
      dates: '2010 - 2017',
      bullets: [
        'Supported teaching and research in sociology, sexology, and religious studies.',
        'Led tutorials, assessed student work, and contributed to publication-oriented research.',
      ],
    },
  ],
  education: [
    {
      title: 'PhD, Religious Sciences',
      organization: 'Universite du Quebec a Montreal',
      dates: '2017',
      detail: 'Doctoral work focused on queer ritual negotiations, legitimacy, and performance in Montreal neopagan communities.',
    },
    {
      title: 'M.A., Literary Studies',
      organization: 'Universite Laval',
      dates: '2009',
      detail: 'Graduate research on symbolic and archetypal influences in narrative literature.',
    },
    {
      title: 'B.A., Literary Studies',
      organization: 'Universite Laval',
      dates: '2007',
      detail: 'Undergraduate training in literary analysis and critical interpretation.',
    },
  ],
  certifications: [
    'Responsible Generative AI Specialization - University of Michigan, Coursera (Completed Jan. 2026)',
    'Responsible and Ethical AI - Northeastern University, Coursera (Completed Jan. 2026)',
    'Strategic AI Governance - Executive-Level Risk, Ethics and Oversight (Coursera Professional Specialization)',
    'Building Trustworthy AI Specialization - Coursera (Completed Jan. 2026)',
    'ICH Good Clinical Practice (GCP) E6(R3) - The Global Health Network (Completed Oct. 25, 2025)',
  ],
  expertise: [
    {
      label: 'AI governance',
      items: [
        'AI use case inventory',
        'Governance risk mapping',
        'Decision traceability',
        'Escalation logic',
        'Minimum viable governance frameworks',
      ],
    },
    {
      label: 'Compliance and review',
      items: [
        'AIDA',
        'EU AI Act',
        'NIST AI RMF',
        'Audit-ready documentation',
        'Reviewable approval structures',
      ],
    },
    {
      label: 'Research operations',
      items: [
        'Protocol support',
        'Reporting pipelines',
        'Stakeholder communication',
        'Documentation under deadlines',
        'Quality control',
      ],
    },
    {
      label: 'Tools and languages',
      items: [
        'REDCap',
        'Microsoft Office Suite',
        'Canva',
        'WordPress',
        'Python (basic data navigation)',
        'English',
        'French',
      ],
    },
  ],
  contact: [
    'martinlepage.ai@gmail.com',
    'Montreal, Quebec, Canada',
    'LinkedIn: martin-lepage-ai',
    'GitHub: martinlepage26-bit',
  ],
};

export const contactAreas = [
  'Consulting and governance engagements',
  'Editorial, interview, and media opportunities',
  'Talks, guest lectures, and panels',
  'Research collaborations and publication conversations',
];
