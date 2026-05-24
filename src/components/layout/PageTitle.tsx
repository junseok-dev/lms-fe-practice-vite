import './layout.css'

type PageTitleProps = {
  title: string
  description?: string
}

// 각 페이지 상단의 제목 영역입니다.
// 페이지마다 h1 스타일을 반복하지 않도록 공통 컴포넌트로 분리합니다.
export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
