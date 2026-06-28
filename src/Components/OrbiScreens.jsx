import React, { useState } from 'react'
import '../styles/OrbiScreens.css'

/* ──────────────────────────────────────────────
   Orbi — hand-built, INTERACTIVE React Native
   screen mockups (no screenshots). Recreates the
   real app's premium black/white/off-white UI:
   feed + stories, story viewer, profile grid +
   highlights, chat with reactions, comments sheet
   and the admin panel.
   ────────────────────────────────────────────── */

/* ── Line-icon library ── */
const ICONS = {
  home:    'M3 10.5L12 3l9 7.5M5 9v10h5v-6h4v6h5V9',
  search:  'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
  create:  'M12 5v14M5 12h14',
  heart:   'M12 21s-7-4.5-9.2-8.3A5 5 0 0 1 12 6a5 5 0 0 1 9.2 6.7C19 16.5 12 21 12 21z',
  profile: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 21a7 7 0 0 1 14 0',
  comment: 'M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 1 1 21 11.5z',
  send:    'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z',
  menu:    'M3 6h18M3 12h18M3 18h18',
  bookmark:'M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z',
  grid:    'M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z',
  more:    'M5 12h.01M12 12h.01M19 12h.01',
  shield:  'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z',
  ban:     'M5 5l14 14M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
  check:   'M5 13l4 4L19 7',
  close:   'M6 6l12 12M18 6L6 18',
  plus:    'M12 5v14M5 12h14',
}

const Icon = ({ name, size = 20, stroke = 1.8, fill = false }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}
    fill={fill ? 'currentColor' : 'none'} stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    <path d={ICONS[name]} />
  </svg>
)

/* Real Unsplash photos so the feed & grid look like a live app.
   `img(id, w)` builds a CDN URL at the requested size. */
