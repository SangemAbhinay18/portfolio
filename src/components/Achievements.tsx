import { Trophy, Award, Star, BookOpen, Activity,TrendingUp,Cpu,Database } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'LeetCode Rating',
      description: 'Achieved 1589+ rating with 170+ problems solved',
      category: 'Competitive Programming',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Star,
      title: 'CodeChef 2-Star',
      description: 'Maintained 2-star rating with consistent performance',
      category: 'Competitive Programming',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Trophy,
      title: 'Quiz',
      description: 'Winner of Tech Quiz Competition (College Level)',
      category: 'Competition',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cpu,
      title: 'Data Science Club Memeber',
      description: 'Active Data Science Club member, conducting workshops and events on machine learning, analytics, and data-driven solutions.',
      category: 'Competition',
      color: 'from-orange-500 to-orange-500',
    },
  ];

  const certifications = [
    {
      title: 'Oracle Certified Foundations Associate',
      issuer: 'Oracle',
      date: 'Aug 2025',
    },
    {
      title: 'SQL intermediate',
      issuer: 'Hackerrank',
      date: 'Aug 2025',
      credentialId: 'D6A2ACFABBD2',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Apna College',
      date: 'July 2025',
    },
    
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Recognition and continuous learning
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={achievement.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${achievement.color} mb-4`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {achievement.description}
                </p>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  {achievement.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={cert.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>Issued: {cert.date}</span>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
