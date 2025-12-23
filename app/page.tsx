import Head from 'next/head';
import Contact from './components/Contact';
import Hero from './components/Hero';
import AboutUs from './components/about-us';
import Footer from './components/footer';
import Header from './components/header';
import OurServices from './components/our-services';
import Packages from './components/packages';
import Script from 'next/script';
import ParaQuemE from './components/paraQuemE';
import OProbelma from './components/OProbelma';
import ASolucao from './components/ASolucao';
import ComoFunciona from './components/comoFunciona';
import Garantia from './components/Garantia';

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <ParaQuemE />
        <OProbelma />
        <ASolucao />
        <ComoFunciona />
        <Packages />
        <Garantia />
        {/* <OurServices /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
