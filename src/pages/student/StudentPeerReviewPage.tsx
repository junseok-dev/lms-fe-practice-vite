import { Link } from 'react-router-dom'
import { FigmaNoticeBanner } from '../../components/figma/common'
import { studentPeerReview } from '../../mocks/studentPeerReview'
import './student-peer-review.css'

// Figma frame: "수강생 / 동료 평가 허브".
// PeerTag와 PeerReputation 평가 화면으로 진입하는 수강생용 허브 페이지입니다.
export function StudentPeerReviewPage() {
  return (
    <section className="student-peer-review" aria-label="동료 평가 허브">
      <FigmaNoticeBanner title={studentPeerReview.notice.title}>{studentPeerReview.notice.body}</FigmaNoticeBanner>

      <div className="student-peer-review__actions">
        {studentPeerReview.actions.map((action) => (
          <article className="student-peer-review-card" key={action.title}>
            <span className={`student-peer-review-card__icon student-peer-review-card__icon--${action.iconTone}`}>
              {action.icon}
            </span>
            <h2>{action.title}</h2>
            <p>{action.description}</p>
            <hr />
            <div className="student-peer-review-card__meta">
              <span>{action.availableLabel}</span>
              <strong>{action.availableCount}</strong>
              <i />
              <em>{action.completed}</em>
            </div>
            <Link className="figma-button figma-button--primary student-peer-review-card__button" to={action.href}>
              {action.buttonLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
