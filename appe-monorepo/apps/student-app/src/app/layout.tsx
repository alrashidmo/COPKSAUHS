import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APPE Student Portal',
  description: 'Advanced Pharmacy Practice Experience Student Portal',
  manifest: '/manifest.json',
  themeColor: '#1B5E20',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
