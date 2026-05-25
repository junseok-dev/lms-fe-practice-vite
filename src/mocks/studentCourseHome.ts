// 수강생 강의 홈에서 사용하는 Figma Tabs Bar 항목입니다.
// 기존 course flow mock은 여러 하위 화면 데이터를 함께 담고 있어, 강의 홈 탭 기준만 이 파일에서 좁게 관리합니다.
export const courseHomeTabs = [
  { label: '강의 홈', value: 'home', to: '/student/course' },
  { badge: '2', label: '퀴즈', value: 'quizzes', to: '/student/quizzes' },
  { badge: '24', label: '자료실', value: 'materials', to: '/student/course/materials' },
  { badge: '1', label: '과제/실습', value: 'assignments', to: '/student/course/assignments' },
  { label: '수강 역량 증명서 종합 요약', value: 'report' },
]
