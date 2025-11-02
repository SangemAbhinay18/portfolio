import { Github, Linkedin, Twitter, Code2, Download } from 'lucide-react';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/SangemAbhinay18', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abhinay1', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/abhinaysangem18/', label: 'LeetCode' },
    { icon: Twitter, href: 'https://twitter.com/abhinaysangem18', label: 'Twitter' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8 inline-block"></div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Abhinay Sangem
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
            Aspiring Software Development Engineer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Building innovative solutions through code | Problem solver | Tech enthusiast
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1Efhf57SajvJ3zWrDsIbduYv07WrM2AWF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
