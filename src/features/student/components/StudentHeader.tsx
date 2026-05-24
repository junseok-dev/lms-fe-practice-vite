import { useLocation } from 'react-router-dom'
import { FigmaHeader } from '../../../components/figma/common'
import { ROUTES } from '../../../constants/routes'
import { currentUser } from '../../../mocks/currentUser'

// 수강생 화면에서 Figma 공통 Header에 현재 라우트별 제목과 설명을 주입하는 연결 컴포넌트입니다.
// 실제 헤더 UI 규칙은 src/components/figma/common/FigmaHeader.tsx에서 관리합니다.
export function StudentHeader() {
  const location = useLocation()
  const pathname = location.pathname

  const headerCopy = (() => {
    if (pathname === ROUTES.studentProfile) {
      return {
        title: '마이 프로필',
        description: '증명서와 내부 공개에 사용할 기본 정보·URL·서사·공개 설정',
      }
    }

    if (pathname === ROUTES.studentCourse) {
      return {
        title: '강의 홈 — 백엔드 부트캠프 · 3기',
        description: '교육 기간 2026-03-04 ~ 2026-09-12 · 10주차 진행 중 · 진행률 38%',
      }
    }

    if (pathname === ROUTES.studentCourseMaterials) {
      return {
        title: '자료실 — 백엔드 부트캠프 · 3기',
        description: '강의 자료·실습 코드·외부 링크. PDF/이미지는 미리보기, 그 외는 다운로드.',
      }
    }

    if (pathname === ROUTES.studentCourseAssignments) {
      return {
        title: '과제 / 실습 — 백엔드 부트캠프 · 3기',
        description: '교과목 과제와 실습을 제출하고 강사 피드백을 확인하세요. 마감 전에는 자유롭게 다시 제출할 수 있습니다.',
      }
    }

    if (pathname.startsWith('/student/course/assignments/')) {
      return {
        title: '나의 과정',
        description: '과제/실습 제출과 피드백 확인',
      }
    }

    if (pathname === ROUTES.studentQuizzes) {
      return {
        title: '퀴즈 목록 — 백엔드 부트캠프 · 3기',
        description: '응시 가능 / 완료 / 채점 대기 / 기간 종료. 수동 채점 대기는 점수 미확정으로 표시',
      }
    }

    if (pathname.includes('/student/quizzes/') && pathname.endsWith('/result')) {
      return {
        title: '퀴즈 결과 — 백엔드 부트캠프 · 3기',
        description: '자동 채점 점수와 수동 채점 대기 상태를 함께 확인합니다.',
      }
    }

    if (pathname === ROUTES.studentAttendanceForm) {
      return {
        title: '출결 폼 작성',
        description: '모바일에서도 작성 가능한 출결 폼입니다. HRD 원본 출결은 변경되지 않습니다.',
      }
    }

    if (pathname === ROUTES.studentAttendance) {
      return {
        title: '출결/태도',
        description: '출석률·감점·태도 지표를 한곳에서 확인',
      }
    }

    if (pathname === ROUTES.studentRecords) {
      return {
        title: '기록실',
        description: '블로그·스터디·자격증·이력서·GitHub 등 학습 기록을 한곳에서 관리',
      }
    }

    if (pathname.startsWith('/student/records/new/')) {
      return {
        title: '기록 등록',
        description: '학습 기록을 등록하고 증명서에 반영할 수 있게 정리합니다.',
      }
    }

    if (pathname.startsWith('/student/records/blog/')) {
      return {
        title: '블로그 기록',
        description: '블로그 기록 상세와 수정 내용을 확인합니다.',
      }
    }

    if (pathname === ROUTES.studentCertificateChangesRequested) {
      return {
        title: '보완 요청 상세',
        description: '정식 인증 전 보완 사유와 관련 화면 이동을 확인',
      }
    }

    if (pathname === ROUTES.studentCertificatePublication) {
      return {
        title: '공개 설정',
        description: '외부 검증 URL 공개 여부와 QR·공개 미리보기를 관리',
      }
    }

    if (pathname.startsWith(ROUTES.studentCertificate)) {
      return {
        title: '수강 역량 증명서',
        description: '출결·퀴즈·과제·프로젝트·기록을 기반으로 역량 인증 정보를 미리 확인',
      }
    }

    if (pathname === ROUTES.studentProjects) {
      return {
        title: '프로젝트 — 백엔드 부트캠프 · 3기',
        description: '참여 중인 팀·개인 프로젝트와 인증 상태. 제출물을 정리하고 인증을 요청하세요.',
      }
    }

    if (pathname === ROUTES.studentProjectsNew) {
      return {
        title: '프로젝트 생성',
        description: '4단계 마법사로 프로젝트 기본 정보와 팀 설정을 입력합니다.',
      }
    }

    if (pathname.startsWith('/student/projects/')) {
      return {
        title: '프로젝트 워크스페이스',
        description: '작업, 문서, 회의록, 팀 관리, 인증 요청을 한곳에서 관리합니다.',
      }
    }

    if (pathname === ROUTES.studentTroubleshooting) {
      return {
        title: '트러블슈팅',
        description: '문제 해결 사례를 문제·원인·해결·회고로 기록하고 인증을 요청하세요.',
      }
    }

    if (pathname.startsWith('/student/troubleshooting/')) {
      return {
        title: '트러블슈팅 작성',
        description: '새 사례 또는 변경 제안 내용을 구조화해서 입력합니다.',
      }
    }

    if (pathname === ROUTES.studentPeerReview || pathname === ROUTES.studentPeerEvaluations) {
      return {
        title: '동료 평가',
        description: '동기수 동료에게 PeerTag와 5축 평가를 남깁니다. 모든 평가는 익명이며 같은 기수 내에서만 가능합니다.',
      }
    }

    if (pathname === ROUTES.studentPeerTag) {
      return {
        title: 'PeerTag 부여',
        description: '동료에게 어울리는 작업 태그를 익명으로 부여합니다.',
      }
    }

    if (pathname === ROUTES.studentPeerReputation) {
      return {
        title: 'PeerReputation 5축 평가',
        description: '기술·책임감·소통·성장 태도·팀워크 기준으로 평가합니다.',
      }
    }

    if (pathname === ROUTES.studentMileageProducts) {
      return {
        title: '마일리지 상품 신청',
        description: '상품 타입별 잔여 한도를 확인하고 구매 요청을 제출합니다.',
      }
    }

    if (pathname === ROUTES.studentMileageHistory) {
      return {
        title: '마일리지 사용 내역',
        description: '적립·사용·구매 요청 내역과 처리 상태',
      }
    }

    if (pathname === ROUTES.studentMileage) {
      return {
        title: '내 마일리지',
        description: '적립·사용 현황과 구매 요청 가능 상품',
      }
    }

    if (pathname === ROUTES.studentPlayTyping) {
      return {
        title: '타자 게임',
        description: '세션을 시작하고 제시문을 입력합니다. 결과는 서버 계산값으로 저장됩니다.',
      }
    }

    if (pathname === ROUTES.studentPlay) {
      return {
        title: 'PLAY',
        description: '학습 게임을 선택하고 랭킹·보상 현황을 확인합니다.',
      }
    }

    return {
      title: `안녕하세요, ${currentUser.name}님`,
      description: '백엔드 부트캠프 3기 · 16주차 / 24주 · 67% 완료',
    }
  })()

  return <FigmaHeader avatarLabel={currentUser.initial} description={headerCopy.description} title={headerCopy.title} />
}
