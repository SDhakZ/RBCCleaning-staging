import "./globals.css";
import { Lato, Inter } from "next/font/google";
import SmoothScrolling from "./SmoothScrolling";
import { Topbar } from "./layouts/topbar/topbar";
import Navbar from "./layouts/navbar/navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./layouts/footer/footer";
import Providers from "./components/ProgressBarProvider/ProgressBarProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

config.autoAddCss = false;

const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const metadata = {
  title: {
    template: "%s | RBC Cleaning Services.",
    default: "For all your cleaning needs | RBC Cleaning Services",
  },
  description:
    "Transform your space with RBC Cleaning Services Pty. Ltd. Our expert team delivers top-quality residential and commercial cleaning solutions, ensuring every corner is spotless and sparkling. Experience unparalleled service, tailored to meet your unique needs.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },

  openGraph: {
    title: "For all your cleaning needs | RBC Cleaning Services",
    description:
      "Transform your space with RBC Cleaning Services Pty. Ltd. Our expert team delivers top-quality residential and commercial cleaning solutions, ensuring every corner is spotless and sparkling. Experience unparalleled service, tailored to meet your unique needs.",
    images: [
      {
        url: "/OpengraphAlt2.png",
        width: 1800,
        height: 1600,
        alt: "RBC Cleaning Services",
      },
      {
        url: "/Opengraph.png",
        width: 1200,
        height: 630,
        alt: "RBC Cleaning Services",
      },
      {
        url: "/OpengraphAlt.png",
        width: 800,
        height: 600,
        alt: "RBC Cleaning Services",
      },
    ],
    url: `${websiteUrl}`,
  },
  manifest: "/site.webmanifest",
};
1;
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="main" className={`${lato.variable} ${inter.variable}`}>
        <SpeedInsights />
        <Topbar />
        <Providers>
          <Navbar />
          <SmoothScrolling>
            <div>{children}</div>
          </SmoothScrolling>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
