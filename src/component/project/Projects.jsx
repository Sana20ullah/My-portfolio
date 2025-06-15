import React, { useState } from "react";
import { HiMenu, HiX, HiArrowLeft } from "react-icons/hi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import Skills from "../skills/Skills";
import Contact from "../content/Contact";
import About from "../About/About";
import ProjectData from "./ProjectData";

const Projects = ({
  setIsFlipped,
  darkMode,
  toggleDarkMode,
  language,
  toggleLanguage,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flippedPage, setFlippedPage] = useState(null); // 'projects' | 'skills' | 'contact'

  const translations = {
    EN: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      back: "Back",
    },
    AR: {
      about: "حول",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "اتصال",
      back: "رجوع",
    },
  };

  const t = translations[language] || translations.EN;

  return (
    <div className="w-full h-full perspective-[1500px] relative">
      <div
        className={`w-full h-full transition-transform duration-700 relative [transform-style:preserve-3d] ${
          flippedPage ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side - About Page */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-r-xl shadow-xl border flex flex-col transition-colors duration-300 z-10 ${
            darkMode
              ? "bg-gray-800 border-gray-600 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
        >
          {/* Top Nav */}
          <nav className="flex items-center justify-between px-9 py-3 border-b border-gray-300">
            <div className="flex items-center gap-4">
              <button
                className="text-3xl"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {menuOpen ? <HiX /> : <HiMenu />}
              </button>

              {/* Inline Menu Items */}
              {menuOpen && (
                <ul className="flex gap-4 font-medium text-sm">
                   <li>
                    <button onClick={() => setFlippedPage("about")} className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
                      {t.about}
                    </button>
                  </li>
                 <li>
                        <button
                          className="relative text-blue-600 after:w-full 
                                    hover:text-blue-600 
                                    after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                                    after:h-[2px] after:bg-blue-600 after:duration-300 
                                    hover:after:w-full"
                        >
                          {t.projects}
                        </button>
                      </li>
                  <li>
                    <button
                      onClick={() => setFlippedPage("skills")}
                      className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"

                    >
                      {t.skills}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setFlippedPage("contact")}
                     className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"

                    >
                      {t.contact}
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Language & Back */}
            {!menuOpen && (
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleLanguage}
                  className="text-sm font-semibold hover:text-blue-600"
                >
                  {language}
                </button>
                <button
                  onClick={() => setIsFlipped(false)}
                  className="text-sm hover:text-red-500 flex items-center gap-1"
                >
                  <HiArrowLeft />
                  <span className="ml-4">{t.back}</span>
                </button>
              </div>
            )}
          </nav>

          {/* Tech Icons */}
          <div className="absolute bottom-4 left-10 flex gap-6 text-sm">
            {[FaHtml5, FaCss3Alt, FaJs, FaReact].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center">
                <Icon
                  className={`text-2xl hover:text-${
                    ["orange-500", "blue-600", "yellow-500", "cyan-500"][i]
                  }`}
                />
                <span className="mt-1">
                  {["HTML5", "CSS3", "JavaScript", "React"][i]}
                </span>
              </div>
            ))}
          </div>

        {/* Main Content */}

<div className="text-2xl font-bold mr-28 ml-28 mt-4 mb-4">Projects</div>

<div className="flex overflow-y-auto mt-17 ml-7 w-70 gap-6 pb-4 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
  {ProjectData.map((project, i) => (
    <div
      key={i}
      className="min-w-[280px] max-w-[280px] bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex-shrink-0 border border-gray-200 dark:border-gray-700"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-28 object-cover rounded-md mb-6"
        />
      </a>
      <h3 className="text-lg text-white font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 text-xs text-blue-500">
        {project.tech.map((t, j) => (
          <span
            key={j}
            className="bg-blue-100 dark:bg-blue-700 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>


          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
              className="absolute top-16 right-1 -translate-x-1/2 text-xl hover:text-yellow-400 transition-colors z-20"
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
        </div>

        {/* Back Side - Flipped Pages */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          {flippedPage === "projects" && (
            <Projects
              setIsFlipped={setFlippedPage}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              language={language}
              toggleLanguage={toggleLanguage}
              setMenuOpen={setMenuOpen}
            />
          )}
          {flippedPage === "about" && (
            <About
              setIsFlipped={setFlippedPage}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              language={language}
              toggleLanguage={toggleLanguage}
              setMenuOpen={setMenuOpen}
            />
          )}
          {flippedPage === "skills" && (
            <Skills
              setIsFlipped={setFlippedPage}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              language={language}
              toggleLanguage={toggleLanguage}
              setMenuOpen={setMenuOpen}
            />
          )}
          {flippedPage === "contact" && (
            <Contact
              setIsFlipped={setFlippedPage}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              language={language}
              toggleLanguage={toggleLanguage}
              setMenuOpen={setMenuOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
