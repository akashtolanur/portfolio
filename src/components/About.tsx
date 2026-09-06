import { aboutCopy, stats } from '../data'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">01</span>
          <h2 className="section-title">About</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            {aboutCopy.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="stat-block">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <span className="num">{s.num}</span>
                <span className="label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
