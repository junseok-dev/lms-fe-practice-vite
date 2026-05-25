import { ROUTES } from '../constants/routes'

// 수강생 증명서 미리보기 화면을 Figma 기준으로 검증하기 위한 mock 데이터입니다.
// 정식 인증 전 상태, 보완 항목, 미리보기 카드, 요청 전 체크 목록에 필요한 값만 분리합니다.
export const studentCertificatePreview = {
  status: {
    badge: 'PREVIEW',
    title: '정식 인증 전 미리보기',
    description: '김수강 · 백엔드 부트캠프 3기 · 교육 기간 2025.11.04 ~ 2026.05.20',
    updatedAt: '마트 갱신 · 2026-05-14 03:12 (최신)',
    action: '정식 인증 요청  →',
  },
  issues: [
    {
      title: '필수 데이터 누락',
      description: '외부 URL 2건 미입력 (GitHub · 블로그)',
      action: '프로필 이동 →',
      tone: 'warning',
      to: ROUTES.studentProfile,
    },
    {
      title: '미승인 산출물',
      description: '8주차 회고 블로그 검토 대기 중',
      action: '기록실 이동 →',
      tone: 'neutral',
      to: ROUTES.studentRecords,
    },
    {
      title: '개인정보 위험',
      description: '프로젝트 카드에 전화번호가 노출됨',
      action: '공개 항목 수정 →',
      tone: 'danger',
      to: ROUTES.studentCertificatePublication,
    },
  ],
  tabs: ['종합 요약', '기술·검증', '프로젝트', '문제해결·협업', '성장·평판'],
  certificate: {
    eyebrow: 'ENCORE DATA COMPETENCY CERTIFICATE',
    name: '김수강',
    description: '백엔드 부트캠프 · 3기   |   교육 기간 2025.11.04 ~ 2026.05.20   |   총 800시간 / 출석 768시간',
    verify: '검증 ID · 미발급 (preview)',
    stamp: 'PREVIEW',
  },
  metrics: [
    { label: '출석률', value: '96', unit: '%', note: '768/800 시간', tone: 'teal' },
    { label: '시험 평균', value: '82', unit: '점', note: '전체 12회 · 상위 18%', tone: 'purple' },
    { label: '과제 달성', value: '88', unit: '%', note: '44/50 과제 인증', tone: 'teal' },
    { label: '프로젝트 인증', value: '2', unit: '/3', note: '강사 인증 완료 2건', tone: 'orange' },
  ],
  skills: [
    { label: '백엔드', value: 88 },
    { label: '데이터', value: 75 },
    { label: '협업', value: 82 },
    { label: '문제해결', value: 79 },
    { label: '성장', value: 85 },
    { label: '신뢰', value: 90 },
  ],
  featured: [
    {
      kind: '프로젝트',
      tone: 'teal',
      title: 'MSA 기반 도서 추천 플랫폼',
      meta: 'Spring Boot · Kafka · Redis · 5인 팀 · 기여도 32%',
    },
    {
      kind: '프로젝트',
      tone: 'teal',
      title: '실시간 채팅 분석 대시보드',
      meta: 'FastAPI · WebSocket · ELK · 4인 팀 · 기여도 41%',
    },
    {
      kind: '기록실',
      tone: 'purple',
      title: 'Kafka 컨슈머 랙 트러블슈팅',
      meta: '블로그 · 강사 인증 · 2026.03.12',
    },
  ],
  checklist: {
    title: '요청 전 체크',
    description: '모든 항목이 충족되어야 정식 인증 요청이 가능합니다',
    rows: [
      {
        passed: false,
        title: '필수 프로필 존재',
        description: '외부 URL 2건 미입력 (GitHub · 블로그)',
        action: '프로필 화면 이동 →',
      },
      {
        passed: true,
        title: '핵심 지표 산정 가능',
        description: '출석·시험·과제·프로젝트 인증 모두 산정됨',
        action: '수강 역량 증명서 종합 요약 보기 →',
      },
      {
        passed: true,
        title: '대표 프로젝트/기록 승인',
        description: '강사 인증 프로젝트 2건 · 기록실 1건',
        action: '프로젝트/기록실 보기 →',
      },
      {
        passed: true,
        title: '개인정보 위험 없음',
        description: '전화번호 노출 1건 - 자동 마스킹 적용됨',
        action: '공개 항목 수정 →',
      },
      {
        passed: true,
        title: '마트 최신',
        description: 'StudentCertificateCandidateMart · 2026-05-14 03:12',
        action: '재계산 안내 보기 →',
      },
    ],
  },
  summary: {
    title: '요청 전 체크 4 / 5 충족 · 필수 프로필 1건 보완 필요',
    description: '모든 체크 충족 시 [정식 인증 요청] 버튼이 활성화됩니다',
    action: '정식 인증 요청 (비활성)',
  },
} as const
