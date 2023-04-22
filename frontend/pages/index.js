import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ImageContainer from '../components/ImageContainer';
import Nav from '../components/Nav'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Picture Pond</title>
      </Head>
      <Nav />
     {/* <Nav /> Wrapped */}
     <HeroSection />
     <ImageContainer />
     {/* <Footer /> Wrapped */}
     <Footer />
   
    </div>
  );
}
