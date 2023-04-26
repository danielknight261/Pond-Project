import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ImageContainer from '../components/ImageContainer';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Profile from '../components/Profile';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Picture Pond</title>
      </Head>
      <Nav />
      <main>
     {/* <Nav /> Wrapped */}
     <Profile />
        {/* Add other content here */}
     </main>
     <HeroSection />
     <ImageContainer />
     {/* <Footer /> Wrapped */}

     <Footer />

   
    </div>
  );
}
