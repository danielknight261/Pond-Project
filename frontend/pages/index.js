import Head from 'next/head';
import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection';
import ImageContainer from '../components/ImageContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Picture Pond</title>
      </Head>

     <Nav />
     <HeroSection />
     <ImageContainer />
   
    </div>
  );
}
