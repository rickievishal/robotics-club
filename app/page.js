import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="assets/hero.mp4" type="video/mp4" />
      </video>

      {/* Add content here if needed */}
      <div className="relative w-full flex flex-col justify-center items-center top-[62%] translate-middle ">
        <div className="max-w-lg min-w-[300px] lg:min-w-sm flex justify-start items-center">
          <button className="bg-[#05ff48] text-black text-4xl -tracking-[3px] rounded-r-full rounded-l-full px-4 ">Join now</button>
        </div>
      </div>
    </div>
  );
}
