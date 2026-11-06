import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { KINLY_SCREENS } from '../Components/KinlyScreens'
import { ORBI_SCREENS } from '../Components/OrbiScreens'
import {
  SiloBotBuilder, SiloImproveDescription, SiloDocSuggestions,
  SiloMockFrame, SiloMockZoom,
} from '../Components/SiloScreens'
import '../styles/ProjectDetail.css'

/* Hand-built web-app screens, referenced by a feature's `mock` key. */
const WEB_MOCKS = {
  'silo-bot':      SiloBotBuilder,
  'silo-describe': SiloImproveDescription,
  'silo-doc':      SiloDocSuggestions,
}

/* ── Small inline icons for feature headers ── */
const FEATURE_ICONS = {
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  ticket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 0 0 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 0 0-4V9z" />
      <path d="M13 7v10" strokeDasharray="2 2.5" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <circle cx="12" cy="16" r="1" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M10 5h4M11 18.5h2" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10M9 20V4M14 20v-7M19 20V8" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
      <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14z" />
    </svg>
  ),
  children: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M3 20a5 5 0 0 1 10 0M14.5 20a4 4 0 0 1 6.5-3.1" />
    </svg>
  ),
  shop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7V6a6 6 0 0 1 12 0v1m-15 0h18l-1 13a2 2 0 0 1-2 1.8H6a2 2 0 0 1-2-1.8L3 7z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  ),
  qr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.2" />
      <rect x="14" y="3" width="7" height="7" rx="1.2" />
      <rect x="3" y="14" width="7" height="7" rx="1.2" />
      <path d="M14 14h3v3M21 14v.01M14 21h3M20 18v3M17 17.5v.01" />
    </svg>
  ),
  coin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6.5" rx="7" ry="3" />
      <path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
      <path d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
    </svg>
  ),
  card: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5" width="19" height="14" rx="2.2" />
      <path d="M2.5 10h19M6.5 15h4" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2.2" />
      <circle cx="8.5" cy="8.5" r="1.6" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V10l6 4v-4l6 4V5h4l2 16H3z" />
      <path d="M7 17h2M12 17h2" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4c-9 0-15 4.5-15 11a5 5 0 0 0 5 5c6.5 0 10-6 10-16z" />
      <path d="M4 21c3-5 6.5-8 11-10" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="7" rx="1.8" />
      <rect x="3" y="13" width="18" height="7" rx="1.8" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  ),
  bot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 8V4.5M12 4.5h.01M2 13v3M22 13v3" />
      <path d="M9 13.5v1M15 13.5v1M10 17.5h4" />
    </svg>
  ),
  wand: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20L15 9M13 7l2-2 4 4-2 2" />
      <path d="M18 2.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6zM6 3l.5 1.3L7.8 5l-1.3.5L6 6.8l-.5-1.3L4.2 5l1.3-.5L6 3z" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  ),
}

const ArrowDiag = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* Framed, browser-style screenshot — shows the FULL image, never cropped.
   On click it passes its own image rect so the lightbox can grow FROM it. */
const Shot = ({ src, alt, onOpen }) => {
  const imgRef = useRef(null)
  const handleClick = () => {
    const rect = imgRef.current?.getBoundingClientRect()
    onOpen?.({ src, alt, rect })
  }
  return (
    <figure className="pd-shot" onClick={handleClick}>
      <div className="pd-shot__bar">
        <span /><span /><span />
      </div>
      <div className="pd-shot__frame">
        <img ref={imgRef} src={src} alt={alt} loading="lazy" />
        <span className="pd-shot__zoom" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
          </svg>
        </span>
      </div>
    </figure>
  )
}

/* Lightbox — the clicked image GROWS from its on-page position into a
   centered popup using a FLIP transition, then shrinks back on close. */
