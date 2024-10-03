import Image from "next/image";
import googlePlayBadge from "../images/Google-Play.svg";
import appStoreBadge from "../images/Apple-Store.svg";
import mobileMockup from "../images/Mask-group1.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="py-16 pt-32 md:pt-40 2xl:pt-48 bg-white text-black h-screen lg:overflow-hidden"
      id="home"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row justify-between items-center   h-full">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 space-y-4 pt-10 flex flex-col items-center text-center lg:text-left lg:items-start">
          <h1 className="text-4xl md:text-5xl md:px-6 lg:px-0 lg:text-6xl 2xl:text-[5.7rem] font-black uppercase text-secondary leading-tight md:leading-[3.8rem] lg:leading-[4.6rem] 2xl:leading-[6.5rem] ">
            Find Futsal of Your Dream.
          </h1>
          <p className="text-lightGray text-base sm:text-lg  max-w-lg mb-5">
            More than 100,000 futsal for the sale and rental of Football with
            Sportson app.
          </p>

          <div className="flex space-x-4 sm:space-x-8">
            {/* Stats */}
            <div className="text-secondary mb-4 ">
              <span className="text-xl sm:text-2xl  font-bold">30k+</span>
              <p className="text-sm sm:text-lg md:text-xl text-lightGray mt-2 ">
                Active Users
              </p>
            </div>
            <div className="w-[2px] h-16 bg-gray-300 "></div>
            <div className="text-secondary ">
              <span className="text-xl sm:text-2xl  font-bold">10M+</span>
              <p className="text-sm sm:text-lg md:text-xl text-lightGray mt-2 ">
                Downloads
              </p>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex space-x-6 sm:space-x-8">
            <Link href="/" className="inline-block">
              <Image
                src={googlePlayBadge}
                alt="Google Play"
                width={160}
                height={50}
                className="w-[140px] sm:w-[160px] md:w-[180px]"
              />
            </Link>
            <Link href="/" className="inline-block">
              <Image
                src={appStoreBadge}
                alt="App Store"
                width={160}
                height={50}
                className="w-[140px] sm:w-[160px] md:w-[180px]"
              />
            </Link>
          </div>
        </div>

        {/* Right Side: Mobile Mockup */}
        <div className="h-full mb-6 lg:mb-0 ">
          <Image
            src={mobileMockup}
            alt="Mobile Mockup"
            // width={600}
            // height={900}
            className="h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
