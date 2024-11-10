import React from "react";
import Image from "next/image";

import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section
        className="text-indigo-500 body-font bg-black py-10 min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col text-center">
          {/* Image */}
          <Image
            className="w-40 h-40 mb-6 object-cover object-center rounded-full"
            alt="hero"
            src="/images/port-image.jpg"
            width={160}
            height={160}
          />

          {/* Text Content */}
          <div>
            <h1
              className="title-font font-bold sm:text-4xl text-3xl mb-4 text-indigo-500 hover:text-white border-spacing-2 border-violet-700"
            >
              I am Shabnam Wahid <br />
              Front-end Developer
            </h1>
            <p className="mb-6 leading-relaxed text-indigo-300 hover:text-white">
              I am a frontend developer passionate about creating beautiful,
              responsive websites. With expertise in HTML, CSS, and JavaScript,
              I focus on building user-friendly interfaces that provide seamless
              experiences. I&apos;m constantly learning and exploring new
              technologies to improve my skills and deliver high-quality web
              applications.
            </p>

            {/* Social Media Buttons */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/shabnamwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-blue-500 text-[40px] hover:text-white rounded-full"
              >
                <FaLinkedin aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Shabnamwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white text-[40px] hover:text-white rounded-full"
              >
                <FaGithub aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/shabnamwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-pink-700 text-[40px] hover:text-white rounded-full"
              >
                <FaInstagramSquare aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
};

export default About;

const Skills = () => {
  return (
    <div className="bg-black">
      <h2 className="mt-18 mb-12 text-center text-4xl font-bold text-indigo-800 hover:text-white">
        My Skills
      </h2>
      <ul className="bg-black">
        <li className="mb-3 text-2xl text-white ml-16">
          HTML
          <div className="w-[50%] h-4 bg-indigo-600 rounded-2xl mt-2"></div>
        </li>
        <li className="mb-3 text-2xl text-white ml-16">
          CSS
          <div className="w-[40%] h-4 bg-indigo-600 rounded-2xl mt-2"></div>
        </li>
        <li className="mb-3 text-2xl text-white ml-16">
          JavaScript
          <div className="w-[40%] h-4 bg-indigo-600 rounded-2xl mt-2"></div>
        </li>
        <li className="mb-3 text-2xl text-white ml-16">
          TypeScript
          <div className="w-[60%] h-4 bg-indigo-600 rounded-2xl mt-2"></div>
        </li>
        <li className="mb-3 text-2xl text-white ml-16">
          React
          <div className="w-[30%] h-4 bg-indigo-600 rounded-2xl mt-2"></div>
        </li>
        <li className="mb-3 text-2xl text-white ml-16">
          Next.js
          <div className="w-[55%] h-4 bg-indigo-600 rounded-2xl mt-2"></div>
        </li>
      </ul>
    </div>
  );
};
