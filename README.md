# lms-fe-practice-vite

React + TypeScript + Vite로 만든 LMS 프론트엔드 실습 프로젝트입니다.

Figma `LMS UI/UX` 파일을 기준으로 로그인, 역할 라우팅, 수강생 화면, 외부 검증 화면을 React 라우트와 페이지 컴포넌트로 옮기고 있습니다. 현재 작업의 중심은 `수강생 Pages`를 Figma와 최대한 동일하게 맞추는 것입니다.

## 실행 방법

```cmd
cd C:\Workspaces\lms-fe-practice-vite
npm install
npm run dev
```

개발 서버가 실행되면 브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:5173/
```

이미 다른 Vite 서버가 떠 있으면 포트가 달라질 수 있습니다. 현재 어떤 서버를 보고 있는지 헷갈리면 터미널에 출력된 `Local:` 주소를 기준으로 확인합니다.

## 자주 쓰는 명령

```cmd
npm run dev
```

로컬 개발 서버를 실행합니다.

```cmd
npm run build
```

TypeScript 검사와 Vite 프로덕션 빌드를 실행합니다.

```cmd
npm run lint
```

ESLint로 코드 스타일과 기본 오류를 검사합니다.

## 주요 라우트

```text
/login
/auth/route
/student/onboarding
/student/dashboard
/student/profile
/student/course
/student/course/materials
/student/course/assignments
/student/quizzes
/student/quizzes/:quizId/take
/student/quizzes/:quizId/result
/student/attendance
/student/attendance/form
/student/records
/student/records/new/:recordType
/student/certificate
/student/certificate/changes-requested
/student/certificate/publication
/student/projects
/student/projects/new
/student/projects/:projectId
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
/verify/:publicToken
```

상세 Figma 매칭 현황은 [docs/figma-student-page-audit.md](docs/figma-student-page-audit.md)를 기준으로 관리합니다.

## 폴더 구조

```text
src/
  app/              앱 진입점, 라우터, 전역 App 스타일
  components/       여러 화면에서 재사용하는 UI
    figma/common/   Figma에서 공통 컴포넌트로 확인된 UI
    candidates/     공통 승격 전 후보 문서
  constants/        라우트, 역할 같은 고정 값
  features/         auth, student 등 업무 단위 기능
  hooks/            재사용 훅
  layouts/          인증/역할/수강생 등 큰 레이아웃
  mocks/            API 전 화면 구현용 mock 데이터
  pages/            URL과 직접 연결되는 페이지 컴포넌트
  services/         API 클라이언트 자리
  styles/           전역 스타일과 토큰
  types/            공통 타입
```

## 구현 원칙

- URL과 직접 연결되는 화면은 `src/pages`에 둡니다.
- 역할별 업무 로직은 `src/features`에 둡니다.
- Figma에서 `공통 - ...` 컴포넌트로 확인된 UI만 `src/components/figma/common`에 둡니다.
- 반복되지만 공통 여부가 애매한 UI는 바로 공통화하지 않고 `src/components/candidates/README.md`에 후보로 기록합니다.
- 새 폴더나 새 파일을 만들면 역할을 알 수 있도록 README 또는 짧은 주석을 남깁니다.
- 수강생 화면은 Figma node를 MCP로 확인한 뒤 실제 페이지 UI를 맞춥니다. 라우팅만 연결하고 끝내지 않습니다.

## 현재 작업 메모

- `수강 역량 증명서 종합 요약(재점검 필요)` 화면은 검토 보류 대상입니다. 별도 지시 전까지 새로 구현하거나 수정하지 않습니다.
- 기존에 쓰이던 `역량 리포트` 문구는 화면 문구에서 제거하고 `수강 역량 증명서 종합 요약`으로 통일했습니다.
- Figma 협업/채팅 아바타처럼 디자인 파일 편집 UI에 해당하는 요소는 앱 화면에 구현하지 않습니다.
- 작업 후에는 기본적으로 `npm run build`와 `npm run lint`를 모두 통과시킵니다.

## 참고 문서

- [src/README.md](src/README.md): `src` 내부 구현 규칙과 수강생 화면 작업 기준
- [docs/figma-student-page-audit.md](docs/figma-student-page-audit.md): Figma 수강생 페이지별 구현 현황
- [docs/practice-roadmap.md](docs/practice-roadmap.md): 실습 로드맵
