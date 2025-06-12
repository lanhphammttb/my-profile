'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* Background Elements */}
      <div className="data-lines" />
      <div className="circuit-pattern" />
      <div className="cyber-grid fixed inset-0 pointer-events-none" />
      <div className="matrix-rain" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center p-4 md:p-8">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="holo-image w-32 h-32 md:w-40 md:h-40 relative shrink-0">
              <Image
                src="/profile.png"
                alt="Profile"
                width={160}
                height={160}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="tech-text text-3xl md:text-4xl font-bold mb-2 md:mb-3" data-text="John Doe">
                John Doe
              </h1>
              <p className="terminal-text text-base md:text-lg mb-4 md:mb-6 text-[rgb(var(--light))] opacity-80">
                Full Stack Developer & UI/UX Designer
              </p>
              <div className="flex justify-center md:justify-start gap-4 md:gap-6 mb-6 md:mb-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="glow-icon">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glow-icon">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:contact@example.com" className="glow-icon">
                  <FaEnvelope size={24} />
                </a>
              </div>
              <div className="sci-button inline-block">
                Explore My Work
              </div>
            </div>
          </div>
        </div>
        <div className="section-connector bottom-0" />
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Frontend Development",
                description: "Creating beautiful and responsive user interfaces.",
                skills: ["React", "Next.js", "TypeScript", "Tailwind"]
              },
              {
                title: "Backend Development",
                description: "Building robust and scalable server applications.",
                skills: ["Node.js", "Python", "PostgreSQL", "GraphQL"]
              },
              {
                title: "DevOps & Tools",
                description: "Streamlining development and deployment.",
                skills: ["Docker", "AWS", "Git", "CI/CD"]
              }
            ].map((category, index) => (
              <div key={index} className="holo-card p-4 md:p-6">
                <h3 className="tech-text text-base md:text-lg font-semibold mb-2 md:mb-3" data-text={category.title}>
                  {category.title}
                </h3>
                <p className="text-[rgb(var(--light))] opacity-70 mb-3 md:mb-4 text-sm">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tech-tag text-xs md:text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-connector bottom-0" />
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center">
            Featured Projects
          </h2>
          <div className="space-y-6 md:space-y-8">
            {[
              {
                title: "Project Alpha",
                description: "AI-powered analytics platform with intuitive visualizations and real-time insights.",
                tech: ["React", "Python", "TensorFlow", "D3.js"],
                link: "#",
                image: "https://api.dicebear.com/7.x/shapes/svg?seed=project1"
              },
              {
                title: "Project Beta",
                description: "Real-time collaboration tool with live editing and video conferencing features.",
                tech: ["Next.js", "Socket.io", "MongoDB", "WebRTC"],
                link: "#",
                image: "https://api.dicebear.com/7.x/shapes/svg?seed=project2"
              }
            ].map((project, index) => (
              <div key={index} className="holo-card p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                  <div className="w-full md:w-1/3">
                    <div className="holo-image w-full aspect-square">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={200}
                        height={200}
                        className="rounded-xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h3 className="tech-text text-lg md:text-xl font-semibold mb-2 md:mb-3" data-text={project.title}>
                      {project.title}
                    </h3>
                    <p className="terminal-text text-[rgb(var(--light))] opacity-80 mb-3 md:mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag text-xs md:text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="sci-button inline-block text-xs md:text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-connector bottom-0" />
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title text-xl md:text-2xl font-bold mb-4 md:mb-6">
            Let's Connect
          </h2>
          <p className="terminal-text text-[rgb(var(--light))] opacity-80 mb-6 md:mb-8 text-sm">
            Interested in collaboration? Whether you have a project in mind or just want to chat about technology, I'm always open to new opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className="sci-button inline-block text-xs md:text-sm"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 text-center">
        <div className="loading-line mb-4 md:mb-6" />
        <p className="terminal-text text-[rgb(var(--light))] opacity-60 text-xs md:text-sm">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

const skills = [
  {
    title: "Creative Development",
    icon: <FaCode />,
    description: "Building innovative web applications with cutting-edge technologies and modern design principles.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Technical Innovation",
    icon: <FaRocket />,
    description: "Crafting scalable solutions with a focus on performance, security, and user experience.",
    tags: ["Node.js", "GraphQL", "AWS", "Docker", "CI/CD"]
  },
  {
    title: "Creative Solutions",
    icon: <FaLightbulb />,
    description: "Transforming complex problems into elegant, user-friendly digital experiences.",
    tags: ["UI/UX", "Mobile-First", "Accessibility", "Performance", "Analytics"]
  }
];

const projects = [
  {
    title: "Creative Portfolio",
    icon: <FaCode />,
    description: "A modern portfolio website showcasing creative work with smooth animations and interactive elements.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "Digital Experience",
    icon: <FaRocket />,
    description: "An immersive digital experience platform with real-time interactions and 3D elements.",
    technologies: ["Three.js", "WebGL", "React", "Node.js"]
  }
];
