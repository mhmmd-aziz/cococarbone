import React from 'react';
import ImageTrail from '../components/ReactBits/ImageTrail';

import img1 from '../assets/product-charcoal.png';
import img2 from '../assets/product-coconut.png';
import img3 from '../assets/product-candlenut.png';
import img4 from '../assets/hero.png';
import img5 from '../assets/BgKelapa.jpg';
import img6 from '../assets/BgDaun.jpg';
import img7 from '../assets/arangNoBg.png';
import img8 from '../assets/kelapaNoBg.png';

export default function ImageGallery() {
  // Array of imported images for the trail effect
  const trailImages = [img1, img2, img3, img4, img5, img6, img7, img8, img1, img2, img3];

  return (
    <section className="relative w-full h-[600px] bg-[#f8fcf9] overflow-hidden flex items-center justify-center border-y border-[#14452F]/5 mt-10">
      
      {/* Centered Typography: "CocoCarbone" */}
      <h2 className="absolute z-0 text-[12vw] font-black text-[#14452F]/10 tracking-tighter pointer-events-none select-none text-center leading-none">
        CocoCarbone
      </h2>
      <div className="absolute inset-x-0 bottom-10 z-0 flex justify-center pointer-events-none">
        <p className="text-[#14452F]/40 font-semibold tracking-widest uppercase text-sm">Hover/Move cursor above to reveal</p>
      </div>

      {/* The ImageTrail overlay that interacts with the mouse */}
      <div className="absolute inset-0 z-10 cursor-crosshair">
        <ImageTrail items={trailImages} variant={1} />
      </div>

    </section>
  );
}
