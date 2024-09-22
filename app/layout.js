// import localFont from "next/font/local";
import { Raleway } from "next/font/google";

import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const raleway = Raleway({
  subsets: ["latin"], // You can specify other subsets if needed
  weight: ["400", "700",], // You can add more weights like '400' for regular, '700' for bold, etc.
});
export const metadata = {
  title: "SportsOn",
  description: "Find and rent sports fields easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
