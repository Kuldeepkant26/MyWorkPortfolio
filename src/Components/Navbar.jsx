import React, { useState, useEffect, useRef } from 'react'
import '../styles/Navbar.css'

const LINKS = [
  { label: 'About Me', href: '#about'  },
  { label: 'My Work',  href: '#work'   },
  { label: 'Skills',   href: '#skills' },
]

const CONTACT_EMAIL = 'kuldeepkant26@gmail.com'

const SOCIALS = [
  {
    label: 'Email',
    sub: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.5 7l8.5 6 8.5-6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    sub: '@Kuldeepkant26',
    href: 'https://github.com/Kuldeepkant26',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    sub: 'in/kuldeep-kant',
    href: 'https://www.linkedin.com/in/kuldeep-kant-975746281/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [brandOpen, setBrandOpen] = useState(false)
  const brandRef = useRef(null)
  const hoverTimer = useRef(null)

  /* Lock body scroll while the mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  /* Close the brand dropdown on outside click / Escape */
  useEffect(() => {
    if (!brandOpen) return
    const onDown = (e) => {
      if (brandRef.current && !brandRef.current.contains(e.target)) setBrandOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') setBrandOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [brandOpen])

  /* Hover intent — open instantly, close after a small grace delay */
  const brandEnter = () => { clearTimeout(hoverTimer.current); setBrandOpen(true) }
  const brandLeave = () => { hoverTimer.current = setTimeout(() => setBrandOpen(false), 180) }

  const close = () => setOpen(false)

  /* Smooth-scroll to a section. For #skills, also re-trigger the
     highlight pulse on the Skills card (works even on repeat clicks). */
  const handleNavClick = (e, href) => {
    if (!href.startsWith('#')) return
    const el = document.getElementById(href.slice(1))
    if (!el) return
    e.preventDefault()
    close()
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    if (href === '#skills') {
      el.classList.remove('about__tech-visual--highlight')
      // force reflow so the animation restarts on every click
      void el.offsetWidth
      el.classList.add('about__tech-visual--highlight')
    }
  }

  return (
    <>
      <nav className="navbar">
        {/* Brand monogram + connect dropdown */}
        <div
          className={`navbar__brand${brandOpen ? ' navbar__brand--open' : ''}`}
          ref={brandRef}
          onMouseEnter={brandEnter}
          onMouseLeave={brandLeave}
        >
          <button
            className="navbar__brand-btn"
            onClick={() => setBrandOpen(v => !v)}
            aria-haspopup="true"
            aria-expanded={brandOpen}
            aria-label="Kuldeep — contact menu"
          >
            <span className="navbar__brand-mark">K</span>
            <span className="navbar__brand-name">Kuldeep</span>
            <svg className="navbar__brand-caret" width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="navbar__brand-menu" role="menu">
            <span className="navbar__brand-menu-label">Let&apos;s connect</span>
            {SOCIALS.map(({ label, sub, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="navbar__brand-item"
                role="menuitem"
                onClick={() => setBrandOpen(false)}
              >
                <span className="navbar__brand-item-icon">{icon}</span>
                <span className="navbar__brand-item-text">
                  <span className="navbar__brand-item-label">{label}</span>
                  <span className="navbar__brand-item-sub">{sub}</span>
                </span>
                <svg className="navbar__brand-item-arrow" width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop nav links */}
        <ul className="navbar__links">
          {LINKS.map(({ label, href }) => (
            <li key={href}><a href={href} onClick={(e) => handleNavClick(e, href)}>{label}</a></li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href={`mailto:${CONTACT_EMAIL}`} className="navbar__cta">
          Connect ↗
        </a>

        {/* Mobile hamburger toggle */}
        <button
          className={`navbar__toggle${open ? ' navbar__toggle--open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer + backdrop */}
      <div
        className={`navbar__backdrop${open ? ' navbar__backdrop--show' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
      <aside className={`navbar__drawer${open ? ' navbar__drawer--open' : ''}`}>
        <ul className="navbar__drawer-links">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleNavClick(e, href)}>{label}</a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${CONTACT_EMAIL}`} className="navbar__drawer-cta" onClick={close}>
          Connect ↗
        </a>
      </aside>
    </>
  )
}

export default Navbar
