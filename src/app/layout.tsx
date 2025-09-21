import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import styles from './page.module.scss';
const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Muhammad Hassan Rana',
  description:
    'Portfolio of Muhammad Hassan Rana – Full-Stack Developer specializing in Next.js, React, TypeScript, and modern web applications. Explore featured projects, skills, and contact details.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <main className={styles.root_main}>{children}</main>
      </body>
    </html>
  );
}
