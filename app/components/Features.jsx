import Image from "next/image";
import featureImageOne from "../images/Disc.png";
import featureImageTwo from "../images/Features2.png";
const Features = () => {
  return (
    <section className="py-20" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-medium  uppercase text-primary mb-3">
            Features
          </h2>
          <p className="text-5xl  text-secondary uppercase font-bold leading-normal">
            detailed breakdown of features for a sports field rental app
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="border-2 border-borderGray rounded-xl">
            <div className="py-2 px-8 mt-5">
              <h3 className="text-2xl font-bold text-secondary ">
                Simple Process
              </h3>
              <p className="text-lightGray text-lg font-medium mt-2">
                Sportson is a user-friendly mobile app designed to simplify the
                process of renting sports fields.
              </p>
            </div>

            <Image
              src={featureImageOne}
              alt="Simple Process Feature Image"
              width={300}
              height={200}
              className="w-full"
            />
          </div>

          {/* Feature 2 */}
          <div className="border-2 border-borderGray rounded-xl">
            <div className="py-2 px-8 mt-5">
              <h3 className="text-2xl font-bold text-secondary">
                Simple Process
              </h3>
              <p className="text-lightGray text-lg font-medium mt-2">
                Sportson is a user-friendly mobile app designed to simplify the
                process of renting sports fields.
              </p>
            </div>

            <Image
              src={featureImageTwo}
              alt="Simple Process Feature Image"
              width={300}
              height={200}
              className="w-full"
            />
          </div>

          {/* Feature 3 */}
          <div className="border-2 border-borderGray rounded-xl">
            <div className="py-2 px-8 mt-5">
              <h3 className="text-2xl font-bold text-secondary">
                Simple Process
              </h3>
              <p className="text-lightGray text-lg font-medium mt-2">
                Sportson is a user-friendly mobile app designed to simplify the
                process of renting sports fields.
              </p>
            </div>

            <Image
              src={featureImageOne}
              alt="Simple Process Feature Image"
              width={300}
              height={200}
              className="w-full"
            />
          </div>

          {/* Feature 4 */}
          <div className="border-2 border-borderGray rounded-xl">
            <div className="py-2 px-8 mt-5">
              <h3 className="text-2xl font-bold text-secondary ">
                Simple Process
              </h3>
              <p className="text-lightGray text-lg font-medium mt-2">
                Sportson is a user-friendly mobile app designed to simplify the
                process of renting sports fields.
              </p>
            </div>

            <Image
              src={featureImageOne}
              alt="Simple Process Feature Image"
              width={300}
              height={200}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
