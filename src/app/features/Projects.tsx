import { AppWindowMac, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-lg border border-blue-100">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src="https://app.kotoba-ai.org/icon-1024x1024.jpg"
                    alt="Kotoba Project logo"
                    className="rounded-lg w-8 h-8 "
                    width={128}
                    height={128}
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">
                    Kotoba AI
                  </h3>
                </div>
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
  );
}
