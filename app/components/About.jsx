import Image from "next/image";
import googlePlayBadge from "../images/Google-Play.svg";
import appStoreBadge from "../images/Apple-Store.svg";
import mobileMockup from "../images/Mobile-mock-about.png";

const About = () => {
  return (
    <section className="py-16" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Side: Mobile Image */}
        <div className=" mb-10 lg:mb-0 flex justify-center">
          <Image
            src={mobileMockup}
            alt="Payment Success Mockup"
            width={400}
            height={600}
            className="w-full lg:w-auto h-auto mx-auto"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="lg:w-[50%] space-y-4 h-full lg:ml-24 mt-8 ">
          <h2 className="text-2xl  font-bold leading-[31px] text-primary uppercase">
            About Sportson
          </h2>
          <p className="text-[25px] text-secondary leading-[35px] font-medium">
            Sportson is an annual event organized by a local youth soccer league
            for teams aged 10-12. This year, the league has decided to rent a
            soccer field at the city sports complex to accommodate the
            tournament.
          </p>
          <p className="text-[25px] text-secondary leading-[35px] font-medium">
            Sportson is an annual event organized by a local youth soccer league
            for teams aged 10-12. This year, the league has decided to rent a
            soccer field.
          </p>

          {/* Download Buttons */}
          <div className="flex space-x-4 pt-8">
            <a href="#" className="">
              <Image
                src={googlePlayBadge}
                alt="Google Play"
                width={180}
                height={50}
              />
            </a>
            <a href="#" className="">
              <Image
                src={appStoreBadge}
                alt="App Store"
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