const img = (id, w = 240) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${w}&q=70`

// Photos used in the profile grid (curated, on-theme).
const GRID_IMGS = [
  '1506905925346-21bda4d32df4', // valley
  '1565299624946-b28f40a0ae38', // pizza
  '1517836357463-d25dfeac3438', // gym
  '1561070791-2526d30994b5',    // design
  '1470071459604-3b5ec3a7fe05', // fog
  '1512820790803-83ca734da794', // books
  '1502602898657-3e91760cbb34', // paris
  '1444723121867-7a241cacace9', // city lights
  '1501785888041-af3ef285b470', // lake
]

/* ── The Orbi orbit logo mark ── */
const OrbiMark = ({ size = 26 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="9" fill="none" />
    <circle cx="78" cy="28" r="10" fill="currentColor" />
  </svg>
)

/* ── Avatar (initial circle, optional tone) ── */
const Av = ({ t, tone = '#E9E9E6', col = '#6B6B6B', size = 34, ring }) => (
  <span className={`ob-av${ring ? ' ob-av--ring' : ''}`}
    style={{ width: size, height: size, background: tone, color: col }}>
    {t}
  </span>
)

/* ── iPhone frame ── */
export const PhoneFrame = ({ children, tone = 'light', label }) => (
  <div className={`ob-phone ob-phone--${tone}`}>
    <div className="ob-phone__notch" />
    <div className="ob-phone__screen">
      <div className="ob-status">
        <span className="ob-status__time">9:41</span>
        <span className="ob-status__icons">
          <svg viewBox="0 0 18 12" width="17"><path d="M1 8h2v3H1zM5 6h2v5H5zM9 4h2v7H9zM13 2h2v9h-2z" fill="currentColor"/></svg>
          <svg viewBox="0 0 16 12" width="16"><path d="M8 2.5C5.6 2.5 3.4 3.4 1.8 5l1.1 1.1C4.2 4.8 6 4 8 4s3.8.8 5.1 2.1L14.2 5C12.6 3.4 10.4 2.5 8 2.5z" fill="currentColor"/></svg>
          <span className="ob-status__batt" />
        </span>
      </div>
      {label && <span className="ob-srlabel">{label}</span>}
      {children}
    </div>
    <div className="ob-phone__home" />
  </div>
)

/* ── Bottom tab bar ── */
const TAB_DEFS = [
  { id: 'feed',    icon: 'home'    },
  { id: 'search',  icon: 'search'  },
  { id: 'create',  icon: 'create'  },
  { id: 'notifs',  icon: 'heart'   },
  { id: 'profile', icon: 'profile' },
]

const TabBar = ({ active, onChange }) => (
  <div className="ob-tabs" role="tablist">
    {TAB_DEFS.map(t => (
      <button key={t.id} type="button" role="tab" aria-selected={active === t.id}
        className={`ob-tab${active === t.id ? ' ob-tab--active' : ''}${t.id === 'create' ? ' ob-tab--mid' : ''}`}
        onClick={() => onChange(t.id)}>
        <Icon name={t.icon} size={t.id === 'create' ? 27 : 23}
          stroke={active === t.id ? 2.1 : 1.8} fill={active === t.id && t.id === 'heart'} />
        {active === t.id && t.id !== 'create' && <span className="ob-tab__dot" />}
      </button>
    ))}
  </div>
)

/* ════════ Screen bodies ════════ */

/* 1. Feed — story tray + a post with like/comment */
const FeedBody = () => {
  const [liked, setLiked] = useState(false)
  const stories = [
    { t: 'You', av: 'K', add: true },
    { t: 'aarav', av: 'A', seen: false },
    { t: 'sofia', av: 'S', seen: false },
    { t: 'maya',  av: 'M', seen: true  },
    { t: 'noah',  av: 'N', seen: true  },
  ]
  return (
    <div className="ob-body">
      <div className="ob-topbar">
        <span className="ob-logo"><OrbiMark size={24} /><b>Orbi</b></span>
        <span className="ob-topbar__r">
          <span className="ob-iconbtn ob-badge-wrap"><Icon name="send" size={19} /><i className="ob-badge">2</i></span>
          <span className="ob-iconbtn"><Icon name="menu" size={20} /></span>
        </span>
      </div>

      {/* Story tray */}
      <div className="ob-tray">
        {stories.map(s => (
          <button className="ob-story" key={s.t}>
            <span className={`ob-story__ring${s.seen ? ' ob-story__ring--seen' : ''}${s.add ? ' ob-story__ring--add' : ''}`}>
              <Av t={s.av} size={48} />
              {s.add && <i className="ob-story__add"><Icon name="plus" size={11} /></i>}
            </span>
            <span className="ob-story__t">{s.t}</span>
          </button>
        ))}
      </div>

      {/* A post */}
      <div className="ob-post">
        <div className="ob-post__head">
          <Av t="N" size={32} />
          <span className="ob-post__user">@noah.shoots</span>
          <span className="ob-post__time">2h</span>
        </div>
        <div className="ob-post__img">
          <img className="ob-post__photo" src={img('1470071459604-3b5ec3a7fe05', 600)} alt="" loading="lazy" />
        </div>
        <div className="ob-post__actions">
          <button className={`ob-act${liked ? ' ob-act--on' : ''}`} onClick={() => setLiked(v => !v)}>
            <Icon name="heart" size={23} fill={liked} />
          </button>
          <button className="ob-act"><Icon name="comment" size={22} /></button>
          <button className="ob-act"><Icon name="send" size={21} /></button>
        </div>
        <span className="ob-post__likes">{liked ? '129 likes' : '128 likes'}</span>
        <span className="ob-post__cap"><b>noah.shoots</b> Misty mornings hit different 🌫️</span>
        <span className="ob-post__view">View all 14 comments</span>
      </div>
    </div>
  )
}

/* 2. Profile — header, highlights, post grid */
const ProfileBody = () => {
  const [tab, setTab] = useState('grid')
  return (
    <div className="ob-body">
      <div className="ob-topbar">
        <span className="ob-logo"><OrbiMark size={22} /><b>Orbi</b></span>
        <span className="ob-topbar__r">
          <span className="ob-iconbtn"><Icon name="send" size={19} /></span>
          <span className="ob-iconbtn"><Icon name="menu" size={20} /></span>
        </span>
      </div>

      <div className="ob-prof">
        <div className="ob-prof__top">
          <Av t="K" size={72} tone="#0A0A0A" col="#fff" ring />
          <div className="ob-prof__stats">
            <div><b>24</b><span>Posts</span></div>
            <div><b>1.2k</b><span>Followers</span></div>
            <div><b>318</b><span>Following</span></div>
          </div>
        </div>
        <span className="ob-prof__name">Kuldeep Kant</span>
        <span className="ob-prof__handle">@kuldeep</span>
        <span className="ob-prof__bio">Building things on the internet · Orbi ◐</span>

        <div className="ob-prof__btns">
          <button className="ob-prof__edit">Edit Profile</button>
          <button className="ob-prof__share">Share</button>
        </div>

        {/* Highlights */}
        <div className="ob-hl">
          {[{ t: 'New', add: true }, { t: 'Travel' }, { t: 'Work' }, { t: 'Food' }].map(h => (
            <div className="ob-hl__i" key={h.t}>
              <span className={`ob-hl__c${h.add ? ' ob-hl__c--add' : ''}`}>
                {h.add ? <Icon name="plus" size={18} /> : <Icon name="bookmark" size={16} fill />}
              </span>
              <span className="ob-hl__t">{h.t}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ob-prof__tabs">
        <button className={`ob-prof__tab${tab === 'grid' ? ' ob-prof__tab--on' : ''}`} onClick={() => setTab('grid')}>
          <Icon name="grid" size={18} />
        </button>
        <button className={`ob-prof__tab${tab === 'saved' ? ' ob-prof__tab--on' : ''}`} onClick={() => setTab('saved')}>
          <Icon name="bookmark" size={18} />
        </button>
      </div>

      <div className="ob-grid">
        {GRID_IMGS.map((id, i) => (
          <span className="ob-grid__c" key={i}>
            <img src={img(id, 160)} alt="" loading="lazy" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* 3. Story viewer — full-bleed, progress bars + like */
const StoryBody = () => {
  const [liked, setLiked] = useState(false)
  return (
    <div className="ob-story-view">
      <div className="ob-sv__bars">
        <span className="ob-sv__bar"><i style={{ width: '100%' }} /></span>
        <span className="ob-sv__bar"><i style={{ width: '64%' }} /></span>
        <span className="ob-sv__bar" />
      </div>
      <div className="ob-sv__head">
        <Av t="S" size={32} />
        <span className="ob-sv__user">@sofia.cooks</span>
        <span className="ob-sv__time">3h</span>
        <button className="ob-sv__x"><Icon name="close" size={20} /></button>
      </div>
      <div className="ob-sv__photo" />
      <div className="ob-sv__cap">Pizza night 🍕</div>
      <div className="ob-sv__foot">
        <button className={`ob-sv__like${liked ? ' ob-sv__like--on' : ''}`} onClick={() => setLiked(v => !v)}>
          <Icon name="heart" size={30} fill={liked} />
        </button>
      </div>
    </div>
  )
}

/* 4. Chat — themed bubbles, reactions */
const ChatBody = () => {
  const [react, setReact] = useState(null)
  const msgs = [
    { me: false, t: 'That pizza post made me so hungry 😂' },
    { me: true,  t: 'Haha come over, I’ll make you one!' },
    { me: false, t: 'Deal. Next time I’m in town 🍕' },
    { me: true,  t: 'Bring stories from your travels!' },
  ]
  return (
    <div className="ob-body ob-body--chat">
      <div className="ob-chat__head">
        <Icon name="search" size={0} />
        <Av t="S" size={32} />
        <div>
          <span className="ob-chat__name">@sofia.cooks</span>
          <span className="ob-chat__status">Active now</span>
        </div>
        <button className="ob-chat__bg"><Icon name="more" size={20} /></button>
      </div>

      <div className="ob-chat__body">
        {msgs.map((m, i) => (
          <div className={`ob-mwrap${m.me ? ' ob-mwrap--me' : ''}`} key={i}>
            <button className={`ob-bub${m.me ? ' ob-bub--me' : ''}`} onClick={() => setReact(i)}>
              {m.t}
            </button>
            {react === i && (
              <div className="ob-react">
                {['❤️','😂','👍','😮','😢','🙏'].map(e => <span key={e}>{e}</span>)}
              </div>
            )}
            {i === 2 && <span className="ob-bub__rx">❤️</span>}
          </div>
        ))}
      </div>

      <div className="ob-chat__input">
        <span>Message…</span>
        <button className="ob-chat__send"><Icon name="send" size={16} /></button>
      </div>
    </div>
  )
}

/* 5. Admin panel — manage people + ban controls */
const AdminBody = () => {
  const [banned, setBanned] = useState({})
  const people = [
    { n: 'aarav.travels', sub: 'Aarav Mehta', av: 'A' },
    { n: 'sofia.cooks',   sub: 'Sofia Rossi', av: 'S' },
    { n: 'liam.fitness',  sub: 'Liam Carter', av: 'L' },
    { n: 'maya.designs',  sub: 'Maya Patel',  av: 'M' },
  ]
  return (
    <div className="ob-body">
      <div className="ob-admin__head">
        <span className="ob-admin__title"><Icon name="shield" size={18} /> Manage People</span>
        <span className="ob-admin__badge">Superadmin</span>
      </div>
      <div className="ob-admin__search"><Icon name="search" size={14} /> Search users</div>

      {people.map(p => (
        <div className="ob-admin__row" key={p.n}>
          <Av t={p.av} size={40} />
          <div className="ob-admin__info">
            <span className="ob-admin__n">@{p.n}{banned[p.n] && <i className="ob-admin__tag">Banned</i>}</span>
            <span className="ob-admin__s">{p.sub}</span>
          </div>
          <button
            className={`ob-admin__btn${banned[p.n] ? ' ob-admin__btn--un' : ''}`}
            onClick={() => setBanned(b => ({ ...b, [p.n]: !b[p.n] }))}>
            {banned[p.n] ? 'Unban' : 'Ban'}
          </button>
        </div>
      ))}
    </div>
  )
}

/* 6. Notifications — live follow / like / comment activity */
const NotifBody = () => {
  const base = [
    { who: 'aarav.travels', av: 'A', txt: 'started following you', t: '2m', kind: 'follow' },
    { who: 'sofia.cooks',   av: 'S', txt: 'liked your post',       t: '8m', kind: 'like'   },
    { who: 'maya.designs',  av: 'M', txt: 'commented: “love this 😍”', t: '14m', kind: 'comment' },
    { who: 'liam.fitness',  av: 'L', txt: 'liked your story',      t: '22m', kind: 'like'   },
    { who: 'noah.shoots',   av: 'N', txt: 'started following you', t: '1h',  kind: 'follow' },
  ]
  const incoming = [
    { who: 'emma.reads', av: 'E', txt: 'liked your post', t: 'now', kind: 'like' },
    { who: 'aria.codes', av: 'R', txt: 'started following you', t: 'now', kind: 'follow' },
  ]
  const [items, setItems] = useState(base)
  const [n, setN] = useState(0)

  const push = () => {
    const next = incoming[n % incoming.length]
    setItems(it => [{ ...next, fresh: true }, ...it])
    setN(v => v + 1)
  }

  return (
    <div className="ob-body">
      <div className="ob-topbar">
        <span className="ob-nt-title">Notifications</span>
        <button className="ob-nt-live" onClick={push}>
          <span className="ob-nt-live__dot" /> Live
        </button>
      </div>

      {items.map((it, i) => (
        <div className={`ob-nt${it.fresh ? ' ob-nt--fresh' : ''}`} key={i}>
          <span className="ob-nt__av-wrap">
            <Av t={it.av} size={40} />
            <i className={`ob-nt__k ob-nt__k--${it.kind}`}>
              <Icon name={it.kind === 'follow' ? 'profile' : it.kind === 'like' ? 'heart' : 'comment'}
                size={10} fill={it.kind === 'like'} stroke={2} />
            </i>
          </span>
          <span className="ob-nt__txt">
            <b>{it.who}</b> {it.txt}
            <span className="ob-nt__t"> · {it.t}</span>
          </span>
          {it.kind === 'follow' && <button className="ob-nt__follow">Follow</button>}
        </div>
      ))}
    </div>
  )
}

const BODIES = {
  feed:    { Comp: FeedBody,    tone: 'light', tab: 'feed'    },
  profile: { Comp: ProfileBody, tone: 'light', tab: 'profile' },
  story:   { Comp: StoryBody,   tone: 'dark',  tab: null, bare: true },
  chat:    { Comp: ChatBody,    tone: 'light', tab: null },
  notifs:  { Comp: NotifBody,   tone: 'light', tab: 'notifs'  },
  admin:   { Comp: AdminBody,   tone: 'light', tab: 'profile' },
}

/* App shell — the bottom tab bar switches between the main screens; the
   detail/overlay screens (story, chat) are shown without it. */
export const OrbiApp = ({ start = 'feed', interactive = true }) => {
  const [screen, setScreen] = useState(start)
  const def = BODIES[screen] || BODIES.feed
  const { Comp, tone, tab, bare } = def

  // Bottom-tab ids → screen keys (others have no tab).
  const onTab = (id) => {
    if (id === 'profile') setScreen('profile')
    else if (id === 'notifs') setScreen('notifs')
    else if (id === 'feed') setScreen('feed')
    else setScreen('feed')
  }

  return (
    <PhoneFrame tone={tone} label={`Orbi — ${screen} screen`}>
      <Comp key={screen} />
      {!bare && tab && (
        <TabBar active={tab} onChange={interactive ? onTab : () => {}} />
      )}
    </PhoneFrame>
  )
}

/* Static preview for the Work cards (no interaction). */
export const OrbiPreview = ({ start = 'feed' }) => (
  <div className="ob-static">
    <OrbiApp start={start} interactive={false} />
  </div>
)

/* Each entry boots the interactive app on a given screen (used on detail page). */
export const ORBI_SCREENS = {
  feed:    () => <OrbiApp start="feed" />,
  profile: () => <OrbiApp start="profile" />,
  story:   () => <OrbiApp start="story" />,
  chat:    () => <OrbiApp start="chat" />,
  notifs:  () => <OrbiApp start="notifs" />,
  admin:   () => <OrbiApp start="admin" />,
}
