import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../styles/SiloScreens.css'

/* ──────────────────────────────────────────────
   SILO — hand-built dashboard mockups of the AI
   features. The real dashboard sits behind the
   client's login, so these recreate its look from
   the public homepage preview: grey sidebar, black
   actions, grey cards, colour-coded priority tags.

   Every screen is drawn on a fixed 1100×700 canvas
   and scaled down to fit by <SiloMockFrame>, so it
   reads like a real screenshot at any width.
   ────────────────────────────────────────────── */

const CANVAS_W = 1100

const PATHS = {
  dashboard: 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z',
  tickets:   'M4 6h16M4 12h16M4 18h10',
  team:      'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M17 11a3 3 0 1 0 0-6M22 21a5 5 0 0 0-4-4.9',
  templates: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4',
  bot:       'M5 8h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zM12 8V4.5M9 13v1M15 13v1',
  settings:  'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1',
  sparkle:   'M12 3l1.8 4.6 4.7 1.9-4.7 1.8L12 16l-1.8-4.7-4.7-1.8 4.7-1.9L12 3zM19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z',
  send:      'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z',
  check:     'M5 13l4 4L19 7',
  refresh:   'M21 12a9 9 0 1 1-2.6-6.4M21 4v5h-5',
  file:      'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5',
  chevron:   'M6 9l6 6 6-6',
  search:    'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
  bell:      'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0',
}

