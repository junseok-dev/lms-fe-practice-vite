import { FigmaButton, FigmaStatusBadge } from '../../components/figma/common'
import { studentPlay } from '../../mocks/studentPlay'
import './student-play.css'

// Figma의 "수강생 — PLAY 게임 선택 (/student/play)" 프레임을 구현하는 페이지입니다.
// 실제 게임 로직은 아직 연결하지 않고, 활성/비활성 게임 선택과 최근 기록/랭킹을 mock 데이터로 재현합니다.
export function StudentPlayPage() {
  return (
    <section className="student-play" aria-label="PLAY 게임 선택">
      <div className="student-play__kpis">
        {studentPlay.kpis.map((kpi) => (
          <article className="student-play-kpi" key={kpi.label}>
            <p>{kpi.label}</p>
            <strong>{kpi.value}</strong>
            <i />
            <span>{kpi.helper}</span>
          </article>
        ))}
      </div>

      <section className="student-play__games" aria-labelledby="student-play-games-title">
        <header>
          <h2 id="student-play-games-title">게임 선택</h2>
          <p>과정에서 활성화된 PLAY 게임만 선택할 수 있습니다.</p>
        </header>

        <div className="student-play__game-grid">
          {studentPlay.games.map((game) => (
            <article className={game.enabled ? 'student-play-game is-featured' : 'student-play-game'} key={game.title}>
              <FigmaStatusBadge tone={game.status.tone}>{game.status.label}</FigmaStatusBadge>
              <h3>{game.title}</h3>
              <p>{game.description}</p>

              {game.enabled ? (
                <>
                  <div className="student-play-game__progress" aria-hidden="true">
                    <span style={{ width: `${game.progress}%` }} />
                  </div>
                  <small>{game.helper}</small>
                </>
              ) : null}

              <FigmaButton disabled={!game.enabled}>{game.action}</FigmaButton>
            </article>
          ))}
        </div>
      </section>

      <div className="student-play__bottom">
        <section className="student-play-panel student-play-panel--records">
          <h2>최근 게임 기록</h2>
          <div>
            {studentPlay.records.map((record) => (
              <article className="student-play-record" key={`${record.time}-${record.score}`}>
                <span>{record.time}</span>
                <strong>{record.game}</strong>
                <p>{record.result}</p>
                <em>{record.score}</em>
              </article>
            ))}
          </div>
        </section>

        <section className="student-play-panel student-play-panel--ranking">
          <h2>기수 랭킹 Top 5</h2>
          <div>
            {studentPlay.rankings.map((ranking) => (
              <article className={ranking.current ? 'student-play-ranking is-current' : 'student-play-ranking'} key={ranking.rank}>
                <span>{ranking.rank}</span>
                <strong>{ranking.name}</strong>
                <em>{ranking.score}</em>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
