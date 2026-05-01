import TextPressure from '../components/ReactBits/TextPressure';

export default function HeaderContact() {
  return (
    <div className="relative w-full h-[250px] md:h-[400px] flex items-center justify-center overflow-hidden mb-8 mt-16 px-4 cursor-crosshair">
      <div className="w-full h-full max-w-7xl mx-auto pt-10">
        <TextPressure
          text="CONTACT"
          flex={true}
          alpha={true}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#14452F"
          strokeColor="#18A19A"
          minFontSize={80}
        />
      </div>
    </div>
  );
}
