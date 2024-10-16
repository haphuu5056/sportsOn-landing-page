import { Raleway } from "next/font/google";
import "./globals.css";
// import favicon from './images/next.svg'
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "SportsOn",
  description: "Find and rent sports fields easily",
  icons: {
    icon: "/next.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/next.svg" />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
