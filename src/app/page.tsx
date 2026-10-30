'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaCode, FaRocket, FaLightbulb, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import type { ReactNode } from 'react';

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

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <FadeIn>
      <div className="mb-14">
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
          <span className="inline-block h-px w-10 bg-emerald-400" />
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      </div>
    </FadeIn>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-lg font-bold tracking-tight text-white">
            Phạm Thị Lanh<span className="text-emerald-400">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://github.com/lanhphammttb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-24 pt-36 md:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              <span className="inline-block h-px w-10 bg-emerald-400" />
              Hello, I&apos;m
            </p>
            <h1 className="mb-5 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Phạm Thị Lanh
            </h1>
            <p className="mb-6 text-xl font-medium text-zinc-200 md:text-2xl">
              Full Stack Developer &amp; UI/UX Designer
            </p>
            <p className="mb-10 max-w-xl leading-relaxed text-zinc-400">
              I turn ideas into working products — web and mobile apps, embedded
              systems and computer-graphics experiments — with clean code and a
              designer&apos;s eye for detail.
            </p>
            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                View Projects
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Flutter', 'Java', 'C#'].map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Phạm Thị Lanh"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 flex w-max -translate-x-1/2 items-center gap-2.5 rounded-full border border-white/10 bg-zinc-900 px-5 py-2.5 shadow-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-medium text-zinc-200">Based in Vietnam</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="About" title="About Me" />
          <div className="grid gap-12 lg:grid-cols-5">
            <FadeIn className="lg:col-span-3">
              <div className="space-y-5 leading-relaxed text-zinc-400">
                <p>
                  I&apos;m Phạm Thị Lanh, a developer based in Vietnam who enjoys
                  building things end to end — from the first sketch of an interface
                  to the code that brings it to life. My work spans web development,
                  mobile apps, embedded programming and computer graphics.
                </p>
                <p>
                  Recent projects include a Java food-ordering system, a C# computer
                  graphics project, and this portfolio itself — built with Next.js
                  and deployed on Vercel.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-2">
              <dl className="space-y-0">
                {[
                  ['Based in', 'Vietnam'],
                  ['Focus', 'Web & Mobile Apps'],
                  ['Exploring', 'Embedded & Graphics'],
                ].map(([term, value]) => (
                  <div
                    key={term}
                    className="flex items-baseline justify-between gap-6 border-b border-white/5 py-4 first:pt-0"
                  >
                    <dt className="text-sm font-medium uppercase tracking-wider text-zinc-500">{term}</dt>
                    <dd className="text-right font-semibold text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-white/5 bg-zinc-900/30 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Services" title="What I Do" />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1} className="h-full">
                <div className="h-full rounded-2xl border border-white/5 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-xl text-emerald-400">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-400">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Portfolio" title="Featured Projects" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.1} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 transition-colors duration-300 hover:border-white/15">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                    >
                      View on GitHub <FaArrowRight className="text-xs" />
                    </a>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="mt-12 text-center text-zinc-400">
              More experiments and coursework on{' '}
              <a
                href="https://github.com/lanhphammttb"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-emerald-400 decoration-2 underline-offset-4 hover:text-emerald-300"
              >
                github.com/lanhphammttb
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/5 bg-zinc-900/30 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Toolbox" title="Skills & Expertise" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((skill, i) => (
              <FadeIn key={skill} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900 px-5 py-4 transition-colors hover:border-emerald-400/30">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span className="font-medium text-zinc-100">{skill}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <div className="mb-12 text-center">
              <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                <span className="inline-block h-px w-10 bg-emerald-400" />
                Contact
                <span className="inline-block h-px w-10 bg-emerald-400" />
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Get In Touch
              </h2>
              <p className="leading-relaxed text-zinc-400">
                Have a project in mind, a question about my work, or just want to
                say hi? Reach me on GitHub, by email, or with the form below.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="mb-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/lanhphammttb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="mailto:lanhphammttb@gmail.com"
                className="flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <form className="space-y-5 rounded-2xl border border-white/5 bg-zinc-900 p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors focus:border-emerald-400/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors focus:border-emerald-400/60"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors focus:border-emerald-400/60"
                  placeholder="Tell me about your project…"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-emerald-400 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Phạm Thị Lanh. All rights reserved.</p>
          <p>Built with Next.js &amp; deployed on Vercel.</p>
        </div>
      </footer>
    </main>
  );
}