const Icon = ({ name, size = 14, stroke = 1.7 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={PATHS[name]} />
  </svg>
)

const NAV = [
  ['dashboard', 'Dashboard'],
  ['tickets',   'Tickets'],
  ['team',      'Team'],
  ['templates', 'Templates'],
  ['bot',       'AI Agent'],
  ['settings',  'Settings'],
]

/* ── App chrome shared by every screen ── */
const Shell = ({ active, crumb, title, badge, actions, children }) => (
  <div className="sl-app">
    <aside className="sl-side">
      <div className="sl-logo"><span className="sl-logo__mark">⬡</span>SILO</div>
      <nav className="sl-nav">
        {NAV.map(([key, label]) => (
          <div key={key} className={`sl-nav__item${key === active ? ' is-active' : ''}`}>
            <Icon name={key} size={15} />
            {label}
            {key === 'bot' && <span className="sl-nav__ai">AI</span>}
          </div>
        ))}
      </nav>
      <div className="sl-user">
        <span className="sl-avatar">SL</span>
        <div className="sl-user__meta"><b>Sarah Lee</b><small>Legal Ops</small></div>
      </div>
    </aside>

    <main className="sl-main">
      <header className="sl-head">
        <div>
          <div className="sl-crumb">{crumb}</div>
          <div className="sl-title">{title}{badge}</div>
        </div>
        <div className="sl-head__right">
          <span className="sl-iconbtn"><Icon name="search" size={15} /></span>
          <span className="sl-iconbtn sl-iconbtn--dot"><Icon name="bell" size={15} /></span>
          {actions}
        </div>
      </header>
      <div className="sl-body">{children}</div>
    </main>
  </div>
)

const Field = ({ label, value, select, children }) => (
  <div className="sl-field">
    <span className="sl-field__label">{label}</span>
    <div className={`sl-input${select ? ' sl-input--select' : ''}`}>
      {children || value}
      {select && <Icon name="chevron" size={13} />}
    </div>
  </div>
)

/* ════════════════ 1. Personalised AI bot builder ════════════════ */
const KNOWLEDGE = [
  { name: 'NDA Playbook',                 type: 'Template', on: true },
  { name: 'Vendor MSA — standard terms',  type: 'Template', on: true },
  { name: 'Contract renewal policy.pdf',  type: 'Document', on: true },
  { name: 'Employee handbook.pdf',        type: 'Document', on: false },
]

export const SiloBotBuilder = () => (
  <Shell
    active="bot"
    crumb="AI Agent / Bots"
    title="Contracts Assistant"
    badge={<span className="sl-pill">Draft</span>}
    actions={<>
      <span className="sl-btn sl-btn--ghost"><Icon name="sparkle" size={13} />Test bot</span>
      <span className="sl-btn">Publish bot</span>
    </>}
  >
    <div className="sl-split sl-split--bot">
      <div className="sl-stack">
        <section className="sl-card">
          <div className="sl-label">Identity</div>
          <div className="sl-row">
            <span className="sl-botav"><Icon name="bot" size={22} /></span>
            <div className="sl-grow"><Field label="Bot name" value="Contracts Assistant" /></div>
          </div>
          <div className="sl-field">
            <span className="sl-field__label">Tone</span>
            <div className="sl-chips">
              <span className="sl-chip is-on">Formal</span>
              <span className="sl-chip">Friendly</span>
              <span className="sl-chip">Concise</span>
            </div>
          </div>
        </section>

        <section className="sl-card">
          <div className="sl-label">Instructions</div>
          <div className="sl-textarea">
            You help employees with contract questions. Answer only from our approved
            templates and playbooks, keep answers short, and always cite the source.
            Never give final legal sign-off — hand that to the legal team.
          </div>
        </section>

        <section className="sl-card">
          <div className="sl-label">Knowledge <span className="sl-muted">3 of 4 sources on</span></div>
          <div className="sl-list">
            {KNOWLEDGE.map(k => (
              <div className="sl-list__row" key={k.name}>
                <span className="sl-fileic"><Icon name={k.type === 'Template' ? 'templates' : 'file'} size={13} /></span>
                <span className="sl-grow">{k.name}</span>
                <span className="sl-muted">{k.type}</span>
                <span className={`sl-toggle${k.on ? ' is-on' : ''}`} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="sl-card sl-chat">
        <div className="sl-chat__head">
          <span className="sl-botav sl-botav--sm"><Icon name="bot" size={14} /></span>
          <b>Preview</b>
          <span className="sl-live">Live preview</span>
        </div>
        <div className="sl-chat__log">
          <div className="sl-msg sl-msg--me">Can we sign a vendor NDA without sending it to legal?</div>
          <div className="sl-msg sl-msg--bot">
            Yes — if it's our standard mutual NDA with no edits. Use the <b>Mutual NDA</b> template
            and send it for signature. If the vendor changed any clause, it needs a legal review.
            <span className="sl-source"><Icon name="file" size={11} />NDA Playbook · §2</span>
          </div>
          <div className="sl-msg sl-msg--me">They changed the term to 10 years.</div>
          <div className="sl-msg sl-msg--bot">
            That's outside our standard of 2–5 years, so I've drafted a ticket for the contracts team.
            <div className="sl-ticketlet">
              <span className="sl-tag sl-tag--high">HIGH</span>
              <b>Review NDA term — Northwind Ltd</b>
              <small>Contracts · drafted by AI</small>
            </div>
          </div>
        </div>
        <div className="sl-chat__input">
          <span>Ask the bot something…</span>
          <span className="sl-send"><Icon name="send" size={13} /></span>
        </div>
      </section>
    </div>
  </Shell>
)

/* ════════════════ 2. AI-improved descriptions ════════════════ */
export const SiloImproveDescription = () => (
  <Shell
    active="tickets"
    crumb="Tickets / New ticket"
    title="New Ticket"
    actions={<>
      <span className="sl-btn sl-btn--ghost">Cancel</span>
      <span className="sl-btn">Create ticket</span>
    </>}
  >
    <div className="sl-split sl-split--desc">
      <section className="sl-card sl-form">
        <Field label="Title" value="Review vendor contract for IT services" />
        <div className="sl-grid3">
          <Field label="Category" value="Contracts" select />
          <Field label="Priority" select><span className="sl-tag sl-tag--high">HIGH</span></Field>
          <Field label="Assign to" value="Legal team" select />
        </div>
        <div className="sl-field">
          <span className="sl-field__label">Description</span>
          <div className="sl-textarea sl-textarea--draft">
            need someone to look at the IT vendor contract asap. renewal is next month i think
            and pricing went up?? also not sure about the termination part
            <span className="sl-caret" />
          </div>
          <div className="sl-toolbar">
            <span className="sl-btn sl-btn--ai"><Icon name="sparkle" size={13} />Improve with AI</span>
            <span className="sl-muted">146 characters</span>
          </div>
        </div>
        <div className="sl-field">
          <span className="sl-field__label">Attachments</span>
          <div className="sl-attach">
            <span className="sl-fileic"><Icon name="file" size={13} /></span>
            IT-Services-MSA.pdf <small>412 KB</small>
          </div>
        </div>
      </section>

      <section className="sl-card sl-ai">
        <div className="sl-ai__head">
          <span className="sl-ai__badge"><Icon name="sparkle" size={13} />AI suggestion</span>
          <div className="sl-tabs">
            <span className="is-on">Clearer</span><span>Formal</span><span>Shorter</span>
          </div>
        </div>
        <div className="sl-ai__text">
          <p>Please review our IT services vendor contract before it renews next month. Two points need attention:</p>
          <ul>
            <li><b>Pricing</b> — the renewal quote is higher than our current rate.</li>
            <li><b>Termination</b> — confirm our notice period and exit terms.</li>
          </ul>
          <p>Flag anything that differs from our standard vendor terms.</p>
        </div>
        <div className="sl-ai__changes">
          <span className="sl-muted">What changed</span>
          <div className="sl-chips">
            <span className="sl-chip sl-chip--soft">Added context</span>
            <span className="sl-chip sl-chip--soft">Listed the asks</span>
            <span className="sl-chip sl-chip--soft">Fixed grammar</span>
          </div>
        </div>
        <div className="sl-ai__actions">
          <span className="sl-btn"><Icon name="check" size={13} />Replace description</span>
          <span className="sl-btn sl-btn--ghost">Insert below</span>
          <span className="sl-btn sl-btn--text"><Icon name="refresh" size={13} />Try again</span>
        </div>
      </section>
    </div>
  </Shell>
)

/* ════════════════ 3. AI suggestions while drafting legal documents ════════════════ */
const Suggestion = ({ tone, kind, title, text, action, active }) => (
  <div className={`sl-sug sl-sug--${tone}${active ? ' is-active' : ''}`}>
    <span className="sl-sug__kind">{kind}</span>
    <b>{title}</b>
    <p>{text}</p>
    <div className="sl-sug__actions">
      <span className="sl-btn sl-btn--sm">{action}</span>
      <span className="sl-btn sl-btn--sm sl-btn--text">Dismiss</span>
    </div>
  </div>
)

export const SiloDocSuggestions = () => (
  <Shell
    active="templates"
    crumb="Templates / Mutual NDA"
    title="Mutual NDA — Northwind Ltd"
    badge={<span className="sl-pill sl-pill--blue">Drafting</span>}
    actions={<>
      <span className="sl-btn sl-btn--ghost">Share</span>
      <span className="sl-btn">Send for signature</span>
    </>}
  >
    <div className="sl-split sl-split--doc">
      <div className="sl-paper">
        <div className="sl-paper__toolbar">
          <span><b>B</b></span><span><i>I</i></span><span><u>U</u></span>
          <span className="sl-sep" />
          <span>H1</span><span>H2</span>
          <span className="sl-sep" />
          <span>• List</span><span>1. List</span>
          <span className="sl-paper__ask"><Icon name="sparkle" size={12} />Ask AI</span>
        </div>
        <div className="sl-paper__page">
          <div className="sl-doc__h">MUTUAL NON-DISCLOSURE AGREEMENT</div>
          <p>
            This Agreement is made on 4 November 2026 between <b>Acme Inc.</b> (“Acme”) and{' '}
            <b>Northwind Ltd</b> (“Northwind”), each a “Party”.
          </p>
          <div className="sl-doc__s">1. Definitions</div>
          <p>
            “Confidential Information” means any non-public information disclosed by a Party or
            its <mark className="sl-mark sl-mark--amber">Affiliates</mark> in connection with the Purpose.
          </p>
          <div className="sl-doc__s">2. Obligations</div>
          <p>
            The Receiving Party shall protect Confidential Information with at least reasonable
            care and use it only to evaluate the proposed business relationship.
          </p>
          <div className="sl-doc__s">3. Term</div>
          <p>
            <mark className="sl-mark sl-mark--red">This Agreement remains in effect for ten (10) years</mark>{' '}
            from the Effective Date.
          </p>
          <div className="sl-insert">
            <span className="sl-insert__tag"><Icon name="sparkle" size={11} />Suggested clause</span>
            <div className="sl-doc__s">4. Return of Information</div>
            <p>
              On written request, each Party will return or destroy the other Party's
              Confidential Information within thirty (30) days.
            </p>
          </div>
        </div>
      </div>

      <aside className="sl-card sl-sugs">
        <div className="sl-sugs__head">
          <span className="sl-ai__badge"><Icon name="sparkle" size={13} />AI Suggestions</span>
          <span className="sl-count">3</span>
        </div>
        <small className="sl-muted">Checked against your NDA playbook</small>
        <Suggestion tone="red" kind="Risk" title="Term is longer than standard"
          text="10 years is outside the 2–5 years in your playbook." action="Change to 3 years" />
        <Suggestion tone="amber" kind="Clarity" title="“Affiliates” isn't defined"
          text="Add a definition so it's clear who is covered." action="Add definition" />
        <Suggestion tone="green" kind="Missing clause" title="Return of information"
          text="Say what happens to shared information when the relationship ends." action="Insert clause" active />
        <div className="sl-sugs__foot">12 clauses checked · just now</div>
      </aside>
    </div>
  </Shell>
)

/* ════════════════ Frame + zoom ════════════════ */

/* Browser-window frame that scales a 1100px-wide screen to whatever width it gets. */
export const SiloMockFrame = ({ screen: Screen, label, onOpen }) => {
  const viewRef = useRef(null)

  useLayoutEffect(() => {
    const el = viewRef.current
    if (!el) return
    const apply = () => el.style.setProperty('--sl-scale', String(el.clientWidth / CANVAS_W))
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <figure
      className={`pd-shot sl-frame${onOpen ? '' : ' sl-frame--static'}`}
      onClick={onOpen}
      role={onOpen ? 'button' : undefined}
      aria-label={label}
    >
      <div className="pd-shot__bar"><span /><span /><span /></div>
      <div className="pd-shot__frame sl-frame__view" ref={viewRef}>
        <div className="sl-canvas" aria-hidden="true"><Screen /></div>
        {onOpen && (
          <span className="pd-shot__zoom" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
            </svg>
          </span>
        )}
      </div>
    </figure>
  )
}

/* Full-size view of a mock screen, using the same backdrop as the image lightbox. */
export const SiloMockZoom = ({ screen, label, onClose }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    setTimeout(onClose, 300) // match the fade-out
  }, [onClose])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [close])

  return (
    <div className={`pd-lightbox sl-zoom${open ? ' pd-lightbox--open' : ''}`} onClick={close} role="dialog" aria-label={label}>
      <button className="pd-lightbox__close" onClick={close} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <div className="sl-zoom__scroll">
        <div className="sl-zoom__stage" onClick={(e) => e.stopPropagation()}>
          <SiloMockFrame screen={screen} label={label} />
        </div>
      </div>
    </div>
  )
}
