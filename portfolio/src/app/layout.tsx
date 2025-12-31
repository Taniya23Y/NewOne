import type { Metadata } from "next";
import { Inter, Calistoga, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Taniya| Personal Portfolio",
  description:
    "Hi, I’m Taniya Yadav, a passionate Frontend Developer and MERN Stack Developer with a knack for crafting responsive, user-friendly web applications. I specialize in creating seamless digital experiences using modern technologies like React.js, Node.js, Express, and MongoDB, paired with Tailwind CSS for clean, efficient styling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../assets/images/letter-t.png" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          spaceGrotesk.variable,
          "bg-black text-white antialiased font-sans"
        )}
      >
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </body>
    </html>
  );
}
