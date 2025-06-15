import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import About from "../About/About";
import Projects from "../project/Projects";
import Skills from "../skills/Skills"; // Adjust path as needed
import Contact from "../content/Contact"; // Adjust path as needed





const Cover = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [darkMode, setDarkMode] = useState(false);
  const [flippedPage, setFlippedPage] = useState(null); // null | "about" | "projects" | "skills"




  const toggleLanguage = () => setLanguage((prev) => (prev === "EN" ? "AR" : "EN"));
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const text = {
    EN: {
      title: "Crafting the Web",
      subtitle: "The Frontend Journey of",
      name: "Sana Ullah",
      quote: '"Building seamless interfaces with precision and passion."',
      tagOpen: "<portfolio>",
      tagMiddle: "<frontend developer />",
      tagClose: "</portfolio>",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    AR: {
      title: "بناء الويب",
      subtitle: "رحلة الواجهة الأمامية لـ",
      name: "ثناء الله",
      quote: '"بناء واجهات سلسة بدقة وشغف."',
      tagOpen: "<محفظة>",
      tagMiddle: "<مطور الواجهة الأمامية />",
      tagClose: "</محفظة>",
      about: "حول",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "اتصال",
    },
  };

  const t = text[language];
  const isArabic = language === "AR";

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 perspective relative transition-colors duration-300 
  ${isArabic ? "Almarai" : "font-serif"} 
  ${darkMode 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900" 
    : "bg-gradient-to-br from-gray-100 via-white to-orange-100"
  }`}
dir={isArabic ? "rtl" : "ltr"}

    >
      {/* Back Cover */}
      <div className={`absolute w-80 h-[520px] rounded-xl shadow-xl transform translate-x-3 translate-y-3 z-0 ${darkMode ? "bg-gray-700" : "bg-gray-300"}`} />

      {/* Book */}
      <div className="relative w-80 h-[520px] shadow-2xl rounded-xl z-10 flex flex-col">
        {/* Page Container with Flip */}
        <div
          className={`w-80 h-full rounded-r-xl relative transition-transform duration-700 [transform-style:preserve-3d] ${
            flippedPage  ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Page */}
          <div className={`absolute inset-0 backface-hidden border rounded-r-xl overflow-hidden z-10 transition-colors duration-300
            ${darkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}>
            {/* Top Nav */}
            <nav className="flex items-center justify-between px-9 py-2 border-b border-gray-300 relative z-10">
              <button className="text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <HiX /> : <HiMenu />}
              </button>
              <div className="flex items-center space-x-4 space-x-reverse">
                {!menuOpen && (
                  <button onClick={toggleLanguage} className="text-sm font-semibold hover:text-blue-600">
                    {language}
                  </button>
                )}
              {menuOpen && (
  <ul className="flex justify-end gap-4 font-medium text-sm ml-2">
    <li>
      <button onClick={() => setFlippedPage("about")} className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
        {t.about}
      </button>
    </li>
    <li>
      <button onClick={() => setFlippedPage("projects")} className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
        {t.projects}
      </button>
    </li>
    <li>
      <button onClick={() => setFlippedPage("skills")} className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
        {t.skills}
      </button>
    </li>
    <li>
      <button onClick={() => setFlippedPage("contact")} className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
        {t.contact}
      </button>
    </li>
  </ul>
)}


              </div>
            </nav>

            {/* Tech Icons */}
            <div className="absolute bottom-12 left-10 flex gap-6 text-sm z-10">
              {[FaHtml5, FaCss3Alt, FaJs, FaReact].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Icon className={`text-2xl hover:text-${["orange-500", "blue-600", "yellow-500", "cyan-500"][i]}`} />
                  <span className="mt-1">{["HTML5", "CSS3", "JavaScript", "React"][i]}</span>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex-grow flex flex-col justify-start items-center text-center p-6">
              <h1 className="text-2xl mt-[30px] font-bold leading-snug tracking-tight">{t.title}</h1>
              <h2 className="text-md mt-4 font-medium italic tracking-wide">
                {t.subtitle}
                <span className="block text-xl font-bold mt-1">{t.name}</span>
              </h2>
              <p className="mt-10 text-sm max-w-xs">{t.quote}</p>
              <div className="mt-8 text-xs font-mono text-gray-400 dark:text-gray-500">
                <p>{t.tagOpen}</p>
                <p className="ml-2">{t.tagMiddle}</p>
                <p>{t.tagClose}</p>
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

          {/* Back Page (About) */}
         <div className="absolute inset-0 backface-hidden rotate-y-180">
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

        {/* Spine */}
        <div className={`absolute left-0 top-0 w-6 h-full rounded-l-xl shadow-inner z-30 ${darkMode ? "bg-gray-900" : "bg-gray-800"}`} />
      </div>
    </div>
  );
};

export default Cover;
