import { FigmaButton, FigmaChip, FigmaNoticeBanner, FigmaStatusBadge } from '../../components/figma/common'
import './student-missing-pages.css'

const peers = [
  { name: '이서연', initial: '이', status: '미부여', done: false, selected: true, color: 'teal' },
  { name: '박지호', initial: '박', status: '부여 완료', done: true, selected: false, color: 'orange' },
  { name: '최유나', initial: '최', status: '미부여', done: false, selected: false, color: 'blue' },
  { name: '김도현', initial: '김', status: '부여 완료', done: true, selected: false, color: 'purple' },
  { name: '정민서', initial: '정', status: '미부여', done: false, selected: false, color: 'red' },
  { name: '한지우', initial: '한', status: '부여 완료', done: true, selected: false, color: 'teal' },
] as const

const peerTags = [
  { label: '#꼼꼼한_기록자', selected: true },
  { label: '#논리적인_설득', selected: false },
  { label: '#분위기_메이커', selected: false },
  { label: '#끈기있는_해결사', selected: true },
  { label: '#빠른_피드백', selected: false },
  { label: '#문서화_장인', selected: true },
  { label: '#침착한_디버거', selected: true },
  { label: '#배려심_깊은_리뷰어', selected: false },
  { label: '#주도적인_리더', selected: false },
  { label: '#호기심_많은', selected: false },
  { label: '#일정_지킴이', selected: false },
  { label: '#질문_잘하는', selected: false },
] as const

// Figma frame: "수강생 — PeerTag 부여 (/student/peer-tag)"
// 동기수 동료에게 익명 협업 태그를 부여하는 페이지입니다.
export function StudentPeerTagPage() {
  return (
    <section className="student-workflow-page student-peer-tag-page">
      <FigmaNoticeBanner title="PeerTag는 익명으로 부여됩니다">
        받는 동료에게 부여자가 표시되지 않습니다. 본인에게는 부여할 수 없으며, 한 동료에게 기수당 1회만 부여할 수 있습니다.
      </FigmaNoticeBanner>

      <div className="student-peer-tag-section-title">
        <h2>동기수 동료</h2>
        <span>23명</span>
      </div>

      <section className="student-peer-tag-grid" aria-label="동기수 동료">
        {peers.map((peer) => (
          <button
            className={`student-peer-tag-peer-card ${peer.selected ? 'is-selected' : ''}`}
            key={peer.name}
            type="button"
          >
            <span className={`student-peer-tag-avatar student-peer-tag-avatar--${peer.color}`}>{peer.initial}</span>
            <strong>{peer.name}</strong>
            <FigmaStatusBadge tone={peer.done ? 'ok' : 'neutral'}>{peer.status}</FigmaStatusBadge>
          </button>
        ))}
      </section>

      <section className="student-peer-tag-panel">
        <div className="student-peer-tag-panel-head">
          <h2>이서연 님에게 태그 부여</h2>
          <p>어울리는 협업 태그를 골라주세요. 한 동료에게 최대 5개까지 선택할 수 있습니다.</p>
        </div>
        <div className="student-peer-tag-chip-list" aria-label="협업 태그">
          {peerTags.map((tag) => (
            <FigmaChip key={tag.label} selected={tag.selected}>
              {tag.label}
            </FigmaChip>
          ))}
        </div>
        <div className="student-peer-tag-divider" />
        <footer className="student-peer-tag-actions">
          <span>선택 4 / 5</span>
          <FigmaButton>태그 저장</FigmaButton>
        </footer>
      </section>
    </section>
  )
}
