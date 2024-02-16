// Header.js
import React from "react";

const Header = ({ scrollToSection, aboutMeRef, projectsRef, skillsRef, contactRef, homeRef }) => {
  return (
    <div className="h-[60px] fixed top-0 w-full bg-[#222222] text-secondary p-2 z-10 border-b-[1px] border-whtie">
      <nav>
        <ul>
          <li className="inline-block mr-4">
            <button className="hover:border-primary hover:border-b-[1px] px-4 py-2" onClick={() => scrollToSection(homeRef)}>Inicio</button>
          </li>
          <li className="inline-block mr-4">
            <button className="hover:border-primary hover:border-b-[1px] px-4 py-2" onClick={() => scrollToSection(aboutMeRef)}>Sobre mi</button>
          </li>
          <li className="inline-block mr-4">
            <button className="hover:border-primary hover:border-b-[1px] px-4 py-2" onClick={() => scrollToSection(projectsRef)}>Proyectos</button>
          </li>
          <li className="inline-block mr-4">
            <button className="hover:border-primary hover:border-b-[1px] px-4 py-2" onClick={() => scrollToSection(skillsRef)}>Conocimientos</button>
          </li>
          <li className="inline-block">
            <button className="hover:border-primary hover:border-b-[1px] px-4 py-2  " onClick={() => scrollToSection(contactRef)}>Contacto</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
