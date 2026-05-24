import { FigmaChip, FigmaStatusBadge } from '../../components/figma/common'
import { mileageHistoryRows } from '../../mocks/studentMileageFlow'
import './student-mileage-flow.css'

// Figma frame: "수강생 — 마일리지 사용 내역 (/student/mileage/history)"
// 적립, 사용, 구매 요청의 처리 상태를 한 테이블에서 확인하는 화면입니다.
export function StudentMileageHistoryPage() {
  return (
    <section className="student-mileage-history-page">
      <div className="student-mileage-filter">
        {['전체', '적립', '사용', '구매 요청', '승인 대기', '반려'].map((label, index) => (
          <FigmaChip key={label} selected={index === 0}>
            {label}
          </FigmaChip>
        ))}
      </div>

      <div className="student-mileage-history-table">
        <div className="student-mileage-history-table__row is-head">
          <span>날짜</span>
          <span>구분</span>
          <span>내용</span>
          <span>마일리지</span>
          <span>상태</span>
          <span>처리 메모</span>
        </div>
        {mileageHistoryRows.map((row) => (
          <div className="student-mileage-history-table__row" key={`${row.date}-${row.title}`}>
            <span>{row.date}</span>
            <FigmaStatusBadge tone={row.typeTone}>{row.type}</FigmaStatusBadge>
            <span className="student-mileage-history-table__title">{row.title}</span>
            <span className={`student-mileage-history-table__mileage ${row.positive ? 'is-positive' : ''}`}>
              {row.mileage}
            </span>
            <FigmaStatusBadge tone={row.statusTone}>{row.status}</FigmaStatusBadge>
            <span>{row.memo}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
