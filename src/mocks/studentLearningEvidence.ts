// 출결/태도, 기록실, 수강 역량 증명서 화면에서 사용하는 수강생 mock 데이터입니다.
// 아직 백엔드 API가 없으므로 Figma에 보이는 값과 화면 흐름을 먼저 고정하는 용도로 둡니다.
import { ROUTES } from '../constants/routes'

export const studentAttendance = {
  summary: [
    { label: '출석률', value: '96', unit: '%', note: '768/800 시간', tone: 'teal' },
    { label: '지각', value: '3', unit: '회', note: '최근 30일 0회', tone: 'purple' },
    { label: '결석', value: '1', unit: '회', note: '사유 승인 1건', tone: 'orange' },
    { label: '태도 점수', value: '92', unit: '점', note: '동료 평균 +6점', tone: 'teal' },
  ],
  months: ['3월', '4월', '5월', '6월', '7월'],
  calendar: [
    ['출석', '출석', '출석', '지각', '출석'],
    ['출석', '출석', '출석', '출석', '출석'],
    ['출석', '결석', '출석', '출석', '출석'],
    ['출석', '출석', '지각', '출석', '출석'],
  ],
  attitudes: [
    { label: '과제 제출 태도', value: 94 },
    { label: '스터디 참여', value: 88 },
    { label: '동료 피드백', value: 91 },
    { label: '운영 공지 준수', value: 96 },
  ],
  logs: [
    { date: '2026-05-14', type: '출석', time: '09:02 ~ 18:01', note: '정상 출석' },
    { date: '2026-05-13', type: '출석', time: '08:58 ~ 18:05', note: '정상 출석' },
    { date: '2026-05-09', type: '지각', time: '09:18 ~ 18:00', note: '교통 지연 사유 제출' },
    { date: '2026-04-22', type: '결석', time: '-', note: '병가 승인 완료' },
  ],
}

export const studentRecords = {
  filters: [
    { label: '전체', count: '28' },
    { label: '블로그', count: '12' },
    { label: '스터디', count: '6' },
    { label: '자격증', count: '4' },
    { label: '이력서', count: '6' },
  ],
  highlight: {
    title: '이번 주 대표 기록을 제출해 주세요',
    description: '블로그·스터디·자격증·이력서 기록은 수강 역량 증명서의 근거 자료로 연결됩니다.',
    action: '블로그 제출',
  },
  rows: [
    {
      category: '블로그',
      title: 'JPA 영속성 컨텍스트 정리',
      description: '1차 캐시, 변경 감지, flush 시점을 실습 코드와 함께 정리',
      date: '2026-05-13',
      status: '검토 중',
      statusTone: 'warning',
      meta: '8주차 · 기술 회고',
      feedback: '강사 코멘트 대기 중',
    },
    {
      category: '블로그',
      title: 'Spring Security 인증 흐름 복습',
      description: 'JWT 필터 체인과 권한 검증 실패 케이스를 다이어그램으로 기록',
      date: '2026-05-06',
      status: '승인 완료',
      statusTone: 'ok',
      meta: '7주차 · 트러블슈팅',
      feedback: '대표 기록 후보',
    },
    {
      category: '스터디',
      title: 'Kafka 메시지 유실 방지 스터디',
      description: 'acks, retry, idempotence 설정을 팀원들과 비교 실습',
      date: '2026-04-29',
      status: '승인 완료',
      statusTone: 'ok',
      meta: '스터디 4회차',
      feedback: '협업 역량 반영',
    },
    {
      category: '자격증',
      title: 'SQLD 취득',
      description: '취득일 2026-04-18 · 증빙 이미지 업로드 완료',
      date: '2026-04-18',
      status: '인증 완료',
      statusTone: 'info',
      meta: '외부 인증',
      feedback: '데이터 역량 반영',
    },
  ],
}

export const studentCertificate = {
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
      tone: 'teal',
      to: ROUTES.studentProfile,
    },
    {
      title: '미승인 산출물',
      description: '8주차 회고 블로그 검토 대기 중',
      action: '기록실 이동 →',
      tone: 'purple',
      to: ROUTES.studentRecords,
    },
    {
      title: '개인정보 위험',
      description: '프로젝트 카드에 전화번호가 노출됨',
      action: '공개 항목 수정 →',
      tone: 'red',
      to: ROUTES.studentCertificatePublication,
    },
  ],
  tabs: ['종합 요약', '기술·검증', '프로젝트', '문제해결·협업', '성장·평판'],
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
    { kind: '프로젝트', title: 'MSA 기반 도서 추천 플랫폼', meta: 'Spring Boot · Kafka · Redis · 5인 팀 · 기여도 32%' },
    { kind: '블로그', title: 'Spring Security 인증 흐름 복습', meta: '강사 승인 완료 · 기술 회고' },
    { kind: '기록', title: 'Kafka 메시지 유실 방지 스터디', meta: '협업 역량 근거 · 스터디 4회차' },
  ],
  checklist: [
    { title: 'GitHub URL / 블로그 URL 입력 완료', status: '미완료' },
    { title: '대표 기록 강사 승인 완료', status: '미완료' },
    { title: 'JPA 영속성 컨텍스트 퀴즈 재응시 완료', status: '미완료' },
    { title: '개인정보 공개 항목 점검', status: '확인 필요' },
    { title: '정식 인증 요청 전 최종 검토', status: '대기' },
  ],
}

