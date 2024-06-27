import "~/styles/globals.css";
import {
  Source_Code_Pro,
  Fira_Code,
  Inconsolata,
  Montserrat,
} from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sourcecode",
});

const firaCode = Fira_Code({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

const inconsolata = Inconsolata({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Garrett's Portfolio",
  description: "Portfolio and a little about me",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceCodePro.variable} ${firaCode.variable} ${inconsolata.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
