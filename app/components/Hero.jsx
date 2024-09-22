import Image from "next/image";
import googlePlayBadge from "../images/Google-Play.svg";
import appStoreBadge from "../images/Apple-Store.svg";
import mobileMockup from "../images/Mobile-mock-hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-16 mt-20" id="home">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 space-y-4 pt-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-secondary leading-tight md:leading-[3.8rem] lg:leading-[4.3rem]">
            Find Futsal of Your Dream.
          </h1>
          <p className="text-lightGray text-base sm:text-lg md:text-xl max-w-lg">
            More than 100,000 futsal for the sale and rental of Football with
            Sportson app.
          </p>

          <div className="flex space-x-4 sm:space-x-8">
            {/* Stats */}
            <div className="text-secondary mb-4">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                30k+
              </span>
              <p className="text-sm sm:text-lg md:text-xl text-lightGray mt-2">
                Active Users
              </p>
            </div>
            <div className="w-[2px] h-14 bg-lightGray"></div>
            <div className="text-secondary">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                10M+
              </span>
              <p className="text-sm sm:text-lg md:text-xl text-lightGray mt-2">
                Downloads
              </p>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex space-x-4 sm:space-x-8">
            <Link href="/" className="inline-block">
              <Image
                src={googlePlayBadge}
                alt="Google Play"
                width={160}
                height={50}
                className="w-[120px] sm:w-[160px] md:w-[180px]"
              />
            </Link>
            <Link href="/" className="inline-block">
              <Image
                src={appStoreBadge}
                alt="App Store"
                width={160}
                height={50}
                className="w-[120px] sm:w-[160px] md:w-[180px]"
              />
            </Link>
          </div>
        </div>

        {/* Right Side: Mobile Mockup */}
        <div className="h-full mb-10 lg:mb-0">
          <Image
            src={mobileMockup}
            alt="Mobile Mockup"
            width={450}
            height={900}
            className="max-w-full h-auto mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
