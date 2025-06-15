import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiMenu, HiX, HiArrowLeft } from "react-icons/hi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import emailjs from 'emailjs-com';
import About from "../About/About";
import Projects from "../project/Projects";
import Skills from "../skills/Skills";

const Contact = ({

  
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
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_lygrubr",     // Replace with your EmailJS Service ID
      "template_e3qup5c",    // Replace with your EmailJS Template ID
      e.target,
      "5-w0X5onHit0PNG_6"         // Replace with your EmailJS Public/User ID
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
  e.target.reset();
};


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
                    <button onClick={() => setFlippedPage("about")} className="relative hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
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
                          className="relative text-blue-600 after:w-full 
                                    hover:text-blue-600 
                                    after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                                    after:h-[2px] after:bg-blue-600 after:duration-300 
                                    hover:after:w-full"
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
          
<div className="flex justify-center gap-7 mt-2 text-2xl">
  <a
    href="https://www.linkedin.com/in/your-profile"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:text-blue-500"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/Sana20ullah"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 hover:text-gray-600"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.instagram.com/your-profile"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-600 hover:text-pink-400"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.facebook.com/sana.ullah.sana.530691"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-400"
  >
    <FaFacebook />
  </a>
</div>

   
{/* contact in main content. */}

<div className="flex-1 overflow-y-auto ml-4 mt-4 px-6 mb-20 py-4">
  <div className="flex flex-col items-center justify-center min-h-full">
    <h2 className="text-3xl font-bold text-blue-700 mb-1">Get In Touch</h2>
    <h3 className="text-xl font-semibold text-gray-800 white:text-gray-100 mb-1">Contact Me</h3>
    <p className="text-center max-w-xl text-gray-600 dark:text-gray-600 mb-6">
      Let’s Work Together — Feel free to reach out with project ideas, collaborations, or freelance opportunities.
    </p>

    <form className="w-full max-w-lg space-y-5" onSubmit={sendEmail}>
  <div className="flex flex-col">
    <label htmlFor="name" className="text-sm font-medium mb-1">Name</label>
    <input
      type="text"
      id="name"
      name="user_name"                 // <-- required by emailjs template
      placeholder="Your Name"
      required
      className="px-4 py-2 border rounded-md bg-white dark:bg-gray-100 dark:text-black dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
    <input
      type="email"
      id="email"
      name="user_email"               // <-- required by emailjs template
      placeholder="you@example.com"
      required
      className="px-4 py-2 border rounded-md bg-white dark:bg-gray-100 dark:text-black dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="subject" className="text-sm font-medium mb-1">Subject</label>
    <input
      type="text"
      id="subject"
      name="subject"                  // <-- required by emailjs template
      placeholder="Project Inquiry"
      className="px-4 py-2 border rounded-md bg-white dark:bg-gray-100 dark:text-black dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="message" className="text-sm font-medium mb-1">Message</label>
    <textarea
      id="message"
      name="message"                  // <-- required by emailjs template
      rows="4"
      placeholder="Write your message here..."
      required
      className="px-4 py-2 border rounded-md bg-white dark:bg-gray-100 dark:text-black dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
  >
    Send Message
  </button>
</form>

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

export default Contact;
