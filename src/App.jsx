import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  FileText,
  BarChart3,
  Megaphone,
  Code2,
  Briefcase,
} from "lucide-react";

const projects = [
  {
    title: "Social Media Analytics Dashboard",
    year: "2026",
    type: "Analytics / Power BI",
    desc: "Built an interactive KPI dashboard to track platform performance, surface trends, and support faster decisions.",
  },
  {
    title: "Python Reporting Automation",
    year: "2026",
    type: "Automation / Python",
    desc: "Automated recurring reporting workflows to reduce manual work and improve consistency in analytics updates.",
  },
  {
    title: "Event Campaign – CSU Campus",
    year: "2025",
    type: "Campaign / Operations",
    desc: "Executed a campus promotion campaign across digital and on-ground channels to improve engagement and attendance.",
  },
];

const experience = [
  {
    period: "2024 — Now",
    role: "Social Media Analyst",
    company: "Shorelight",
    summary:
      "Analyzed performance data, built dashboards, automated reporting, and translated insights into measurable growth opportunities.",
  },
  {
    period: "2025 — Now",
    role: "Campus Ambassador",
    company: "Cleveland State University",
    summary:
      "Led outreach campaigns, coordinated event promotion, and strengthened communication with students and campus teams.",
  },
  {
    period: "2023 — 2024",
    role: "Marketing & Branding Specialist",
    company: "O’RANGE Innovations",
    summary:
      "Managed content pipelines, audience research, and digital campaign execution with a strong focus on brand consistency.",
  },
];

const skills = [
  { label: "Analytics", icon: BarChart3 },
  { label: "Marketing", icon: Megaphone },
  { label: "Automation", icon: Code2 },
  { label: "Operations", icon: Briefcase },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <div className="page-shell">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #06070a;
          color: #f7f3ea;
        }
        a { color: inherit; text-decoration: none; }
        .page-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 0%, rgba(134, 92, 255, 0.14), transparent 30%),
            radial-gradient(circle at 85% 10%, rgba(65, 205, 255, 0.12), transparent 25%),
            radial-gradient(circle at 50% 120%, rgba(255, 255, 255, 0.08), transparent 30%),
            linear-gradient(180deg, #090a0f 0%, #07080d 45%, #05060a 100%);
          overflow-x: hidden;
          position: relative;
        }
        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
          background-image: radial-gradient(#fff 0.6px, transparent 0.6px);
          background-size: 14px 14px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }
        .blob {
          position: fixed;
          border-radius: 999px;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.28;
          z-index: 0;
          animation: floatBlob 14s ease-in-out infinite;
        }
        .blob.one {
          width: 320px;
          height: 320px;
          top: -60px;
          left: -40px;
          background: rgba(155, 100, 255, 0.18);
        }
        .blob.two {
          width: 260px;
          height: 260px;
          right: -40px;
          top: 220px;
          background: rgba(91, 214, 255, 0.16);
          animation-delay: -4s;
        }
        .blob.three {
          width: 280px;
          height: 280px;
          bottom: 0;
          left: 35%;
          background: rgba(255, 255, 255, 0.08);
          animation-delay: -8s;
        }
        @keyframes floatBlob {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(20px) translateX(12px) scale(1.06); }
        }
        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(20px);
          background: rgba(10, 10, 14, 0.5);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
        }
        .brand,
        .nav-links a,
        .eyebrow,
        .meta,
        .pill {
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }
        .brand {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.86);
        }
        .nav-links {
          display: flex;
          gap: 28px;
        }
        .nav-links a {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.62);
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .nav-links a:hover { color: white; transform: translateY(-1px); }
        .hero {
          min-height: 96vh;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          padding: 48px 0 36px;
        }
        .eyebrow {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.48);
          margin-bottom: 18px;
        }
        .hero-title,
        .section-title,
        .project-title,
        .role-title {
          text-transform: uppercase;
          line-height: 0.92;
          letter-spacing: -0.055em;
          margin: 0;
        }
        .hero-title {
          font-size: clamp(3.6rem, 10vw, 8rem);
          max-width: 5.7ch;
        }
        .hero-copy {
          margin-top: 24px;
          max-width: 42rem;
          font-size: 1.08rem;
          line-height: 1.9;
          color: rgba(255,255,255,0.74);
        }
        .hero-buttons {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          padding: 15px 22px;
          transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-solid {
          color: #07080d;
          background: linear-gradient(135deg, #f9f5ed 0%, #d9d1ff 100%);
          box-shadow: 0 14px 40px rgba(156, 120, 255, 0.25);
        }
        .btn-ghost {
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: #f7f3ea;
        }
        .hero-side {
          display: grid;
          gap: 18px;
        }
        .glass {
          background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 24px 70px rgba(0,0,0,0.3);
          backdrop-filter: blur(18px);
        }
        .hero-card {
          border-radius: 32px;
          padding: 26px;
        }
        .hero-card.large {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }
        .hero-card.large::after {
          content: '';
          position: absolute;
          inset: auto -20% -30% auto;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(158,111,255,0.45), transparent 65%);
        }
        .profile-card {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 28px;
        }
        .profile-image-wrap {
          position: relative;
          display: inline-flex;
          padding: 6px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(217,209,255,0.95), rgba(99,215,255,0.7));
          box-shadow: 0 18px 60px rgba(102, 126, 234, 0.22);
        }
        .profile-image-wrap::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.18), transparent 65%);
          z-index: 0;
        }
        .profile-image {
          position: relative;
          z-index: 1;
          width: 190px;
          height: 190px;
          border-radius: 999px;
          object-fit: cover;
          display: block;
          border: 3px solid rgba(255,255,255,0.16);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
        }
        .mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .metric {
          border-radius: 24px;
          padding: 22px;
          min-height: 140px;
        }
        .metric-value {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 16px;
        }
        .metric-note {
          margin-top: 8px;
          color: rgba(255,255,255,0.66);
          line-height: 1.7;
          font-size: 0.94rem;
        }
        .section {
          padding: 84px 0;
        }
        .two-col {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
        }
        .section-title {
          font-size: clamp(2.5rem, 6.5vw, 5.6rem);
        }
        .body-text {
          color: rgba(255,255,255,0.72);
          line-height: 1.9;
          font-size: 1.05rem;
        }
        .stack { display: flex; flex-direction: column; gap: 18px; }
        .skill-grid {
          margin-top: 8px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        .skill-box {
          border-radius: 24px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .skill-box:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.07);
        }
        .skill-box span {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.86);
        }
        .section-head {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 26px;
        }
        .section-note {
          max-width: 34rem;
          color: rgba(255,255,255,0.64);
          line-height: 1.8;
        }
        .project-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .project-card {
          display: grid;
          grid-template-columns: 110px 1fr 48px;
          gap: 24px;
          padding: 26px;
          border-radius: 30px;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.18);
          background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04));
        }
        .meta {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.45);
        }
        .project-title {
          font-size: clamp(1.8rem, 4vw, 3.2rem);
        }
        .project-desc {
          margin-top: 12px;
          color: rgba(255,255,255,0.68);
          line-height: 1.8;
          max-width: 44rem;
        }
        .arrow-wrap {
          display: flex;
          justify-content: flex-end;
        }
        .arrow-badge {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.03);
        }
        .timeline {
          display: flex;
          flex-direction: column;
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 24px;
          padding: 24px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .role-title {
          font-size: clamp(1.5rem, 3vw, 2.3rem);
        }
        .summary {
          margin-top: 12px;
          color: rgba(255,255,255,0.68);
          line-height: 1.8;
        }
        .contact-card {
          border-radius: 34px;
          padding: 32px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 28px;
          position: relative;
          overflow: hidden;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          right: -60px;
          top: -60px;
          background: radial-gradient(circle, rgba(99, 215, 255, 0.22), transparent 60%);
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 14px;
        }
        .contact-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 18px 20px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.84);
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
        }
        .contact-link:hover {
          transform: translateX(4px);
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.17);
        }
        .contact-left p {
          max-width: 36rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.9;
        }
        @media (max-width: 980px) {
          .nav-links { display: none; }
          .hero, .two-col, .contact-card, .section-head, .project-card, .timeline-item { grid-template-columns: 1fr; }
          .hero { min-height: auto; padding-top: 40px; }
          .section-head { align-items: start; }
        }
        @media (max-width: 640px) {
          .container { width: min(1180px, calc(100% - 20px)); }
          .hero-buttons { flex-direction: column; }
          .btn { width: 100%; }
          .mini-grid, .skill-grid { grid-template-columns: 1fr; }
          .hero-card, .project-card, .contact-card { padding: 20px; }
          .profile-image { width: 150px; height: 150px; }
        }
      `}</style>

      <div className="noise" />
      <div className="blob one" />
      <div className="blob two" />
      <div className="blob three" />

      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">Yash Shimpi</div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">Information Systems • Analytics • Marketing • Operations</div>
            <h1 className="hero-title">
              Building
              <br />
              sharp
              <br />
              data-driven
              <br />
              work.
            </h1>
            <p className="hero-copy">
              I’m Yash, an M.S. Information Systems student at Cleveland State University. I use analytics,
              storytelling, dashboards, and automation to improve performance, communicate insights clearly,
              and help teams make better decisions.
            </p>
            <div className="hero-buttons">
              <a href="#work" className="btn btn-solid">
                View Work <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn btn-ghost">Contact Me</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-side"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="glass hero-card profile-card">
              <div className="profile-image-wrap">
                <img
                  src="/profile.jpg"
                  alt="Yash Shimpi"
                  className="profile-image"
                />
              </div>
            </div>

            <div className="glass hero-card large">
              <div>
                <div className="eyebrow">Focus Areas</div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "2rem",
                    lineHeight: 1.02,
                    letterSpacing: "-0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Analytics,
                  <br />
                  Operations,
                  <br />
                  Strategy.
                </h3>
              </div>
              <p className="metric-note" style={{ maxWidth: 280, position: "relative", zIndex: 1 }}>
                I combine dashboards, process thinking, and storytelling to create work that looks sharp and performs.
              </p>
            </div>

            <div className="mini-grid">
              <div className="glass metric">
                <div className="pill meta">Reporting</div>
                <div className="metric-value">30%</div>
                <div className="metric-note">Less manual effort through automation-oriented workflows.</div>
              </div>
              <div className="glass metric">
                <div className="pill meta">Engagement</div>
                <div className="metric-value">20%+</div>
                <div className="metric-note">Performance lift from data-backed campaign decision making.</div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section container two-col">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow">About</div>
            <h2 className="section-title">
              More than
              <br />
              just nice
              <br />
              visuals.
            </h2>
          </motion.div>

          <motion.div
            className="stack"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <p className="body-text">
              My work sits between business thinking and creative execution. I enjoy turning messy data into useful dashboards,
              improving workflows with automation, and building campaigns that are backed by measurable outcomes.
            </p>
            <p className="body-text">
              I’m especially interested in analytics, operations, digital strategy, and roles where I can mix problem solving with
              communication. The goal is always the same: make things clearer, faster, and more effective.
            </p>
            <div className="skill-grid">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.label}
                    className="glass skill-box"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                  >
                    <Icon size={18} />
                    <span>{skill.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section id="work" className="section container">
          <motion.div
            className="section-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <div>
              <div className="eyebrow">Selected Work</div>
              <h2 className="section-title">
                Featured
                <br />
                projects
              </h2>
            </div>
            <p className="section-note">
              A few projects that show how I think through analytics, communication, operations, and execution.
            </p>
          </motion.div>

          <div className="project-list">
            {projects.map((project, idx) => (
              <motion.a
                href="#"
                key={project.title}
                className="glass project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
              >
                <div className="meta">{project.year}</div>
                <div>
                  <div className="meta" style={{ marginBottom: 8 }}>{project.type}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                </div>
                <div className="arrow-wrap">
                  <div className="arrow-badge"><ArrowUpRight size={18} /></div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="experience" className="section container two-col">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow">Experience</div>
            <h2 className="section-title">
              What I’ve
              <br />
              been doing.
            </h2>
          </motion.div>

          <div className="timeline">
            {experience.map((item, idx) => (
              <motion.div
                key={item.role}
                className="timeline-item"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="meta">{item.period}</div>
                <div>
                  <h3 className="role-title">{item.role}</h3>
                  <div className="meta" style={{ marginTop: 8 }}>{item.company}</div>
                  <p className="summary">{item.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="section container">
          <motion.div
            className="glass contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <div className="contact-left">
              <div className="eyebrow">Contact</div>
              <h2 className="section-title">
                Let’s build
                <br />
                something
                <br />
                useful.
              </h2>
              <p>
                I’m open to internships, co-ops, analytics roles, marketing strategy opportunities, and projects where data and design need to work together.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:ygshimpi18@gmail.com" className="contact-link">
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  <Mail size={16} /> ygshimpi18@gmail.com
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a href="https://linkedin.com/in/yashshimpi" target="_blank" rel="noreferrer" className="contact-link">
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  <Linkedin size={16} /> LinkedIn
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="contact-link">
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  <FileText size={16} /> Resume PDF
                </span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}