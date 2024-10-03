import Image from "next/image";
import googlePlayBadge from "../images/Google-Play.svg";
import appStoreBadge from "../images/Apple-Store.svg";
import img from "../images/mobile-about1.png";

const About = () => {
  return (
    <section className="py-16 max-w-6.5xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-0 2xl:max-w-7xl">
      {/* Left Image */}
      <div className="flex justify-center mb-8 lg:mb-0 h-full">
        <Image
          src={img}
          alt="Mobile App"
          width={430}
          height={800}
          className="z-10 h-full max-h-screen"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-4 sm:px-10 lg:px-0 mt-0 md:mt-6 lg:mr-10 md:mr-0 mr-0">
        <h3 className="text-4xl md:text-4xl font-bold text-secondary mb-6 lg:mb-4 text-center lg:text-left">
          ABOUT SPORTSON
        </h3>
        <p className="md:text-[21px] sm:text-lg  text-gray-800 mb-4 text-center lg:text-left  ">
          Sportson is an innovative mobile app designed to streamline stadium
          bookings for sports events. Whether you're organizing local youth
          leagues, corporate matches, or community tournaments, Sportson makes
          it easy to reserve venues, manage schedules, and handle payments — all
          in one place.
        </p>
        <p className="md:text-[21px] sm:text-lg  text-gray-800 text-center lg:text-left mb-10">
          With a user-friendly interface, real-time availability, and secure
          transactions, Sportson is the go-to solution for event organizers and
          sports enthusiasts. From small pitches to large stadiums, you can book
          facilities hassle-free and focus on enjoying the game.
        </p>

        {/* App Store Badges */}
        <div className="flex space-x-8">
          {/* Google Play Button */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={googlePlayBadge}
              alt="Get it on Google Play"
              width={180}
              height={50}
            />
          </a>
          {/* App Store Button */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={appStoreBadge}
              alt="Download on the App Store"
              width={180}
              height={50}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
