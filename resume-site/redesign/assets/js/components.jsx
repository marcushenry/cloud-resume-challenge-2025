// All page components, shared between Hermes and Callum themes.
// CSS in site.css does the heavy lifting per-theme.

const { useState, useEffect } = React;

/* ─────────────────────────── Top Nav ─────────────────────────── */
function TopNav({ theme, onThemeToggle }) {
  return (
    <nav className="nav">
      <a href="#" className="brand">
        {theme === "callum" && <span className="brand-mark"></span>}
        {theme === "hermes" ? "Marcus Henry" : "Marcus Henry"}
        <span className="brand-sub">Cloud · Calgary</span>
      </a>
      <div style={{display:"flex", alignItems:"center", gap: 12}}>
        <ul className="nav-links">
          <li><a href="#projects" className="is-active">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={onThemeToggle} aria-label="Toggle theme" title="Toggle theme">
          {theme === "hermes" ? (
            // sun icon (switch to light)
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
          ) : (
            // moon icon
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

/* ─────────────────────────── Hermes Hero ─────────────────────────── */
function HermesHero({ data }) {
  return (
    <section className="hero-hermes">
      <div className="hero-hermes-chapter">
        {data.hermesIntro.chapter} · A Working Ledger · {data.location}
      </div>
      <div className="hero-hermes-grid">
        <figure className="hero-hermes-illustration">
          <WandererSVG />
          <figcaption className="hero-hermes-caption">Pl. I — A figure in the foothills.</figcaption>
        </figure>
        <div className="hero-hermes-text">
          <h1 className="hero-hermes-h1">
            {data.name}
            <span className="hero-hermes-h1-italic">{data.role.toLowerCase()}.</span>
          </h1>
          <p className="hero-hermes-tagline">{data.hermesIntro.tagline}</p>
          <div className="hero-hermes-body">
            {data.hermesIntro.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="hero-hermes-meta">
            <span><span className="live-dot"></span><strong>Open</strong> to {data.status.where} roles</span>
            <span style={{opacity:0.4}}>—</span>
            <span>Updated <strong>MMXXVI</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Callum Hero ─────────────────────────── */
function CallumHero({ data }) {
  return (
    <section className="hero-callum">
      <div className="hero-callum-blob"></div>
      <div className="hero-callum-content">
        <span className="hero-callum-eyebrow">
          <span className="live-dot"></span>
          Open to Cloud / DevOps roles
        </span>
        <h1 className="hero-callum-h1">
          {data.callumIntro.greeting}
          <br/>
          {data.callumIntro.line1}
          <br/>
          <em>{data.callumIntro.line2}</em>
        </h1>
        <p className="hero-callum-sub">{data.callumIntro.sub}</p>
        <div className="hero-callum-cta">
          <a href="#projects" className="btn-pill">
            See my work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn-pill btn-ghost">Say hi</a>
        </div>
      </div>
    </section>
  );
}

/* Hermes wanderer illustration — clean linework */
function WandererSVG() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="h-hatch-1" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" strokeWidth="0.4" opacity="0.5"/>
        </pattern>
        <pattern id="h-hatch-2" patternUnits="userSpaceOnUse" width="3.5" height="3.5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="3.5" stroke="currentColor" strokeWidth="0.4" opacity="0.8"/>
        </pattern>
        <pattern id="h-dots" patternUnits="userSpaceOnUse" width="7" height="7">
          <circle cx="2" cy="2" r="0.5" fill="currentColor" opacity="0.45"/>
        </pattern>
      </defs>

      {/* sky frame */}
      <g stroke="currentColor" fill="none">
        {/* stars */}
        <g fill="currentColor" stroke="none" opacity="0.8">
          <circle cx="60" cy="50" r="1"/>
          <circle cx="140" cy="35" r="0.7"/>
          <circle cx="220" cy="65" r="1.2"/>
          <circle cx="300" cy="40" r="0.7"/>
          <circle cx="340" cy="90" r="0.9"/>
          <circle cx="80" cy="100" r="0.6"/>
        </g>

        {/* moon */}
        <g opacity="0.85">
          <circle cx="285" cy="115" r="28" strokeWidth="0.5"/>
          <circle cx="285" cy="115" r="40" strokeWidth="0.3" opacity="0.4"/>
          <circle cx="285" cy="115" r="54" strokeWidth="0.2" opacity="0.25"/>
        </g>

        {/* horizon lines */}
        <g strokeWidth="0.3" opacity="0.4">
          <line x1="20" y1="170" x2="380" y2="170"/>
          <line x1="60" y1="190" x2="340" y2="190"/>
        </g>

        {/* distant mountains */}
        <g opacity="0.6">
          <path d="M0 270 L 50 220 L 100 250 L 150 210 L 210 240 L 270 200 L 330 230 L 400 215 L 400 290 L 0 290 Z"
                fill="url(#h-hatch-1)" strokeWidth="0.6"/>
        </g>

        {/* middle ridge */}
        <g>
          <path d="M0 350 L 50 320 L 110 340 L 170 280 L 230 320 L 290 270 L 350 310 L 400 295 L 400 380 L 0 380 Z"
                fill="url(#h-hatch-2)" strokeWidth="0.8" opacity="0.92"/>
          <path d="M170 280 L 200 330 M 230 320 L 260 360 M 290 270 L 320 320"
                strokeWidth="0.4" opacity="0.55"/>
        </g>

        {/* foreground peaks */}
        <g>
          <path d="M0 410 L 60 380 L 110 400 L 160 340 L 215 390 L 270 360 L 330 400 L 380 380 L 400 395 L 400 460 L 0 460 Z"
                fill="currentColor" fillOpacity="0.18" strokeWidth="1"/>
          <path d="M160 340 L 185 380 M 175 360 L 200 395 M 270 360 L 300 400 M 285 380 L 310 410"
                strokeWidth="0.5" opacity="0.6"/>
        </g>

        {/* ground */}
        <g>
          <path d="M0 430 L 400 430 L 400 500 L 0 500 Z" fill="url(#h-dots)" opacity="0.6"/>
          <g strokeWidth="0.4" opacity="0.5">
            <line x1="20" y1="460" x2="130" y2="455"/>
            <line x1="160" y1="465" x2="280" y2="458"/>
            <line x1="310" y1="463" x2="380" y2="455"/>
            <line x1="30" y1="478" x2="180" y2="472"/>
            <line x1="220" y1="482" x2="370" y2="476"/>
          </g>
        </g>

        {/* path */}
        <g strokeWidth="0.5" opacity="0.55" strokeDasharray="2,3">
          <path d="M 50 490 Q 130 460 195 405" fill="none"/>
        </g>

        {/* lone figure */}
        <g transform="translate(200, 388)">
          <line x1="-8" y1="4" x2="-14" y2="38" strokeWidth="0.9"/>
          <circle cx="0" cy="0" r="3" fill="currentColor" stroke="none"/>
          <path d="M-3 4 L -5 18 L -7 38 L 7 38 L 5 18 L 3 4 Z" fill="currentColor" stroke="none"/>
          <path d="M-5 7 Q -12 23 -9 38" strokeWidth="0.6" fill="none"/>
          <path d="M5 7 Q 12 23 9 38" strokeWidth="0.6" fill="none"/>
        </g>
      </g>
    </svg>
  );
}

/* ─────────────────────────── Tools row ─────────────────────────── */
const TOOL_ICON_COLORS = {
  aws:        { bg: "#ff9900", color: "#000" },
  terraform:  { bg: "#7b42bc", color: "#fff" },
  docker:     { bg: "#2496ed", color: "#fff" },
  github:     { bg: "#000",    color: "#fff" },
  python:     { bg: "#3776ab", color: "#fff" },
  nextjs:     { bg: "#000",    color: "#fff" },
  microsoft:  { bg: "#0078d4", color: "#fff" },
  powershell: { bg: "#012456", color: "#fff" },
};
function ToolsRow({ data }) {
  return (
    <div className="tools-row">
      {data.tools.map(t => {
        const c = TOOL_ICON_COLORS[t.icon] || { bg: "#666", color: "#fff" };
        return (
          <span key={t.name} className="tool-chip">
            <span className="tool-chip-icon" style={{background: c.bg, color: c.color}}>
              {t.name.charAt(0)}
            </span>
            {t.name}
          </span>
        );
      })}
    </div>
  );
}

/* ─────────────────────────── Section header ─────────────────────────── */
function SectionTitle({ id, eyebrow, title, helper }) {
  return (
    <div id={id} className="section-title-row">
      <div>
        <div className="section-title-eyebrow">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      {helper && <p className="section-title-helper">{helper}</p>}
    </div>
  );
}

/* ─────────────────────────── About ─────────────────────────── */
function About({ data, theme }) {
  return (
    <section className="section">
      <SectionTitle
        id="about"
        eyebrow={theme === "hermes" ? "§ II — The Subject" : "About"}
        title={theme === "hermes" ? "On the work, briefly." : "A bit about me."}
      />
      <div className="about">
        {data.about.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}

/* ─────────────────────────── Browser preview content ─────────────────────────── */
function BrowserPreview({ kind, url }) {
  return (
    <div className="browser-window">
      <div className="browser-bar">
        <div className="browser-bar-dots"><span></span><span></span><span></span></div>
        <div className="browser-bar-url">{url}</div>
      </div>
      <div className="browser-body">
        {kind === "tracker" ? <TrackerPreview/> : <ResumePreview/>}
      </div>
    </div>
  );
}

/* Tiny visual mocks — not pixel-perfect, just evocative */
function TrackerPreview() {
  return (
    <div style={{padding: "10px 12px", fontSize: "9px", fontFamily: "system-ui, sans-serif", color: "#222", height: "100%", background: "#fff"}}>
      <div style={{display:"flex", alignItems:"center", gap: 4, marginBottom: 8}}>
        <div style={{width: 14, height: 14, borderRadius: 3, background: "linear-gradient(135deg, #c8102e, #8b0016)"}}></div>
        <div style={{fontWeight: 800, fontSize: "10px", letterSpacing: "0.05em"}}>CMNT SQUAD TRACKER</div>
        <div style={{marginLeft: "auto", display:"flex", gap: 8, fontSize: "7.5px", color: "#666"}}>
          <span style={{color: "#c8102e", fontWeight: 600}}>LOCKS</span>
          <span>CONTENTION</span>
        </div>
      </div>
      <div style={{
        background: "linear-gradient(135deg, #c8102e, #8b0016)",
        borderRadius: 4,
        padding: "8px 10px",
        color: "#fff",
        marginBottom: 6,
      }}>
        <div style={{fontWeight: 800, fontSize: "11px", marginBottom: 2}}>SQUAD LOCKS</div>
        <div style={{fontSize: "7px", opacity: 0.8}}>Near-certain picks · updated 03:00 MT</div>
      </div>
      {[
        { name: "Jonathan David", club: "Lille", min: 90, goals: 1, rating: 7.6 },
        { name: "Alphonso Davies", club: "Bayern", min: 87, goals: 0, rating: 7.1 },
        { name: "Stephen Eustáquio", club: "Porto", min: 90, goals: 0, rating: 6.8 },
        { name: "Tajon Buchanan", club: "Villarreal", min: 78, goals: 0, rating: 6.9 },
      ].map((p, i) => (
        <div key={i} style={{
          display: "grid",
          gridTemplateColumns: "1fr 50px 30px 30px",
          gap: 4,
          padding: "4px 6px",
          fontSize: "8px",
          borderBottom: "1px solid #eee",
          background: i % 2 ? "#f9fafb" : "transparent",
        }}>
          <div style={{display:"flex", alignItems:"center", gap: 4}}>
            <div style={{width: 10, height: 10, borderRadius: 999, background: "#ddd"}}></div>
            <span style={{fontWeight: 600}}>{p.name}</span>
          </div>
          <div style={{color: "#666"}}>{p.club}</div>
          <div style={{textAlign:"right"}}>{p.min}'</div>
          <div style={{textAlign:"right", color: "#c8102e", fontWeight: 600}}>{p.rating}</div>
        </div>
      ))}
    </div>
  );
}
function ResumePreview() {
  return (
    <div style={{padding: "10px 12px", fontSize: "8px", fontFamily: "system-ui, sans-serif", color: "#222", height: "100%", background: "#fafaf7"}}>
      <div style={{display:"flex", alignItems:"center", gap: 6, marginBottom: 10}}>
        <div style={{width: 14, height: 14, borderRadius: 999, background: "linear-gradient(135deg, #d4a85a, #b88636)"}}></div>
        <div style={{fontWeight: 700, fontSize: "10px"}}>marcushenry.ca</div>
        <div style={{marginLeft: "auto", fontSize: "7px", color: "#888"}}>Visitors · 1,287</div>
      </div>
      <div style={{fontSize: "16px", fontWeight: 800, marginBottom: 2, letterSpacing: "-0.01em"}}>Marcus Henry</div>
      <div style={{fontSize: "8.5px", color: "#666", marginBottom: 10}}>Cloud Engineer · Calgary</div>
      <div style={{display:"flex", gap: 4, marginBottom: 10}}>
        <span style={{padding: "2px 6px", borderRadius: 999, background: "#0a0a0a", color: "#fff", fontSize: "6.5px"}}>See my work →</span>
        <span style={{padding: "2px 6px", borderRadius: 999, background: "#fff", border: "1px solid #e5e5e5", fontSize: "6.5px"}}>Resume</span>
      </div>
      <div style={{fontSize: "7px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#999", marginBottom: 4}}>SELECTED WORK</div>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 4}}>
        <div style={{background: "#fff", border: "1px solid #eee", borderRadius: 4, padding: 5}}>
          <div style={{fontWeight: 700, fontSize: "7.5px"}}>CMNT Tracker</div>
          <div style={{fontSize: "6.5px", color: "#888"}}>Next.js · ECS</div>
        </div>
        <div style={{background: "#fff", border: "1px solid #eee", borderRadius: 4, padding: 5}}>
          <div style={{fontWeight: 700, fontSize: "7.5px"}}>Cloud Resume</div>
          <div style={{fontSize: "6.5px", color: "#888"}}>Lambda · S3</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Projects ─────────────────────────── */
function Projects({ data, theme }) {
  return (
    <section className="section">
      <SectionTitle
        id="projects"
        eyebrow={theme === "hermes" ? "§ III — The Work" : "Selected work"}
        title={theme === "hermes" ? "Two small things, built carefully." : "Things I've built."}
        helper={theme === "hermes"
          ? "Both projects ship as production-grade environments — IaC, CI/CD, separate dev and prod."
          : "Two production-style AWS projects from the past year. Each one taught me something I now reach for at work."}
      />
      <div className="project-list">
        {data.projects.map(p => (
          <article key={p.id} className="project">
            <div className="project-num">{p.number}</div>
            <div className="project-meta-col">
              <div className="project-tag">{p.tag}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-sub">{p.sub}</p>
              <div className="project-year">{p.year}</div>
              {theme === "callum" && (
                <div style={{marginTop: "auto", paddingTop: 12}}>
                  <BrowserPreview kind={p.preview.kind} url={p.preview.url} />
                </div>
              )}
              {theme === "callum" && (
                <div className="project-stack">
                  {p.stack.slice(0, 5).map(s => <span key={s}>{s}</span>)}
                </div>
              )}
              {theme === "callum" && (
                <div className="project-links">
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link">
                    Visit ↗
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="project-link is-secondary">
                    Code
                  </a>
                </div>
              )}
            </div>
            {theme === "hermes" && (
              <div className="project-body-col">
                <div className="project-body">
                  <p>{p.blurb}</p>
                </div>
                <ul className="project-bullets">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="project-stack">
                  {p.stack.map(s => <span key={s}>{s}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link">Visit live ↗</a>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="project-link">Source on GitHub</a>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── Skills ─────────────────────────── */
function Skills({ data, theme }) {
  return (
    <section className="section">
      <SectionTitle
        id="skills"
        eyebrow={theme === "hermes" ? "§ IV — The Instruments" : "The stack"}
        title={theme === "hermes" ? "Tools of the trade." : "What I work with."}
      />
      <div className="skills">
        {Object.entries(data.skills).map(([group, items]) => (
          <div key={group} className="skills-group">
            <div className="skills-group-label">{group}</div>
            <div className="skills-group-items">
              {items.map(i => <span key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── Contact ─────────────────────────── */
function Contact({ data, theme }) {
  return (
    <section className="section">
      <SectionTitle
        id="contact"
        eyebrow={theme === "hermes" ? "§ V — Correspondence" : "Get in touch"}
        title={theme === "hermes" ? "By post or wire." : "Let's talk."}
        helper={theme === "hermes"
          ? "If anything here resonates — a project, a role, a question — write to me. I read everything."
          : "Open to Cloud / DevOps roles in Calgary or remote across Canada."}
      />
      <div className="contact-list">
        {data.socials.map(s => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="contact-row">
            <span className="contact-row-label">{s.label}</span>
            <span className="contact-row-handle">{s.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── Footer ─────────────────────────── */
function Footer({ theme }) {
  const [count, setCount] = useState("…");
  useEffect(() => {
    fetch("https://swlscxbqnd.execute-api.us-east-1.amazonaws.com/Prod/hello")
      .then(r => r.ok ? r.json() : null)
      .then(d => setCount(d ? (d.count ?? d.visitors ?? d.value ?? "—").toString() : "—"))
      .catch(() => setCount("—"));
  }, []);
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand">
          {theme === "hermes" ? "Marcus Henry" : "Marcus Henry"}
        </div>
        <div style={{marginTop: 4}}>
          {theme === "hermes" ? "Calgary, MMXXVI" : "Calgary, Alberta · 2026"}
        </div>
      </div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"flex-end", gap: 8}}>
        <span className="visitor-pill" title="Lambda + DynamoDB visitor count">
          <span className="live-dot"></span>
          {theme === "hermes" ? "Visitors · " : "Visitors · "}{count}
        </span>
        <div style={{fontSize: "0.78rem", opacity: 0.7}}>
          {theme === "hermes" ? "S3 · CloudFront · Lambda" : "Hosted on AWS"}
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  TopNav, HermesHero, CallumHero, ToolsRow, About,
  Projects, Skills, Contact, Footer,
});
