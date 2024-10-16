import googlePlayBadge from "../../images/Google-Play.svg";
import appStoreBadge from "../../images/Apple-Store.svg";
import Link from "next/link";
import Image from "next/image";
export const DownloadButtons = ({className}) => {
  return (
    <div className={`flex space-x-6 sm:space-x-8 ${className}`}>
      <><Link
        href="https://play.google.com/store/games?hl=en&pli=1"
        className="inline-block"
      >
        <Image
          src={googlePlayBadge}
          alt="Google Play"
          width={160}
          height={50}
          className="w-[140px] sm:w-[160px] md:w-[180px] 2xl:w-[220px]" />
      </Link><Link
        href="https://www.apple.com/us/search/"
        className="inline-block"
      >
          <Image
            src={appStoreBadge}
            alt="App Store"
            width={160}
            height={50}
            className="w-[140px] sm:w-[160px] md:w-[180px] 2xl:w-[220px]" />
        </Link></>
    </div>
  );
}