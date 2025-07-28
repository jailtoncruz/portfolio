import { Calendar } from "lucide-react";

export function Experiences() {
  return (
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
                        Led the development of a reverse logistics platform for
                        clients using Node.js and .NET, reducing CO₂ emissions
                        and generating substantial cost savings for the company.
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
                        Managed the support team responsible for maintaining the
                        company&apos;s tax platform, ensuring service continuity
                        and minimal downtime.
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Drove critical product optimizations using SAP and SQL,
                        increasing user and process efficiency across
                        departments.
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Created internal tools with Node.js to process data and
                        optimize recurring workflows, reducing manual effort and
                        improving overall process efficiency.
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
                        Created internal tools to streamline developer workflows
                        and enhance team agility.
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
                        analyzing source code in Java Spring Boot and Angular to
                        troubleshoot issues and enhance features, ensuring
                        system stability and client satisfaction.
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Developed Views, Stored Procedures, and Triggers in
                        Oracle Database to support business logic and reporting
                        needs.
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
  );
}
