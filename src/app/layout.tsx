import "../styles/global.scss";
import type { Metadata } from "next";
import { Inter, Belleza, Roboto_Slab } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ConfigProvider } from "antd";
config.autoAddCss = false;

// Font files can be colocated inside of `app`
const depanFont = localFont({
  src: "../fonts/NorthernSoul-Script.otf",
  display: "swap",
  variable: "--depan-font",
});

const spencerio = localFont({
  src: "../fonts/SVN-Spencerio.otf",
  variable: "--spencerio-font",
});

const diamonda = localFont({
  src: "../fonts/SVN-Diamonda.otf",
  variable: "--diamonda-font",
});

const blywoofs = localFont({
  src: "../fonts/SVN-Blywoofs.otf",
  variable: "--blywoofs-font",
});

const pasternak = localFont({
  src: "../fonts/SVN-Pasternak.otf",
  variable: "--pasternak-font",
});

const dancing_script = localFont({
  src: "../fonts/SVN-Dancing_script.ttf",
  variable: "--dancing-font",
});

const graphitel = localFont({
  src: "../fonts/SVN-Graphitel.otf",
  variable: "--graphitel-font",
});

const growing = localFont({
  src: "../fonts/SVN-GrowingGarden-Regular.otf",
  variable: "--growing-font",
});

const primark = localFont({
  src: "../fonts/SVN-Primark.otf",
  variable: "--primark-font",
});

const rustling = localFont({
  src: "../fonts/SVN-Rustling_Sound.otf",
  variable: "--rustling-font",
});

const inter = Inter({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--roboto-slab-font",
});
const belleza = Belleza({
  weight: "400",
  variable: "--belleza-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thống - Phượng",
  description: "Thiệp mời online đám cưới Thống - Phượng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full"
      style={{ background: "white", fontSize: 14, color: "#3D155F" }}
    >
      <body
        className={classNames([
          inter.className,
          robotoSlab.variable,
          belleza.variable,
          depanFont.variable,
          spencerio.variable,
          diamonda.variable,
          blywoofs.variable,
          pasternak.variable,
          dancing_script.variable,
          growing.variable,
          primark.variable,
          rustling.variable,
          graphitel.variable,
          "w-full h-full",
        ])}
      >
        <ConfigProvider
          theme={{
            token: {
              fontSize: 14,
              colorPrimary: "#28A745",
              colorError: "#FF4D4F",
              fontFamily: "var(--roboto-slab-font)",
            },
            components: {
              Tabs: {},
            },
          }}
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
