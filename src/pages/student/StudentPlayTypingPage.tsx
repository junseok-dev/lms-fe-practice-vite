import { FigmaButton, FigmaStatusBadge } from '../../components/figma/common'
import { typingInfo, typingKpis, typingPrompt, typingPrompts } from '../../mocks/studentPlayTyping'
import './student-play-typing.css'

// Figma frame: "수강생 — PLAY 타자 게임 (/student/play/typing)"
// 타자 게임 진행 중 상태를 정적 화면으로 구현합니다. 실제 타수 계산은 이후 기능 단계에서 붙입니다.
export function StudentPlayTypingPage() {
  return (
    <section className="student-play-typing-page">
      <div className="student-play-typing-kpis">
        {typingKpis.map((kpi) => (
          <article className="student-play-typing-kpi" key={kpi.label}>
            <span>{kpi.label}</span>
            <strong>{kpi.value}</strong>
            <small>{kpi.helper}</small>
          </article>
        ))}
      </div>

      <div className="student-play-typing-main">
        <section className="student-play-typing-card">
          <header className="student-play-typing-section-title">
            <h2>제시문</h2>
            <FigmaStatusBadge tone="info">중급 · 450자</FigmaStatusBadge>
          </header>
          <div className="student-play-typing-prompt">{typingPrompt}</div>
          <header className="student-play-typing-section-title">
            <h2>입력 영역</h2>
          </header>
          <div className="student-play-typing-area">제시문을 보고 여기에 입력합니다...</div>
          <footer className="student-play-typing-actions">
            <FigmaButton kind="secondary">일시정지</FigmaButton>
            <FigmaButton kind="secondary">저장하지 않고 나가기</FigmaButton>
            <FigmaButton>결과 제출</FigmaButton>
          </footer>
        </section>

        <aside className="student-play-typing-info">
          <h2>플레이 정보</h2>
          {typingInfo.map((item) => (
            <div className="student-play-typing-info__row" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
          <FigmaButton kind="secondary">세션 다시 시작</FigmaButton>
        </aside>
      </div>

      <section className="student-play-typing-prompts">
        <h2>다른 제시문</h2>
        <div className="student-play-typing-prompts__grid">
          {typingPrompts.map((prompt) => (
            <article className="student-play-typing-prompt-option" key={prompt.title}>
              <h3>{prompt.title}</h3>
              <p>{prompt.meta}</p>
              <FigmaButton kind="secondary">선택</FigmaButton>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
