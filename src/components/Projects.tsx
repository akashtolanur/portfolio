import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">04</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects">
          {projects.map((p, i) => (
            <div className="stub" key={i}>
              <div className="stub-top">
                <div>
                  <div className="stub-code">{p.code}</div>
                  <h3>{p.name}</h3>
                </div>
              </div>
              <p>{p.description}</p>
              <hr className="stub-divider" />
              <div className="stub-tags">
                {p.tags.map((tag, j) => (
                  <span key={j}>{tag}</span>
                ))}
              </div>
              <div className={`stub-status${p.isPrivate ? ' private' : ''}`}>{p.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
