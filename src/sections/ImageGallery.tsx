import ImageTrail from '../components/ReactBits/ImageTrail';

import img1 from '../assets/arang2.png';
import img2 from '../assets/arang3.png';
// import img3 from '../assets/product-candlenut.png';
import img4 from '../assets/arang5.png';
import img5 from '../assets/kelapa1.png';
import img6 from '../assets/kelapa2.png';
import img7 from '../assets/arang1.png';
import img8 from '../assets/kelapa3.png';

export default function ImageGallery() {
  // Array of imported images for the trail effect
  const trailImages = [img1, img2,  img4, img5, img6, img7, img8, img1, img2];

  return (
    <section className="relative w-full h-[600px] bg-[#f8fcf9] overflow-hidden flex items-center justify-center border-y border-[#14452F]/5 mt-10">
      
      {/* Centered Typography: "CocoCarbone" */}
      <h2 className="absolute z-0 text-[12vw] font-black text-[#14452F]/10 tracking-tighter pointer-events-none select-none text-center leading-none">
        CocoCarbone
      </h2>
      <div className="absolute inset-x-0 bottom-10 z-0 flex justify-center pointer-events-none">
        <p className="text-[#14452F]/40 font-semibold tracking-widest uppercase text-sm"></p>
      </div>

      {/* The ImageTrail overlay that interacts with the mouse */}
      <div className="absolute inset-0 z-10 cursor-crosshair">
        <ImageTrail items={trailImages} variant={1} />
      </div>

    </section>
  );
}
