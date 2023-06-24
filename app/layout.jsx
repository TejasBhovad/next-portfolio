import "@styles/globals.scss";
import Navbar from "@components/Navbar";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Portfolio Website | Tejas Bhovad",
  description: "Portfolio Website of Tejas Bhovad, a Java & React Developer",
  icons: {
    icon: "favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
