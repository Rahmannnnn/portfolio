import Footer from '@/components/Footer';
import { GSAP } from '@/components/GSAP';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
        <GSAP scrollTrigger={true} />
      </body>
    </html>
  );
}
