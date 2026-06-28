import React from 'react'
import '../styles/Techs.css'

const TECHS = [
  {
    name: 'JavaScript',
    years: '4+ yrs',
    tag: 'Core Language',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#F7DF1E"/>
        <path d="M9.5 24.5l2.1-1.27c.4.72.77 1.33 1.65 1.33.84 0 1.38-.33 1.38-1.62V15h2.58v8c0 2.67-1.57 3.88-3.86 3.88-2.07 0-3.27-1.07-3.85-2.38zM18.5 24.22l2.1-1.22c.55.9 1.27 1.57 2.54 1.57 1.07 0 1.75-.53 1.75-1.27 0-.88-.7-1.2-1.88-1.7l-.65-.28c-1.86-.79-3.1-1.79-3.1-3.88 0-1.93 1.47-3.4 3.77-3.4 1.63 0 2.8.57 3.64 2.06l-2 1.28c-.44-.79-.92-1.1-1.65-1.1-.75 0-1.23.48-1.23 1.1 0 .77.48 1.08 1.58 1.56l.65.28c2.19.94 3.43 1.9 3.43 4.06 0 2.32-1.83 3.58-4.28 3.58-2.4 0-3.95-1.14-4.67-2.65z" fill="#222222"/>
      </svg>
    ),
  },
  {
    name: 'React',
    years: '3+ yrs',
    tag: 'UI Library',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#20232A"/>
        <ellipse cx="16" cy="16" rx="3" ry="3" fill="#61DAFB"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.4" fill="none"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 16 16)"/>
      </svg>
    ),
  },
  {
    name: 'React Native',
    years: '2+ yrs',
    tag: 'Mobile',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#1A1A2E"/>
        <ellipse cx="16" cy="16" rx="3" ry="3" fill="#61DAFB"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.4" fill="none"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 16 16)"/>
        <rect x="13" y="24" width="6" height="1.5" rx=".75" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    years: '3+ yrs',
    tag: 'Backend',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#1A2F23"/>
        <path d="M16 6l9 5.2v10.4L16 26l-9-4.4V11.2L16 6z" stroke="#68A063" strokeWidth="1.3" fill="none"/>
        <path d="M16 10v6l5 2.9" stroke="#68A063" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    years: '2+ yrs',
    tag: 'Database',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#13261F"/>
        <path d="M16 5c0 0-6 7.5-6 13a6 6 0 0 0 12 0C22 12.5 16 5 16 5z" fill="#00ED64"/>
        <rect x="15.2" y="19" width="1.6" height="8" rx=".8" fill="#00ED64"/>
      </svg>
    ),
  },
  {
    name: 'AWS',
    years: '1+ yr',
    tag: 'Cloud',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#1A1A1A"/>
        <path d="M8 18l2.5-6 2.5 6M9 16.5h3" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M15.5 12l1.8 5.5 1.8-5.5" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 18l-2-6-2 6" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M19 16.5h2.5" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M7 21.5c4-1 14-1 18 0" stroke="#FF9900" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'AI Applications',
    years: '1+ yr',
    tag: 'AI / LLM',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#1A1030"/>
        <circle cx="16" cy="16" r="5" stroke="#A78BFA" strokeWidth="1.4"/>
        <circle cx="16" cy="16" r="2" fill="#A78BFA"/>
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="#A78BFA" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M9.5 9.5l2.8 2.8M19.7 19.7l2.8 2.8M9.5 22.5l2.8-2.8M19.7 12.3l2.8-2.8" stroke="#A78BFA" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <div className="techs__inner">

        {/* ── Header row ── */}
        <div className="techs__header">
          <div className="techs__header-left">
            <span className="techs__eyebrow">Stack</span>
            <h2 className="techs__heading">Techs I've Worked With</h2>
          </div>
          <p className="techs__sub">
            A curated set of technologies I reach for to ship fast,
            scalable, and maintainable products.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="techs__divider" />

        {/* ── Cards grid ── */}
        <div className="techs__grid">
          {TECHS.map((tech, i) => (
            <div className="techs__card" key={i}>
              <div className="techs__card-top">
                <div className="techs__icon">{tech.icon}</div>
                <span className="techs__tag">{tech.tag}</span>
              </div>
              <div className="techs__card-bottom">
                <span className="techs__name">{tech.name}</span>
                <span className="techs__years">{tech.years}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Techs
