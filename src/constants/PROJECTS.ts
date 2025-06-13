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
      'https://res.cloudinary.com/danschgov/image/upload/v1749824756/Portfolio/Banner/eduka.png',
  },
  {
    project_slug: 'squaredle',
    title: 'Squaredle Solver',
    year: '2000',
    image:
      'https://res.cloudinary.com/danschgov/image/upload/v1749824755/Portfolio/Banner/squaredle.png',
  },
  {
    project_slug: 'kboom',
    title: 'Kboom',
    year: '2000',
    image:
      'https://res.cloudinary.com/danschgov/image/upload/v1749824758/Portfolio/Banner/kboom.png',
  },
  {
    project_slug: 'itb',
    title: 'Final Project: ITB Integrated App',
    year: '2000',
    image:
      'https://res.cloudinary.com/danschgov/image/upload/v1749824755/Portfolio/Banner/itb.png',
  },
  {
    project_slug: 'matoa',
    title: 'Matoa Redesign',
    year: '2000',
    image:
      'https://res.cloudinary.com/danschgov/image/upload/v1749824755/Portfolio/Banner/matoa.png',
  },
];
