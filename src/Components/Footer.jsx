import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
      {/* ── CTA Band ── */}
      <section className="footer-cta">
        <div className="footer-cta__inner">
          <h2 className="footer-cta__heading">
            Got a Vision? Let's Bring It to Life!
          </h2>
          <p className="footer-cta__sub">
            I'm always excited to collaborate on new and innovative projects.
            Whether you're starting from scratch or refining an existing idea
          </p>
          <a href="mailto:kuldeepkant26@gmail.com" className="footer-cta__link">
            Connect
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        {/* Subtle grid overlay */}
        <div className="footer__grid-overlay" aria-hidden="true" />

        <div className="footer__inner">
          {/* Top row */}
          <div className="footer__top">
            {/* Brand */}
            <div className="footer__brand">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="14" y1="2" x2="14" y2="26" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="2" y1="14" x2="26" y2="14" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="4.929" y1="4.929" x2="23.071" y2="23.071" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="23.071" y1="4.929" x2="4.929" y2="23.071" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
              <span>Kuldeep</span>
            </div>

            {/* Nav links */}
            <nav className="footer__nav">
              <a href="#home"   className="footer__nav-link footer__nav-link--active">Home</a>
              <a href="#about"  className="footer__nav-link">About</a>
              <a href="#work"   className="footer__nav-link">My Work</a>
              <a href="#skills" className="footer__nav-link">Skills</a>
            </nav>

            {/* Email CTA */}
            <a href="mailto:kuldeepkant26@gmail.com" className="footer__email-cta">
              kuldeepkant26@gmail.com ↗
            </a>
          </div>

          {/* Divider */}
          <div className="footer__divider" />

          {/* Bottom row */}
          <div className="footer__bottom">
            <p className="footer__copy">© {new Date().getFullYear()} Kuldeep. All rights reserved.</p>
            <div className="footer__socials">
              <a href="https://github.com/Kuldeepkant26" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="GitHub">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kuldeep-kant-975746281/" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
