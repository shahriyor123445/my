"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import AchievementsSection from "@/app/section";
import Aboutcetion from "@/app/aboutcetion";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

const navLinks = [
  { href: "about", title: "About" },
  { href: "project", title: "Project" },
  { href: "contact", title: "Contact" },
];
export default function Home() {
  return (
    <>
      <header className="flex justify-between">
        <Link href="/">LOGO</Link>
        <NavBar navlinks={navLinks} />
      </header>
      <main className="min-h-screen">
        <HeroSection />
        {/* <TypeAnimation
        sequence={[
          "I am web-developer",
          1000,
          "Shahriyor",
          1000,
          "",
          1000,
          "",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <AchievementsSection />
      <Aboutcetion /> */}
      </main>
    </>
  );
}
