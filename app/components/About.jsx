import Image from "next/image";
import img from "../images/about.png";
import { DownloadButtons } from "./common/DownloadButtons";

const About = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-center gap-12">
        {/* Image */}
        <div className="hidden lg:flex justify-center lg:justify-end ">
          <Image
            src={img}
            alt="Mobile App"
            className=" w-full h-auto max-w-xs md:max-w-xl 2xl:max-w-[37rem]"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left 2xl:max-w-3xl lg:max-w-lg xl:max-w-xl  ">
          <h3 className="text-4xl font-bold text-secondary mb-6 ">
            ABOUT KICK C<span className="text-primary ">O</span>URT
          </h3>
          <p className="text-base sm:text-xl text-gray-800 mb-4 2xl:text-2xl">
            KICK COURT is an innovative mobile app designed to streamline stadium
            bookings for sports events. Whether you're organizing local youth
            leagues, corporate matches, or community tournaments, KICKCOURT
            makes it easy to reserve venues, manage schedules, and handle
            payments — all in one place.
          </p>
          <p className="text-base sm:text-xl text-gray-800 mb-10 2xl:text-2xl">
            With a user-friendly interface, real-time availability, and secure
            transactions, KICK COURT is the go-to solution for event organizers
            and sports enthusiasts. From small pitches to large stadiums, you
            can book facilities hassle-free and focus on enjoying the game.
          </p>
          {/* App Store Badges */}
          <DownloadButtons className={"justify-center lg:justify-start"} />
        </div>
      </div>
    </section>
  );
};

export default About;
