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
      'https://res.cloudinary.com/danschgov/image/upload/v1749909060/Portfolio/eduka/eduka0_sd2a6f.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908001/Portfolio/eduka/eduka1_h6zylk.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749909395/Portfolio/eduka/eduka2_lanphx.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908015/Portfolio/eduka/eduka3_qly7sr.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908030/Portfolio/eduka/eduka4_qwlgxi.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908079/Portfolio/eduka/eduka5_rapncq.png',
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
      'https://res.cloudinary.com/danschgov/image/upload/v1749908246/Portfolio/squaredle/squaredle1_vop0mu.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908246/Portfolio/squaredle/squaredle2_vb1nt8.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908257/Portfolio/squaredle/squaredle3_dhxd89.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908250/Portfolio/squaredle/squaredle4_yy6x8l.png',
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
      'https://res.cloudinary.com/danschgov/image/upload/v1749908252/Portfolio/kboom/kboom1_iepd4w.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908262/Portfolio/kboom/kboom2_wupagy.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908257/Portfolio/kboom/kboom3_wfj7co.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908263/Portfolio/kboom/kboom4_uie2gy.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908268/Portfolio/kboom/kboom5_roqpk0.png',
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
      'https://res.cloudinary.com/danschgov/image/upload/v1749907883/Portfolio/itb/itb1_qdynhk.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749907884/Portfolio/itb/itb2_acpgiz.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749907888/Portfolio/itb/itb3_ijdrfe.png',
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
      'https://res.cloudinary.com/danschgov/image/upload/v1749908275/Portfolio/matoa/matoa1_jt0fkx.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908278/Portfolio/matoa/matoa2_b9jtoj.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908293/Portfolio/matoa/matoa3_gmypal.png',
      'https://res.cloudinary.com/danschgov/image/upload/v1749908302/Portfolio/matoa/matoa4_avz3hc.png',
    ],
  },
];
