// 외부 검증 화면을 Figma 고정 문구로 검증하기 위한 mock 데이터입니다.
export const publicCertificateVerification = {
  loading: {
    title: '외부 검증 — /verify/:publicToken',
    description: '토큰 검증 중 — 결과에 따라 자동 분기 (잘못된 링크 / 비공개 / 공개 증명서)',
    heading: '검증 정보를 확인 중입니다',
    body: ['잠시만 기다려 주세요.', '증명서 진위와 공개 상태를 확인하고 있습니다.'],
    footnote: '자동 분기 — 별도 조작이 필요하지 않습니다',
  },
  invalid: {
    heading: '유효하지 않은 검증 링크입니다',
    body: ['이 링크는 만료되었거나 존재하지 않는 증명서입니다.', '발급자에게 최신 검증 URL을 다시 요청해 주세요.'],
    footer: 'PLAYDATA 역량증명서 검증 시스템 · contact@playdata.io',
  },
  private: {
    heading: '비공개로 설정된 증명서입니다',
    body: [
      '이 증명서는 소유자가 외부 공개를 허용하지 않았습니다.',
      '상세 정보를 확인하려면 소유자에게 공개 요청 또는',
      '별도 자료를 요청해 주세요.',
    ],
    meta: [
      ['발급기관', 'PLAYDATA'],
      ['진위 상태', '검증됨 · 비공개'],
      ['검증 ID', 'VERIFY-2026-A1B2C3D4'],
      ['발급 시점', '2026-05-01 09:00 KST'],
    ],
    footer: 'PLAYDATA 역량증명서 검증 시스템 · contact@playdata.io',
  },
  public: {
    meta: [
      ['발급기관', 'PLAYDATA'],
      ['인증일', '2026-05-01'],
      ['검증 ID', 'VERIFY-2026-A1B2C3D4'],
    ],
    student: {
      name: '김OO',
      chips: ['데이터 엔지니어 부트캠프', '7기'],
    },
    competencies: [
      ['데이터 처리', 'A'],
      ['분석/시각화', 'B+'],
      ['협업·소통', 'A'],
      ['문제 해결', 'A'],
      ['산출물 품질', 'B+'],
    ],
    evidence: [
      {
        kind: '프로젝트',
        title: 'MSA 기반 도시 추천 플랫폼',
        description: 'MSA 8개 서비스로 도시 데이터를 실시간 추천 — 카프카 이벤트 처리율 32% 개선',
      },
      {
        kind: '트러블슈팅',
        title: 'Kafka 컨슈머 랙 폭증 대응',
        description: '[S] 운영 트래픽 5배 증가 [T] 랙 SLO 30s 회복 [A] 파티션 재분배·컨슈머 스케일아웃 [R] p95 28s → 4s',
        note: '작성 2026.03.12 · 강사 인증',
      },
      {
        kind: '자격증',
        title: '정보처리기사',
        description: '국가공인 IT 자격 — 발급기관: 한국산업인력공단',
        note: '발급 2025.11.28 · 검증 완료',
      },
    ],
    verifyInfo: [
      ['snapshotHash', 'sha256:1a2b3c4d5e6f7890abcdef1234567890'],
      ['발급 시점 (ISO 8601)', '2026-05-01T09:00:00+09:00'],
    ],
    notice: '이 증명서는 PLAYDATA 역량증명서 시스템에서 발급한 진본입니다. 진위는 위 검증 ID로 재확인할 수 있습니다.',
  },
}
