'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import Image from 'next/image';
import { useEffect } from 'react';

interface StyleProps {
  style: React.CSSProperties;
}

// Sparkle component
const Sparkle = ({ style }: StyleProps) => (
  <div className="sparkle" style={style} />
)

// Energy beam component
const EnergyBeam = ({ style }: StyleProps) => (
  <div className="energy-beam" style={style} />
)

export default function Home() {
  useEffect(() => {
    // Add sparkles
    const addSparkles = () => {
      const container = document.querySelector('main')
      if (!container) return

      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.left = `${Math.random() * 100}%`
      sparkle.style.top = `${Math.random() * 100}%`
      container.appendChild(sparkle)
      setTimeout(() => sparkle.remove(), 3000)
    }

    // Add energy beams
    const addEnergyBeam = () => {
      const container = document.querySelector('main')
      if (!container) return

      const beam = document.createElement('div')
      beam.className = 'energy-beam'
      beam.style.left = `${Math.random() * 100}%`
      container.appendChild(beam)
      setTimeout(() => beam.remove(), 8000)
    }

    const sparkleInterval = setInterval(addSparkles, 300)
    const beamInterval = setInterval(addEnergyBeam, 2000)

    // Track mouse position for interactive hover effects
    const handleMouseMove = (e: MouseEvent) => {
      const elements = document.querySelectorAll('.interactive-hover')
      elements.forEach(element => {
        if (element instanceof HTMLElement) {
          const rect = element.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          element.style.setProperty('--mouse-x', `${x}%`)
          element.style.setProperty('--mouse-y', `${y}%`)
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(sparkleInterval)
      clearInterval(beamInterval)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Matrix Rain Background */}
      <div className="matrix-rain fixed inset-0 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-8">
        <div className="cyber-grid absolute inset-0" />
        <div className="energy-field" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch neon-text" data-text="John Doe">
                John Doe
              </h1>
              <p className="text-xl md:text-2xl mb-8 scanner">
                Full Stack Developer & UI/UX Designer
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="sci-button">Contact Me</button>
                <button className="sci-button">View Projects</button>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="profile-image">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="cyber-grid absolute inset-0" />
        <div className="energy-field" />
        <div className="container mx-auto relative z-10 px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center neon-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="holo-card p-6 group">
                <div className="aspect-video relative mb-4 overflow-hidden rounded-lg scanner">
                  <Image
                    src={`/project-${project}.jpg`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 neon-text">
                  Project Title {project}
                </h3>
                <p className="text-sm mb-4 opacity-80">
                  A brief description of the project and its key features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Node.js</span>
                </div>
                <button className="sci-button w-full">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="cyber-grid absolute inset-0" />
        <div className="energy-field" />
        <div className="container mx-auto relative z-10 px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center neon-text">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Frontend Development',
              'Backend Development',
              'UI/UX Design',
              'Cloud Architecture',
              'DevOps',
              'Mobile Development',
              'Database Design',
              'System Architecture',
            ].map((skill) => (
              <div key={skill} className="holo-card p-6 text-center group">
                <h3 className="text-lg font-semibold mb-2 neon-text">{skill}</h3>
                <div className="sparkle absolute top-0 left-1/2 opacity-0 group-hover:opacity-100" />
                <div className="sparkle absolute top-1/4 left-1/4 opacity-0 group-hover:opacity-100" />
                <div className="sparkle absolute top-3/4 right-1/4 opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="cyber-grid absolute inset-0" />
        <div className="energy-field" />
        <div className="container mx-auto relative z-10 px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center neon-text">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="holo-card p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-[rgba(var(--dark),0.7)] border border-[rgba(var(--primary),0.3)] rounded-lg p-3 focus:outline-none focus:border-[rgba(var(--primary),0.8)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-[rgba(var(--dark),0.7)] border border-[rgba(var(--primary),0.3)] rounded-lg p-3 focus:outline-none focus:border-[rgba(var(--primary),0.8)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-[rgba(var(--dark),0.7)] border border-[rgba(var(--primary),0.3)] rounded-lg p-3 focus:outline-none focus:border-[rgba(var(--primary),0.8)] transition-colors"
                  />
                </div>
                <button type="submit" className="sci-button w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
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
