export function Skills() {
  return (
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
  );
}
