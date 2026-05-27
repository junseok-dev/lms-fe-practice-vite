# src 폴더 안내

이 폴더에는 브라우저에서 실제로 렌더링되는 React 코드가 들어갑니다.

## 실행 흐름

```text
index.html
  -> src/main.tsx
    -> src/app/App.tsx
      -> src/app/router.tsx
        -> layouts, pages, features, components
```

## 폴더 기준

- `app`: 앱 진입점과 라우터를 관리합니다.
- `layouts`: 로그인 전/후, 역할별 화면처럼 여러 페이지가 공유하는 큰 화면 구조를 관리합니다.
- `pages`: URL과 직접 연결되는 화면을 관리합니다. 각 페이지는 화면 조립과 라우팅 기준 역할에 집중합니다.
- `features`: 로그인, 수강생, 강사, 멘토, 운영자처럼 업무 단위 기능을 관리합니다.
- `components/common`: 여러 화면에서 반복 사용되는 공통 UI를 관리합니다.
- `components/candidates`: 반복 가능성은 있지만 아직 공통으로 확정되지 않은 UI 후보를 문서로 관리합니다.
- `mocks`: 백엔드 API가 완성되기 전에도 화면 개발을 진행할 수 있게 하는 임시 데이터를 관리합니다.
- `constants`: 라우트와 상태값처럼 여러 곳에서 공유하는 값을 관리합니다.
- `types`: 여러 화면과 기능에서 공유하는 타입을 관리합니다.
- `services`: API 요청, 인증 헤더, 공통 에러 처리 같은 서버 통신 공통 코드를 관리합니다.
- `hooks`: 여러 페이지에서 재사용하는 React 훅을 관리합니다.
- `styles`: 전역 스타일과 디자인 토큰을 관리합니다.

## 공통 컴포넌트

실제 프로젝트에서는 Figma라는 도구 이름을 폴더 구조에 강하게 남기기보다, 역할 중심으로 공통 UI를 `src/components/common`에 정리합니다.

현재 `src/components/figma/common`에는 Figma 시안의 `공통 - ...` 컴포넌트를 재현한 기존 컴포넌트가 남아 있습니다.

```text
공통 - Header / Base                    -> FigmaHeader
공통 - Sidebar / Base                   -> FigmaSidebar
공통 - KPI Card / Component             -> FigmaKpiCard
공통 - Tabs Bar / Base                  -> FigmaTabsBar
공통 - Button / Variants                -> FigmaButton
공통 - Input Field / Variants           -> FigmaInputField
공통 - Textarea / Variants              -> FigmaTextarea
공통 - Chip / Variants                  -> FigmaChip
공통 - Status Badge / Variants          -> FigmaStatusBadge
공통 - Notice Banner / Variants         -> FigmaNoticeBanner
공통 - Marketplace Product Card         -> FigmaMarketplaceProductCard
공통 - Quiz Table Row / Variants        -> FigmaQuizTableRow
공통 - Toast / Variants                 -> FigmaToast
공통 - Attendance Day Cell / Variants   -> FigmaAttendanceDayCell
공통 - Wizard Stepper / Component       -> FigmaWizardStepper
공통 - Kanban Task Card / Component     -> FigmaKanbanTaskCard
공통 - Workspace Day Cell / Component   -> FigmaWorkspaceDayCell
공통 - Document File Card / Component   -> FigmaDocumentFileCard
```

앞으로 새 공통 UI는 `src/components/common`에 만들고, 기존 `FigmaButton`, `FigmaChip`, `FigmaStatusBadge` 같은 컴포넌트는 필요할 때 `Button`, `Chip`, `Badge`처럼 역할 중심 이름으로 옮깁니다.

공통인지 애매한 반복 UI는 바로 승격하지 않습니다. 먼저 `src/components/candidates/README.md`에 후보로 남기고, 2개 이상 화면에서 같은 규칙으로 반복될 때 승격을 검토합니다.

## 수강생 라우트

현재 수강생 영역은 `StudentLayout` 안에서 Header와 Sidebar를 공유합니다.

