import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning Nextjs",
    template: "%s || Learning Nextjs",
  },
  keywords: [
    "NextJS",
    "React",
    "JavaScript",
    "Learning Next Js",
    "Explorying NextJS",
  ],
  description: "Traying to learning nextJS as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body
          className={`${poppins.className}  antialiased`}
        >
          <Navbar></Navbar>
          <main className="min-h-screen">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
