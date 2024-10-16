import Image from "next/image";
import mobileMockup from "../images/mask-hero.png";
import { DownloadButtons } from "./common/DownloadButtons";

const Hero = () => {
  return (
    <section
      className="py-8 lg:py-16 pt-32 md:pt-40 2xl:pt-48 bg-white text-black lg:h-screen lg:overflow-hidden"
      id="home"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between items-center h-full ">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 space-y-4 lg:pt-10 flex flex-col items-center text-center lg:text-left lg:items-start mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl md:px-6 lg:px-0 lg:text-6xl 2xl:text-[5.7rem] font-black uppercase text-secondary leading-tight md:leading-[3.8rem] lg:leading-[4.6rem] 2xl:leading-[6.5rem] ">
            Find Futsal of Your Dream.
          </h1>
          <p className="text-lightGray text-base sm:text-lg  lg:max-w-lg mb-10">
            Search, compare, and book the best futsal courts effortlessly with
            KICK COURT. Choose from thousands of venues and start your game now!
          </p>
          {/* Download Buttons */}
          <DownloadButtons className={"pt-10"} />
        </div>

        {/* Right Side: Mobile Mockup */}
        <div className="h-full xs:max-w-72 max-w-60 lg:w-1/3  lg:max-w-lg xl:max-w-xl ">
          <Image
            src={mobileMockup}
            alt="Mobile Mockup"
            className="h-full object-contain w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
