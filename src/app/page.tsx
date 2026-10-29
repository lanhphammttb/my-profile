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

const projects = [
  {
    image: '/project-3.jpg',
    title: 'Food Order System',
    description:
      'Embedded programming course project on the topic of food ordering, built with Java — from the ordering flow to a working end-to-end application.',
    tags: ['Java', 'Embedded Systems', 'Course Project'],
    link: 'https://github.com/lanhphammttb/DoAn_LapTrinhNhung_FoodOrder',
  },
  {
    image: '/project-1.jpg',
    title: 'Computer Graphics Project',
    description:
      'Computer graphics coursework built with C#, exploring how scenes, shapes and motion are rendered and brought to life on screen.',
    tags: ['C#', 'Computer Graphics', 'Rendering'],
    link: 'https://github.com/lanhphammttb/DA_DHMT',
  },
  {
    image: '/project-2.jpg',
    title: 'MyProject — Java Coursework',
    description:
      'A course project built with Java, focused on clean structure, object-oriented design and solving a real problem end to end.',
    tags: ['Java', 'OOP', 'Course Project'],
    link: 'https://github.com/lanhphammttb/MyProject',
  },
];

const services = [
  {
    title: 'Creative Development',
    icon: <FaCode />,
    description:
      'Building modern web applications with clean code, smooth animations and interactive elements that make products feel alive.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Software Engineering',
    icon: <FaRocket />,
    description:
      'Crafting reliable software across platforms — web, mobile and desktop — with a focus on performance and user experience.',
    tags: ['Java', 'C#', 'Flutter', 'JavaScript', 'Git'],
  },
  {
    title: 'Creative Solutions',
    icon: <FaLightbulb />,
    description:
      'Transforming complex problems into elegant, user-friendly digital experiences, from embedded systems to computer graphics.',
    tags: ['UI/UX', 'Mobile-First', 'Embedded', 'Graphics', 'Problem Solving'],
  },
];

const skills = [
  'Java',
  'C#',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Flutter',
  'UI/UX Design',
];

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
              <p className="text-sm md:text-base mb-4 opacity-80 tracking-wide">
                <HiOutlineSparkles className="inline mr-2" />
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch neon-text" data-text="Phạm Thị Lanh">
                Phạm Thị Lanh
              </h1>
              <p className="text-xl md:text-2xl mb-6 scanner">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="text-base md:text-lg mb-8 opacity-80 max-w-xl mx-auto md:mx-0">
                I turn ideas into working products — web and mobile apps, embedded
                systems and computer-graphics experiments — with clean code and a
                designer&apos;s eye for detail.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <a href="#contact" className="sci-button">Contact Me</a>
                <a href="#projects" className="sci-button">View Projects</a>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {['React', 'Next.js', 'TypeScript', 'Flutter', 'Java', 'C#'].map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="profile-image">
                <Image
                  src="/profile.jpg"
                  alt="Phạm Thị Lanh"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="cyber-grid absolute inset-0" />
        <div className="energy-field" />
        <div className="container mx-auto relative z-10 px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center neon-text">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="holo-card p-8">
              <p className="text-base md:text-lg opacity-90 mb-6">
                I&apos;m Phạm Thị Lanh, a developer based in Vietnam who enjoys
                building things end to end — from the first sketch of an interface
                to the code that brings it to life. My work spans web development,
                mobile apps, embedded programming and computer graphics.
              </p>
              <p className="text-base md:text-lg opacity-90 mb-8">
                Recent projects include a Java food-ordering system, a C# computer
                graphics project, and this portfolio itself — built with Next.js
                and deployed on Vercel.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold neon-text">Based in</p>
                  <p className="opacity-80">Vietnam</p>
                </div>
                <div>
                  <p className="text-2xl font-bold neon-text">Focus</p>
                  <p className="opacity-80">Web & Mobile Apps</p>
                </div>
                <div>
                  <p className="text-2xl font-bold neon-text">Exploring</p>
                  <p className="opacity-80">Embedded & Graphics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="cyber-grid absolute inset-0" />
        <div className="energy-field" />
        <div className="container mx-auto relative z-10 px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center neon-text">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="holo-card p-6 group">
                <div className="text-4xl mb-4 neon-text">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 neon-text">{service.title}</h3>
                <p className="text-sm mb-4 opacity-80">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="cyber-grid absolute inset-0" />
        <div className="energy-field" />
        <div className="container mx-auto relative z-10 px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center neon-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="holo-card p-6 group">
                <div className="aspect-video relative mb-4 overflow-hidden rounded-lg scanner">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 neon-text">
                  {project.title}
                </h3>
                <p className="text-sm mb-4 opacity-80">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sci-button w-full block text-center"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 opacity-80">
            More experiments and coursework on{' '}
            <a
              href="https://github.com/lanhphammttb"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-text underline"
            >
              github.com/lanhphammttb
            </a>
          </p>
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
            {skills.map((skill) => (
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
      <section id="contact" className="py-20 relative">
        <div className="cyber-grid absolute inset-0" />
        <div className="energy-field" />
        <div className="container mx-auto relative z-10 px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center neon-text">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center opacity-80 mb-8">
              Have a project in mind, a question about my work, or just want to
              say hi? Reach me on GitHub, by email, or with the form below.
            </p>
            <div className="flex justify-center gap-4 mb-10">
              <a
                href="https://github.com/lanhphammttb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="sci-button"
              >
                <FaGithub className="inline mr-2" /> GitHub
              </a>
              <a href="mailto:lanhphammttb@gmail.com" aria-label="Email" className="sci-button">
                <FaEnvelope className="inline mr-2" /> Email
              </a>
            </div>
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

      {/* Footer */}
      <footer className="py-8 relative">
        <div className="container mx-auto relative z-10 px-8 text-center opacity-70 text-sm">
          <p>
            © {new Date().getFullYear()} Phạm Thị Lanh — Built with Next.js &
            deployed on Vercel.
          </p>
        </div>
      </footer>
    </main>
  );
}
