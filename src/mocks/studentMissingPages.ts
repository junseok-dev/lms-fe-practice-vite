// 수강생 하위 페이지 구현에 쓰는 mock 데이터입니다.
// 실제 API가 붙기 전까지 Figma 화면에 필요한 문구와 탭 상태를 이 파일에서 관리합니다.
export const recordFormCopy = {
  blog: {
    title: '블로그 등록',
    description: '학습 과정에서 작성한 블로그 글을 기록실에 등록합니다.',
    fields: ['제목', '블로그 URL', '작성일', '핵심 키워드'],
    textarea: '학습 내용 요약',
  },
  certificate: {
    title: '자격증 등록',
    description: '취득한 자격증과 증빙 정보를 기록실에 등록합니다.',
    fields: ['자격증명', '발급 기관', '취득일', '증빙 URL'],
    textarea: '활용 역량 메모',
  },
  study: {
    title: '스터디 등록',
    description: '스터디 참여 내역과 역할, 산출물을 기록합니다.',
    fields: ['스터디명', '역할', '진행 기간', '산출물 URL'],
    textarea: '스터디에서 기여한 내용',
  },
} as const

export const blogRecordDetail = {
  title: 'JPA 연관관계 매핑 회고',
  category: '블로그',
  date: '2026-05-12',
  status: '검토 완료',
  url: 'https://velog.io/@student/jpa-mapping-retrospective',
  summary:
    '게시판 도메인의 Member, Post, Comment 연관관계를 설계하면서 양방향 연관관계의 책임 위치와 fetch 전략을 정리했습니다.',
  feedback: '문제 정의와 해결 과정을 분리해 작성한 점이 좋습니다. 성능 측정 수치를 한 줄 더 추가해 주세요.',
}

export const projectWizardSteps = [
  { title: '프로젝트 기본 정보', helper: '프로젝트명, 유형, 진행 기간을 입력합니다.' },
  { title: '팀 설정', helper: '팀원과 역할, 기여 목표를 설정합니다.' },
  { title: '상세 설정', helper: '기술 스택, 저장소, 배포 URL을 정리합니다.' },
  { title: '생성 확인', helper: '입력한 내용을 확인하고 워크스페이스를 생성합니다.' },
]

export const projectWorkspaceTabs = [
  'home',
  'board',
  'calendar',
  'meetings',
  'docs',
  'issues',
  'team',
  'outcomes',
  'peer-evaluation',
  'certification',
] as const

export const projectWorkspaceTabLabels: Record<(typeof projectWorkspaceTabs)[number], string> = {
  home: '홈',
  board: '보드·작업',
  calendar: '캘린더',
  meetings: '회의록',
  docs: '문서·파일·위키',
  issues: '이슈',
  team: '팀 관리',
  outcomes: '성과·기술스택',
  'peer-evaluation': '상호평가',
  certification: '인증 요청',
}

export const troubleshootingFormSections = ['문제 상황', '원인 분석', '해결 과정', '결과와 회고']

export const peerTargets = [
  { name: '김하늘', role: '백엔드 · 팀장', tags: ['문제해결', '공유왕', '책임감'] },
  { name: '이준', role: '백엔드 · API', tags: ['리뷰꼼꼼', '성장형', '협업'] },
  { name: '박서연', role: '프론트 · UI', tags: ['문서화', '소통', '몰입'] },
]
