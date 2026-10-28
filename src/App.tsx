import {
  ArrowRight,
  BellRing,
  BookHeart,
  Bot,
  Check,
  ChevronRight,
  Download,
  Heart,
  HelpCircle,
  Menu,
  MessageCircleHeart,
  Quote,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react'
import { useState } from 'react'
import embryoBloom from './assets/embryo-bloom.svg'

const offerings = [
  {
    title: 'Daily affirmations',
    description: 'Gentle words to help quiet the spiral and begin each day feeling grounded.',
    icon: Sparkles,
    tone: 'rose',
  },
  {
    title: 'Medication reminders',
    description: 'Simple, private nudges so one more thing can be taken off your mind.',
    icon: BellRing,
    tone: 'sage',
  },
  {
    title: 'Frequently asked questions',
    description: 'Clear, compassionate answers for the questions that tend to arrive at 2 a.m.',
    icon: HelpCircle,
    tone: 'sand',
  },
  {
    title: 'Downloadable worksheets',
    description: 'Practical tools for coping, planning and making room for what you need.',
    icon: Download,
    tone: 'plum',
  },
  {
    title: 'Ask Me Anything AI',
    description: 'A calm place to ask the awkward, small or overwhelming questions anytime.',
    icon: Bot,
    tone: 'sage',
  },
  {
    title: 'Private journal',
    description: 'Capture every feeling, milestone and moment in a space that belongs to you.',
    icon: BookHeart,
    tone: 'rose',
  },
  {
    title: 'Find your community',
    description: 'Connect with women who understand this particular kind of waiting.',
    icon: UsersRound,
    tone: 'sand',
    featured: true,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Beta Wait home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <Heart size={16} strokeWidth={2.2} />
          </span>
          <span>Beta Wait</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#support" onClick={closeMenu}>How we help</a>
          <a href="#community" onClick={closeMenu}>Community</a>
          <a className="button button-small button-dark" href="#join" onClick={closeMenu}>
            Join the waitlist <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Support for the two-week wait</div>
            <h1 id="hero-heading">
              You don’t have to
              <em>wait alone.</em>
            </h1>
            <p className="hero-intro">
              Ten days can feel like forever. Beta Wait offers a softer place to land
              between embryo transfer and pregnancy test.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#join">
                Be first to join <ArrowRight size={18} />
              </a>
              <a className="text-link" href="#about">
                Learn how it works <ChevronRight size={17} />
              </a>
            </div>
            <div className="trust-note">
              <div className="avatar-stack" aria-hidden="true">
                <span>J</span><span>M</span><span>A</span>
              </div>
              <p><strong>Made with care,</strong><br />for every kind of journey.</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="A gentle scientific illustration of an embryo">
            <span className="orbit orbit-one" aria-hidden="true" />
            <span className="orbit orbit-two" aria-hidden="true" />
            <img src={embryoBloom} alt="" />
            <div className="floating-note note-top">
              <span className="note-icon"><Sparkles size={16} /></span>
              <span><strong>Today’s reminder</strong>You are doing enough.</span>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-icon sage"><Check size={16} /></span>
              <span><strong>Day 4</strong>One day at a time.</span>
            </div>
          </div>
        </section>

        <section className="comfort-strip" aria-label="Beta Wait benefits">
          <span><Check size={15} /> Private and judgment-free</span>
          <span><Check size={15} /> Available whenever you need it</span>
          <span><Check size={15} /> Designed around your ten-day wait</span>
        </section>

        <section className="about section" id="about">
          <div className="about-label">
            <span>01</span>
            <p>About us</p>
          </div>
          <div className="about-content">
            <p className="eyebrow"><span /> A little less waiting alone</p>
            <h2>The in-between can be the hardest part.</h2>
            <div className="about-columns">
              <p>
                After an embryo transfer, life is expected to carry on as usual. But
                there’s nothing usual about counting every day, noticing every feeling
                and holding hope alongside fear.
              </p>
              <p>
                Beta Wait was created to hold space for all of it—with emotional support,
                practical tools and real connection, all in one thoughtful place.
              </p>
            </div>
          </div>
        </section>

        <section className="support-section section" id="support">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> Here for the whole wait</p>
              <h2>Support for whatever<br />today brings.</h2>
            </div>
            <p>
              No two days feel exactly the same. Choose what helps in the moment,
              and leave the rest for later.
            </p>
          </div>

          <div className="offering-grid">
            {offerings.map(({ title, description, icon: Icon, tone, featured }) => (
              <article className={`offering-card ${featured ? 'offering-featured' : ''}`} key={title}>
                <div className={`offering-icon ${tone}`}><Icon size={23} strokeWidth={1.8} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <a href="#join" aria-label={`Explore ${title}`}>
                  Explore <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="community section" id="community">
          <div className="community-card">
            <div className="quote-mark" aria-hidden="true"><Quote size={28} /></div>
            <blockquote>
              “It’s a strange kind of waiting—full of hope, fear, and a thousand tiny
              questions. We made Beta Wait so you never have to hold all of that by yourself.”
            </blockquote>
            <p className="quote-byline">The Beta Wait team</p>
            <div className="community-badge">
              <MessageCircleHeart size={19} />
              <span><strong>Real connection</strong> with women who get it</span>
            </div>
          </div>
        </section>

        <section className="join section" id="join">
          <div className="join-copy">
            <p className="eyebrow light"><span /> Coming soon</p>
            <h2>A softer place to spend the wait.</h2>
            <p>Join our early access list and be among the first to experience Beta Wait.</p>
          </div>
          <form className="join-form" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="Your email address" required />
            <button type="submit" className="button button-light">
              Keep me posted <ArrowRight size={17} />
            </button>
            <p>Just thoughtful updates. No noise, no pressure.</p>
          </form>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><Heart size={16} /></span>
          <span>Beta Wait</span>
        </a>
        <p>Emotional support for the space between transfer and test.</p>
        <div className="footer-links">
          <a href="#about">Privacy</a>
          <a href="#about">Terms</a>
          <span>© {new Date().getFullYear()} Beta Wait</span>
        </div>
        <p className="disclaimer">
          Beta Wait offers emotional and practical support, not medical advice.
          Always contact your care team with medical questions or concerns.
        </p>
      </footer>
    </div>
  )
}

export default App
