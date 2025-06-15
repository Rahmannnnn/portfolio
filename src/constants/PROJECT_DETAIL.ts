import { ICONS } from './ICONS';

// TODO: Add real content
export interface IProjectDetail {
  project_slug: string;
  title: string;
  year: string;
  start_date: Date;
  end_date: Date;
  overview: string;
  images: string[];
  tools: ICONS[];
}

export const PROJECT_DETAILS: IProjectDetail[] = [
  {
    project_slug: 'edukasystem',
    title: 'Edukasystem',
    start_date: new Date(),
    end_date: new Date(),
    overview: `<p>Edukasystem (now: Buwhan Edu) — an edtech platform that helps students prepare for various exams, including Indonesia’s UTBK/SBMPTN—similar to the SAT or CSAT—by providing comprehensive practice questions across multiple subjects.</p><p>I was responsible for the main product and three internal websites, and also implemented a new Study Manager feature that includes a custom-built calendar, allowing users to create personalized study schedules, set timers, and use the Pomodoro method to support focused learning.</p>`,
    year: '2021 - 2022',
    images: [
      'edukasystem/eduka1.png',
      'edukasystem/eduka2.png',
      'edukasystem/eduka3.png',
      'edukasystem/eduka4.png',
      'edukasystem/eduka5.png',
      'edukasystem/eduka6.png',
    ],
    tools: [
      ICONS.JAVASCRIPT,
      ICONS.VUEJS,
      ICONS.REACTJS,
      ICONS.SCSS,
      ICONS.FIGMA,
      ICONS.POSTMAN,
      ICONS.JEST,
      ICONS.VSCODE,
    ],
  },
  {
    project_slug: 'squaredle',
    title: 'Squaredle Solver',
    start_date: new Date(),
    end_date: new Date(),
    overview: `<p>Squaredle Solver — a web-based solver tool for the word puzzle game Squaredle.app, developed as a personal side project. Users can input the puzzle grid and letter combinations to automatically generate all possible valid words.</p>`,
    year: '2024',
    images: [
      'squaredle/squaredle1.png',
      'squaredle/squaredle2.png',
      'squaredle/squaredle3.png',
      'squaredle/squaredle4.png',
    ],
    tools: [
      ICONS.TYPESCRIPT,
      ICONS.REACTJS,
      ICONS.SCSS,
      ICONS.FIGMA,
      ICONS.VSCODE,
    ],
  },
  {
    project_slug: 'kboom',
    title: 'Kboom',
    start_date: new Date(),
    end_date: new Date(),
    overview: `<p>Kboom — a web-based ticketing platform for K-pop concerts in Indonesia, built as a practice project during Labs Bootcamp. It allows users to browse upcoming events, view details, and order tickets through a responsive and user-friendly interface.</p>`,
    year: '2023',
    images: [
      'kboom/kboom1.png',
      'kboom/kboom2.png',
      'kboom/kboom3.png',
      'kboom/kboom4.png',
      'kboom/kboom5.png',
    ],
    tools: [
      ICONS.TYPESCRIPT,
      ICONS.REACTJS,
      ICONS.NEXTJS,
      ICONS.SCSS,
      ICONS.FIGMA,
      ICONS.VSCODE,
    ],
  },
  {
    project_slug: 'itb',
    title: 'ITB Student Service App',
    start_date: new Date(),
    end_date: new Date(),
    overview: `<p>I designed a UI/UX system that integrates various student services at ITB (Institut Teknologi Bandung) as the main focus of my undergraduate thesis.</p><p>The goal was to create a unified and user-friendly interface that streamlines access to academic, administrative, and support services for students. This project emphasized user-centered design principles, iterative testing, and service integration to improve overall usability and experience.</p>`,
    year: '2025',
    images: ['itb/itb1.png', 'itb/itb2.png', 'itb/itb3.png'],
    tools: [ICONS.FIGMA, ICONS.GOOGLEFORMS],
  },
  {
    project_slug: 'matoa',
    title: 'Matoa Redesign',
    start_date: new Date(),
    end_date: new Date(),
    overview: `<p>Matoa is an Indonesian lifestyle brand based in Bandung, renowned for its premium wooden watches.</p><p>I implemented the Matoa website redesign (inspired by Matoa Redesign on Figma Community) into a functional frontend. This project allowed me to practice translating high-fidelity UI designs into responsive and visually consistent web interfaces.</p>`,
    year: '2023',
    images: [
      'matoa/matoa1.png',
      'matoa/matoa2.png',
      'matoa/matoa3.png',
      'matoa/matoa4.png',
    ],
    tools: [ICONS.TYPESCRIPT, ICONS.REACTJS],
  },
];
