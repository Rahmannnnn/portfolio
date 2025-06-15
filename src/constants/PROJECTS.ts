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
    year: '2021',
    image: 'edukasystem/eduka1.png',
  },
  {
    project_slug: 'squaredle',
    title: 'Squaredle Solver',
    year: '2024',
    image: 'squaredle/squaredle1.png',
  },
  {
    project_slug: 'kboom',
    title: 'Kboom',
    year: '2023',
    image: 'kboom/kboom1.png',
  },
  {
    project_slug: 'itb',
    title: 'ITB Student Service App',
    year: '2025',
    image: 'itb/itb1.png',
  },
  {
    project_slug: 'matoa',
    title: 'Matoa Redesign',
    year: '2023',
    image: 'matoa/matoa1.png',
  },
];
