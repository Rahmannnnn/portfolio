'use client';

import Footer from '@/components/Footer';
import { GSAP } from '@/components/GSAP';
import Navigation from '@/components/Navigation';
import { NavigationProvider } from '@/contexts/NavigationContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavigationProvider>
        <body>
          <Navigation />
          {children}
          <Footer />
          <GSAP scrollTrigger={true} />
        </body>
      </NavigationProvider>
    </html>
  );
}
