import React, { useState, useEffect } from 'react'
import '../styles/Hero.css'

const ROLES = [
  'Full-Stack Developer.',
  'UI / UX Engineer.',
  'Mobile App Builder.',
  'Backend Architect.',
]

const TYPING_SPEED   = 60
const ERASING_SPEED  = 35
const PAUSE_AFTER    = 1800
const PAUSE_BEFORE   = 400

const useTypingEffect = (phrases) => {
  const [displayed, setDisplayed]   = useState('')
  const [phraseIdx, setPhraseIdx]   = useState(0)
  const [charIdx, setCharIdx]       = useState(0)
  const [isErasing, setIsErasing]   = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]

    if (!isErasing && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx(i => i + 1), TYPING_SPEED)
      setDisplayed(current.slice(0, charIdx + 1))
      return () => clearTimeout(t)
    }

    if (!isErasing && charIdx === current.length) {
      const t = setTimeout(() => setIsErasing(true), PAUSE_AFTER)
      return () => clearTimeout(t)
    }

    if (isErasing && charIdx > 0) {
      const t = setTimeout(() => setCharIdx(i => i - 1), ERASING_SPEED)
      setDisplayed(current.slice(0, charIdx - 1))
      return () => clearTimeout(t)
    }

    if (isErasing && charIdx === 0) {
      const t = setTimeout(() => {
        setIsErasing(false)
        setPhraseIdx(i => (i + 1) % phrases.length)
      }, PAUSE_BEFORE)
      return () => clearTimeout(t)
    }
  }, [charIdx, isErasing, phraseIdx, phrases])

  return displayed
}

const Hero = () => {
  const role = useTypingEffect(ROLES)

  return (
    <section className="hero">

      {/* ── Left sidebar ── */}
      <div className="hero__sidebar">
        <span className="hero__sidebar-role">Software Developer</span>
        <div className="hero__sidebar-line" />
        <span className="hero__sidebar-year">2026</span>
      </div>

      {/* ── Main content ── */}
      <div className="hero__body">
        <div className="hero__center">

          <p className="hero__eyebrow">Based in India &mdash; Available Worldwide</p>

          <h1 className="hero__title">Hello,<br />I&apos;m Kuldeep.</h1>

          <p className="hero__subtitle">
            An experienced developer specializing in{' '}
            <span className="hero__highlight">web applications</span>,{' '}
            <span className="hero__highlight">mobile app development</span>,{' '}
            <span className="hero__highlight">backend systems</span>,{' '}
            <span className="hero__highlight">databases</span>, and{' '}
            <span className="hero__highlight">AWS cloud solutions</span>.{' '}
            I build scalable, high-performance digital products with a focus on{' '}
            <span className="hero__highlight">clean architecture</span> and{' '}
            <span className="hero__highlight">seamless user experience</span>.
          </p>

          <p className="hero__typing">
            <span className="hero__typing-prefix">Specialised in&nbsp;</span>
            <span className="hero__typing-text">{role}</span>
            <span className="hero__cursor" aria-hidden="true" />
          </p>

          <div className="hero__divider" />

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">+20</span>
              <span className="hero__stat-label">Projects completed</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">+2</span>
              <span className="hero__stat-label">Years of experience</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">+5</span>
              <span className="hero__stat-label">Tech stacks mastered</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero
