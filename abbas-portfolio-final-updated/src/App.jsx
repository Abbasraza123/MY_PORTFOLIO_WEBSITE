import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const strengths = [
  {
    icon: Code2,
    title: "Structured development",
    copy:
      "I approach projects with an emphasis on clarity, maintainability, and thoughtful implementation.",
  },
  {
    icon: Cpu,
    title: "Strong fundamentals",
    copy:
      "My projects span low-level programming, data structures, algorithms, and practical software implementation.",
  },
  {
    icon: BrainCircuit,
    title: "Curious problem solving",
    copy:
      "I enjoy learning across systems, AI, and frontend work, then combining those ideas into sharper solutions.",
  },
];

const projects = [
  {
    title: "University Management System",
    summary:
      "A comprehensive C++ system built without STL, using custom data structures, memory management, AVL trees, hash tables, and graph logic.",
    detail: "Highlights: data structures, architecture thinking, and discipline with low-level implementation.",
    tech: ["C++", "Pointers", "AVL Trees", "Hash Tables"],
    link: "https://github.com/Abbasraza123",
  },
  {
    title: "Breakout Arcade Game",
    summary:
      "A 16-bit x86 Assembly game for DOSBox with paddle controls, collision logic, scoring, lives, and text-mode rendering.",
    detail: "Highlights: low-level reasoning, debugging patience, and a strong grasp of hardware-near programming.",
    tech: ["Assembly", "NASM", "DOSBox", "Game Logic"],
    link: "https://github.com/Abbasraza123",
  },
  {
    title: "Dynamic Pathfinding Agent",
    summary:
      "A pathfinding project where the agent adapts in real time as new obstacles appear, forcing search replanning on the fly.",
    detail: "Highlights: AI search concepts, dynamic environments, and decision-making under changing constraints.",
    tech: ["Python", "AI", "Search", "Pathfinding"],
    link: "https://github.com/Abbasraza123",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "C", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Tools",
    items: ["GitHub", "Oracle", "Ubuntu", "Shell"],
  },
  {
    title: "Focus Areas",
    items: ["DSA", "Systems", "Web Development", "AI Fundamentals"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function PremiumCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const clickable = event.target.closest("a, button, [role='button']");
      setIsPointer(Boolean(clickable));
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <motion.div
        className="cursor-ring"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isPointer ? 1.65 : 1,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.35 }}
      >
        <div />
      </motion.div>
      <motion.div
        className="cursor-dot"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "spring", stiffness: 720, damping: 28, mass: 0.18 }}
      >
        <div />
      </motion.div>
    </>
  );
}

