import React from "react";

import "./App.css";

import eng_cv from "./Recourses/Jhohan-Cortes_CV_ENG.pdf";
import esp_cv from "./Recourses/Jhohan-Cortes_CV_ESP.pdf";

import linkedin from "./Recourses/linkedin.png";
import gitHub from "./Recourses/gitHub.png";
import dog from "./Recourses/dog.png";
import talentForge from "./Recourses/talent-forge.png";
import cat from "./Recourses/cat.png";
import pic from "./Recourses/pic.png";
import tools from "./Recourses/tools.png";
import languages from "./Recourses/languages.png";
import technologies from "./Recourses/technologies.png";

import Header from "./Components/Header/Header";

const proyects = [
  {
    name: "Dog project",
    image: dog,
    deploy: null,
    repository: "https://github.com/JhohanCortes/Henry-Dogs-Proyect",
  },
  {
    name: "Talent Forge",
    image: talentForge,
    deploy: "https://deploy-front-end-theta.vercel.app/",
    repository: "https://github.com/JhohanCortes/TalentForgeFrontEnd",
  },
];

const Technologies = [
  "React",
  "Redux",
  "Express",
  "Sequelize",
  "mySQL",
  "NodeJS",
  "Tailwind",
  "PostgreSQL",
];
const Languages = ["JS", "JSX", "CSS", "HTML"];
const Tools = [
  "Photoshop",
  "Git",
  "Github",
  "Illustrator",
  "Figma",
  "Excalidraw",
  "Coreldraw",
];

function App() {
  return (
    <div className="text-center mx-auto">
      <Header />

      <div className="py-20">
        <div>
          <strong className="font-sans text-4xl">Full-Stack-Developer</strong>
          <p className="font-code text-xl">Coding better than yesterday</p>
        </div>

        <img
          className="mx-auto pt-5 w-64 md:w-72 lg:w-96"
          src={pic}
          alt="Jhohan-Cortes"
        />
        <div className="mt-2 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/jhohan-cortes-a314a8213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              className="w-11 h-11 filter invert"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/JhohanCortes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitHub}
              className="w-10 h-10 filter invert"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
      <img
        className="mx-auto lg:w-96 w-1/2 pt-20 pb-0"
        src={cat}
        alt="Cat-Image"
      />

      <div className="md:relative">
        <div className="pt-20 pb-40 bg-[#333333] text-white z-50 w-full">
          <strong className="font-sans text-3xl">
            Hi, I'm Jhohan. Nice to meet you
          </strong>
          <p className="font-code mx-auto text-l w-5/6 md:w-1/2">
            Since 2022, I have been drawn to the world of programming, although
            I have always found the computer world attractive. I have been
            studying programming in a self-taught manner and eventually
            graduated from the Henry bootcamp as a full-stack developer with a
            passion for front-end development and design. I am someone who
            enjoys learning from my surroundings and constantly seeks to expand
            my knowledge.
          </p>
        </div>
      </div>

      <ssdiv className="relative -top-24 mx-auto bg-white rounded-3xl border border-black flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 space-x-1 z-100 w-5/6">
          <div className="md:w-1/3 py-10 border-r-2 border-black">
            <div className="mx-auto rounded-full md: w-20 h-20 bg-[#FF5BEF] flex items-center">
              <img
                src={technologies}
                className="mx-auto w-12 filter invert"
                alt="Technologies"
              />
            </div>
            <strong>Technologies</strong>
            <ul>
              {Technologies.map((e, index) => (
                <li key={index} className="font-code">
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 py-10 md:border-r-2 border-black">
            <div className="mx-auto rounded-full w-20 h-20 bg-[#FF5BEF] flex items-center">
              <img
                src={languages}
                className="mx-auto w-12 filter invert"
                alt="Languages"
              />
            </div>
            <strong>Languages</strong>
            <ul>
              {Languages.map((e, index) => (
                <li key={index} className="font-code">
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 py-10">
            <div className="mx-auto rounded-full w-20 h-20 bg-[#FF5BEF] flex items-center">
              <img
                src={tools}
                className="mx-auto w-12 filter invert"
                alt="Tools"
              />
            </div>
            <strong>Tools</strong>
            <ul>
              {Tools.map((e, index) => (
                <li key={index} className="font-code">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </ssdiv>

      <div className="bottom-5 mt-0">
        <div className="pb-5">
          <strong className="font-sans text-4xl">Projects</strong>
          <p className="font-code text-xl w-[90%] mx-auto text-center">
            Projects I have undertaken or had the chance to collaborate on
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-2 grid-cols-1 w-5/6 mx-auto">
          {proyects.map((e, index) => {
            return (
              <div key={index} className="relative group mx-auto mb-4 md:mb-0">
                <img
                  src={e.image}
                  alt={e.name}
                  className="border-2 border-gray-800 hover:brightness-0 duration-200 h-full w-full rounded"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity group-hover:opacity-50"></div>

                {e.deploy ? (
                  <div className="grid grid-cols-1 gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <a
                      href={e.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="rounded-full font-bold border-4 border-white hover:bg-pink-400 text-white p-5 py-1 opacity-0 transition-opacity group-hover:opacity-100">
                        Deploy
                      </button>
                    </a>
                    <a
                      href={e.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="rounded-full font-bold border-4 border-white hover:bg-pink-400 text-white p-5 py-1 opacity-0 transition-opacity group-hover:opacity-100">
                        Github
                      </button>
                    </a>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <a
                      href={e.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="rounded-full font-bold border-4 border-white hover:bg-pink-400 text-white p-5 py-1 opacity-0 transition-opacity group-hover:opacity-100">
                        Github
                      </button>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold mb-4">If u want work with me:</h1>
        <a
          href={eng_cv}
          download
          className="font-code uppercase border-2 border-black rounded-full py-2 px-4 font-bold mx-2 hover:bg-gray-300 duration-200"
        >
          eng cv
        </a>
        <a
          href={esp_cv}
          download
          className="font-code uppercase border-2 border-black rounded-full py-2 px-4 font-bold mx-2 hover:bg-gray-300 duration-200"

        >
          ESP CV
        </a>
      </div>

      <footer className="bg-[#333333] mt-10 bottom-0">
        <div className="py-10 w-[90%] mx-auto">
          <h2 className="font-sans text-base text-white">
            App made with Tailwind, React, and sketched in Figma.
          </h2>
          <h2 className="font-sans text-base text-white">
            Contact me on GitHub, LinkedIn, or via Gmail to know{" "}
            <a href="#" className="underline">
              more!
            </a>
          </h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
