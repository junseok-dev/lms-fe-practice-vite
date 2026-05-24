import { Link } from 'react-router-dom'

export type FigmaQuizTableRowProps = {
  action: string
  actionTo?: string | null
  grading: string
  meta?: string
  period: string
  periodSub: string
  questions: string
  status: string
  statusTone: 'ok' | 'info' | 'warning' | 'neutral'
  subject: string
  time: string
  title: string
}

// Figma의 "공통 - Quiz Table Row / Variants"를 코드로 옮긴 행 컴포넌트입니다.
// 퀴즈 목록처럼 같은 컬럼 구조를 반복하는 화면에서 행 단위 UI를 재사용합니다.
export function FigmaQuizTableRow({
  action,
  actionTo,
  grading,
  meta,
  period,
  periodSub,
  questions,
  status,
  statusTone,
  subject,
  time,
  title,
}: FigmaQuizTableRowProps) {
  return (
    <article className="figma-quiz-table-row">
      <div className="figma-quiz-table-row__name">
        <p>
          <strong>{subject}</strong>
          {meta ? <span>{meta}</span> : null}
        </p>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{period}</p>
        <small>{periodSub}</small>
      </div>
      <span>{time}</span>
      <span>{questions}</span>
      <span>{grading}</span>
      <span className={`figma-quiz-badge figma-quiz-badge--${statusTone}`}>{status}</span>
      {actionTo ? (
        <Link className={status === '응시 가능' ? 'figma-quiz-action is-primary' : 'figma-quiz-action'} to={actionTo}>
          {action}
        </Link>
      ) : (
        <button className="figma-quiz-action" type="button">
          {action}
        </button>
      )}
    </article>
  )
}
