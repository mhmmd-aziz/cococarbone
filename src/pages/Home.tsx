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
import TargetCursor from '../components/ReactBits/TargetCursor';

const partnerLogos = [
  { node: <div className="group flex items-center gap-3 text-[#14452F]/80 font-bold uppercase tracking-widest cursor-default">
    <Leaf size={36} className="transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 max-w-0 group-hover:max-w-[300px] overflow-hidden whitespace-nowrap text-sm">100% Export Quality</span>
  </div>, title: "Export Quality" },
  { node: <div className="group flex items-center gap-3 text-[#14452F]/80 font-bold uppercase tracking-widest cursor-default">
    <Globe2 size={36} className="transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 max-w-0 group-hover:max-w-[300px] overflow-hidden whitespace-nowrap text-sm">Worldwide Shipping</span>
  </div>, title: "Worldwide Shipping" },
  { node: <div className="group flex items-center gap-3 text-[#14452F]/80 font-bold uppercase tracking-widest cursor-default">
    <Award size={36} className="transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 max-w-0 group-hover:max-w-[300px] overflow-hidden whitespace-nowrap text-sm">Premium Grade</span>
  </div>, title: "Premium Grade" },
  { node: <div className="group flex items-center gap-3 text-[#14452F]/80 font-bold uppercase tracking-widest cursor-default">
    <Flame size={36} className="transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 max-w-0 group-hover:max-w-[300px] overflow-hidden whitespace-nowrap text-sm">Long Burn Time</span>
  </div>, title: "Long Burn Time" },
  { node: <div className="group flex items-center gap-3 text-[#14452F]/80 font-bold uppercase tracking-widest cursor-default">
    <ShieldCheck size={36} className="transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 max-w-0 group-hover:max-w-[300px] overflow-hidden whitespace-nowrap text-sm">Trusted Supplier</span>
  </div>, title: "Trusted Supplier" },
  { node: <div className="group flex items-center gap-3 text-[#14452F]/80 font-bold uppercase tracking-widest cursor-default">
    <CheckCircle2 size={36} className="transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 max-w-0 group-hover:max-w-[300px] overflow-hidden whitespace-nowrap text-sm">Eco-Sustainable</span>
  </div>, title: "Sustainable" },
];

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