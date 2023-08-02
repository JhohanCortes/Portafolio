import React from "react";
import logo from "./logo.svg";
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
                className="mx-auto"
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
              <img src={languages} className="mx-auto" alt="Languages"></img>
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
              <img src={tools} className="mx-auto" alt="Tools"></img>
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

      <div className="mt-10 bottom-5">
        <div className="py-10">
          <strong className="font-sans text-4xl">Proyects</strong>
          <p className="font-code text-xl">
            Projects I have undertaken or had the chance to collaborate on
          </p>
        </div>
        <div className="flex md:space-x-4 md:space-y-0 space-y-10 z-100 w-5/6 mx-auto grid md:gap-4 md:grid-cols-3 md:grid-rows- md:gap-4 grid-cols-1 grid-rows-1">
          <div class="m-1/3">
            <div class="max-w-xs rounded overflow-hidden shadow-lg">
              <img src={proyects[0].image} alt="Proyecto 1" class="w-full" />
            </div>
          </div>
          <div class="m-1/3">
            <div class="max-w-xs rounded overflow-hidden shadow-lg">
              <img src={proyects[0].image} alt="Proyecto 1" class="w-full" />
            </div>
          </div>
          <div class="m-1/3">
            <div class="max-w-xs rounded overflow-hidden shadow-lg">
              <img src={proyects[1].image} alt="Proyecto 1" class="w-full" />
            </div>
          </div>
          <div class="m-1/3">
            <div class="max-w-xs rounded overflow-hidden shadow-lg">
              <img src={proyects[1].image} alt="Proyecto 1" class="w-full" />
            </div>
          </div>
          <div class="m-1/3">
            <div class="max-w-xs rounded overflow-hidden shadow-lg">
              <img src={proyects[1].image} alt="Proyecto 1" class="w-full" />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#333333] mt-10 bottom-0">
        <h2 className="font-sans pt-10 text-base text-white">
          App made with tailwind, react and sketched in figma
        </h2>
        <div className="flex px-auto">
          <img src={gitHub} className="w-10 h-10"></img>
          <img src={linkedin} className="w-10 h-10"></img>
        </div>
      </footer>
    </div>
  );
}

export default App;
