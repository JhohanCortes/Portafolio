import React from "react";

import "./App.css";

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
    name: "Dog proyect",
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
    <div className="text-center mx-auto relative">
      <Header />

      <div className="py-20">
        <div>
          <strong className="font-sans text-4xl">Full-Stack-Developer</strong>
          <p className="font-code text-xl">Coding better than yesterday</p>
        </div>

        <img
          className="mx-auto pt-5 w-32 md:w-64"
          src={pic}
          alt="Jhohan-Cortes"
        ></img>
        <div class="mt-2 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/jhohan-cortes-a314a8213/"
            target="_blank"
          >
            <img src={gitHub} class="w-10 h-10 filter invert"></img>
          </a>
          <a href="https://github.com/JhohanCortes" target="_blank">
            <img src={linkedin} class="w-11 h-11 filter invert"></img>
          </a>
        </div>
      </div>
      <img
        className="mx-auto md:w-96 pt-20 pb-0"
        src={cat}
        alt="Cat-Image"
      ></img>

      <div className="relative h-screen">
        <div className="py-20 bg-[#333333] text-white z-50 w-full">
          <strong className="font-sans text-3xl">
            Hi, I'm Jhohan. Nice to meet you
          </strong>
          <p className="font-code mx-auto text-l w-1/2">
            Since 2022, I have been drawn to the world of programming, although
            I have always found the computer world attractive. I have been
            studying programming in a self-taught manner and eventually
            graduated from the Henry bootcamp as a full-stack developer with a
            passion for front-end development and design. I am someone who
            enjoys learning from my surroundings and constantly seeks to expand
            my knowledge.
          </p>
        </div>

        <div className="absolute top-72 left-1/2 transform -translate-x-1/2 bg-white rounded-3xl border border-black py-10 flex md:space-x-4 space-x-1 z-100 w-5/6">
          <div className="w-1/3">
            <div className="mx-auto rounded-full w-20 h-20 bg-[#FF5BEF] flex items-center">
              <img
                src={technologies}
                className="mx-auto w-12 filter invert"
                alt="Technologies"
              ></img>
            </div>
            <strong>Technologies</strong>
            <ul>
              {Technologies.map((e) => {
                return <li className="font-code">{e}</li>;
              })}
            </ul>
          </div>
          <div className="w-1/3">
            <div className="mx-auto rounded-full w-20 h-20 bg-[#FF5BEF] flex items-center">
              <img src={languages} className="mx-auto w-12 filter invert" alt="Languages"></img>
            </div>
            <strong>Languages</strong>
            <ul>
              {Languages.map((e) => {
                return <li className="font-code">{e}</li>;
              })}
            </ul>
          </div>
          <div className="w-1/3">
            <div className="mx-auto rounded-full w-20 h-20 bg-[#FF5BEF] flex items-center">
              <img src={tools} className="mx-auto w-12 filter invert" alt="Tools"></img>
            </div>
            <strong>Tools</strong>
            <ul>
              {Tools.map((e) => {
                return <li className="font-code">{e}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      <divs className="mt-10 bottom-5">
        <div className="py-10">
          <strong className="font-sans text-4xl">Proyects</strong>
          <p className="font-code text-xl">
            Projects I have undertaken or had the chance to collaborate on
          </p>
        </div>
        <div className="grid md:grid-cols-3 md:grid-rows- md:gap-2 grid-cols-1 grid-rows-1 w-5/6 mx-auto">
          {proyects.map((e) => {
            return (
              <div class="relative group mx-auto">
                <img
                  src={e.image}
                  alt="Proyecto 1"
                  class="border-2 border-gray-800 hover:brightness-0 duration-200 h-full w-full rounded"
                />
                <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity group-hover:opacity-50"></div>

                {e.deploy ? (
                  // Si existe deploy
                  <div className="grid grid-cols-1 gap-2 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <a href={e.deploy} target="_blank">
                      <button class="rounded-full font-bold border-4 border-white hover:bg-pink-400  text-white p-5 py-1  opacity-0 transition-opacity group-hover:opacity-100">
                        Deploy
                      </button>
                    </a>
                    <a href={e.repository} target="_blank">
                      <button class="rounded-full font-bold border-4 border-white hover:bg-pink-400 text-white p-5 py-1  opacity-0 transition-opacity group-hover:opacity-100">
                        Github
                      </button>
                    </a>
                  </div>
                ) : (
                  // Si no hay deploy
                  <div className="grid grid-cols-1 gap-2 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <a href={e.repository} target="_blank">
                      <button class="rounded-full font-bold border-4 border-white hover:bg-pink-400 text-white p-5 py-1  opacity-0 transition-opacity group-hover:opacity-100">
                        Github
                      </button>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </divs>

      <footer className="bg-[#333333] mt-10 bottom-0">
        <div className="py-10">
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
