// Header.js
import React from "react";

const Header = ({ scrollToSection, aboutMeRef, projectsRef, skillsRef, contactRef }) => {
  return (
    <div className="fixed justify-items-end top-0 w-full bg-background text-secondary p-4 z-10 border-b-2 border-whtie ">
      <nav>
        <ul>
          <li className="inline-block mr-4">
            <button className="hover:bg-primary hover:text-secondary px-4 py-2 rounded" onClick={() => scrollToSection(aboutMeRef)}>About Me</button>
          </li>
          <li className="inline-block mr-4">
            <button className="hover:bg-primary hover:text-secondary px-4 py-2 rounded" onClick={() => scrollToSection(projectsRef)}>Projects</button>
          </li>
          <li className="inline-block mr-4">
            <button className="hover:bg-primary hover:text-secondary px-4 py-2 rounded" onClick={() => scrollToSection(skillsRef)}>Skills</button>
          </li>
          <li className="inline-block">
            <button className="hover:bg-primary hover:text-secondary px-4 py-2 rounded" onClick={() => scrollToSection(contactRef)}>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
