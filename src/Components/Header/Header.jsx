import { useState } from "react";
import icon from "../../Recourses/icon.png"
import { Link } from "react-router-dom";

const Header = ({ scrollToSection, aboutMeRef, projectsRef, skillsRef, contactRef, homeRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full bg-[#222222] text-secondary z-10 border-b-[1px] border-white">
      <div className="max-w-screen-lg mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div>
            <img className="h-9" src={icon}></img>
          </div>
          <div className="hidden md:flex">
            <nav>
              <ul className="flex">
                <li className="mr-4">
                  <button className="hover:border-primary hover:border-b-[1px] px-4 py-2" onClick={() => scrollToSection(homeRef)}>Inicio</button>
                </li>
                <li className="mr-4">
                  <button className="hover:border-primary hover:border-b-[1px] px-4 py-2" onClick={() => scrollToSection(aboutMeRef)}>Sobre mi</button>
                </li>
                <li className="mr-4">
                  <button className="hover:border-primary hover:border-b-[1px] px-4 py-2" onClick={() => scrollToSection(projectsRef)}>Proyectos</button>
                </li>
                <li className="mr-4">
                  <button className="hover:border-primary hover:border-b-[1px] px-4 py-2" onClick={() => scrollToSection(skillsRef)}>Conocimientos</button>
                </li>
                <li>
                  <button className="hover:border-primary hover:border-b-[1px] px-4 py-2" onClick={() => scrollToSection(contactRef)}>Contacto</button>
                </li>
                <Link to="/resources">
                  <button className="hover:border-primary hover:border-b-[1px] px-4 py-2">Recursos</button>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="md:hidden">
            <button className="text-white text-xl" onClick={toggleMenu}>☰</button>
          </div>
        </div>
      </div>
      {/* Menú desplegable para dispositivos móviles */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#222222]">
          <ul className="flex flex-col">
            <li className="mb-2">
              <button className="hover:border-primary hover:border-b-[1px] w-full px-4 py-2" onClick={() => { scrollToSection(homeRef); toggleMenu(); }}>Inicio</button>
            </li>
            <li className="mb-2">
              <button className="hover:border-primary hover:border-b-[1px] w-full px-4 py-2" onClick={() => { scrollToSection(aboutMeRef); toggleMenu(); }}>Sobre mi</button>
            </li>
            <li className="mb-2">
              <button className="hover:border-primary hover:border-b-[1px] w-full px-4 py-2" onClick={() => { scrollToSection(projectsRef); toggleMenu(); }}>Proyectos</button>
            </li>
            <li className="mb-2">
              <button className="hover:border-primary hover:border-b-[1px] w-full px-4 py-2" onClick={() => { scrollToSection(skillsRef); toggleMenu(); }}>Conocimientos</button>
            </li>
            <li className="mb-2"  >
              <button className="hover:border-primary hover:border-b-[1px] w-full px-4 py-2" onClick={() => { scrollToSection(contactRef); toggleMenu(); }}>Contacto</button>
            </li>
            <li className="mb-2"  ><Link to="/resources">
              <button className="hover:border-primary hover:border-b-[1px] px-4 py-2">Recursos</button>
            </Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
