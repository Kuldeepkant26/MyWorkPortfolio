import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__grid">

        {/* ── Left Column ── */}
        <div className="about__left">
          <h2 className="about__heading">About Me</h2>
          <p className="about__description">
            I'm a full-stack software developer who turns complex problems into
            clean, scalable solutions. From mentoring aspiring developers to
            shipping production-grade products, I bring technical depth and
            real-world perspective to every project I touch.
          </p>
          {/* Decorative curved arrow */}
          <div className="about__arrow">
            <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 20 C20 20, 30 140, 160 150"
                stroke="#888888"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M145 138 L162 152 L148 166"
                stroke="#888888"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ── Middle Column ── */}
        <div className="about__middle">
          {/* Stat Card */}
          <div className="about__stat-card">
            <div className="about__globe-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="about__stat-number">2.5+</div>
            <p className="about__stat-label">
              Years of professional experience across internships, freelancing, and product engineering
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="about__timeline">
            <div className="about__timeline-item about__timeline-item--active">
              <div className="about__timeline-dot about__timeline-dot--active" />
              <div className="about__timeline-content">
                <span className="about__timeline-period">Apr 2025 – Present</span>
                <strong>Software Developer</strong>
                <span>Oodles Technologies</span>
              </div>
            </div>
            <div className="about__timeline-item">
              <div className="about__timeline-dot" />
              <div className="about__timeline-content">
                <span className="about__timeline-period">Apr 2024 – Oct 2024</span>
                <strong>Freelance Developer</strong>
                <span>Naturally Good · naturallygood.in</span>
              </div>
            </div>
            <div className="about__timeline-item">
              <div className="about__timeline-dot" />
              <div className="about__timeline-content">
                <span className="about__timeline-period">Oct 2023 – Mar 2024</span>
                <strong>Teaching Assistant</strong>
                <span>Full-Stack Development Internship</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="about__right">
          {/* Tech stack visual — Skills card (#skills target) */}
          <div className="about__tech-visual" id="skills">
            <span className="about__orange-accent" />
            <div className="about__tech-grid">
              {['React', 'React Native', 'Mobile App Development', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js', 'PostgreSQL', 'Next.js', 'REST APIs', 'Git'].map(tech => (
                <span key={tech} className="about__tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Bullet points */}
          <div className="about__bullets">
            <div className="about__bullet">
              <span className="about__bullet-icon">✦</span>
              <p>
                Experienced in building end-to-end web applications — from robust
                REST APIs and databases to responsive, performant front-end interfaces
                that users actually enjoy using.
              </p>
            </div>
            <div className="about__bullet">
              <span className="about__bullet-icon">✦</span>
              <p>
                Across internships, freelance projects, and product companies, I've
                consistently delivered real-world impact — adapting fast, collaborating
                effectively, and writing code that scales.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
