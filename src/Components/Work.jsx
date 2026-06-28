import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Work.css'
import { PROJECTS } from '../data/projects'
import { KinlyPreview } from './KinlyScreens'
import { OrbiPreview } from './OrbiScreens'

const FILTERS = ['All', 'Full Stack', 'Mobile', 'AI']
const MOBILE_BREAKPOINT = 768

/* ── Arrow icon ── */
const ArrowDiag = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14L14 4M14 4H7M14 4V11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── Single project card ── */
const ProjectCard = ({ project, isCenter, onClick }) => {
  const isMobileApp = project.kind === 'mobile'
  return (
    <div
      className={`work__card${isCenter ? ' work__card--center' : ''}${isMobileApp ? ' work__card--phone' : ''}`}
      onClick={onClick}
    >
      {isMobileApp ? (
        <div className="work__card-phone">
          {project.screens === 'orbi'
            ? <OrbiPreview start={project.cover} />
            : <KinlyPreview start={project.cover} />}
        </div>
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="work__card-img"
        />
      )}
      {/* Hover overlay — short project description */}
      <div className="work__card-overlay">
        <span className="work__card-overlay-cat">{project.category}</span>
        <p className="work__card-overlay-desc">{project.tagline || project.description}</p>
        <span className="work__card-overlay-cta">
          View Project <ArrowDiag size={14} />
        </span>
      </div>
    </div>
  )
}

/* ── Track viewport width to switch desktop ↔ mobile layout ── */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT
  )
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return isMobile
}

/* ── Main section ── */
const Work = () => {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [active, setActive]       = useState('All')
  const [activeIdx, setActiveIdx] = useState(0)
  const [fading, setFading]       = useState(false)
  const trackRef = useRef(null)

  const filtered = useMemo(
    () => active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active),
    [active]
  )

  /* reset to first card on filter change */
  useEffect(() => { setActiveIdx(0) }, [active])

  const total = filtered.length

  /* ── Desktop: rotate the 3-card window ── */
  const shift = (dir) => {
    setFading(true)
    setTimeout(() => {
      setActiveIdx(i => (i + dir + total) % total)
      setFading(false)
    }, 180)
  }

  const jumpTo = (i) => {
    /* On mobile, scroll the swipe track to the chosen card. */
    if (isMobile && trackRef.current) {
      const card = trackRef.current.children[i]
      card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      setActiveIdx(i)
      return
    }
    setFading(true)
    setTimeout(() => { setActiveIdx(i); setFading(false) }, 180)
  }

  /* ── Mobile: keep dots in sync with the swipe position ── */
  const onTrackScroll = () => {
    const track = trackRef.current
    if (!track) return
    const center = track.scrollLeft + track.clientWidth / 2
    let nearest = 0
    let nearestDist = Infinity
    Array.from(track.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2
      const dist = Math.abs(childCenter - center)
      if (dist < nearestDist) { nearestDist = dist; nearest = i }
    })
    setActiveIdx(nearest)
  }

  const prevIdx   = (activeIdx - 1 + total) % total
  const nextIdx   = (activeIdx + 1) % total
  const isSingle  = total <= 1

  return (
    <section className="work" id="work">
      <div className="work__inner">

        {/* ── Centered header ── */}
        <div className="work__header">
          <span className="work__badge">
            <span className="work__badge-dot" />
            My Work
          </span>
          <h2 className="work__heading">Latest Works</h2>
        </div>

        {/* ── Filter pills ── */}
        <div className="work__filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`work__filter${active === f ? ' work__filter--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Carousel ── */}
        {total === 0 ? (
          <div className="work__empty">
            <svg className="work__empty-icon" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="14" rx="2" />
              <path d="M3 9h18" />
              <path d="M8 14h4" />
            </svg>
            <p className="work__empty-text">No projects in this category yet.</p>
          </div>
        ) : isMobile ? (
          /* ── Mobile: full swipeable scroll-snap track, one card at a time ── */
          <div
            className="work__track"
            ref={trackRef}
            onScroll={onTrackScroll}
          >
            {filtered.map((project, i) => (
              <div className="work__slide" key={project.id}>
                <ProjectCard
                  project={project}
                  isCenter={i === activeIdx}
                  onClick={() => navigate(`/project/${project.id}`)}
                />
                <div className="work__info">
                  <span className="work__info-title">{project.title}</span>
                  <span className="work__info-client">@ {project.client}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ── Desktop: 3-card centered carousel ── */
          <div className={`work__carousel${fading ? ' work__carousel--fading' : ''}${isSingle ? ' work__carousel--single' : ''}`}>

            {/* Left side card */}
            {!isSingle && (
              <div className="work__slide work__slide--side">
                <ProjectCard
                  project={filtered[prevIdx]}
                  isCenter={false}
                  onClick={() => navigate(`/project/${filtered[prevIdx].id}`)}
                />
                <div className="work__info">
                  <span className="work__info-title">{filtered[prevIdx].title}</span>
                  <span className="work__info-client">@ {filtered[prevIdx].client}</span>
                </div>
              </div>
            )}

            {/* Center card */}
            <div className="work__slide work__slide--center">
              <ProjectCard
                project={filtered[activeIdx]}
                isCenter={true}
                onClick={() => navigate(`/project/${filtered[activeIdx].id}`)}
              />
              <div className="work__info">
                <span className="work__info-title">{filtered[activeIdx].title}</span>
                <span className="work__info-client">@ {filtered[activeIdx].client}</span>
              </div>
            </div>

            {/* Right side card */}
            {!isSingle && (
              <div className="work__slide work__slide--side">
                <ProjectCard
                  project={filtered[nextIdx]}
                  isCenter={false}
                  onClick={() => navigate(`/project/${filtered[nextIdx].id}`)}
                />
                <div className="work__info">
                  <span className="work__info-title">{filtered[nextIdx].title}</span>
                  <span className="work__info-client">@ {filtered[nextIdx].client}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Dots + nav (desktop arrows hidden on mobile via CSS) ── */}
        {total > 1 && (
          <div className="work__nav">
            <button className="work__nav-arrow" onClick={() => shift(-1)} aria-label="Previous">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="work__dots">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  className={`work__dot${i === activeIdx ? ' work__dot--active' : ''}`}
                  onClick={() => jumpTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
            <button className="work__nav-arrow" onClick={() => shift(1)} aria-label="Next">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

        {/* ── View more ── */}
        <div className="work__more">
          <span className="work__more-label">Check out More</span>
          <span className="work__more-arrow">→</span>
          <a href="#" className="work__more-link">View More</a>
        </div>

      </div>
    </section>
  )
}

export default Work
