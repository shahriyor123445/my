import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-4xl sm:text-5xl">
            <span className="font-bold bg-gradient-to-r from-blue-100 via-green-500 to-pink-500 bg-clip-text text-transparent">
              Hello, I'm a
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Shahriyor",
                1000,
                "Developer",
                1000,
                "footbal player",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            nihil?
          </p>
          <div>
            <button className="bg-gradient-to-br from-cyan-500 to-pink-500 py-2 px-3 rounded-full mr-4">
              Hire me
            </button>
            <button className="bg-gradient-to-br from-cyan-500 to-pink-500 py-2 px-1 rounded-full mr-4">
              <span className="bg-gray-900 py-2 px-2 rounded-full">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5">
          <Image src={"/rasm.jpeg"} alt="developer" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}
