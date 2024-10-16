import { IoIosOptions } from "react-icons/io";
import {
  MdOutlineLocationSearching,
  MdOutlineManageAccounts,
  MdOutlineNotificationsActive,
  MdOutlineDesignServices,
  MdSecurity,
} from "react-icons/md";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";
import customer1 from "./images/cus1.png";
import customer2 from "./images/cus2.png";


export const navLinks = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "Features", href: "features" },
  { name: "Contact", href: "contact" },
];

export const contactInfo = [
  { icon: FaMapMarkerAlt, text: "123 Maka-Almukarama St, Stadium City", href: "#" },
  {
    icon: FaEnvelope,
    text: "info@kickCourt.com",
    href: "mailto:info@kickCourt.com",
  },
];

export const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com" },
  { icon: FaWhatsapp, href: "https://wa.me/252613916289" },
  { icon: FaTwitter, href: "https://twitter.com" },
  { icon: FaInstagram, href: "https://instagram.com" },
];

export const services = [
  {
    id: 1,

    title: "Find and Book Futsal Venues Easily",
    description:
      "Customers can search for futsal venues near them with a seamless and user-friendly interface. Explore different options, check availability, and book time slots in just a few clicks.",
    icon: MdOutlineLocationSearching,
  },
  {
    id: 2,

    title: "Manage Venue Availability and Bookings",
    description:
      "Venue owners can easily manage their venue schedules, set up available time slots, and accept bookings online. This helps maximize venue usage and reduce idle time.",
    icon: MdOutlineManageAccounts,
  },
  {
    id: 3,
    title: "Flexible Booking Options",
    description:
      "Choose from a variety of time slots based on your availability. Whether it's a quick after-work game or a weekend tournament, the system ensures a smooth booking process.",
    icon: IoIosOptions,
  },
  {
    id: 4,

    title: "Real-Time Booking & Notifications",
    description:
      "Easily manage bookings with instant updates on new, modified, or canceled reservations. Stay informed with reminders and special offers from venues.",
    icon: MdOutlineNotificationsActive,
  },
];

export const features = [
  {
    title: "Venues Management",
    description:
      "Allows field owners to manage field details, set prices, update availability, and monitor facilities.",
  },
  {
    title: "One-Time Booking",
    description:
      "Simplifies booking a field for a single session, with an easy-to-use process for selecting a time and venue.",
  },

  {
    title: "Provider Reports",
    description:
      "Generates reports for field owners to analyze bookings, revenue, customer behavior, and field usage.",
  },
  {
    title: "Time Schedule",
    description:
      "Displays available time slots for booking and allows users to reserve or view real-time field availability.",
  },

  {
    title: "Payment Gateway",
    description:
      "Integrates secure payment options, enabling users to pay directly through the app and track transactions easily.",
  },
  {
    title: "Orders Management",
    description:
      "Enables field owners to approve, track, and manage user bookings, including confirmed, pending, and canceled orders.",
  },
];

export const requirements = [
  {
    icon: FaCheckCircle,
    title: "Regulatory and Legal Compliance",
    content:
      "Ensure your venue meets local zoning, health, and safety standards, including disability access and environmental impact assessments.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Design and Architectural Requirements",
    content:
      "Provide sufficient seating, parking, and amenities. Ensure the field or court design complies with sports association standards.",
  },
  {
    icon: MdSecurity ,
    title: "Technology Infrastructure",
    content:
      "Ensure security systems, Wi-Fi, scoreboards, and broadcasting capabilities are in place for seamless operations.",
  },
  {
    icon: FaCheckCircle,
    title: "Operational Requirements",
    content:
      "Set up systems for event scheduling, ticketing, crowd management, and hospitality services.",
  },
  {
    icon: FaCheckCircle ,
    title: "Sustainability",
    content:
      "Implement energy-efficient systems, water conservation, and waste management practices to meet modern green standards.",
  },
];
export const testimonials = [
  {
    name: "Marwa Ali",
    role: "Sports Enthusiast",
    feedback:
      "KICK COURT made booking a football pitch so simple! The process was smooth, and I had my reservation confirmed in minutes. Highly recommend for all sports lovers!",
    image: customer1,
    rating: 5, // 5 stars
  },
  {
    name: "Mohamed Ahmed",
    role: "Tennis Player",
    feedback:
      "Finding and booking a tennis court through KICK COURT was a breeze. The convenience and speed of the platform really stand out. Will definitely use it again!",
    image: customer2,
    rating: 4, // 4 stars
  },
];
export const faqs = [
  {
    question: "What is KICKCOURT?",
    answer:
      "KICKCOURT is an app designed to help you find and rent sports fields easily. Whether you’re booking for a football match, training, or a casual game, KICKCOURT simplifies the process by offering real-time field availability, secure payments, and easy booking management.",
  },
  {
    question: "How do I book a sports field?",
    answer:
      "Booking a sports field is simple. Just browse through the available venues, check the time slots that suit you, and make a one-time booking directly through the app. You can pay securely using our integrated payment gateway.",
  },
  {
    question: "Can I manage my bookings through the app?",
    answer:
      "Yes! With KICKCOURT, you can manage all your bookings in one place. View your upcoming reservations, track order statuses, and even cancel or modify your bookings if necessary.",
  },
  {
    question: "How does the payment process work?",
    answer:
      "We offer a secure payment gateway that allows you to pay for your bookings directly through the app. Once your payment is confirmed, you can view your transaction history and monitor payments for all bookings.",
  },
  {
    question: "What reports do field owners get?",
    answer:
      "Field owners can generate detailed reports through KICKCOURT, providing insights into bookings, revenue, customer behavior, and overall field usage, helping them optimize operations and maximize field utilization.",
  },
];
export const cities = [
  { value: "", label: "Select City" },
  { value: "MOGADISHU", label: "Mogadishu" },
  { value: "HARGEISA", label: "Hargeisa" },
  { value: "KISMAYO", label: "Kismayo" },
  { value: "BOSASO", label: "Bosaso" },
  { value: "BAIDOA", label: "Baidoa" },
  { value: "GAROWE", label: "Garowe" },
  { value: "GALKAYO", label: "Galkayo" },
  { value: "JOWHAR", label: "Jowhar" },
  { value: "BELEDWEYNE", label: "Beledweyne" },
  { value: "AFGOOYE", label: "Afgooye" },
  { value: "DHUSAMAREB", label: "Dhusamareb" },
  { value: "BALAD", label: "Balad" },
];

export const regions = [
  { value: "", label: "Select Region" },
  { value: "1", label: "Banaadir" },
  { value: "2", label: "Sool" },
  { value: "3", label: "Awdal" },
  { value: "4", label: "Togdheer" },
  { value: "5", label: "Nugaal" },
  { value: "6", label: "Mudug" },
  { value: "7", label: "Lower Shabelle" },
  { value: "8", label: "Hiraan" },
  { value: "9", label: "Middle Juba" },
  { value: "10", label: "Bakool" },
  { value: "11", label: "Lower Juba" },
  { value: "12", label: "Bay" },
];

