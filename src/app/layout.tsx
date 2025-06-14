'use client';

import { BaseNeue } from '@/fonts';
import '@/styles/global.scss';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Next.js" />
        <meta name="author" content="Arif Rahman Amrul Ghani" />
        <link rel="author" href="https://nextjs.org" />
        <link
          rel="icon"
          href="/static/favicon.png"
          type="image/png"
          sizes="16x16"
        />
        <meta
          name="keywords"
          content="Frontend Engineer,UI/UX Designer,Next.js,React,JavaScript"
        />
        <title>Arif Rahman — Frontend Engineer</title>
      </head>
      <body
        className={`
          ${BaseNeue.normal.variable}
          ${BaseNeue.condensed.variable}
          ${BaseNeue.expanded.variable}
          ${BaseNeue.wide.variable}`}
      >
        {children}
      </body>
    </html>
  );
};

export default Layout;
