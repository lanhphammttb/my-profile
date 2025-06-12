'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <main ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            >
              <HiSparkles className="text-blue-400/30 text-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Header/Hero Section */}
      <section className="relative container mx-auto px-4 pt-32 pb-20">
        <motion.div
          style={{ y: textY }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 z-10"
          >
            <div className="text-center md:text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="relative inline-block px-4 py-2 text-sm font-medium text-blue-400 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <span className="relative z-10">Welcome to my portfolio</span>
                  <motion.span
                    className="absolute inset-0 rounded-full bg-blue-500/10"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient">
                  Xin chào! 👋
                </span>
              </h1>

              <h2 className="text-3xl md:text-4xl text-white mb-6 font-light">
                Tôi là{" "}
                <span className="font-bold relative">
                  [Tên của bạn]
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Một lập trình viên đam mê sáng tạo và phát triển các giải pháp web hiện đại.
              </p>

              <div className="flex gap-6 justify-center md:justify-start items-center">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <FaGithub className="text-2xl text-gray-300 group-hover:text-blue-400 transition-colors" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    GitHub
                  </span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <FaLinkedin className="text-2xl text-gray-300 group-hover:text-blue-400 transition-colors" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    LinkedIn
                  </span>
                </motion.a>

                <motion.a
                  href="mailto:your.email@example.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <FaEnvelope className="text-2xl text-gray-300 group-hover:text-blue-400 transition-colors" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Email
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center z-10"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 blur-2xl opacity-30 animate-pulse"></div>
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <Image
                  src="/avatar-placeholder.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400"
            >
              Kỹ năng
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-semibold mb-6 text-blue-400 relative z-10">{skill.category}</h3>
                <ul className="space-y-3 relative z-10">
                  {skill.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-300 flex items-center gap-3 group/item"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 group-hover/item:scale-125 transition-transform" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400"
            >
              Dự án
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-semibold mb-4 text-blue-400 relative z-10">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">{project.description}</p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-1.5 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400"
          >
            Liên hệ
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 mb-12 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
          />
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Bạn có dự án muốn thảo luận? Hãy liên hệ với tôi!
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 hover:from-blue-600 hover:via-purple-600 hover:to-emerald-600 transform transition-all duration-300">
              Gửi email cho tôi
            </div>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Agile/Scrum", "CI/CD"]
  }
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "Một nền tảng thương mại điện tử hoàn chỉnh với tính năng giỏ hàng, thanh toán và quản lý đơn hàng.",
    technologies: ["Next.js", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management App",
    description: "Ứng dụng quản lý công việc với tính năng drag-and-drop, nhắc nhở và chia sẻ nhiệm vụ.",
    technologies: ["React", "Firebase", "Material-UI"]
  }
];
