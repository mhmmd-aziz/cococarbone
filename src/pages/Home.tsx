import Hero from '../sections/Hero';
import AboutPreview from '../sections/AboutPreview';
import WhyUs from '../sections/WhyUs';
import ProductPreview from '../sections/ProductPreview';
import ImageGallery from '../sections/ImageGallery';
import HowToBuy from '../sections/HowToBuy';

import { Leaf, Award, ShieldCheck, Globe2, Flame, CheckCircle2 } from 'lucide-react';
import LogoLoop from '../components/ReactBits/LogoLoop';
import CurvedLoop from '../components/ReactBits/CurvedLoop';
import ScrollVelocity from '../components/ReactBits/ScrollVelocity';


export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Infinite Logo/Trust Ticker */}
      {/* <div className="w-full bg-white py-12 border-y border-[#14452F]/5 overflow-hidden">
        <LogoLoop
          logos={partnerLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={100}
          hoverSpeed={0}
          scaleOnHover={false}
          fadeOut={true}
          fadeOutColor="#ffffffff"
        />
      </div> */}

      <AboutPreview />
      {/* <WhyUs /> */}
      
      {/* Interactive Gallery Trail */}
      <ImageGallery />

      <HowToBuy />

      <ProductPreview />

      {/* <CurvedLoop 
        marqueeText="Cococarbone ✦ " 
        speed={1.5} 
        curveAmount={150} 
        direction="left"
        interactive={true}
      /> */}

      <ScrollVelocity 
        texts={["LET'S GO", 'COCOCARBONE']} 
        velocity={100} 
        className="velocity-text"
      />
    </>
  );
}