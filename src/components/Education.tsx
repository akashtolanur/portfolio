import { education } from '../data'

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">05</span>
          <h2 className="section-title">Education</h2>
        </div>
        {education.map((e, i) => (
          <div className="edu-row" key={i}>
            <span className="edu-name">{e.name}</span>
            <span className="edu-sub">{e.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
