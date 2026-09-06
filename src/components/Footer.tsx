import { profile } from '../data'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <h2 className="footer-head">Let's talk.</h2>
        <p className="footer-sub">
          Open to full-time and remote roles — happy to walk through how any of this was built.
        </p>
        <div className="footer-fields">
          <div>
            <span>email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <span>github</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              {profile.githubLabel}
            </a>
          </div>
          <div>
            <span>linkedin</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              {profile.linkedinLabel}
            </a>
          </div>
          <div>
            <span>based in</span>
            <span style={{ color: 'var(--on-ink)' }}>{profile.basedIn}</span>
          </div>
        </div>
        <p className="footer-fine">Built by {profile.name}.</p>
      </div>
    </footer>
  )
}
