import React, { useState } from "react";
import { HiMenu, HiX, HiArrowLeft } from "react-icons/hi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import Projects from "../project/Projects";
import Skills from "../skills/Skills";
import Contact from "../content/Contact";

const About = ({
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
    description:
      "Hello! I'm Sana Ullah, a passionate and hardworking frontend developer with expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React. I also have experience with GitHub for version control and a foundational understanding of design using tools like Photoshop and Illustrator. I'm currently learning backend development to become a full-stack developer. I'm skilled in using AI tools and deep searching to solve problems effectively. Let's build something great together!",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    back: "Back",
  },
  AR: {
    about: "حول",
    description:
      "مرحبًا! أنا ثناء الله، مطور واجهات أمامية شغوف ومجتهد، أمتلك خبرة في HTML وCSS وJavaScript وBootstrap وTailwind CSS وReact. أستخدم GitHub لإدارة الأكواد، ولدي معرفة بأساسيات التصميم باستخدام أدوات مثل Photoshop وIllustrator. أتعلم حاليًا تطوير الواجهة الخلفية لأصبح مطور Full Stack. كما أستخدم أدوات الذكاء الاصطناعي والبحث المتعمق لحل المشكلات بكفاءة. لنُنشئ معًا شيئًا رائعًا!",
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
                className="text-3xl "
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {menuOpen ? <HiX /> : <HiMenu />}
              </button>

              {/* Inline Menu Items */}
              {menuOpen && (
                <ul className="flex gap-4 font-medium text-sm "> 
                                    <li>
                        <button
                          className="relative text-blue-600 after:w-full 
                                    hover:text-blue-600 
                                    after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                                    after:h-[2px] after:bg-blue-600 after:duration-300 
                                    hover:after:w-full"
                        >
                          {t.about}
                        </button>
                      </li>


                  <li>
                    <button
                      onClick={() => setFlippedPage("projects")}
                      className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"

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
                  className="text-sm hover:text-red-500 flex items-center gap-3 left-5"
                >
                  <HiArrowLeft />
                  <span className="ml-4">{t.back}</span>
                </button>
              </div>
            )}
          </nav>
           



          {/* Tech Icons */}
          <div className="absolute mt-12 px-5 border-black bottom-4 left-5 flex gap-7 text-sm">
            
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
             <div className="flex-grow flex flex-col items-center text-center mt-6 mx-11">
                <h1 className="text-2xl font-bold mb-4">{t.about}</h1>
            <p className="text-sm leading-relaxed max-w-xs max-h-60 overflow-y-auto pr-2">
                  {t.description}
                </p>

              </div>

                          <a href="/resume.pdf" download
                  class="inline-flex items-center w-[240px] ml-12 mb-20 px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-2xl shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">

                  
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
                  </svg>

                  Download Resume
                </a>


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

export default About;
