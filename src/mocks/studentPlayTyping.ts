// PLAY 타자 게임 화면용 mock 데이터입니다.
// 실제 게임 로직은 나중에 붙이고, 현재는 Figma 화면을 재현하는 정적 상태만 제공합니다.
export const typingKpis = [
  { label: '남은 시간', value: '02:30', unit: '', helper: '세션 진행 중' },
  { label: '현재 타수', value: '486', unit: '타', helper: '실시간 입력 기준' },
  { label: '정확도', value: '96.4', unit: '%', helper: '오타 7회' },
  { label: '예상 점수', value: '78,200', unit: '', helper: '제출 시 서버 재계산' },
]

export const typingPrompt =
  '동시성 제어는 공유 자원에 대한 접근 순서를 명확히 정의하는 과정입니다. 여러 요청이 동시에 같은 데이터를 변경할 때는 트랜잭션 경계와 잠금 전략을 신중하게 선택해야 합니다.'

export const typingInfo = [
  { label: '세션 ID', value: 'GS-20260515-018' },
  { label: '제시문', value: 'Java Stream API' },
  { label: '계산 기준', value: '서버 재계산' },
  { label: '보상', value: '랭킹 반영 후 지급' },
]

export const typingPrompts = [
  { title: 'Spring Transaction', meta: '중급 · 450자' },
  { title: 'Java Stream API', meta: '중급 · 450자' },
  { title: 'DB Index 설계', meta: '고급 · 580자' },
]
