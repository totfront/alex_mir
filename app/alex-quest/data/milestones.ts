import { C } from '../lib/theme';

export interface Milestone {
  icon: string;
  title: string;
  hint: string;
  story: string;
  color: string;
}

export const MILESTONES: Milestone[] = [
  {
    icon: '🎮',
    title: '2018 · THE START',
    hint: 'Freelance landing pages',
    story: 'Started with freelance landing pages, then led a team of four — shipping a game and an education platform.',
    color: C.cyan,
  },
  {
    icon: '🧩',
    title: 'kijiji · TYPESCRIPT',
    hint: 'JS → TS migration',
    story: 'Migrated 30% of the platform to TypeScript and virtualised huge lists — Time-To-First-Byte down 71%.',
    color: C.cyan,
  },
  {
    icon: '🤖',
    title: 'mobile.de · AI CHATBOT',
    hint: '+41% lead conversion',
    story: 'Replaced a clunky filter UI with an AI chatbot POC — lead conversion up 41%.',
    color: C.magenta,
  },
  {
    icon: '🚀',
    title: 'mobile.de · NEXT.JS',
    hint: '+17% performance',
    story: 'Bootstrapped a full-stack Next.js app — every professional car dealer in Germany got 17% faster.',
    color: C.green,
  },
  {
    icon: '🤝',
    title: 'GDG BERLIN · SPEAKER',
    hint: 'Community & a11y',
    story: 'Leads Google Developer Group Berlin and speaks on accessibility & internationalization.',
    color: C.amber,
  },
];