export const studentCertificateChangesRequested = {
  status: {
    badge: '보완 요청',
    title: '정식 인증 전, 아래 항목을 보완해 주세요',
    description: '보완을 모두 마치면 매니저가 다시 검토합니다. 단계별 이동 버튼으로 빠르게 처리하세요.',
    meta: [
      { label: '요청일', value: '2026-05-12 14:30' },
      { label: '검토자', value: '매니저 박지수' },
      { label: '요청 회차', value: '1차 보완 요청' },
      { label: '예상 처리', value: '회신 후 1영업일' },
    ],
  },
  reasons: [
    {
      number: '1',
      title: '근거 자료 누락',
      target: '대상: 프로필',
      summary: 'GitHub URL과 블로그 URL을 추가해 주세요',
      description:
        '외부 검증자가 본 페이지를 통해 학습 활동을 확인합니다. GitHub URL과 블로그 URL이 비어 있어 근거 확인이 어려우니, 입력 후 재요청 부탁드립니다.',
      action: '마이 프로필 이동 →',
      to: ROUTES.studentProfile,
    },
    {
      number: '2',
      title: '미승인 산출물',
      target: '대상: 기록실',
      summary: '대표 기록의 강사 승인 완료 후 재요청해 주세요',
      description:
        '대표 기록으로 선택한 8주차 블로그 "JPA 영속성 컨텍스트 정리"가 아직 검토 중입니다. 강사 승인이 완료된 산출물만 정식 인증 근거로 사용됩니다.',
      action: '기록실 이동 →',
      to: ROUTES.studentRecords,
    },
    {
      number: '3',
      title: '점수 재검토 필요',
      target: '대상: 점수',
      summary: 'JPA 영속성 컨텍스트 퀴즈를 재응시해 주세요',
      description:
        '해당 퀴즈 결과가 동료 평균보다 낮게 산출되어 수강 역량 증명서 종합 요약이 갱신되지 않았습니다. 재응시 후 점수가 반영되면 재요청해 주세요.',
      action: '수강 역량 증명서 종합 요약 이동 →',
      to: ROUTES.studentQuizzes,
    },
  ],
  shortcuts: [
    { label: '프로필', status: '보완 항목 1건', to: ROUTES.studentProfile },
    { label: '점수', status: '보완 항목 1건', to: ROUTES.studentQuizzes },
    { label: '기록', status: '보완 항목 1건', to: ROUTES.studentRecords },
    { label: '프로젝트', status: '보완 사항 없음', to: ROUTES.studentProjects },
    { label: '개인정보', status: '보완 사항 없음', to: ROUTES.studentCertificatePublication },
  ],
  checklist: [
    { title: 'GitHub URL / 블로그 URL 입력 완료', status: '미완료' },
    { title: '대표 기록 강사 승인 완료', status: '미완료' },
    { title: 'JPA 영속성 컨텍스트 퀴즈 재응시 완료', status: '미완료' },
  ],
}

export const studentCertificatePublication = {
  user: '김수강 · 백엔드 3기',
  complete: {
    student: '김수강 · 백엔드 부트캠프 · 3기',
    verifyId: 'VERIFY-2026-BE03-K1234',
    snapshotHash: 'a3f29b1c…e9c4',
  },
  toggle: {
    title: '외부 검증 URL 공개',
    description: '공개 여부를 켜면 외부 검증자가 공개 페이지에서 정보를 확인할 수 있습니다',
    state: 'OFF',
    notice: '현재 상태 · 공개 OFF',
  },
  verification: {
    title: '검증 정보',
    description: 'URL 복사는 항상 가능, QR 다운로드는 공개 ON에서만 활성',
    url: 'https://verify.playdata.io/v/abc123def456',
    qrHint: '공개 URL 존재 시 QR 다운로드 가능',
    privacy:
      '※ 비공개 상태에서 발급된 QR을 스캔하면 외부 검증 페이지가 "비공개 증명서" 안내만 표시합니다.',
  },
  preview: {
    title: '공개 미리보기',
    description: '외부 검증자(/verify/:publicToken)가 볼 화면',
    footnote: '추천서와 동료 평가/ShortComment는 증명서 최신화 작업 이후 공개 스냅샷에 반영됩니다.',
  },
  compare: {
    title: '공개 ON / OFF 차이',
    description: '정식 인증 마크는 공개 여부와 무관하게 항상 유지됩니다',
    on: ['검증 URL에서 증명서 상세 확인', 'QR 다운로드 활성화', '공개 허용 항목 표시'],
    off: ['비공개 증명서 안내만 표시', 'QR 다운로드 비활성', '민감 정보 외부 노출 차단'],
  },
  privacy:
    '동료 평가/ShortComment는 수강생이 직접 공개 여부를 설정하며 기본 OFF입니다. 강사·멘토 추천서는 개별 토글 없이 추천서 존재 + 인증 완료 + 최신화 작업 이후 공개 스냅샷에 포함됩니다.',
}
