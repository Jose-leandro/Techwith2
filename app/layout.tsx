import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'TechWith2 | Landing pages simples para professores de inglês',
  description:
    'Criação de landing pages simples e profissionais para professores de inglês, focadas em clareza da oferta, apresentação do serviço e facilidade de contato.',
  icons: {
    icon: '/img/techwith2-Logo.png',
    shortcut: '/img/techwith2-Logo.png',
    apple: '/img/techwith2-Logo.png',
  },
  siteName: 'TechWith2 | Landing pages para professores de inglês',
  locale: 'pt_BR',
  type: 'website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <Head>
        {/* Charset */}
        <meta charSet="UTF-8" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="TechWith2 | Landing pages para professores de inglês" />
        <meta
          property="og:description"
          content="Landing pages simples para professores de inglês que desejam organizar sua oferta, comunicar melhor seu serviço e facilitar o contato com alunos."
        />
        <meta property="og:image" content="/social-share.png" />
        <meta property="og:url" content="https://techwith2.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TechWith2 | Landing pages para professores de inglês" />
        <meta
          name="twitter:description"
          content="Criação de landing pages profissionais para professores de inglês, sem promessas irreais, com foco em clareza e organização da divulgação."
        />
        <meta name="twitter:image" content="/social-share.png" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Author */}
        <meta name="author" content="TechWith2" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google tag (gtag.js)  */}
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KRD9J9JL05"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KRD9J9JL05');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
