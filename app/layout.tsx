import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'L&N Shop | Landing, Ecommerce & Business',
  description: 'With an outstanding style, only for you. Exclusively designed for you.',
  icons: {
    icon: '/assets/img/favicons/favicon.ico',
    apple: '/assets/img/favicons/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" dir="ltr">
      <head>
        <link href="/assets/css/theme.css" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main className="main" id="top">
          {children}
        </main>
        <Script
          src="/vendors/@popperjs/popper.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/vendors/bootstrap/bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"
          strategy="afterInteractive"
        />
        <Script
          src="/vendors/feather-icons/feather.min.js"
          strategy="afterInteractive"
        />
        <Script id="feather-replace" strategy="afterInteractive">
          {`if (typeof feather !== 'undefined') feather.replace();`}
        </Script>
      </body>
    </html>
  );
}
