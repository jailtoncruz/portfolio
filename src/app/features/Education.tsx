export function Education() {
  return (
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
                  <p className="text-gray-600">Atlas Language School, Malta</p>
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
                    <span className="text-gray-700 font-medium">Japanese</span>
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
  );
}