function FloatingGlow({ className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function PrimaryButton({ href, children, download = false, target, rel, icon: Icon }) {
  return (
    <a href={href} download={download} target={target} rel={rel} className="button button-primary">
      {children}
      {Icon ? <Icon size={16} /> : null}
    </a>
  );
}

function SecondaryButton({ href, children, target, rel, icon: Icon }) {
  return (
    <a href={href} target={target} rel={rel} className="button button-secondary">
      {children}
      {Icon ? <Icon size={16} /> : null}
    </a>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <PremiumCursor />

      <div className="background-layer" aria-hidden="true">
        <div className="background-gradient" />
        <div className="background-grid" />
        <div className="background-noise" />
        <FloatingGlow className="ambient-glow glow-one" />
        <FloatingGlow className="ambient-glow glow-two" delay={0.8} />
        <FloatingGlow className="ambient-glow glow-three" delay={1.6} />
      </div>

      <header className="site-header">
        <nav className="container navbar">
          <a className="brand" href="#home" aria-label="Go to top">
            <span className="brand-mark">AR</span>
            <span className="brand-copy">
              Abbas Raza
              <small>Computer Science Student</small>
            </span>
          </a>

          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="nav-pill" href="#contact">
            Open to internships
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <motion.div
              className="hero-copy-column"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.div variants={fadeUp} className="hero-badge">
                <Sparkles size={14} />
                BS Computer Science student at FAST Faisalabad
              </motion.div>

              <motion.p variants={fadeUp} className="hero-eyebrow">
                Clean work. Strong fundamentals. Clear presentation.
              </motion.p>

              <motion.h1 variants={fadeUp} className="hero-title">
                Abbas <span>Raza</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="hero-text">
                I am a Computer Science student at FAST Faisalabad with a strong interest in software
                development, problem solving, and practical project work. My experience spans
                systems, algorithms, web development, and AI-focused coursework.
              </motion.p>

              <motion.div variants={fadeUp} className="hero-actions">
                <PrimaryButton href="#projects" icon={ArrowRight}>
                  Explore projects
                </PrimaryButton>
                <SecondaryButton href="/Abbas_Raza_Resume.pdf" download icon={Download}>
                  Download resume
                </SecondaryButton>
              </motion.div>

              <motion.div variants={fadeUp} className="social-row">
                <a
                  href="https://github.com/Abbasraza123"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abbas-raza51214/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
                <a href="mailto:abbasrazachaudhary@gmail.com" aria-label="Email Abbas">
                  <Mail size={18} />
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="signal-grid">
                <div className="signal-card">
                  <span>Featured work</span>
                  <strong>3 featured projects</strong>
                </div>
                <div className="signal-card">
                  <span>Current focus</span>
                  <strong>Systems, web, and AI</strong>
                </div>
                <div className="signal-card">
                  <span>Looking for</span>
                  <strong>Internship opportunities</strong>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual-column"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="profile-shell">
                <div className="profile-outline" />
                <motion.div
                  className="profile-panel"
                  whileHover={{ y: -10, rotateX: 3, rotateY: -4 }}
                  transition={{ type: "spring", stiffness: 210, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="profile-image-wrap">
                    <img className="profile-image" src="/profile.png" alt="Abbas Raza portrait" />
                    <div className="profile-image-overlay" />
                  </div>

                  <div className="profile-content">
                    <div className="profile-topline">
                      <div>
                        <p className="mini-label">Currently studying</p>
                        <h3>BS Computer Science</h3>
                      </div>
                      <div className="icon-chip">
                        <GraduationCap size={18} />
                      </div>
                    </div>

                    <div className="profile-meta">
                      <div className="meta-item">
                        <MapPin size={15} />
                        <span>Faisalabad, Pakistan</span>
                      </div>
                      <div className="meta-item">
                        <Sparkles size={15} />
                        <span>4th semester / expected 2028</span>
                      </div>
                    </div>

                    <div className="profile-note">
                      I focus on presenting technical work with clear structure, professional
                      communication, and attention to detail.
                    </div>

                    <div className="profile-stats">
                      <div className="stat-card">
                        <strong>10+</strong>
                        <span>Core tools and technologies</span>
                      </div>
                      <div className="stat-card">
                        <strong>Multi-domain</strong>
                        <span>Projects from C++ to frontend polish</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="scroll-hint"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <a href="#about">
              Scroll for more
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </a>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="section-block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <div className="container">
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="About"
                title="A cleaner introduction to who I am and how I work"
                copy="I am a Computer Science student at FAST National University in Faisalabad, with interests in software engineering, systems, algorithms, and applied problem solving."
              />
            </motion.div>

            <div className="about-grid">
              <motion.article variants={fadeUp} className="panel-card">
                <p className="panel-kicker">Approach</p>
                <h3>I care about making work feel complete</h3>
                <p className="panel-text">
                  My projects are usually driven by learning, but I also care about how they are
                  explained, organized, and experienced. That means refining the UI, improving structure,
                  and presenting the technical story clearly.
                </p>

                <div className="detail-list">
                  <div className="detail-item">
                    <span className="detail-label">Strength</span>
                    <p>Translating academic concepts into practical and well-structured technical projects.</p>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Mindset</span>
                    <p>Curious, disciplined, and focused on building solid technical foundations.</p>
                  </div>
                </div>
              </motion.article>

              <motion.article variants={fadeUp} className="panel-card panel-card-strong">
                <p className="panel-kicker">What I bring</p>
                <div className="strength-grid">
                  {strengths.map(({ icon: Icon, title, copy }) => (
                    <div key={title} className="strength-card">
                      <div className="strength-icon">
                        <Icon size={18} />
                      </div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="resume"
          className="section-block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <div className="container resume-grid">
            <motion.article variants={fadeUp} className="panel-card">
              <SectionHeading
                eyebrow="Resume Snapshot"
                title="Skills that support both coursework and real project practice"
                copy="My skill set reflects a combination of programming fundamentals, technical tools, and project-based learning across multiple areas of computer science."
              />

              <div className="skills-groups">
                {skillGroups.map((group) => (
                  <div key={group.title} className="skill-group">
                    <p>{group.title}</p>
                    <div className="tag-row">
                      {group.items.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article variants={fadeUp} className="panel-card resume-card">
              <p className="panel-kicker">Resume</p>
              <h3>Professional summary for internships and early-career opportunities</h3>
              <p className="panel-text">
                My resume presents my education, technical skills, and project experience in a clear
                format suited for internship applications and professional outreach.
              </p>

              <div className="resume-highlights">
                <div className="resume-highlight">
                  <span>Education</span>
                  <strong>FAST National University</strong>
                </div>
                <div className="resume-highlight">
                  <span>Program</span>
                  <strong>BS Computer Science</strong>
                </div>
                <div className="resume-highlight">
                  <span>Availability</span>
                  <strong>Open to internships</strong>
                </div>
              </div>

              <div className="resume-actions">
                <PrimaryButton href="/Abbas_Raza_Resume.pdf" download icon={Download}>
                  Download PDF
                </PrimaryButton>
              </div>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="section-block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="container">
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Projects"
                title="Work that reflects both technical depth and care in execution"
                copy="These projects highlight my technical foundation, problem-solving ability, and experience working across different programming environments."
              />
            </motion.div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  className="project-card"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="project-visual">
                    <motion.div
                      className="project-shine"
                      animate={{ x: ["-25%", "18%", "-25%"] }}
                      transition={{
                        duration: 5.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    />
                    <span className="project-index">0{index + 1}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <p className="project-summary">{project.summary}</p>
                  <p className="project-detail">{project.detail}</p>

                  <div className="tag-row">
                    {project.tech.map((item) => (
                      <span key={item} className="tag tag-muted">
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                    <ExternalLink size={16} />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="section-block section-block-last"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container">
            <div className="contact-card">
              <p className="section-eyebrow">Contact</p>
              <h2 className="contact-title">Let&apos;s connect professionally</h2>
              <p className="contact-copy">
                If you have an internship opportunity, collaboration in mind, or would like to discuss
                my work, I would be glad to connect.
              </p>

              <div className="contact-actions">
                <PrimaryButton href="mailto:abbasrazachaudhary@gmail.com" icon={Mail}>
                  Email me
                </PrimaryButton>
                <SecondaryButton
                  href="https://github.com/Abbasraza123"
                  target="_blank"
                  rel="noreferrer"
                  icon={Github}
                >
                  GitHub
                </SecondaryButton>
                <SecondaryButton
                  href="https://www.linkedin.com/in/abbas-raza51214/"
                  target="_blank"
                  rel="noreferrer"
                  icon={Linkedin}
                >
                  LinkedIn
                </SecondaryButton>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
