import './figma-common.css'

type FigmaKpiCardProps = {
  helper: string
  label: string
  mark?: string
  tone?: 'positive' | 'warning' | 'neutral'
  unit: string
  value: string
}

// Figma component: "공통 - KPI Card / Component"
// 수치 요약 카드의 텍스트 크기, 간격, 보조 상태 색상을 Figma 기준으로 통일합니다.
export function FigmaKpiCard({ helper, label, mark, tone = 'neutral', unit, value }: FigmaKpiCardProps) {
  return (
    <article className="figma-kpi-card">
      <p>{label}</p>
      <div>
        <strong>{value}</strong>
        <span>{unit}</span>
      </div>
      <small className={`is-${tone}`}>
        {mark ? <b>{mark}</b> : null}
        {helper}
      </small>
    </article>
  )
}
