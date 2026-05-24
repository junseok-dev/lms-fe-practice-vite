# lms-fe-practice-vite

React + TypeScript + Vite로 만드는 LMS 프론트엔드 연습 프로젝트입니다.

Figma `LMS UI/UX` 파일의 구성을 기준으로 수강생, 멘토, 강사, 운영자 화면을 분리하고, 여러 역할에서 함께 쓰는 UI는 공통 컴포넌트로 관리합니다.

## 실행 방법

```cmd
cd C:\Workspaces\lms-fe-practice-vite
npm install
npm run dev
```

개발 서버가 실행되면 터미널에 표시되는 주소를 브라우저에서 열면 됩니다. 보통 아래 주소입니다.

```text
http://localhost:5173/
```

## 자주 쓰는 명령어

```cmd
npm run dev
```

로컬 개발 서버를 실행합니다.

```cmd
npm run build
```

TypeScript 검사와 배포용 빌드를 실행합니다.

```cmd
npm run lint
```

ESLint로 코드 스타일과 기본 오류를 검사합니다.

## 설계 방향

이 프로젝트는 역할별 화면이 많기 때문에 `역할별 컴포넌트`만 단순히 나누기보다, 아래처럼 책임을 나눕니다.

```text
pages       실제 라우팅되는 화면
features    역할별/기능별 업무 코드
components  여러 화면에서 재사용하는 UI
layouts     화면의 큰 틀
services    API 클라이언트 같은 외부 연결 코드
types       여러 기능에서 공유하는 타입
constants   경로, 역할명 같은 고정 값
styles      전역 스타일과 디자인 토큰
```

## 현재 폴더 구조

```text
src/
  app/
    App.tsx        앱 최상위 컴포넌트
    routes.ts      라우팅 경로 초안
    app.css        App 전용 스타일

  pages/
    login/         로그인 페이지
    student/       수강생 라우트 페이지
    mentor/        멘토 라우트 페이지
    instructor/    강사 라우트 페이지
    admin/         운영자 라우트 페이지

  layouts/
    AuthLayout.tsx       로그인 전 화면 레이아웃
    DashboardLayout.tsx  로그인 후 대시보드 레이아웃
    RoleLayout.tsx       역할별 화면 공통 처리 자리

  components/
    common/        Button, Input, Card 같은 범용 UI
    layout/        Header, Sidebar, PageTitle 같은 레이아웃 UI

  features/
    auth/          로그인, 로그아웃, 현재 사용자 기능
    student/       수강생 전용 기능
    mentor/        멘토 전용 기능
    instructor/    강사 전용 기능
    admin/         운영자 전용 기능

  services/
    apiClient.ts   API 요청 공통 설정

  hooks/
    useModal.ts
    usePagination.ts

  types/
    role.ts
    user.ts

  constants/
    routes.ts
    roles.ts

  styles/
    globals.css
    variables.css
```

## 어디에 코드를 넣을까?

로그인 폼처럼 인증 기능에만 필요한 코드는 `src/features/auth`에 둡니다.

수강생에게만 필요한 카드, 목록, API는 `src/features/student`에 둡니다.

멘토, 강사, 운영자도 같은 방식으로 각각 `mentor`, `instructor`, `admin` 기능 폴더 안에서 키웁니다.

여러 역할에서 같이 쓰는 버튼, 입력창, 카드, 모달, 탭은 `src/components/common`에 둡니다.

Header, Sidebar처럼 화면 틀에 가까운 컴포넌트는 `src/components/layout`에 둡니다.

실제 주소와 연결되는 페이지 컴포넌트는 `src/pages`에 둡니다. 페이지는 화면 배치에 집중하고, 복잡한 기능 구현은 `features`로 넘기는 방식이 좋습니다.

## 다음 추천 작업

1. `react-router-dom`을 설치해서 `src/app/routes.ts`를 실제 라우터로 연결합니다.
2. Figma의 공통 컴포넌트인 Sidebar, Header, KPI Card, Tabs를 `components`에 맞춰 구현합니다.
3. 로그인 화면을 먼저 완성한 뒤 역할별 대시보드를 하나씩 붙입니다.

## 실습 로드맵

처음부터 끝까지 어떤 순서로 실습할지는 [docs/practice-roadmap.md](docs/practice-roadmap.md)에 정리했습니다.
