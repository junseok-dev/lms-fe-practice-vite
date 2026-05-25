import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { StudentLayout } from '../layouts/StudentLayout'
import { AuthRoutePage } from '../pages/auth/AuthRoutePage'
import { ForbiddenPage } from '../pages/auth/ForbiddenPage'
import { PasswordResetPage } from '../pages/auth/PasswordResetPage'
import { SessionExpiredPage } from '../pages/auth/SessionExpiredPage'
import { LoginPage } from '../pages/login/LoginPage'
import { StudentAssignmentDetailPage } from '../pages/student/StudentAssignmentDetailPage'
import { StudentAssignmentsPage } from '../pages/student/StudentAssignmentsPage'
import { StudentAttendanceFormPage } from '../pages/student/StudentAttendanceFormPage'
import { StudentAttendancePage } from '../pages/student/StudentAttendancePage'
import { StudentBlogRecordDetailPage } from '../pages/student/StudentBlogRecordDetailPage'
import { StudentCertificateChangesRequestedPage } from '../pages/student/StudentCertificateChangesRequestedPage'
import { StudentCertificatePage } from '../pages/student/StudentCertificatePage'
import { StudentCertificatePublicationPage } from '../pages/student/StudentCertificatePublicationPage'
import { StudentCourseMaterialsPage } from '../pages/student/StudentCourseMaterialsPage'
import { StudentCoursePage } from '../pages/student/StudentCoursePage'
import { StudentDashboardPage } from '../pages/student/StudentDashboardPage'
import { StudentMileageHistoryPage } from '../pages/student/StudentMileageHistoryPage'
import { StudentMileagePage } from '../pages/student/StudentMileagePage'
import { StudentMileageProductsPage } from '../pages/student/StudentMileageProductsPage'
import { StudentOnboardingPage } from '../pages/student/StudentOnboardingPage'
import { StudentPeerReputationPage } from '../pages/student/StudentPeerReputationPage'
import { StudentPeerReviewPage } from '../pages/student/StudentPeerReviewPage'
import { StudentPeerTagPage } from '../pages/student/StudentPeerTagPage'
import { StudentPlayPage } from '../pages/student/StudentPlayPage'
import { StudentPlayTypingPage } from '../pages/student/StudentPlayTypingPage'
import { StudentProfilePage } from '../pages/student/StudentProfilePage'
import { StudentProjectChangeRequestPage } from '../pages/student/StudentProjectChangeRequestPage'
import { StudentProjectsPage } from '../pages/student/StudentProjectsPage'
import { StudentProjectWizardPage } from '../pages/student/StudentProjectWizardPage'
import { StudentProjectWorkspacePage } from '../pages/student/StudentProjectWorkspacePage'
import { StudentQuizResultPage } from '../pages/student/StudentQuizResultPage'
import { StudentQuizTakePage } from '../pages/student/StudentQuizTakePage'
import { StudentQuizzesPage } from '../pages/student/StudentQuizzesPage'
import { StudentRecordFormPage } from '../pages/student/StudentRecordFormPage'
import { StudentRecordsPage } from '../pages/student/StudentRecordsPage'
import { StudentTroubleshootingFormPage } from '../pages/student/StudentTroubleshootingFormPage'
import { StudentTroubleshootingPage } from '../pages/student/StudentTroubleshootingPage'
import { PublicCertificateVerifyPage } from '../pages/verify/PublicCertificateVerifyPage'

// 주소와 페이지 컴포넌트를 연결하는 라우터 설정입니다.
// Figma의 로그인 흐름과 수강생 화면 흐름을 URL로 직접 확인할 수 있게 만듭니다.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={ROUTES.login} replace />,
  },
  {
    path: ROUTES.login,
    element: <LoginPage />,
  },
  {
    path: ROUTES.passwordReset,
    element: <PasswordResetPage />,
  },
  {
    path: ROUTES.authRoute,
    element: <AuthRoutePage />,
  },
  {
    path: ROUTES.sessionExpired,
    element: <SessionExpiredPage />,
  },
  {
    path: ROUTES.forbidden,
    element: <ForbiddenPage />,
  },
  {
    path: ROUTES.publicCertificateVerify,
    element: <PublicCertificateVerifyPage />,
  },
  {
    path: ROUTES.studentOnboarding,
    element: <StudentOnboardingPage />,
  },
  {
    path: ROUTES.studentQuizTake,
    element: <StudentQuizTakePage />,
  },
  {
    path: '/student',
    element: <StudentLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.studentDashboard} replace />,
      },
      {
        path: 'dashboard',
        element: <StudentDashboardPage />,
      },
      {
        path: 'course',
        element: <StudentCoursePage />,
      },
      {
        path: 'course/materials',
        element: <StudentCourseMaterialsPage />,
      },
      {
        path: 'course/assignments',
        element: <StudentAssignmentsPage />,
      },
      {
        path: 'course/assignments/:assignmentId',
        element: <StudentAssignmentDetailPage />,
      },
      {
        path: 'quizzes',
        element: <StudentQuizzesPage />,
      },
      {
        path: 'quizzes/:quizId/result',
        element: <StudentQuizResultPage />,
      },
      {
        path: 'profile',
        element: <StudentProfilePage />,
      },
      {
        path: 'attendance',
        element: <StudentAttendancePage />,
      },
      {
        path: 'attendance/form',
        element: <StudentAttendanceFormPage />,
      },
      {
        path: 'records',
        element: <StudentRecordsPage />,
      },
      {
        path: 'records/new/:recordType',
        element: <StudentRecordFormPage />,
      },
      {
        path: 'records/blog/:recordId',
        element: <StudentBlogRecordDetailPage />,
      },
      {
        path: 'records/blog/:recordId/edit',
        element: <StudentBlogRecordDetailPage />,
      },
      {
        path: 'certificate',
        element: <StudentCertificatePage />,
      },
      {
        path: 'certificate/changes-requested',
        element: <StudentCertificateChangesRequestedPage />,
      },
      {
        path: 'certificate/publication',
        element: <StudentCertificatePublicationPage />,
      },
      {
        path: 'projects',
        element: <StudentProjectsPage />,
      },
      {
        path: 'projects/new',
        element: <StudentProjectWizardPage />,
      },
      {
        path: 'projects/:projectId',
        element: <StudentProjectWorkspacePage />,
      },
      {
        path: 'projects/:projectId/change-requests/new',
        element: <StudentProjectChangeRequestPage />,
      },
      {
        path: 'troubleshooting',
        element: <StudentTroubleshootingPage />,
      },
      {
        path: 'troubleshooting/new',
        element: <StudentTroubleshootingFormPage />,
      },
      {
        path: 'troubleshooting/:id/change-requests/new',
        element: <StudentTroubleshootingFormPage />,
      },
      {
        path: 'peer-evaluations',
        element: <StudentPeerReviewPage />,
      },
      {
        path: 'peer-review',
        element: <StudentPeerReviewPage />,
      },
      {
        path: 'peer-tag',
        element: <StudentPeerTagPage />,
      },
      {
        path: 'peer-reputation',
        element: <StudentPeerReputationPage />,
      },
      {
        path: 'mileage',
        element: <StudentMileagePage />,
      },
      {
        path: 'mileage/products',
        element: <StudentMileageProductsPage />,
      },
      {
        path: 'mileage/history',
        element: <StudentMileageHistoryPage />,
      },
      {
        path: 'play',
        element: <StudentPlayPage />,
      },
      {
        path: 'play/typing',
        element: <StudentPlayTypingPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.login} replace />,
  },
])
