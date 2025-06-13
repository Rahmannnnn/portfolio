// TODO: Add real content
export interface IProjectDetail {
  project_slug: string;
  title: string;
  year: string;
  start_date: Date;
  end_date: Date;
  overview: string;
  images: string[];
}

export const PROJECT_DETAILS: IProjectDetail[] = [
  {
    project_slug: 'edukasystem',
    title: 'Edukasystem',
    start_date: new Date(),
    end_date: new Date(),
    overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    year: '2000',
    images: [
      'https://res.cloudinary.com/danschgov/image/upload/v1749824755/Portfolio/Banner/eduka.png',
    ],
  },
  {
    project_slug: 'squaredle',
    title: 'Squaredle Solver',
    start_date: new Date(),
    end_date: new Date(),
    overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    year: '2000',
    images: [
      'https://res.cloudinary.com/danschgov/image/upload/v1749824755/Portfolio/Banner/squaredle.png',
    ],
  },
  {
    project_slug: 'kboom',
    title: 'Kboom',
    start_date: new Date(),
    end_date: new Date(),
    overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    year: '2000',
    images: [
      'https://res.cloudinary.com/danschgov/image/upload/v1749824755/Portfolio/Banner/kboom.png',
    ],
  },
  {
    project_slug: 'itb',
    title: 'Final Project: ITB Integrated Student Service App',
    start_date: new Date(),
    end_date: new Date(),
    overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    year: '2000',
    images: [
      'https://res.cloudinary.com/danschgov/image/upload/v1749824755/Portfolio/Banner/itb.png',
    ],
  },
  {
    project_slug: 'matoa',
    title: 'Matoa',
    start_date: new Date(),
    end_date: new Date(),
    overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    year: '2000',
    images: [
      'https://res.cloudinary.com/danschgov/image/upload/v1749824755/Portfolio/Banner/matoa.png',
    ],
  },
];
