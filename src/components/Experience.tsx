import { roles } from '../data'
import { renderBold } from '../utils'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num">02</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          {roles.map((role, i) => (
            <div className={`role${role.past ? ' past' : ''}`} key={i}>
              <div className="role-head">
                <div>
                  <h3 className="role-title">{role.title}</h3>
                  <p className="role-org">{role.org}</p>
                </div>
                <span className="role-dates">{role.dates}</span>
              </div>
              <ul>
                {role.bullets.map((bullet, j) => (
                  <li key={j}>{renderBold(bullet)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
