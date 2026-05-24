import { FigmaButton, FigmaStatusBadge } from '../../components/figma/common'
import { studentMileage } from '../../mocks/studentMileage'
import './student-mileage.css'

// Figma의 "수강생 — 내 마일리지 (/student/mileage)" 프레임을 구현하는 페이지입니다.
// 상품 신청과 전체 내역 버튼은 아직 실제 기능 없이, 현재 보유/사용 현황을 mock 데이터로 재현합니다.
export function StudentMileagePage() {
  return (
    <section className="student-mileage" aria-label="내 마일리지">
      <div className="student-mileage__kpis">
        {studentMileage.kpis.map((kpi) => (
          <article className="student-mileage-kpi" key={kpi.label}>
            <p>{kpi.label}</p>
            <strong>{kpi.value}</strong>
            <i />
            <span>{kpi.helper}</span>
          </article>
        ))}
      </div>

      <div className="student-mileage__overview">
        <section className="student-mileage-panel student-mileage-panel--history">
          <header>
            <h2>최근 적립·사용 내역</h2>
            <FigmaButton kind="secondary">전체 내역</FigmaButton>
          </header>

          <div className="student-mileage-history">
            {studentMileage.history.map((item) => (
              <article className="student-mileage-history__item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.meta}</p>
                </div>
                <FigmaStatusBadge tone={item.badge.tone}>{item.badge.label}</FigmaStatusBadge>
              </article>
            ))}
          </div>
        </section>

        <section className="student-mileage-panel student-mileage-panel--products">
          <h2>구매 가능 상품</h2>

          <div className="student-mileage-products">
            {studentMileage.products.map((product) => (
              <article className="student-mileage-product" key={product.title}>
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.limit}</p>
                </div>
                <FigmaButton>신청</FigmaButton>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="student-mileage-panel student-mileage-panel--limits">
        <h2>타입별 사용 한도</h2>

        <div className="student-mileage-limits">
          {studentMileage.limits.map((limit) => (
            <div className="student-mileage-limit" key={limit.title}>
              <span>{limit.title}</span>
              <div aria-hidden="true">
                <i style={{ width: `${limit.percent}%` }} />
              </div>
              <strong>{limit.value}</strong>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
