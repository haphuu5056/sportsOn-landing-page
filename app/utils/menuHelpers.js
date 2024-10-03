// menuHelpers.js
import Link from "next/link";
import { navLinks,socialLinks } from "..";
export const renderMenuLinks = ( active,handleSetActive, linkClass) =>
  navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={`${
        active === link.name ? "text-primary" : "text-[#525252]"
      } text-lg hover:text-primary ${linkClass}`}
      onClick={() => handleSetActive(link.name)}
    >
      {link.name}
    </Link>
  ));

export const renderSocialLinks = (iconClass) =>
  socialLinks.map(({ href, icon: Icon }, index) => (
    <a key={index} href={href} target="_blank" rel="noreferrer">
      <Icon className={`text-gray-500 hover:text-primary text-2xl ${iconClass}`} />
    </a>
  ));
