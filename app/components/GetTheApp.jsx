import Image from "next/image";
import googlePlayBadge from "../images/Google-Play.svg";
import appStoreBadge from "../images/Apple-Store.svg";
import mobileApp from "../images/CTA mockups.png";

const GetTheApp = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F6F7F9] rounded-[18px] 2xl:max-w-7xl">
        {/* Title and Description */}
        <div className="max-w-4xl mx-auto pt-16 flex flex-col items-center text-center mb-10">
          <h2 className="text-5xl font-bold uppercase text-secondary mb-3">
            Get the Sportson mobile app.
          </h2>
          <p className="text-xl text-lightGray font-medium leading-8 max-w-lg">
            With this platform, you can access your account anywhere, anytime
            for balance and so much more.
          </p>

          {/* App Store Badges */}
          <div className="flex space-x-4 text-center items-center pt-8">
            <a href="#" className="flex-shrink-0">
              <Image
                src={googlePlayBadge}
                alt="Google Play"
                width={180}
                height={50}
              />
            </a>
            <a href="#" className="flex-shrink-0">
              <Image
                src={appStoreBadge}
                alt="App Store"
                width={180}
                height={50}
              />
            </a>
          </div>

          {/* Image */}
          <div className="pt-4 flex justify-center">
            <Image
              src={mobileApp}
              alt="Simple Process Feature Image"
              className="w-full object-contain md:max-w-[80%] lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTheApp;
