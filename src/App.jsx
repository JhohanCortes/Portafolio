import React, { useRef } from "react";


import "./App.css";

import eng_cv from "./Recourses/Jhohan-Cortes_CV_ENG.pdf";
import esp_cv from "./Recourses/Jhohan-Cortes_CV_ESP.pdf";

import linkedin from "./Recourses/linkedin.png";
import gitHub from "./Recourses/gitHub.png";
import dog from "./Recourses/dog.png";
import talentForge from "./Recourses/talent-forge.png";
import cat from "./Recourses/cat.png";
import tools from "./Recourses/tools.png";
import languages from "./Recourses/languages.png";
import technologies from "./Recourses/technologies.png";

import Header from "./Components/Header/Header";

const projects = [
  {
    name: "Dog Project",
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
  "Zustand",
  "Redux",
  "Express",
  "Sequelize",
  "mySQL",
  "NodeJS",
  "Tailwind",
];
const Languages = ["Javascruot", "Typescript", "CSS", "HTML"];
const Tools = [
  "Photoshop",
  "Git",
  "Github",
  "Illustrator",
  "Figma",
];

function App() {

  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-center text-white mx-auto bg-background">
      <Header
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />

      <div className="pt-[250px] pb-[150px]" ref={homeRef}>
        <div>
          <strong className="font-sans text-6xl text-primary ">Jhohan Cortes</strong>
          <h1 className="font-sans text-4xl text-secondary">Desarrollador Full-Stack</h1>
          <p className="font-code text-xl text-secondary">Mejorando el mundo, una línea de código a la vez</p>
        </div>
        <div className="mt-2 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/jhohan-cortes-a314a8213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              className="w-11 h-11"
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
              className="w-10 h-10"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
      {/* Acerca de mí */}
      <div ref={aboutMeRef} className="pb-[150px]">

        <img
          className="mx-auto lg:w-96 w-1/2 pt-[60px]"
          src={cat}
          alt="Imagen de Gato"
        />
        <div className="md:relative">
          <div className="pt-20 pb-40 bg-[#222222] z-50 w-full">
            <strong className="font-sans text-3xl text-primary">
              Hola, soy Jhohan. Encantado de conocerte.
            </strong>
            <p className="font-code mx-auto text-l w-5/6 md:w-1/2">
              Desde 2022, he estado inmerso en el mundo de la programación, donde he encontrado mi pasión por la creación de software innovador. Mi formación autodidacta, complementada con la graduación del prestigioso bootcamp de Henry, me ha proporcionado una base sólida en desarrollo full-stack, con un enfoque especial en el diseño y la usabilidad. Soy un apasionado del aprendizaje continuo y siempre busco superar los desafíos técnicos con soluciones elegantes y eficientes.
            </p>
          </div>
        </div>
      </div>
      {/* Proyectos */}
      <div className="pb-[40px] pt-[60px]" ref={projectsRef} >
        <div className="pb-5">
          <strong className="font-sans text-4xl text-primary" >Proyectos</strong>
          <p className="font-code text-xl w-[90%] mx-auto text-center">
            Explora algunos de mis proyectos destacados
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-2 grid-cols-1 w-5/6 mx-auto">
          {projects.map((e, index) => {
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
                      <button className="rounded-full font-bold border-4 border-white hover:bg-primary p-5 py-1 opacity-0 transition-opacity group-hover:opacity-100">
                        Ver en Vivo
                      </button>
                    </a>
                    <a
                      href={e.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="rounded-full font-bold border-4 border-white hover:bg-primary p-5 py-1 opacity-0 transition-opacity group-hover:opacity-100">
                        GitHub
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
                      <button className="rounded-full font-bold border-4 border-white hover:bg-primary p-5 py-1 opacity-0 transition-opacity group-hover:opacity-100">
                        GitHub
                      </button>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Habilidades */}
      <div  ref={skillsRef} className="pt-[130px] pb-[50px]">

        <div className="relative mx-auto bg-background rounded-3xl border border-secondary flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 space-x-1 z-100 w-5/6">
          <div className="md:w-1/3 py-10 md:border-r-2 border-secondary">
            <div className="mx-auto rounded-full w-20 h-20 bg-primary flex items-center">
              <img
                src={technologies}
                className="mx-auto w-12 filter invert"
                alt="Tecnologías"
              />
            </div>
            <strong className="text-primary">Tecnologías</strong>
            <ul>
              {Technologies.map((e, index) => (
                <li key={index} className="font-code">
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 py-10 md:border-r-2 border-secondary">
            <div className="mx-auto rounded-full w-20 h-20 bg-primary flex items-center">
              <img
                src={languages}
                className="mx-auto w-12 filter invert"
                alt="Idiomas"
              />
            </div>
            <strong className="text-primary">Idiomas</strong>
            <ul>
              {Languages.map((e, index) => (
                <li key={index} className="font-code">
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 py-10">
            <div className="mx-auto rounded-full w-20 h-20 bg-primary flex items-center">
              <img
                src={tools}
                className="mx-auto w-12 filter invert"
                alt="Herramientas"
              />
            </div>
            <strong className="text-primary">Herramientas</strong>
            <ul>
              {Tools.map((e, index) => (
                <li key={index} className="font-code">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contacto */}
      <div className="pb-[50px]" ref={contactRef}>
        <h1 className="font-bold mb-4 pt-[60px]">Información de Contacto:</h1>
        <p className="mb-2">Si deseas contactarme, puedes hacerlo a través de:</p>
        <ul className="ml-5 mb-4">
          <li>Email: dicenadie2@gmail.com</li>
          <li>Teléfono: +52 322 8820 772</li>
          <a href="https://www.linkedin.com/in/jhohan-cortes-a314a8213/" target="_blank" rel="noopener noreferrer"><li>LinkedIn: Jhohan Cortes</li></a>
        </ul>
        <p className="mb-2">Descarga mi currículum:</p>
        <a
          href={eng_cv}
          download
          className="font-code uppercase border-2 border-secondary rounded-md py-2 px-4 font-bold mx-2 hover:bg-gray-300 duration-200"
          style={{ background: '#333333', color: '#FFFFFF' }}
        >
          CV en Inglés
        </a>
        <a
          href={esp_cv}
          download
          className="font-code uppercase border-2 border-secondary rounded-md py-2 px-4 font-bold mx-2 hover:bg-gray-300 duration-200"
          style={{ background: '#333333', color: '#FFFFFF' }}
        >
          CV en Español
        </a>
      </div>


      <footer className="bg-[#222222] mt-10 bottom-0">
        <div className="py-10 w-[90%] mx-auto">
          <h2 className="font-code">
            Aplicación desarrollada con Tailwind, React y diseñada en Figma.
          </h2>
          <h2 className="font-code">
            ¡Contáctame en GitHub, LinkedIn o por correo electrónico para conocer más sobre mi experiencia y cómo puedo contribuir a tu equipo!
          </h2>
        </div>
      </footer>
    </div>

  );
}

export default App;
