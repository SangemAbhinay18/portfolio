import { GraduationCap, Target, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate software development enthusiast with a strong foundation in computer science
              and a drive to build impactful solutions. My journey in tech has been fueled by curiosity,
              continuous learning, and a love for problem-solving.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in backend development, data structures & algorithms, and system design.
              With hands-on experience in building scalable applications and competitive programming,
              I'm constantly pushing myself to grow and tackle new challenges.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My goal is to join a dynamic team where I can contribute to innovative projects,
              learn from experienced engineers, and make a meaningful impact through technology.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bachelor's in Computer Science
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Specialized in Software Engineering & Algorithms
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Expertise</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Backend Development, DSA, System Design
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Building scalable and efficient solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Career Goals</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    SDE Role at a Product-Based Company
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Contributing to impactful products and teams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
