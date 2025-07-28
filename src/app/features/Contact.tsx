import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-800 via-blue-700 to-teal-600 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
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
  );
}
