// Figma "수강생 - 마이 프로필" 화면에 들어가는 값을 기준으로 만든 mock 데이터입니다.
// API가 생기면 이 구조를 프로필 조회/수정 응답 형태에 맞춰 교체합니다.
export const studentProfile = {
  completion: 75,
  lastEditedAt: '2026-05-10 14:22',
  completionMessage: '증명서에 필요한 외부 URL 2개·관심 직무 입력이 남았습니다.',
  name: '김수강',
  displayName: '수강 Kim',
  course: '백엔드 부트캠프 · 3기',
  avatarInitial: '김',
  externalUrls: [
    {
      label: 'GitHub URL',
      value: 'https://github.com/sukang-kim',
    },
    {
      label: '블로그 URL',
      value: 'https://velog.io/@sukang',
    },
    {
      label: '포트폴리오 URL',
      value: 'https://yourportfolio.com',
    },
    {
      label: 'LinkedIn URL',
      value: 'https://linkedin.com/in/username',
    },
  ],
  skills: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'Redis', 'Docker', 'AWS'],
  interests: ['백엔드 개발자', 'DevOps', '데이터 엔지니어'],
  visibility: [
    {
      title: '포트폴리오',
      description: '포트폴리오 사이트 게시로 노출',
      enabled: true,
    },
    {
      title: 'GitHub URL',
      description: '공개 시 외부 검증자가 연결 가능',
      enabled: true,
    },
    {
      title: '블로그 URL',
      description: '공개 시 외부 검증자가 연결 가능',
      enabled: true,
    },
    {
      title: '포트폴리오 URL',
      description: '미공개 상태',
      enabled: false,
    },
    {
      title: 'LinkedIn URL',
      description: '미공개 상태',
      enabled: false,
    },
  ],
}