```text
/student/onboarding
/student/dashboard
/student/profile
/student/course
/student/course/materials
/student/course/materials#share
/student/course/assignments
/student/course/assignments/:assignmentId
/student/course/assignments/:assignmentId?toast=submitted
/student/course/assignments/:assignmentId#confirm-resubmit
/student/quizzes
/student/quizzes/:quizId/take
/student/quizzes/:quizId/result
/student/attendance
/student/attendance/form
/student/records
/student/records/new/:recordType
/student/records/blog/:recordId
/student/records/blog/:recordId/edit
/student/records?modal=delete-blog
/student/records?toast=deleted
/student/records?toast=blog-updated
/student/certificate
/student/certificate/changes-requested
/student/certificate/publication
/student/projects
/student/projects/new
/student/projects/new?step=2
/student/projects/new?step=3
/student/projects/new?step=4
/student/projects/:projectId
/student/projects/:projectId?tab=board
/student/projects/:projectId?tab=calendar
/student/projects/:projectId?tab=meetings
/student/projects/:projectId?tab=docs
/student/projects/:projectId?tab=issues
/student/projects/:projectId?tab=team
/student/projects/:projectId?tab=outcomes
/student/projects/:projectId?tab=peer-evaluation
/student/projects/:projectId?tab=certification
/student/projects/:projectId/change-requests/new
/student/troubleshooting
/student/troubleshooting/new
/student/troubleshooting/:id/change-requests/new
/student/peer-evaluations
/student/peer-tag
/student/peer-reputation
/student/mileage
/student/mileage/products
/student/mileage/history
/student/play
/student/play/typing
```

## 외부 검증 라우트

외부 검증 화면은 수강생 앱 레이아웃과 분리된 독립 라우트입니다.

```text
/verify/:publicToken
/verify/:publicToken?status=invalid
/verify/:publicToken?status=private
/verify/:publicToken?status=public
```

## 수강생 화면 작업 규칙

1. Figma node를 MCP로 확인한 뒤 현재 컴포넌트와 CSS를 비교합니다.
2. 라우팅만 추가하고 끝내지 말고 실제 화면이 Figma와 최대한 동일하게 보이도록 맞춥니다.
3. Header, Sidebar, Button, Chip 같은 반복 UI는 우선 `components/common` 기준으로 정리합니다. 기존 Figma 재현 컴포넌트를 사용할 때도 장기적으로는 역할 중심 이름으로 이전할 수 있게 작성합니다.
4. 페이지 전용 카드, 표, 차트, 미리보기 등은 해당 페이지 CSS에 두고 공통 후보로만 기록합니다.
5. Figma 협업/채팅 아바타처럼 디자인 툴 UI에 해당하는 요소는 앱 UI로 구현하지 않습니다.
6. 한 화면을 수정한 뒤 `docs/figma-student-page-audit.md`의 상태와 메모를 갱신합니다.
7. 작업 후 `npm run build`와 `npm run lint`를 확인합니다.

## 보류 및 명명 규칙

- `수강 역량 증명서 종합 요약(재점검 필요)`은 검토 보류 화면입니다. 별도 지시 전까지 구현하거나 수정하지 않습니다.
- 화면 문구에서 `역량 리포트`라는 표현은 사용하지 않습니다. 필요한 경우 `수강 역량 증명서 종합 요약`으로 씁니다.
- 기수 게시판은 현재 라우팅 제외 정책 때문에 사이드바 구현에 넣지 않습니다.
- 새 파일이나 폴더를 만들면 역할을 알 수 있도록 README 또는 짧은 주석을 남깁니다.

## 최근 주의한 화면

- 퀴즈 결과 하단 액션: `퀴즈 목록으로`, `재응시 (1회 남음)`, `나가기` CTA를 Figma 기준으로 유지합니다.
- 보완 요청 상세: 상단 요청 카드는 빨간 테두리와 좌측 강조선, 우측 요청 메타 구조를 유지합니다.
- 공개 설정: 공개 미리보기는 브라우저 프레임, 어두운 비공개 오버레이, `공개 OFF` 안내 모달 구조를 유지합니다.
- 동료 평가 5축: 별점은 `★★★★★ 5.0`처럼 가로 한 줄로 표시합니다.
