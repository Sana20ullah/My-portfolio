import React, { useState } from "react";
import { HiMenu, HiX, HiArrowLeft } from "react-icons/hi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import Contact from "../content/Contact";
import About from "../About/About";
import Projects from "../project/Projects";

const Skills = ({
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
        "I am Sana Ullah, a frontend developer with strong knowledge in HTML, CSS, JavaScript, React, Tailwind, Bootstrap, responsive design, and AI technologies. I specialize in building professional, clean, and modern web interfaces. I’m available for online freelance work.",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      back: "Back",
    },
    AR: {
      about: "حول",
      description:
        "أنا ثناء الله، مطور واجهات أمامية أمتلك معرفة قوية بـ HTML، CSS، JavaScript، React، Tailwind، Bootstrap، التصميم المتجاوب، والتقنيات الذكية. أتخصص في بناء واجهات ويب احترافية ونظيفة وحديثة. متاح للعمل الحر عبر الإنترنت.",
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
                      onClick={() => setFlippedPage("projects")}
                      className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"

                    >
                      {t.projects}
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
<div className="p-8 overflow-y-auto ml-3 text-bold mb-20 mt-7" >
  <h2 className="text-xl font-semibold mb-4  text-blue-600">My Skills</h2>

  <div className="grid grid-cols-1 md:grid-cols-1 text-sm gap-4">
    <div>
      <h3 className="font-semibold text-gray-700 dark:text-gray-900 mb-2">Frontend Development</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>HTML5, CSS3, JavaScript (ES6+)</li>
        <li>React.js, React Router, Hooks</li>
        <li>Tailwind CSS, Bootstrap</li>
        <li>Responsive Web Design</li>
        <li>Dark Mode / Light Mode</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-700 dark:text-gray-900 mb-2">UI/UX Design</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Figma, Adobe XD</li>
        <li>Wireframing & Prototyping</li>
        <li>User Interface (UI) Design</li>
        <li>User Experience (UX) Strategy</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-700 dark:text-gray-900 mb-2">Graphic Design</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Branding & Logo Design</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-700 dark:text-gray-900 mb-2">React Projects</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Component-Based Architecture</li>
        <li>State Management</li>
        <li>Reusable UI Components</li>
        <li>Animations & Transitions</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-700 dark:text-gray-900 mb-2">AI & Search Tools</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>ChatGPT, Bard, Gemini</li>
        <li>Notion AI, Copy.ai</li>
        <li>Prompt Engineering</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-900 dark:text-gray-900 mb-2">Other Tools</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Git & GitHub</li>
        <li>Netlify / Vercel</li>
        <li>Postman (API Testing)</li>
        <li>SEO Basics</li>
        <li>VS Code</li>
      </ul>
    </div>
  </div>
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

export default Skills;
