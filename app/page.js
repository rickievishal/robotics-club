import Image from "next/image";
import HeroOverlay from "./components/HeroOverlay";

export default function Home() {
  return (
   <div className="w-screen flex flex-col">
     <div className="w-screen h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="assets/hero.mp4" type="video/mp4" />
      </video>
      <HeroOverlay/>
    </div>
    <div className="w-full h-screen">

    </div>
   </div>
  );
}