const Lightbox = ({ image, onClose }) => {
  const imgRef = useRef(null)
  const [open, setOpen] = useState(false)

  /* Style that pins the image exactly over its origin thumbnail. */
  const originStyle = (rect) => ({
    position: 'fixed',
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  })

  /* Mount at origin rect, then on next frame switch to the open (centered) state. */
  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const handleClose = useCallback(() => {
    const node = imgRef.current
    const rect = image.rect
    if (node && rect) {
      /* Animate back to the origin rect, then unmount when it finishes. */
      node.style.top    = `${rect.top}px`
      node.style.left   = `${rect.left}px`
      node.style.width  = `${rect.width}px`
      node.style.height = `${rect.height}px`
      node.style.borderRadius = '16px'
    }
    setOpen(false)
    setTimeout(onClose, 360) // match the CSS transition duration
  }, [image, onClose])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [handleClose])

  if (!image) return null

  return (
    <div
      className={`pd-lightbox${open ? ' pd-lightbox--open' : ''}`}
      onClick={handleClose}
    >
      <button className="pd-lightbox__close" onClick={handleClose} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <img
        ref={imgRef}
        className="pd-lightbox__img"
        src={image.src}
        alt={image.alt}
        style={image.rect && !open ? originStyle(image.rect) : undefined}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

const ProjectDetail = () => {
  const { id }   = useParams()
  const navigate = useNavigate()
  const project  = PROJECTS.find(p => p.id === parseInt(id))
  const [lightbox, setLightbox] = useState(null)
  const [mockZoom, setMockZoom] = useState(null)

  const openLightbox = useCallback((data) => setLightbox(data), [])

  if (!project) {
    return (
      <div className="pd-notfound">
        <p>Project not found.</p>
        <button onClick={() => navigate('/')}>← Go Home</button>
      </div>
    )
  }

  const hasLive = project.liveLink && project.liveLink !== '#'
  const isMobile = project.kind === 'mobile'
  // Pick the right hand-built screen set for this project.
  const SCREENS = project.screens === 'orbi' ? ORBI_SCREENS : KINLY_SCREENS
  const CoverScreen = isMobile ? SCREENS[project.cover] : null
  const textOnlyFeatures = project.features?.every(f => !f.image && !f.screen && !f.mock)

  return (
    <div className={`pd${project.screens === 'orbi' ? ' pd--orbi' : ''}`}>

      {/* ── Top bar ── */}
      <header className="pd__bar">
        <button className="pd__back" onClick={() => navigate(-1)}>
          <span className="pd__back-ic">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M10 2L4 7L10 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="pd__back-tx">Projects</span>
        </button>

        {/* Centered: which project you're viewing */}
        <div className="pd__bar-mid">
          <span className="pd__bar-title">{project.title}</span>
          <span className="pd__bar-sep" />
          <span className="pd__bar-cat">{project.category}</span>
        </div>

        <a className="pd__bar-logo" href="/" aria-label="Home">
          <span className="pd__bar-logo-mark">KK</span>
        </a>
      </header>

      {/* ── Hero ── */}
      <section className="pd__hero">
        <span className="pd__eyebrow">{project.category} · {project.year}</span>
        <h1 className="pd__title">{project.title}</h1>

        {project.company && (
          <span className="pd__company">
            <span className="pd__company-dot" />
            {project.freelance ? `Freelance · ${project.company}` : `Built at ${project.company}`}
          </span>
        )}

        <p className="pd__lead">{project.description}</p>

        <div className="pd__meta-row">
          <span className="pd__role">{project.role}</span>
          <span className="pd__meta-dot" />
          <span className="pd__role">{project.client}</span>
        </div>

        <div className="pd__tags">
          {project.tags.map(t => <span key={t} className="pd__tag">{t}</span>)}
        </div>

        {hasLive && (
          <div className="pd__links">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="pd__link pd__link--primary">
              Visit Live <ArrowDiag />
            </a>
          </div>
        )}
      </section>

      {/* ── Cover — phone mockup for mobile projects, screenshot otherwise ── */}
      {isMobile && CoverScreen ? (
        <section className="pd__cover pd__cover--mobile">
          <div className="pd__phones">
            <CoverScreen />
          </div>
        </section>
      ) : (
        <section className="pd__cover">
          <Shot src={project.image} alt={`${project.title} preview`} onOpen={openLightbox} />
        </section>
      )}

      {/* ── Key features ── */}
      {project.features?.length > 0 && (
        <section className="pd__features">
          <div className="pd__features-head">
            <span className="pd__section-label">Key Features</span>
            <h2 className="pd__features-title">What it does</h2>
            {project.mockNote && <p className="pd__features-note">{project.mockNote}</p>}
          </div>

          {/* Features with no screenshot, phone screen or web mock render as a card grid. */}
          <div className={`pd__feature-list${isMobile ? ' pd__feature-list--mobile' : ''}${textOnlyFeatures ? ' pd__feature-list--cards' : ''}`}>
            {project.features.map((f) => {
              const Screen = f.screen ? SCREENS[f.screen] : null
              const Mock = f.mock ? WEB_MOCKS[f.mock] : null
              const hasMedia = Boolean(Screen || Mock || f.image)
              return (
                <article className="pd__feature" key={f.title}>
                  <div className="pd__feature-text">
                    <span className="pd__feature-icon">{FEATURE_ICONS[f.icon]}</span>
                    <h3 className="pd__feature-name">{f.title}</h3>
                    <p className="pd__feature-desc">{f.text}</p>
                  </div>
                  {hasMedia && (
                    <div className={`pd__feature-media${Screen ? ' pd__feature-media--phone' : ''}`}>
                      {Screen ? <Screen />
                        : Mock ? <SiloMockFrame screen={Mock} label={f.title} onOpen={() => setMockZoom({ screen: Mock, label: f.title })} />
                        : <Shot src={f.image} alt={f.title} onOpen={openLightbox} />}
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </section>
      )}

      {/* ── Bottom CTA ── */}
      <div className="pd__footer">
        <button className="pd__back-btn" onClick={() => navigate(-1)}>
          ← Back to Projects
        </button>
        {hasLive && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="pd__live-btn">
            View Live <ArrowDiag />
          </a>
        )}
      </div>

      {/* ── Animated image lightbox ── */}
      {lightbox && <Lightbox image={lightbox} onClose={() => setLightbox(null)} />}

      {/* ── Full-size view of a hand-built web mock ── */}
      {mockZoom && <SiloMockZoom screen={mockZoom.screen} label={mockZoom.label} onClose={() => setMockZoom(null)} />}

    </div>
  )
}

export default ProjectDetail
