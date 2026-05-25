// 수강생 하위 페이지 구현에 쓰는 mock 데이터입니다.
// 실제 API가 붙기 전까지 Figma 화면에 필요한 문구와 탭 상태를 이 파일에서 관리합니다.
export const recordFormCopy = {
  blog: {
    title: '블로그 등록',
    description: '안내된 블로그 양식에 맞춰 작성한 외부 URL을 주차 단위로 제출',
    fields: ['제목', '블로그 URL', '작성일', '핵심 키워드'],
    textarea: '학습 내용 요약',
  },
  certificate: {
    title: '자격증 등록',
    description: '인증 가능한 자격증(PCCE/PCCP/PCSQL) 취득 사진을 등록',
    fields: ['자격증명', '발급 기관', '취득일', '증빙 URL'],
    textarea: '활용 역량 메모',
  },
  study: {
    title: '스터디 등록',
    description: '진행한 스터디 활동을 시간·활동 내역·인증 사진으로 기록',
    fields: ['스터디명', '역할', '진행 기간', '산출물 URL'],
    textarea: '스터디에서 기여한 내용',
  },
} as const

export const blogRecordSubmissionWeeks = [
  { week: '1주차', range: '3/4 - 3/10', tone: '' },
  { week: '2주차', range: '3/11 - 3/17', tone: '' },
  { week: '3주차', range: '3/18 - 3/24', status: '승인됨', tone: 'approved' },
  { week: '4주차', range: '3/25 - 3/31', tone: '' },
  { week: '5주차', range: '4/1 - 4/7', status: '반려 재제출 필요', tone: 'rejected' },
  { week: '6주차', range: '4/8 - 4/14', tone: '' },
  { week: '12주차', range: '5/13 - 5/19', status: '현재', tone: 'current' },
  { week: '13주차', range: '5/20 - 5/26', tone: '' },
  { week: '더보기', range: '13~21', tone: 'more' },
] as const

export const certificateRecordTypes = [
  { name: 'PCCE', description: 'Python 기초', selected: false },
  { name: 'PCCP', description: 'Python 응용', selected: true },
  { name: 'PCSQL', description: 'SQL 개발자', selected: false },
] as const

export const certificateFileFormats = ['JPEG', 'PNG', 'GIF', 'WebP', 'SVG'] as const

export const studyEvidenceFiles = [
  { name: '스터디 보드.jpg', size: '2.1MB' },
  { name: '참여자 인증.jpg', size: '1.9MB' },
  { name: '스크린샷 2026-05-14 오전 9.13.05.png', size: '0.2MB' },
] as const

export const blogRecordDetail = {
  title: 'JPA 영속성 컨텍스트의 1차 캐시 정리',
  category: '블로그',
  date: '2026.05.10 제출',
  status: '승인',
  week: '10주차 5/6 ~ 5/12',
  approvedAt: '2026.05.12 승인',
  reviewer: '담당 멘토 확인 완료',
  url: 'https://velog.io/@kim-su/jpa-persistence-context',
  summary:
    '게시판 도메인의 Member, Post, Comment 연관관계를 설계하면서 양방향 연관관계의 책임 위치와 fetch 전략을 정리했습니다.',
  feedback: '문제 정의와 해결 과정을 분리해 작성한 점이 좋습니다. 성능 측정 수치를 한 줄 더 추가해 주세요.',
}

export const projectWizardSteps = [
  { title: '기본 정보', helper: 'Step 1 / 4' },
  { title: '팀 설정', helper: 'Step 2 / 4' },
  { title: '상세 설정', helper: 'Step 3 / 4' },
  { title: '생성 확인', helper: 'Step 4 / 4' },
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
