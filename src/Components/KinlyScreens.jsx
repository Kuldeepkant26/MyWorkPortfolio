import React, { useState } from 'react'
import '../styles/KinlyScreens.css'

/* ──────────────────────────────────────────────
   Kinly — hand-built, INTERACTIVE React Native
   screen mockups. No screenshots exist, so every
   screen is a real UI recreation with working
   state: switchable bottom tabs, tappable segmented
   controls, child switcher, shop categories, etc.
   ────────────────────────────────────────────── */

/* ── Icon library (line SVGs, no emojis) ── */
const ICONS = {
  home:     'M3 10.5L12 3l9 7.5M5 9v10h5v-6h4v6h5V9',
  track:    'M4 19V5m4 14V9m4 10v-6m4 6V7m4 12v-9',
  ai:       'M12 3a9 9 0 0 0-9 9c0 1.6.4 3 1.2 4.3L3 21l4.7-1.2A9 9 0 1 0 12 3z',
  shop:     'M6 7V6a6 6 0 0 1 12 0v1m-15 0h18l-1.2 12.2A2 2 0 0 1 17.8 21H6.2a2 2 0 0 1-2-1.8L3 7z',
  children: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17.5 11a2.5 2.5 0 1 0 0-5M19 20a5 5 0 0 0-3-4.6',
  moon:     'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
  bottle:   'M9 2h6M10 2v3l-1.2 1.8A3 3 0 0 0 8.3 8.4V19a3 3 0 0 0 3 3h1.4a3 3 0 0 0 3-3V8.4a3 3 0 0 0-.5-1.6L14 5V2M9 11h6M9 14h6',
  diaper:   'M3 7h18v3a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8V7zM3 9c4 0 6 2 9 2s5-2 9-2',
  health:   'M12 21s-7-4.5-9.2-8.3A5 5 0 0 1 12 6a5 5 0 0 1 9.2 6.7C19 16.5 12 21 12 21z',
  carrot:   'M3 21c4-1 9-6 13-13M14 4l2 2M17 7l2 2M11 8c2-2 5-2 7 0s2 5 0 7',
  cart:     'M3 4h2l2.5 12.5A2 2 0 0 0 9.5 18h8a2 2 0 0 0 2-1.6L21 8H6M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  search:   'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
  send:     'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z',
  spark:    'M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z',
  plus:     'M12 5v14M5 12h14',
  chevron:  'M9 6l6 6-6 6',
  bell:     'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0',
  toy:      'M12 3a3 3 0 0 0-3 3v1H6a3 3 0 0 0 0 6h1v5h10v-5h1a3 3 0 0 0 0-6h-3V6a3 3 0 0 0-2-3z',
  lotion:   'M9 2h6v3H9zM8 8a4 4 0 0 1 8 0v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8z',
}

