// 출결 폼 화면의 고정 mock 데이터입니다.
// 모바일 진입과 재제출 안내까지 Figma 문구를 기준으로 맞춥니다.
export const attendanceFormSummary = [
  { label: '대상 일자', value: '2026-05-22 (금)' },
  { label: '과정 / 기수', value: '김민준 · AI 엔지니어 양성 과정 5기' },
  { label: '최근 제출', value: '2026-05-21 09:42 · 지각' },
]

export const attendanceTypes = ['지각', '조퇴', '외출', '결석']

export const officialLeaveTypes = ['휴가', '병가', '면접', '예비군', '기타'] as const
