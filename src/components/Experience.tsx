import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Open Source Contributor',
      company: 'Girl Script Foundation',
      duration: 'Jun 2025 - Aug 2025',
      location: 'Remote',
      description: 'Contributed to open-source projects by implementing new features, fixing bugs, and improving documentation to enhance community-driven web applications.',
responsibilities: [
  'Implemented new features and enhancements in existing open-source projects, improving functionality and usability',
  'Fixed bugs and optimized code across multiple repositories to improve performance and maintainability',
  'Collaborated with other contributors via GitHub to review code, discuss improvements, and follow best practices',
  'Improved project documentation to help new contributors onboard quickly and efficiently',
],
technologies: ['JavaScript', 'React', 'Node.js', 'Git', 'GitHub', 'Open Source Collaboration'],
}
];


  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            My professional journey and contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.role}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-blue-600 rounded-lg flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{exp.duration}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li
                      key={respIdx}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
