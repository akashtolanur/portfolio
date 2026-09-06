import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">03</span>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="manifest">
          {skills.map((row, i) => (
            <div className="manifest-row" key={i}>
              <div className="manifest-label">{row.label}</div>
              <div className="manifest-value">{row.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
