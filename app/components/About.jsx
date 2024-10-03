import Image from "next/image";
import googlePlayBadge from "../images/Google-Play.svg";
import appStoreBadge from "../images/Apple-Store.svg";
import img from "../images/mobile-about1.png"; // Replace with the correct path to your image

const About = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_70%] items-center gap-12">
        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={img}
            alt="Mobile App"
            // width={430}
            // height={500}
            className=" w-full h-auto max-w-xs md:max-w-md 2xl:max-w-[35rem]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <h3 className="text-4xl font-bold text-secondary mb-6 ">
            ABOUT SPORTSON
          </h3>
          <p className="text-xl text-gray-800 mb-4 2xl:text-2xl">
            Sportson is an innovative mobile app designed to streamline stadium
            bookings for sports events. Whether you're organizing local youth
            leagues, corporate matches, or community tournaments, Sportson makes
            it easy to reserve venues, manage schedules, and handle payments —
            all in one place.
          </p>
          <p className="text-xl text-gray-800 mb-10 2xl:text-2xl">
            With a user-friendly interface, real-time availability, and secure
            transactions, Sportson is the go-to solution for event organizers
            and sports enthusiasts. From small pitches to large stadiums, you
            can book facilities hassle-free and focus on enjoying the game.
          </p>

          {/* App Store Badges */}
          <div className="flex space-x-8 justify-center lg:justify-start">
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
      </div>
    </section>
  );
};

export default About;
