import { Outlet, useLocation } from 'react-router-dom'
import { StudentHeader } from '../features/student/components/StudentHeader'
import { StudentSidebar } from '../features/student/components/StudentSidebar'
import { ROUTES } from '../constants/routes'
import './student-layout.css'

// 수강생 페이지들이 공통으로 공유하는 화면 타입입니다.
// Header와 Sidebar를 고정하고, Outlet 위치에 현재 라우트의 페이지가 들어옵니다.
export function StudentLayout() {
  const location = useLocation()
  const isProfile = location.pathname === ROUTES.studentProfile
  const isCourseArea =
    location.pathname === ROUTES.studentCourse ||
    location.pathname === ROUTES.studentCourseMaterials ||
    location.pathname === ROUTES.studentCourseAssignments ||
    location.pathname.startsWith('/student/course/assignments/') ||
    location.pathname === ROUTES.studentQuizzes ||
    location.pathname.includes('/student/quizzes/')
  const isEvidenceArea =
    location.pathname === ROUTES.studentAttendance ||
    location.pathname === ROUTES.studentAttendanceForm ||
    location.pathname === ROUTES.studentRecords ||
    location.pathname.startsWith('/student/records/') ||
    location.pathname.startsWith(ROUTES.studentCertificate)
  const isProjectArea = location.pathname === ROUTES.studentProjects || location.pathname.startsWith('/student/projects/')
  const isTroubleshootingArea =
    location.pathname === ROUTES.studentTroubleshooting || location.pathname.startsWith('/student/troubleshooting/')
  const isPeerReviewArea =
    location.pathname === ROUTES.studentPeerReview ||
    location.pathname === ROUTES.studentPeerEvaluations ||
    location.pathname === ROUTES.studentPeerTag ||
    location.pathname === ROUTES.studentPeerReputation
  const isMileageArea =
    location.pathname === ROUTES.studentMileage ||
    location.pathname === ROUTES.studentMileageProducts ||
    location.pathname === ROUTES.studentMileageHistory
  const isPlayArea = location.pathname === ROUTES.studentPlay || location.pathname === ROUTES.studentPlayTyping
  const isFigmaWorkflowPage =
    location.pathname === ROUTES.studentCourseAssignments ||
    location.pathname.startsWith('/student/course/assignments/') ||
    location.pathname === ROUTES.studentAttendanceForm ||
    location.pathname === ROUTES.studentMileageProducts ||
    location.pathname === ROUTES.studentMileageHistory ||
    location.pathname === ROUTES.studentPlayTyping ||
    location.pathname.startsWith('/student/records/') ||
    location.pathname.startsWith('/student/projects/') ||
    location.pathname.startsWith('/student/troubleshooting/') ||
    location.pathname === ROUTES.studentPeerEvaluations ||
    location.pathname === ROUTES.studentPeerTag ||
    location.pathname === ROUTES.studentPeerReputation
  const isAttendanceForm = location.pathname === ROUTES.studentAttendanceForm
  const contentClassName = [
    'student-layout__content',
    isProfile ? 'student-layout__content--profile' : '',
    isCourseArea ? 'student-layout__content--course' : '',
    isEvidenceArea ? 'student-layout__content--evidence' : '',
    isProjectArea ? 'student-layout__content--projects' : '',
    isTroubleshootingArea ? 'student-layout__content--troubleshooting' : '',
    isPeerReviewArea ? 'student-layout__content--peer-review' : '',
    isMileageArea ? 'student-layout__content--mileage' : '',
    isPlayArea ? 'student-layout__content--play' : '',
    isFigmaWorkflowPage ? 'student-layout__content--figma-workflow' : '',
    isAttendanceForm ? 'student-layout__content--attendance-form' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="student-layout">
      <StudentSidebar />
      <div className="student-layout__main">
        <StudentHeader />
        <main className={contentClassName}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
