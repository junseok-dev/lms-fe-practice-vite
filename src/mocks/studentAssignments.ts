// 수강생 과제/실습 화면용 mock 데이터입니다.
// 아직 API가 없으므로 Figma 화면의 텍스트와 상태를 배열로 관리해 라우팅 실습에 사용합니다.
export type AssignmentStatusTone = 'neutral' | 'ok' | 'info' | 'warning' | 'purple'

export type StudentAssignment = {
  id: string
  title: string
  category: string
  dueLabel: string
  scoreLabel: string
  statusLabel: string
  statusTone: AssignmentStatusTone
  actionLabel: string
  actionKind: 'primary' | 'secondary'
  feedback?: string
}

export const studentAssignments: StudentAssignment[] = [
  {
    id: 'jpa-mapping',
    title: 'JPA 연관관계 매핑 실습',
    category: '백엔드 심화',
    dueLabel: '마감 D-2',
    scoreLabel: '배점 20점',
    statusLabel: '미제출',
    statusTone: 'neutral',
    actionLabel: '제출하기',
    actionKind: 'primary',
  },
  {
    id: 'order-rest-api',
    title: '주문 도메인 REST API 구현',
    category: 'Spring Boot',
    dueLabel: '마감 D-5',
    scoreLabel: '배점 30점',
    statusLabel: '제출 완료',
    statusTone: 'ok',
    actionLabel: '수정 제출',
    actionKind: 'secondary',
  },
  {
    id: 'unit-test',
    title: '단위 테스트 작성 과제',
    category: '백엔드 기초',
    dueLabel: '마감 5/9 종료',
    scoreLabel: '26 / 30점',
    statusLabel: '검토 완료',
    statusTone: 'info',
    actionLabel: '피드백 보기',
    actionKind: 'secondary',
    feedback: '강사 피드백 있음',
  },
  {
    id: 'docker-deploy',
    title: 'Docker 컨테이너 배포 실습',
    category: '인프라',
    dueLabel: '마감 D-1',
    scoreLabel: '완료 확인제',
    statusLabel: '미제출',
    statusTone: 'neutral',
    actionLabel: '제출하기',
    actionKind: 'primary',
  },
  {
    id: 'transaction-isolation',
    title: '트랜잭션 격리 수준 정리',
    category: '백엔드 심화',
    dueLabel: '마감 5/7 종료',
    scoreLabel: '완료 확인제',
    statusLabel: '검토 완료',
    statusTone: 'info',
    actionLabel: '피드백 보기',
    actionKind: 'secondary',
    feedback: '강사 피드백 있음',
  },
]

export const assignmentDetail = {
  title: 'JPA 연관관계 매핑 실습',
  description:
    'Spring Boot 게시판 도메인에 Member-Post-Comment 연관관계를 설계하고, N+1 조회를 방지하는 fetch 전략을 함께 정리합니다.',
  due: '마감 2026-05-24 23:59',
  status: '제출 상태: 미제출',
  badges: [
    { label: '백엔드', tone: 'neutral' as const },
    { label: 'D-2', tone: 'warning' as const },
    { label: '점수제 100점', tone: 'purple' as const },
  ],
  body: '구현 범위, 실행 방법, 설계 의도를 작성합니다.',
  url: 'https://github.com/lee/jpa-mapping-practice/pull/12',
  assets: 'submission-note.md · ERD 캡처.png',
  review: {
    status: '검토 완료',
    score: '점수 88 / 100',
    feedback: '연관관계 방향 선택 근거가 명확합니다. 다만 댓글 삭제 정책의 cascade 범위는 한 번 더 분리해 주세요.',
  },
}
