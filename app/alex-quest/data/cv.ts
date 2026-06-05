export interface SkillCategory {
  [category: string]: string[];
}

export interface ExperienceGroup {
  product: string;
  blurb: string;
  points: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  when: string;
  mode: string;
  groups: ExperienceGroup[];
}

export interface EducationEntry {
  what: string;
  where: string;
  when: string;
}

export interface CVData {
  name: string;
  alias: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  phone: string;
  summary: string;
  stats: { label: string; val: number; note: string }[];
  skills: SkillCategory;
  experience: ExperienceEntry[];
  extras: string[];
  education: EducationEntry[];
}

export const CV: CVData = {
  name: 'Aleksandr Mir',
  alias: 'ALEX',
  title: 'Senior Frontend Engineer',
  location: 'Berlin, Germany',
  email: 'totfront@gmail.com',
  linkedin: 'https://linkedin.com/in/xelarim/',
  phone: '+49 177 9276613',
  summary:
    'Senior Software Engineer specialising in scalable frontend architectures and cross-functional technical leadership. Track record of driving high-impact features across data-intensive platforms, improving infrastructure, and delivering measurable business outcomes while maintaining exceptional user experience.',

  stats: [
    { label: 'IMPACT', val: 9, note: 'ships measurable wins' },
    { label: 'ARCHITECTURE', val: 9, note: 'scalable frontends' },
    { label: 'LEADERSHIP', val: 8, note: 'leads cross-functional' },
    { label: 'A11Y', val: 9, note: 'accessibility advocate' },
  ],

  skills: {
    Frontend: [
      'JavaScript', 'TypeScript', 'React', 'Next.js', 'CSS Modules', 'Tailwind',
      'Jest', 'Cypress', 'Playwright',
    ],
    'Backend & Infra': ['Node.js', 'Express.js', 'REST (OpenAPI/Swagger)'],
    Platform: [
      'Optimizely', 'Kameleoon', 'Lokalise', 'Figma (dev mode + MCP)',
      'Claude', 'Copilot', 'Cursor',
    ],
  },

  experience: [
    {
      role: 'Frontend Engineer',
      company: 'Adevinta / eBay',
      when: 'May 2022 – Present',
      mode: 'Hybrid',
      groups: [
        {
          product: 'kleinanzeigen',
          blurb: "Germany's biggest second-hand marketplace",
          points: [
            'Built a metrics web-app for all professional clients in Germany, growing the paid-package feature set by 6%.',
            'Grew the PRO subscription funnel, increasing profit of the most profitable branch by 3.3%.',
            'Drove infra improvements: UI library upgrades, ADRs, a11y knowledge-sharing, design-system talks.',
            'Initiated & delivered a tracking library — cut integration cost & QA effort by ~80%.',
          ],
        },
        {
          product: 'mobile.de',
          blurb: "Germany's biggest car marketplace",
          points: [
            'Bootstrapped a full-stack Next.js app at an in-house startup — +17% performance for all pro dealers in Germany.',
            'Drove a POC of an AI chatbot replacing a complex filter UI — +41% lead conversion.',
            'Unified auth across native apps & web-view — cut iOS/Android maintenance load by 100%.',
          ],
        },
        {
          product: 'kijiji',
          blurb: 'Online retail platform, Canada',
          points: [
            'Engineered a digital retail flow letting clients buy cars virtually — Time-To-Buy down 31%.',
            'Migrated 30% of the platform from JS to TypeScript, boosting stability.',
            'Virtualised large search lists — Time-To-First-Byte down 71%.',
          ],
        },
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Huntica',
      when: 'Jul 2021 – May 2022',
      mode: 'Remote',
      groups: [
        {
          product: 'huntica.works',
          blurb: 'Automated HR platform',
          points: [
            'Restructured the codebase with Domain-Driven Design, reducing churn.',
            'Implemented infinite scroll in the in-app messenger.',
          ],
        },
      ],
    },
    {
      role: 'Software Engineer / Team Lead',
      company: 'Noviy Disk',
      when: 'Nov 2019 – Jul 2021',
      mode: 'Hybrid',
      groups: [
        {
          product: 'Education & games',
          blurb: 'Led a team of four',
          points: [
            'Shipped two courses, a game and an educational platform through the full cycle.',
            'Set up a code guide & CI standards — cut the debugging phase by 3×.',
            'Managed 4 engineers; aligned OKRs with stakeholders.',
          ],
        },
      ],
    },
    {
      role: 'Software Developer',
      company: 'Freelance',
      when: 'Dec 2018 – Nov 2019',
      mode: 'Remote',
      groups: [
        {
          product: 'Various clients',
          blurb: '',
          points: [
            'Built landing pages and extended existing products with new functionality.',
          ],
        },
      ],
    },
  ],

  extras: [
    "Founder of Someone's car",
    'Lead of Google Developer Group Berlin — organising end-to-end tech events',
    'Speaker: "Accessibility does matter" @ DevFest Berlin 2024',
    'Speaker: "Internationalization of tomorrow" @ Frontend Meetup',
    'Author of educational content (teletype.in/@xelarim)',
  ],

  education: [
    { what: 'Master, Informatics & Automation', where: 'MGSU', when: '2010–2015' },
    { what: 'React Engineer / Fullstack Engineer', where: 'Yandex.Praktikum', when: '2021–2023' },
  ],
};
