// TODO: Add real content
export interface Project {
  image: string;
  title: string;
  year: string;
  project_slug: string;
}

export const PROJECTS: Project[] = [
  {
    project_slug: 'edukasystem',
    title: 'Edukasystem',
    year: '2000',
    image:
      'https://res.cloudinary.com/danschgov/image/upload/v1749909060/Portfolio/eduka/eduka0_sd2a6f.png',
  },
  {
    project_slug: 'squaredle',
    title: 'Squaredle Solver',
    year: '2000',
    image:
      'https://res.cloudinary.com/danschgov/image/upload/v1749908246/Portfolio/squaredle/squaredle1_vop0mu.png',
  },
  {
    project_slug: 'kboom',
    title: 'Kboom',
    year: '2000',
    image:
      'https://res.cloudinary.com/danschgov/image/upload/v1749908252/Portfolio/kboom/kboom1_iepd4w.png',
  },
  {
    project_slug: 'itb',
    title: 'Final Project: ITB Integrated App',
    year: '2000',
    image:
      'https://res.cloudinary.com/danschgov/image/upload/v1749907883/Portfolio/itb/itb1_qdynhk.png',
  },
  {
    project_slug: 'matoa',
    title: 'Matoa Redesign',
    year: '2000',
    image:
      'https://res.cloudinary.com/danschgov/image/upload/v1749908275/Portfolio/matoa/matoa1_jt0fkx.png',
  },
];
