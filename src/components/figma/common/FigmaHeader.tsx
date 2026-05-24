import { Link } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes'
import './figma-common.css'

type FigmaHeaderProps = {
  avatarLabel: string
  description: string
  title: string
}

// Figma component: "공통 - Header / Base"
// 역할별 화면에서 제목, 설명, 검색, 알림, 프로필 진입을 같은 구조로 맞추기 위한 공통 헤더입니다.
export function FigmaHeader({ avatarLabel, description, title }: FigmaHeaderProps) {
  return (
    <header className="figma-header">
      <div className="figma-header__headline">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="figma-header__actions">
        <label className="figma-header__search">
          <span>검색</span>
          <input aria-label="검색" placeholder="검색" />
        </label>
        <button aria-label="알림" className="figma-header__icon" type="button">
          <span />
        </button>
        <Link aria-label="마이 프로필" className="figma-header__avatar" to={ROUTES.studentProfile}>
          {avatarLabel}
        </Link>
      </div>
    </header>
  )
}
