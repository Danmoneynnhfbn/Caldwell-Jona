const navItems = ['About', 'Employers', 'Candidates', 'Services', 'How It Works', 'Global Reach']

const proof = [
  ['15+', 'Years in executive search'],
  ['40+', 'Industries served'],
  ['500+', 'Executive placements'],
  ['4', 'Active global markets'],
]

const pillars = [
  ['01', 'Private pipeline', 'Targeted outreach to leaders who are not scanning job boards, backed by a network built across functions, sectors, and regions.'],
  ['02', 'Two-sided intelligence', 'We understand what makes a senior leader move and what a hiring committee needs to see before it says yes.'],
  ['03', 'Open terms', 'The scope, timeline, and fee are agreed in writing before the work starts. No hidden success fee.'],
]

const method = ['Audit', 'Position', 'Source', 'Calibrate', 'Negotiate', 'Land']

export default function App() {
  return (
    <div className="site-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand-wrap">
            <img src="/logo.jpeg" alt="Caldwell Career Consulting logo" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">Caldwell</span>
              <span className="brand-sub">Career Consulting</span>
            </div>
          </div>

          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
                {item}
              </a>
            ))}
          </nav>

          <a className="nav-button" href="#contact">Start a Private Conversation <span>↗</span></a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Caldwell Career Consulting / Independent talent sourcing</span>
              <h1>Talent for the moments that change the business.</h1>
              <p>
                Confidential executive search for ambitious companies. Private career representation for senior leaders. One founder-led practice with a global point of view.
              </p>
              <div className="cta-row">
                <a className="primary-btn" href="#employers">For employers <span>↗</span></a>
                <a className="secondary-btn" href="#candidates">For executives <span>↗</span></a>
              </div>
              <div className="hero-note"><span className="pulse" /> United States / United Kingdom / Europe / UAE</div>
            </div>

            <div className="hero-panel">
              <div className="panel-label">01 / Founder-led search</div>
              <img
                src="/logo.jpeg"
                alt="Caldwell Career Consulting mark"
              />
              <div className="panel-caption">The right leader is rarely the one who applied first.</div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats-row">
            {proof.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </section>

        <section className="content-section" id="about">
          <div className="container">
            <div className="section-intro split-intro">
              <div><span className="eyebrow dark">The agency advantage</span><h2>Most firms see half the hiring equation.</h2></div>
              <p>We built Caldwell to see both sides. That means better outreach for companies and better positioning for the executives they want to hire.</p>
            </div>

            <div className="pillar-grid">
              {pillars.map(([number, title, text]) => <article className="pillar" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="content-section dark-section" id="employers">
          <div className="container">
            <div className="section-intro split-intro light-intro">
              <div><span className="eyebrow">For employers</span><h2>When the hire cannot be public.</h2></div>
              <p>Board succession, a sensitive replacement, a new market, or a leadership gap that cannot wait. We source with discretion and move with intent.</p>
            </div>
            <div className="mandate-row"><div><span>RETAINED SEARCH</span><strong>C-suite / VP / Board</strong></div><div><span>GLOBAL REACH</span><strong>US / UK / Europe / UAE</strong></div><div><span>ENGAGEMENT</span><strong>Private and precise</strong></div></div>
            <a className="text-link" href="#contact">Initiate a private mandate <span>↗</span></a>
          </div>
        </section>

        <section className="content-section" id="candidates">
          <div className="container">
            <div className="section-intro split-intro">
              <div><span className="eyebrow dark">For executives</span><h2>Your next move deserves more than a polished resume.</h2></div>
              <p>We run the work behind the scenes: positioning, targeted applications, warm outreach, interview preparation, and negotiation.</p>
            </div>
            <div className="candidate-callout"><div className="callout-number">9</div><div><span className="eyebrow dark">Target outcome</span><h3>Conversations with decision-makers in your first 90 days.</h3><p>Open fees. No percentage of salary. One direct line to the person running your search.</p></div><a className="primary-btn" href="#contact">Claim a seat <span>↗</span></a></div>
          </div>
        </section>

        <section className="content-section method-section" id="how-it-works">
          <div className="container cta-panel">
            <div>
              <span className="eyebrow dark">Ready for what is next?</span>
              <h2>The Caldwell method.</h2>
              <p>Six steps. One private partner. No hand-off to a junior desk.</p>
            </div>
            <div className="method-list">{method.map((step, index) => <div key={step}><span>0{index + 1}</span>{step}</div>)}</div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div>
            <h4>Caldwell Career Consulting</h4>
            <p>Independent global talent sourcing for companies. Private career representation for senior leaders.</p>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#employers">Employers</a></li>
              <li><a href="#candidates">Candidates</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Retained Search</li>
              <li>Executive Coaching</li>
              <li>Global Reach</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:jonathan@caldwellcareerconsulting.com">jonathan@caldwellcareerconsulting.com</a></li>
              <li><a href="mailto:jonathan@caldwellcareerconsulting.com">Start a conversation ↗</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
