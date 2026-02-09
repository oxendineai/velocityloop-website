import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'VelocityLoop - AI Automation Infrastructure for Service Businesses',
  description: 'VelocityLoop\'s AI automation infrastructure handles voice calls, web chat, and lead qualification for service businesses. Starting with HVAC contractors, expanding to medical, legal, and professional services.',
  keywords: 'AI automation, voice AI, HVAC automation, contractor automation, service business AI, lead generation',
  openGraph: {
    title: 'VelocityLoop - AI Automation Infrastructure',
    description: 'AI automation infrastructure for service businesses. 24/7 answering, appointment booking, CRM integration.',
    url: 'https://velocityloop.ai',
    siteName: 'VelocityLoop',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VelocityLoop - AI Automation Infrastructure',
    description: 'AI automation infrastructure for service businesses',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}