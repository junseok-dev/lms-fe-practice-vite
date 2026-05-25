import { Link } from 'react-router-dom'
import { FigmaButton, FigmaChip, FigmaNoticeBanner, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import './student-missing-pages.css'

const peerAvatars = [
  { initial: '이', color: 'teal', selected: true },
  { initial: '박', color: 'orange', selected: false },
  { initial: '최', color: 'blue', selected: false },
  { initial: '김', color: 'purple', selected: false },
  { initial: '정', color: 'red', selected: false },
  { initial: '한', color: 'teal', selected: false },
] as const

const reputationAxes = [
  {
    title: '기술',
    description: '문제 해결과 구현 역량',
    score: 5,
    comment: 'MSA 구조 설계에서 도메인 분리를 명확하게 잡았고, Kafka 컨슈머 이슈도 멱등성 키로 깔끔하게 해결했습니다.',
  },
  {
    title: '책임감',
    description: '맡은 일을 끝까지 완수하는 태도',
    score: 4,
    comment: '',
  },
  {
    title: '소통',
    description: '명확하고 협조적인 커뮤니케이션',
    score: 5,
    comment: '회의에서 결정 사항을 잘 정리해 공유했고, 코드 리뷰 피드백이 구체적이라 팀에 도움이 됐습니다.',
  },
  {
    title: '성장',
    description: '학습 속도와 꾸준한 개선 노력',
    score: 4,
    comment: '',
  },
  {
    title: '팀워크',
    description: '팀에 기여하고 협력하는 태도',
    score: 5,
    comment: '',
  },
] as const

const recommendations = ['적극 추천', '추천', '보류'] as const

function StarRating({ score }: { score: number }) {
  return (
    <div className="student-peer-reputation-stars" aria-label={`${score}.0점`}>
      <span aria-hidden="true" className="student-peer-reputation-stars__icons">
        {'★'.repeat(score)}
        {'☆'.repeat(5 - score)}
      </span>
      <strong>{score}.0</strong>
    </div>
  )
}

// Figma frame: "수강생 — PeerReputation 5축 평가 (/student/peer-reputation)"
// 동기수 동료의 5축 협업 평판과 추천도를 익명으로 제출하는 화면입니다.
export function StudentPeerReputationPage() {
  return (
    <section className="student-workflow-page student-peer-reputation-page">
      <FigmaNoticeBanner title="같은 기수 동료만 평가할 수 있습니다">
        본인은 평가 대상이 아니며, 같은 기간 동료 재제출 시 마지막 제출 내용으로 덮어쓰기됩니다.
      </FigmaNoticeBanner>

      <section className="student-peer-reputation-card">
        <h2>평가 대상</h2>
        <div className="student-peer-reputation-target-row">
          <div className="student-peer-reputation-target">
            <span className="student-peer-reputation-avatar student-peer-reputation-avatar--teal">이</span>
            <div>
              <strong>이서연</strong>
              <span>백엔드 부트캠프 · 3기</span>
            </div>
          </div>
          <div className="student-peer-reputation-picker">
            <span>다른 동료 선택</span>
            <div>
              {peerAvatars.map((avatar) => (
                <button
                  className={`student-peer-reputation-mini-avatar student-peer-reputation-avatar--${avatar.color} ${
                    avatar.selected ? 'is-selected' : ''
                  }`}
                  key={avatar.initial}
                  type="button"
                >
                  {avatar.initial}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="student-peer-reputation-card student-peer-reputation-rating-card">
        <div className="student-peer-reputation-card-head">
          <h2>5축 평가</h2>
          <span>각 축을 별점으로 평가하고 코멘트를 남겨주세요</span>
        </div>
        {reputationAxes.map((axis, index) => (
          <article className="student-peer-reputation-axis" key={axis.title}>
            {index > 0 ? <div className="student-peer-reputation-divider" /> : null}
            <div className="student-peer-reputation-axis-head">
              <div>
                <h3>{axis.title}</h3>
                <p>{axis.description}</p>
              </div>
              <StarRating score={axis.score} />
            </div>
            <FigmaTextarea
              aria-label={`${axis.title} 코멘트`}
              defaultValue={axis.comment || undefined}
              placeholder="이 축에 대한 코멘트를 남겨주세요 (선택)"
            />
          </article>
        ))}
      </section>

      <section className="student-peer-reputation-card">
        <div className="student-peer-reputation-card-head">
          <h2>추천도</h2>
          <span>이 동료를 함께 일할 사람으로 추천하시겠어요?</span>
        </div>
        <div className="student-peer-reputation-chip-row" aria-label="추천도">
          {recommendations.map((item) => (
            <FigmaChip key={item} selected={item === '적극 추천'}>
              {item}
            </FigmaChip>
          ))}
        </div>
      </section>

      <div className="student-peer-reputation-divider" />
      <footer className="student-peer-reputation-actions">
        <Link className="figma-button figma-button--secondary" to={ROUTES.studentPeerEvaluations}>
          취소
        </Link>
        <div>
          <span>같은 기간 재제출 시 마지막 평가로 덮어쓰기됩니다</span>
          <FigmaButton>평가 저장</FigmaButton>
        </div>
      </footer>
    </section>
  )
}
