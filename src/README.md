# src 폴더 안내

이 폴더는 브라우저에서 실제로 렌더링되는 React 코드가 들어가는 곳입니다.

## 실행 흐름

```text
index.html
  -> src/main.tsx
    -> src/app/App.tsx
      -> app/router.tsx
        -> layouts, pages, features, components
```

## 폴더 기준

`pages`는 URL과 직접 연결되는 화면입니다.

`features`는 로그인, 수강생, 멘토, 강사, 운영자처럼 업무 단위로 묶는 코드입니다.

`components/figma/common`은 Figma에서 `공통 - ...` 컴포넌트로 확인된 UI만 둡니다.

`components/candidates`는 반복 가능성은 있지만 아직 Figma 공통으로 확정하지 않은 UI 후보를 문서로 관리합니다.

`layouts`는 로그인 후 수강생 화면처럼 여러 페이지가 공유하는 큰 화면 틀입니다.

`mocks`는 API가 아직 없을 때 화면을 먼저 만들기 위한 가짜 데이터입니다.

`types`, `constants`는 여러 폴더에서 함께 쓰는 타입과 상수를 둡니다.

## 현재 Figma 공통 컴포넌트

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
```

## 수강생 1차 추가 라우트

```text
/student/course/assignments
/student/course/assignments/:assignmentId
/student/attendance/form
/student/mileage/products
/student/mileage/history
/student/play/typing
```

## 수강생 누락 화면 추가 라우트

```text
/student/records/new/:recordType
/student/records/blog/:recordId
/student/records/blog/:recordId/edit
/student/records?modal=delete-blog
/student/records?toast=deleted
/student/records?toast=blog-updated
/student/course/materials#share
/student/course/assignments/:assignmentId?toast=submitted
/student/course/assignments/:assignmentId#confirm-resubmit
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
/student/troubleshooting/new
/student/troubleshooting/:id/change-requests/new
/student/peer-evaluations
/student/peer-tag
/student/peer-reputation
```

기수 게시판은 없어진 페이지로 합의했기 때문에 사이드바와 라우터에 넣지 않습니다.
