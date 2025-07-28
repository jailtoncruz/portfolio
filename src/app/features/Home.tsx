"use client";

import { ChevronDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";

interface HomeProps {
  scrollToSection: (sectionId: string) => void;
}

export function Home({ scrollToSection }: HomeProps) {
  return (
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
            Experienced full-stack developer specializing in backend development
            with Node.js and NestJS. With over 7 years of hands-on experience, I
            craft scalable, high-performance web applications with clean
            architecture and thoughtful design.
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
  );
}