const Icon = ({ name, size = 20, stroke = 1.8, fill = false }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={fill ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={ICONS[name]} />
  </svg>
)

/* ── iPhone frame ── */
export const PhoneFrame = ({ children, tone = 'light', label }) => (
  <div className={`kn-phone kn-phone--${tone}`}>
    <div className="kn-phone__notch" />
    <div className="kn-phone__screen">
      <div className="kn-status">
        <span className="kn-status__time">9:41</span>
        <span className="kn-status__icons">
          <svg viewBox="0 0 18 12" width="17"><path d="M1 8h2v3H1zM5 6h2v5H5zM9 4h2v7H9zM13 2h2v9h-2z" fill="currentColor"/></svg>
          <svg viewBox="0 0 16 12" width="16"><path d="M8 2.5C5.6 2.5 3.4 3.4 1.8 5l1.1 1.1C4.2 4.8 6 4 8 4s3.8.8 5.1 2.1L14.2 5C12.6 3.4 10.4 2.5 8 2.5zM8 6c-1.3 0-2.5.5-3.4 1.4l1.1 1.1C6.3 7.9 7.1 7.5 8 7.5s1.7.4 2.3 1l1.1-1.1C10.5 6.5 9.3 6 8 6zm0 3.5l1.4-1.4c-.4-.4-.9-.6-1.4-.6s-1 .2-1.4.6L8 9.5z" fill="currentColor"/></svg>
          <span className="kn-status__batt" />
        </span>
      </div>
      {label && <span className="kn-srlabel">{label}</span>}
      {children}
    </div>
    <div className="kn-phone__home" />
  </div>
)

/* ── Working bottom tab bar ── */
const TAB_DEFS = [
  { id: 'home',     icon: 'home'     },
  { id: 'track',    icon: 'track'    },
  { id: 'ai',       icon: 'ai'       },
  { id: 'children', icon: 'children' },
  { id: 'shop',     icon: 'shop'     },
]

const TabBar = ({ active, onChange }) => (
  <div className="kn-tabs" role="tablist">
    {TAB_DEFS.map(t => (
      <button
        key={t.id}
        type="button"
        role="tab"
        aria-selected={active === t.id}
        className={`kn-tab${active === t.id ? ' kn-tab--active' : ''}`}
        onClick={() => onChange(t.id)}
      >
        <Icon name={t.icon} size={21} stroke={active === t.id ? 2.1 : 1.8} />
        {active === t.id && <span className="kn-tab__dot" />}
      </button>
    ))}
  </div>
)

/* ════════ Screen bodies ════════ */

/* 1. Home / Dashboard */
const HomeBody = () => {
  const [child, setChild] = useState(0)
  const kids = [
    { n: 'Emma', a: '14m', av: 'E' },
    { n: 'Leo',  a: '3y',  av: 'L' },
  ]
  return (
    <div className="kn-body">
      <div className="kn-head">
        <div>
          <span className="kn-head__hi">Good morning, Aanya</span>
          <span className="kn-head__sub">Here's {kids[child].n} today</span>
        </div>
        <button className="kn-iconbtn"><Icon name="bell" size={18} /></button>
      </div>

      {/* Child switcher (tappable) */}
      <div className="kn-chips">
        {kids.map((k, i) => (
          <button
            key={k.n}
            className={`kn-chip${child === i ? ' kn-chip--on' : ''}`}
            onClick={() => setChild(i)}
          >
            <span className="kn-chip__av">{k.av}</span>{k.n} · {k.a}
          </button>
        ))}
        <button className="kn-chip kn-chip--add"><Icon name="plus" size={13} /></button>
      </div>

      {/* Daily rings */}
      <div className="kn-rings">
        {[
          { v: 0.78, c: '#6C5CE7', l: 'Sleep', s: '11h' },
          { v: 0.55, c: '#00B894', l: 'Play',  s: '2.5h' },
          { v: 0.86, c: '#FF7675', l: 'Feeds', s: '6/7' },
        ].map(r => (
          <div className="kn-ring" key={r.l}>
            <svg viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="18" className="kn-ring__bg" />
              <circle cx="22" cy="22" r="18" className="kn-ring__fg"
                style={{ stroke: r.c, strokeDasharray: 113, strokeDashoffset: 113 * (1 - r.v) }} />
            </svg>
            <span className="kn-ring__val">{r.s}</span>
            <span className="kn-ring__lbl">{r.l}</span>
          </div>
        ))}
      </div>

      {/* Quick log */}
      <span className="kn-section">Quick log</span>
      <div className="kn-quick">
        {[
          { ic: 'moon',   t: 'Sleep',  c: '#EEEAFF', col: '#6C5CE7' },
          { ic: 'bottle', t: 'Feed',   c: '#E4FBF2', col: '#00B894' },
          { ic: 'diaper', t: 'Diaper', c: '#FFF1E6', col: '#E17055' },
          { ic: 'health', t: 'Health', c: '#FFE9EC', col: '#FF7675' },
        ].map(q => (
          <button className="kn-quick__item" key={q.t}>
            <span className="kn-quick__ic" style={{ background: q.c, color: q.col }}>
              <Icon name={q.ic} size={19} />
            </span>
            <span className="kn-quick__t">{q.t}</span>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="kn-timeline">
        <div className="kn-tl-row">
          <span className="kn-tl-dot" style={{ background: '#6C5CE7' }} />
          <span className="kn-tl-txt">Woke up · slept 11h 20m</span>
          <span className="kn-tl-time">7:10</span>
        </div>
        <div className="kn-tl-row">
          <span className="kn-tl-dot" style={{ background: '#00B894' }} />
          <span className="kn-tl-txt">Breakfast · 180ml</span>
          <span className="kn-tl-time">8:05</span>
        </div>
      </div>
    </div>
  )
}

/* 2. Tracking — segmented control switches the metric */
const TrackBody = () => {
  const [tab, setTab] = useState('Sleep')
  const segs = ['Sleep', 'Food', 'Stools', 'Active']

  const sleep = [0.6, 0.85, 0.7, 0.95, 0.8, 0.5, 0.9]
  const active = [0.4, 0.55, 0.7, 0.5, 0.85, 0.6, 0.75]
  const food = [0.7, 0.6, 0.9, 0.75, 0.8, 0.65, 0.85]

  const META = {
    Sleep:  { big: '11.2', unit: 'h avg', data: sleep,  col: ['#6C5CE7', '#a29bfe'] },
    Food:   { big: '6.4',  unit: 'meals', data: food,   col: ['#00B894', '#55efc4'] },
    Active: { big: '2.8',  unit: 'h avg', data: active, col: ['#FD79A8', '#fab1c9'] },
  }
  const m = META[tab] || META.Sleep

  return (
    <div className="kn-body">
      <div className="kn-head">
        <span className="kn-title">Today's Routine</span>
        <span className="kn-pill">Mon, 12</span>
      </div>

      {/* Segmented control (tappable) */}
      <div className="kn-seg">
        {segs.map(s => (
          <button
            key={s}
            className={`kn-seg__i${tab === s ? ' kn-seg__i--on' : ''}`}
            onClick={() => setTab(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {tab === 'Stools' ? (
        <>
          <div className="kn-card kn-card--row">
            <span className="kn-nut" style={{ background: '#FFF1E6', color: '#E17055' }}>
              <Icon name="diaper" size={20} />
            </span>
            <div className="kn-nut__txt">
              <span className="kn-card__lbl">Stools today · all normal</span>
              <div className="kn-dots">
                {['#00B894', '#00B894', '#FDCB6E', '#00B894'].map((c, i) => (
                  <span key={i} style={{ background: c }} />
                ))}
              </div>
              <span className="kn-nut__sub">3 logged · consistency healthy</span>
            </div>
          </div>
          <div className="kn-card">
            <span className="kn-card__lbl">This week</span>
            <div className="kn-week">
              {['S','M','T','W','T','F','S'].map((d, i) => (
                <div className="kn-week__d" key={i}>
                  <span className="kn-week__dot" style={{ background: i === 2 ? '#FDCB6E' : '#00B894' }} />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="kn-card">
            <div className="kn-card__top">
              <span className="kn-card__lbl">{tab} this week</span>
              <span className="kn-card__big">{m.big}<small>{m.unit}</small></span>
            </div>
            <div className="kn-bars">
              {m.data.map((h, i) => (
                <div className="kn-bar" key={i}>
                  <span className="kn-bar__fill"
                    style={{ height: `${h * 100}%`, background: `linear-gradient(to top, ${m.col[0]}, ${m.col[1]})` }} />
                  <span className="kn-bar__d">{'SMTWTFS'[i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="kn-card kn-card--row">
            <span className="kn-nut"><Icon name="carrot" size={20} /></span>
            <div className="kn-nut__txt">
              <span className="kn-card__lbl">Nutrition balance</span>
              <div className="kn-prog"><span style={{ width: '72%' }} /></div>
              <span className="kn-nut__sub">Veg 4 · Fruit 3 · Dairy 2</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

/* 3. AI Agent — typeable suggestion chips append a reply */
const AiBody = () => {
  const [msgs, setMsgs] = useState([
    { who: 'in',  text: 'Emma slept only 8h last night and skipped her afternoon nap. Is that okay?' },
    { who: 'bot', text: "A shorter night is fine occasionally. Based on Emma's 14-day average (11h), try moving bedtime 30 min earlier tonight and watch for sleepy cues around 6:30 PM." },
    { who: 'rec', recs: [
      { ic: 'moon',   t: 'Wind-down routine · 6:30 PM' },
      { ic: 'bottle', t: 'Last feed · 6:45 PM' },
    ] },
  ])
  const suggestions = [
    'Why is she fussy?',
    'Is her weight on track?',
    'Suggest a nap schedule',
  ]
  const ask = (q) => {
    setMsgs(m => [
      ...m,
      { who: 'in', text: q },
      { who: 'bot', text: `Looking at Emma's recent data… ${q.toLowerCase().includes('weight') ? 'her growth is tracking along the 60th percentile — right on course.' : 'I\'ve tailored a suggestion based on her last 14 days of logs.'}` },
    ])
  }
  return (
    <div className="kn-body kn-body--ai">
      <div className="kn-ai-head">
        <span className="kn-ai-orb" />
        <div>
          <span className="kn-ai-name">Kinly AI</span>
          <span className="kn-ai-status">Knows Emma's data</span>
        </div>
      </div>

      <div className="kn-chat">
        {msgs.map((msg, i) => {
          if (msg.who === 'in')  return <div key={i} className="kn-msg kn-msg--in">{msg.text}</div>
          if (msg.who === 'rec') return (
            <div key={i} className="kn-msg kn-msg--bot kn-msg--card">
              <span className="kn-msg__spark"><Icon name="spark" size={11} fill /></span>
              <strong>Suggested for Emma</strong>
              {msg.recs.map(r => (
                <span className="kn-ai-rec" key={r.t}><Icon name={r.ic} size={13} /> {r.t}</span>
              ))}
            </div>
          )
          return (
            <div key={i} className="kn-msg kn-msg--bot">
              <span className="kn-msg__spark"><Icon name="spark" size={11} fill /></span>
              {msg.text}
            </div>
          )
        })}
      </div>

      <div className="kn-ai-input">
        <div className="kn-ai-suggests">
          {suggestions.map(s => (
            <button key={s} className="kn-ai-suggest" onClick={() => ask(s)}>{s}</button>
          ))}
        </div>
        <div className="kn-ai-field">
          Ask about Emma…
          <button className="kn-ai-send"><Icon name="send" size={15} /></button>
        </div>
      </div>
    </div>
  )
}

/* 4. Multi-child — selectable child cards */
const ChildrenBody = () => {
  const [sel, setSel] = useState(0)
  const kids = [
    { n: 'Emma', a: '14 months', av: 'E', c: '#EEEAFF', col: '#6C5CE7', s: 'Sleep 11h · 6 feeds' },
    { n: 'Leo',  a: '3 years',   av: 'L', c: '#E4FBF2', col: '#00B894', s: 'Active 3h · lunch done' },
    { n: 'Aria', a: '5 years',   av: 'A', c: '#FFF1E6', col: '#E17055', s: 'School day · 2 meals' },
  ]
  return (
    <div className="kn-body">
      <div className="kn-head">
        <span className="kn-title">My Children</span>
        <button className="kn-pill kn-pill--on"><Icon name="plus" size={12} /> Add</button>
      </div>

      {kids.map((ch, i) => (
        <button
          className={`kn-child${sel === i ? ' kn-child--on' : ''}`}
          key={ch.n}
          onClick={() => setSel(i)}
        >
          <span className="kn-child__av" style={{ background: ch.c, color: ch.col }}>{ch.av}</span>
          <div className="kn-child__txt">
            <span className="kn-child__n">{ch.n} {sel === i && <em className="kn-child__tag">Active</em>}</span>
            <span className="kn-child__a">{ch.a}</span>
            <span className="kn-child__s">{ch.s}</span>
          </div>
          <span className="kn-child__go"><Icon name="chevron" size={16} /></span>
        </button>
      ))}

      <button className="kn-addcard">
        <span className="kn-addcard__plus"><Icon name="plus" size={15} /></span>
        Add another child profile
      </button>
    </div>
  )
}

/* 5. Shop — category filter + cart counter */
const ShopBody = () => {
  const [cat, setCat] = useState('All')
  const [cart, setCart] = useState(2)
  const cats = ['All', 'Feeding', 'Sleep', 'Care', 'Toys']
  const products = [
    { ic: 'bottle', n: 'Anti-colic Bottle', p: '$14', c: '#E4FBF2', col: '#00B894', cat: 'Feeding' },
    { ic: 'toy',    n: 'Sensory Teether',   p: '$9',  c: '#EEEAFF', col: '#6C5CE7', cat: 'Toys' },
    { ic: 'moon',   n: 'Sleep Sack',        p: '$22', c: '#FFF1E6', col: '#E17055', cat: 'Sleep' },
    { ic: 'lotion', n: 'Organic Lotion',    p: '$12', c: '#FFE9EC', col: '#FF7675', cat: 'Care' },
  ]
  const shown = cat === 'All' ? products : products.filter(p => p.cat === cat)
  return (
    <div className="kn-body">
      <div className="kn-head">
        <span className="kn-title">Shop</span>
        <span className="kn-cart">
          <Icon name="cart" size={19} />
          {cart > 0 && <span className="kn-cart__b">{cart}</span>}
        </span>
      </div>

      <div className="kn-search"><Icon name="search" size={14} /> Search products…</div>

      <div className="kn-shop-cats">
        {cats.map(c => (
          <button
            key={c}
            className={`kn-shop-cat${cat === c ? ' kn-shop-cat--on' : ''}`}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="kn-banner">
        <div>
          <span className="kn-banner__t">Recommended for Emma</span>
          <span className="kn-banner__s">Based on her age & routine</span>
        </div>
        <span className="kn-banner__e"><Icon name="spark" size={22} fill /></span>
      </div>

      <div className="kn-grid">
        {shown.map(p => (
          <div className="kn-prod" key={p.n}>
            <span className="kn-prod__img" style={{ background: p.c, color: p.col }}>
              <Icon name={p.ic} size={26} />
            </span>
            <span className="kn-prod__n">{p.n}</span>
            <div className="kn-prod__row">
              <span className="kn-prod__p">{p.p}</span>
              <button className="kn-prod__add" onClick={() => setCart(c => c + 1)}>
                <Icon name="plus" size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const BODIES = {
  home:     { Comp: HomeBody,     tone: 'light' },
  track:    { Comp: TrackBody,    tone: 'light' },
  ai:       { Comp: AiBody,       tone: 'dark'  },
  children: { Comp: ChildrenBody, tone: 'light' },
  shop:     { Comp: ShopBody,     tone: 'light' },
}

/* The app shell — tab bar switches the screen body.
   `static` (used in small card previews) renders a non-interactive
   snapshot so it doesn't fight the card's navigation click. */
export const KinlyApp = ({ start = 'home', interactive = true }) => {
  const [tab, setTab] = useState(start)
  const { Comp, tone } = BODIES[tab] || BODIES.home
  return (
    <PhoneFrame tone={tone} label={`Kinly — ${tab} screen`}>
      <Comp key={tab} />
      <TabBar active={tab} onChange={interactive ? setTab : () => {}} />
    </PhoneFrame>
  )
}

/* Static preview for cards (no interaction, click passes through) */
export const KinlyPreview = ({ start = 'home' }) => (
  <div className="kn-static">
    <KinlyApp start={start} interactive={false} />
  </div>
)

/* Each entry starts the interactive app on a given tab (detail page) */
export const KINLY_SCREENS = {
  home:     () => <KinlyApp start="home" />,
  track:    () => <KinlyApp start="track" />,
  ai:       () => <KinlyApp start="ai" />,
  children: () => <KinlyApp start="children" />,
  shop:     () => <KinlyApp start="shop" />,
}
