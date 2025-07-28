"use client";
import {
  Menu,
  X,
  MapPin,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Calendar,
  ChevronDown,
  AppWindowMac,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-blue-800">Jailton Cruz</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-blue-800 via-blue-700 to-teal-600 text-white"
      >
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center"
                src="https://github.com/jailtoncruz.png"
                alt="Jailton Cruz Profile picture"
                width={128}
                height={128}
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Jailton Cruz
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
              Software Developer
            </h2>

            <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed max-w-3xl mx-auto">
              Experienced full-stack developer specializing in backend
              development with Node.js and NestJS. With over 7 years of hands-on
              experience, I craft scalable, high-performance web applications
              with clean architecture and thoughtful design.
            </p>

            <div className="flex items-center justify-center mb-8 text-blue-100">
              <MapPin size={20} className="mr-2" />
              <span className="text-lg">São Paulo, Brazil</span>
            </div>

            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="mailto:jailtoncruz01@gmail.com"
                className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-200"
              >
                <Mail size={20} className="mr-2" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jailtoncruz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-200"
              >
                <Linkedin size={20} className="mr-2" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/jailtoncruz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-200"
              >
                <Github size={20} className="mr-2" />
                <span>GitHub</span>
              </a>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200 animate-bounce"
            >
              <span className="mr-2">Learn More</span>
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Software Developer with 7 years of full-stack experience,
                  specializing in backend development with Node.js and NestJS.
                  Skilled in Angular, React, .NET, PostgreSQL, Docker, Azure,
                  GCP, and more. Passionate about building robust, clean, and
                  efficient systems for real-world challenges.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-4">
                    Key Highlights
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      9 years in the tech industry
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Focus on clean code and testing practices
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Strong experience with cloud platforms like Azure and GCP
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Skills & Technologies
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-green-700">
                  Proficient
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "Node.js",
                    "NestJS",
                    "React",
                    "Angular",
                    "PostgreSQL",
                    "Oracle",
                    "SAP HANA",
                    "Docker",
                    "REST APIs",
                    "Azure",
                    "GCP",
                    "Prisma",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-blue-700">
                  Intermediate
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    ".NET (C#)",
                    "Python",
                    "Kubernetes",
                    "Redis",
                    "Jenkins",
                    "CI/CD",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-orange-700">
                  Learning
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Swift", "GraphQL", "WebSockets"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-100">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">
                    Kotoba AI
                  </h3>
                  <a
                    href="https://kotoba-ai.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <AppWindowMac size={20} className="mr-2" />
                    <span>Access app</span>
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>

                <p className="text-gray-600 mb-4 text-lg">
                  AI-Powered Japanese Learning Platform
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Built a full-stack language learning app featuring flashcards,
                  AI-generated lessons, and a custom spaced repetition system.
                  Integrated OpenAI API, React (Vite), and NestJS backend for
                  seamless learning experience.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js (NestJS)",
                    "React (Vite)",
                    "TypeScript",
                    "PostgreSQL",
                    "OpenAI",
                    "GCP",
                    "Docker",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-300 text-center">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  More Projects Coming Soon
                </h3>
                <p className="text-gray-500">
                  Space reserved for future project showcases
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Work Experience
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-teal-500 to-blue-600"></div>

              <div className="space-y-12">
                {/* Stefanini */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="ml-20 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          Software Developer
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold">
                          Stefanini
                        </p>
                        <p className="text-gray-600">São Paulo, BR</p>
                      </div>
                      <div className="flex items-center text-gray-600 mt-2 lg:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-medium">Sep 2024 – Present</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Core Responsibilities:
                      </h4>
                      <ul className="text-gray-700 space-y-3">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Led the development of a reverse logistics platform
                          for clients using Node.js and .NET, reducing CO₂
                          emissions and generating substantial cost savings for
                          the company.
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Designed and implemented innovative solutions for
                          commercial teams using Node.js, .NET, Angular, and
                          Azure, streamlining processes and boosting team
                          productivity.
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Maintained and supported internal applications built
                          with Power Platform, resolving bugs and reducing
                          incident volume to improve system reliability.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Key Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          ".NET",
                          "Node.js",
                          "NestJS",
                          "Angular",
                          "Azure",
                          "Azure DevOps",
                          "Python",
                          "Power Platform",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* All Tax Platform */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="ml-20 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          Software Developer
                        </h3>
                        <p className="text-lg text-teal-600 font-semibold">
                          All Tax Platform
                        </p>
                        <p className="text-gray-600">São Paulo, BR – Remote</p>
                      </div>
                      <div className="flex items-center text-gray-600 mt-2 lg:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-medium">Dec 2023 – Sep 2024</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Core Responsibilities:
                      </h4>
                      <ul className="text-gray-700 space-y-3">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Managed the support team responsible for maintaining
                          the company&apos;s tax platform, ensuring service
                          continuity and minimal downtime.
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Drove critical product optimizations using SAP and
                          SQL, increasing user and process efficiency across
                          departments.
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Created internal tools with Node.js to process data
                          and optimize recurring workflows, reducing manual
                          effort and improving overall process efficiency.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Key Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "SAP",
                          "SAP HANA",
                          "Node.js",
                          "JavaScript",
                          "SQL",
                          "Service Now",
                          "Jira",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Infinity Hub Solutions */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="ml-20 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          Software Developer & Partner
                        </h3>
                        <p className="text-lg text-purple-600 font-semibold">
                          Infinity Hub Solutions
                        </p>
                        <p className="text-gray-600">São Paulo, BR – Remote</p>
                      </div>
                      <div className="flex items-center text-gray-600 mt-2 lg:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-medium">Dec 2020 – May 2023</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Core Responsibilities:
                      </h4>
                      <ul className="text-gray-700 space-y-3">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Led the development of internal products and technical
                          innovations using Node.js, .NET, and Oracle Cloud,
                          scaling performance and accelerating company growth.
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Created internal tools to streamline developer
                          workflows and enhance team agility.
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Built and maintained distribution pipelines, enabling
                          scalable deployment across multiple environments.
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Developed prototypes and MVPs to test new business
                          ideas, supporting decision-making and innovation.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Key Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Node.js",
                          "TypeScript",
                          "React",
                          "Oracle Cloud",
                          ".NET",
                          "Puppeteer",
                          "Google Cloud Platform",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RDM Sistemas de Gestão */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="ml-20 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          Technical Analyst & SQL Developer
                        </h3>
                        <p className="text-lg text-orange-600 font-semibold">
                          RDM Sistemas de Gestão
                        </p>
                        <p className="text-gray-600">São Paulo, BR</p>
                      </div>
                      <div className="flex items-center text-gray-600 mt-2 lg:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-medium">Sep 2015 – Dec 2020</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Core Responsibilities:
                      </h4>
                      <ul className="text-gray-700 space-y-3">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Provided Level 2 support with a strong focus on
                          analyzing source code in Java Spring Boot and Angular
                          to troubleshoot issues and enhance features, ensuring
                          system stability and client satisfaction.
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Developed Views, Stored Procedures, and Triggers in
                          Oracle Database to support business logic and
                          reporting needs.
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Led software implementation for new clients, including
                          installation, user training, and process alignment.
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Monitored system performance and coordinated local
                          support teams to ensure smooth client onboarding.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Key Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Java Spring Boot",
                          "Angular",
                          "Oracle Database",
                          "Linux RedHat",
                          "Jira",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Education & Certificates
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      BSc in Information Systems
                    </h4>
                    <p className="text-gray-600">Universidade Nove de Julho</p>
                    <p className="text-gray-500 text-sm">2017 – 2021</p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">
                  International Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Exchange Program
                    </h4>
                    <p className="text-gray-600">
                      Atlas Language School, Malta
                    </p>
                    <p className="text-gray-500 text-sm">Sep 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Languages
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        Portuguese
                      </span>
                      <span className="text-gray-600">Native</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">English</span>
                      <span className="text-gray-600">C1</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">French</span>
                      <span className="text-gray-600">Basic</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full w-1/3"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        Japanese
                      </span>
                      <span className="text-gray-600">Basic</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-800 via-blue-700 to-teal-600 text-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Ready to bring your next project to life? Let&apos;s discuss how I
              can help you build scalable, efficient solutions.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
              <a
                href="mailto:jailtoncruz01@gmail.com"
                className="flex items-center bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-200 text-lg"
              >
                <Mail size={24} className="mr-3" />
                <span>jailtoncruz01@gmail.com</span>
              </a>

              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/jailtoncruz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/jailtoncruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-200"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Jailton Cruz. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
