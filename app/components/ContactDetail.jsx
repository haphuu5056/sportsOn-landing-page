import { contactInfo, socialLinks } from "..";

const ContactDetail = () => {
  return (
    <div className="bg-gray-900 px-8 py-1 hidden lg:flex justify-between items-center text-sm">
      <div className="flex items-center gap-8">
        {contactInfo.map(({ icon: Icon, text, href }, idx) => (
          <a key={idx} href={href} className="flex items-center text-white">
            <Icon className="mr-2 text-primary" />
            {text}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <span className="text-white mr-2 font-semibold">Call us:</span>
          <a href="tel:+252612518368" className="text-white">
            +252 61 2518368
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-gray-300">Follow us:</span>
          {socialLinks.map(({ icon: Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-primary"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
