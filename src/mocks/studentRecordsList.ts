// 수강생 기록실 화면을 Figma 기준의 고정 데이터로 검증하기 위한 mock 데이터입니다.
// 기록 필터, 블로그 제출 CTA, 기록 카드 렌더링에 필요한 값만 분리해 페이지와 UI 구조를 단순하게 유지합니다.
export const studentRecordsList = {
  filters: [
    { label: '전체', count: 24 },
    { label: '블로그', count: 12 },
    { label: '스터디', count: 4 },
    { label: '자격증', count: 3 },
    { label: '이력서', count: 1 },
  ],
  activeFilter: '블로그',
  highlight: {
    title: '11주차 블로그 제출',
    description: '제출 후엔 승인 된 후에 변경이 불가능 하십니다.',
    action: '블로그 제출',
  },
  section: {
    title: '블로그 기록',
    count: '12건',
  },
  rows: [
    {
      id: 'jpa-mapping',
      category: '10주차 5/6 ~ 5/12',
      title: 'JPA 연관관계 매핑 회고',
      description: 'Member, Post, Comment 도메인의 연관관계와 fetch 전략을 정리했습니다.',
      submittedAt: '2026.05.10 제출 · 2026.05.12 승인',
      status: '승인',
      statusTone: 'ok',
      tags: ['JPA', '회고', '백엔드'],
    },
    {
      id: 'security-flow',
      category: '9주차 4/29 ~ 5/5',
      title: 'Spring Security 인증 흐름 복습',
      description: 'JWT 필터 체인과 권한 검증 실패 케이스를 다이어그램으로 기록했습니다.',
      submittedAt: '2026.05.04 제출 · 2026.05.06 승인',
      status: '승인',
      statusTone: 'ok',
      tags: ['Security', 'JWT', '인증'],
    },
    {
      id: 'docker-network',
      category: '8주차 4/22 ~ 4/28',
      title: 'Docker 네트워크 실습 정리',
      description: '컨테이너 간 통신, 포트 매핑, compose 네트워크 설정을 실습 기준으로 정리했습니다.',
      submittedAt: '2026.04.27 제출 · 2026.04.29 승인',
      status: '승인',
      statusTone: 'ok',
      tags: ['Docker', 'DevOps', '네트워크'],
    },
  ],
} as const
