import { profile } from '../data'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="ticket">
          <div className="ticket-fields">
            <div>
              role
              <span>{profile.role.toLowerCase()}</span>
            </div>
            <div>
              based in
              <span>{profile.basedIn}</span>
            </div>
            <div>
              status
              <span>{profile.status}</span>
            </div>
            <div>
              stack
              <span>{profile.stack}</span>
            </div>
          </div>

          <div className="hero-main">
            <p className="hero-role">{profile.name.toLowerCase()}</p>
            <h1 className="hero-name">{profile.headline}</h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-links">
              <a href="#projects">See the work</a>
              <a href={`mailto:${profile.email}`} className="primary">
                Email me
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <svg
          className="route-svg"
          viewBox="0 0 920 90"
          preserveAspectRatio="none"
          role="presentation"
          aria-hidden="true"
        >
          <path className="route-path" d="M 20 45 C 200 45, 260 15, 460 45 S 720 75, 900 45" />
          <circle className="route-dot d1" cx={20} cy={45} r={5} />
          <circle className="route-dot d2" cx={460} cy={45} r={5} />
          <circle className="route-dot d3" cx={900} cy={45} r={5} />
          <text x={8} y={70} className="route-label">
            pharma → data
          </text>
          <text x={400} y={20} className="route-label">
            full stack, 2025
          </text>
          <text x={820} y={70} className="route-label">
            next stop
          </text>
        </svg>
      </div>
    </header>
  )
}
