import Head from 'next/head';
import Contact from './components/Contact';
import Hero from './components/Hero';
import AboutUs from './components/about-us';
import Footer from './components/footer';
import Header from './components/header';
import OurServices from './components/our-services';
import Packages from './components/packages';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logo.png" />

        {/* Title */}
        <title>TechWith2 | Landing Pages for Creators, Entrepreneurs & Businesses</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="TechWith2 creates fast, modern landing pages for individuals, entrepreneurs, creators, and businesses — built for performance and conversion."
        />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Charset */}
        <meta charSet="UTF-8" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="TechWith2 | Landing Pages for Everyone" />
        <meta
          property="og:description"
          content="Whether you're launching a brand, promoting a product, or building a personal portfolio — TechWith2 delivers modern, responsive landing pages tailored to your goals."
        />
        <meta property="og:image" content="/social-share.png" />
        <meta property="og:url" content="https://techwith2.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TechWith2 | Beautiful & Fast Landing Pages" />
        <meta
          name="twitter:description"
          content="Custom landing pages for creators, entrepreneurs, freelancers, and businesses — with a focus on design, speed, and results."
        />
        <meta name="twitter:image" content="/social-share.png" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Author */}
        <meta name="author" content="TechWith2 Team" />
      </Head>

      <main>
        <Header />
        <Hero />
        <AboutUs />
        <OurServices />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
