import { Link } from 'react-router-dom'
import {
  FigmaButton,
  FigmaChip,
  FigmaInputField,
  FigmaMarketplaceProductCard,
  FigmaTextarea,
} from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { mileageProducts } from '../../mocks/studentMileageFlow'
import './student-mileage-flow.css'

// Figma frame: "수강생 — 마일리지 상품 신청 (/student/mileage/products)"
// 마일리지 상품 목록과 구매 요청 입력 폼을 보여주는 화면입니다.
export function StudentMileageProductsPage() {
  return (
    <section className="student-mileage-products-page">
      <header className="student-mileage-products-page__head">
        <div className="student-mileage-products-page__title">
          <h2>상품 목록</h2>
          <span>6개</span>
        </div>
        <Link className="figma-button figma-button--secondary" to={ROUTES.studentMileageHistory}>
          신청 내역
        </Link>
      </header>

      <div className="student-mileage-filter">
        {['전체', '기프티콘', '도서', '온라인 강의'].map((label, index) => (
          <FigmaChip key={label} selected={index === 0}>
            {label}
          </FigmaChip>
        ))}
      </div>

      <div className="student-mileage-product-grid">
        {mileageProducts.map((product) => (
          <FigmaMarketplaceProductCard key={product.name} {...product} />
        ))}
      </div>

      <section className="student-mileage-request-card">
        <h2>구매 요청 입력</h2>
        <div className="student-mileage-request-card__fields">
          <FigmaInputField label="상품 링크" placeholder="https://..." />
          <FigmaInputField label="신청 가격" placeholder="가격 입력" />
          <FigmaTextarea label="매니저에게 남길 메모" placeholder="구매 목적이나 확인이 필요한 내용을 적어주세요." />
        </div>
        <div className="student-mileage-request-card__submit">
          <FigmaButton>요청 제출</FigmaButton>
        </div>
      </section>
    </section>
  )
}
