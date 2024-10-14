import Footer from '@/components/Footer';
import { GSAP } from '@/components/GSAP';
import Navigation from '@/components/Navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
        <GSAP scrollTrigger={true} />
      </body>
    </html>
  );
}
