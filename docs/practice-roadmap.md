# LMS 프론트엔드 실습 로드맵

이 문서는 `lms-fe-practice-vite` 프로젝트를 처음부터 끝까지 어떤 순서로 실습할지 정리한 문서입니다.

이번 실습의 핵심 목표는 백엔드 없이도 Figma 화면을 React로 옮기면서, 실제 프론트엔드 작업 흐름을 익히는 것입니다.

## 실습 목표

```text
로그인 화면을 만든다.
로그인 버튼을 누르면 수강생 화면으로 이동한다.
Figma의 수강생 Pages를 React 페이지로 하나씩 구현한다.
데이터는 API 대신 mock 데이터로 화면에 뿌린다.
작업하면서 컴포넌트 분리, 라우팅, 레이아웃, 협업 흐름을 익힌다.
```

이번 단계에서는 실제 인증, 백엔드 API, 권한 검사, 서버 상태 관리는 하지 않습니다.

## 왜 이 순서로 하는가?

### 1. 라우팅부터 잡는 이유

Figma에는 여러 화면이 있습니다. React에서도 각 화면을 주소로 분리해야 실제 서비스처럼 이동하면서 만들 수 있습니다.

예를 들어 아래처럼 나눕니다.

```text
/login
/student/dashboard
/student/course
/student/course/materials
/student/quizzes
/student/profile
```

라우팅은 어려운 기능을 넣기 위한 것이 아니라, 화면을 페이지 단위로 나누기 위한 기본 장치입니다.

### 2. 레이아웃을 먼저 잡는 이유

수강생 화면들은 대부분 Header, Sidebar, Main Content 구조를 공유합니다.

이 구조를 페이지마다 반복해서 만들면 수정할 때 힘들어집니다. 그래서 `StudentLayout`을 먼저 만들고, 각 페이지는 본문만 담당하게 합니다.

### 3. Mock 데이터를 쓰는 이유

아직 API가 없어도 프론트 화면은 만들 수 있습니다.

Mock 데이터는 단순 임시 데이터가 아니라, 나중에 백엔드와 맞출 응답 구조의 초안이 됩니다.

```ts
export const studentCourses = [
  {
    id: 'course-1',
    title: 'React 기초',
    progress: 72,
    status: 'in-progress',
  },
]
```

이런 데이터를 먼저 만들면 `map`, props, 컴포넌트 분리, 조건부 렌더링을 자연스럽게 연습할 수 있습니다.

### 4. Figma 기준으로 구현하는 이유

이번 실습은 디자인을 임의로 만드는 것이 아니라 Figma 화면을 코드로 옮기는 연습입니다.

따라서 파일 이름, 라우트 이름, 화면 이름은 가능하면 Figma 프레임 이름을 기준으로 맞춥니다.

## Figma 기준 수강생 화면

Figma `수강생 Pages`에서 확인한 주요 화면입니다.

```text
수강생 — 대시보드 (/student/dashboard)
수강생 — 퀴즈 목록 (/student/quizzes)
수강생 — 마이 프로필 (/student/profile)
수강생 — 강의 홈 (/student/course)
수강생 — 강의 자료실 (/student/course/materials)
수강생 — 온보딩 / Step 1 다짐 (/student/onboarding)
수강생 — 퀴즈 응시 (/student/quizzes/:quizId/take)
수강생 — 퀴즈 결과 (/student/quizzes/:quizId/result)
```

처음부터 전부 만들지 않고, 아래 순서로 구현합니다.

## 전체 실습 순서

### Phase 0. 프로젝트 기준 정리

목표: 작업 기준을 맞춥니다.

할 일:

```text
폴더 구조 이해
README 읽기
Figma 화면 목록 확인
구현 범위 정하기
협업 규칙 정하기
```

완료 기준:

```text
어떤 화면부터 만들지 설명할 수 있다.
pages, features, components, layouts의 차이를 설명할 수 있다.
```

### Phase 1. 라우팅 세팅

목표: 주소별로 화면이 바뀌게 만듭니다.

할 일:

```text
react-router-dom 설치
src/app/router.tsx 생성
/login 라우트 연결
/student/dashboard 라우트 연결
/student/* 하위 라우트 구조 만들기
Sidebar 링크를 실제 라우트로 연결
```

완료 기준:

```text
/login으로 접속하면 로그인 화면이 보인다.
로그인 버튼을 누르면 /student/dashboard로 이동한다.
사이드바 메뉴를 누르면 수강생 페이지 주소가 바뀐다.
```

### Phase 2. Login 화면 구현

목표: Figma 로그인 화면을 React로 옮깁니다.

할 일:

```text
LoginPage 구조 잡기
LoginForm 구성
Input, Button 공통 컴포넌트 정리
로그인 버튼 클릭 시 수강생 대시보드로 이동
```

완료 기준:

```text
로그인 화면이 Figma와 비슷한 레이아웃으로 보인다.
입력창과 버튼이 공통 컴포넌트를 사용한다.
실제 로그인 기능 없이도 다음 화면으로 이동한다.
```

### Phase 2-1. 인증 상태 화면 구현

목표: 로그인 성공/실패 외의 공통 인증 흐름을 구현합니다.

Figma 기준 화면:

```text
공통 — 비밀번호 재설정 안내 (/login/password-reset)
공통 — 역할 라우팅 (/auth/route)
공통 — 세션 만료 안내 (/session-expired)
공통 — 권한 오류 4 variants (/403)
수강생 — 온보딩 / Step 1 다짐 (/student/onboarding)
```

완료 기준:

```text
로그인 성공 후 /auth/route를 거쳐 역할과 상태에 따라 이동한다.
신규 수강생은 /student/onboarding으로 이동한다.
온보딩 완료 또는 건너뛰기 후 /student/dashboard로 이동한다.
비밀번호 재설정 안내, 세션 만료, 권한 오류 화면을 URL로 확인할 수 있다.
```

### Phase 3. StudentLayout 구현

목표: 수강생 화면의 공통 틀을 만듭니다.

할 일:

```text
StudentLayout 생성
Figma 공통 Header를 기준으로 StudentHeader 연결
Figma 공통 Sidebar를 기준으로 StudentSidebar 연결
본문 영역 Outlet 연결
Figma 공통 Header, Sidebar 스타일 반영
```

완료 기준:

```text
수강생 페이지들이 같은 Header와 Sidebar를 공유한다.
페이지가 바뀌어도 공통 레이아웃은 유지된다.
```

### Phase 4. Mock 데이터 설계

목표: API 없이도 실제 데이터처럼 화면을 채웁니다.

할 일:

```text
src/mocks/currentUser.ts
src/mocks/studentDashboard.ts
src/mocks/studentCourses.ts
src/mocks/studentQuizzes.ts
src/mocks/studentProfile.ts
```

완료 기준:

```text
페이지가 하드코딩 문구만 보여주지 않는다.
mock 데이터를 import해서 화면에 렌더링한다.
배열 데이터는 map으로 렌더링한다.
```

### Phase 5. 수강생 대시보드 구현

목표: 첫 번째 실제 수강생 화면을 완성합니다.

할 일:

```text
Dashboard summary 영역 구현
진행 중 과정 카드 구현
공지 또는 할 일 영역 구현
마일리지/퀴즈/출결 요약 카드 구현
```

완료 기준:

```text
/student/dashboard가 Figma 구조와 유사하다.
Figma에서 공통 컴포넌트로 확인된 UI는 components/figma/common을 사용한다.
반복되지만 아직 Figma 공통이 아닌 UI는 components/candidates에 후보로 기록한다.
mock 데이터 변경 시 화면도 바뀐다.
```

### Phase 6. 강의 홈과 자료실 구현

목표: 수강생의 주요 학습 화면을 구현합니다.

할 일:

```text
/student/course 구현
/student/course/materials 구현
CourseCard, MaterialCard 같은 컴포넌트 분리
강의 탭 UI 구현
```

완료 기준:

```text
강의 홈과 자료실이 같은 수강생 레이아웃 안에서 동작한다.
탭, 카드, 목록 UI를 재사용할 수 있다.
```

### Phase 7. 퀴즈 화면 구현

목표: 목록, 응시, 결과 화면 흐름을 연습합니다.

할 일:

```text
/student/quizzes 구현
/student/quizzes/:quizId/take 구현
/student/quizzes/:quizId/result 구현
문제/선택지/결과 mock 데이터 작성
```

완료 기준:

```text
퀴즈 목록에서 응시 화면으로 이동한다.
응시 화면에서 결과 화면으로 이동한다.
실제 채점 기능 없이도 화면 흐름을 이해할 수 있다.
```

### Phase 8. 프로필과 온보딩 구현

목표: 폼 UI와 사용자 정보 화면을 연습합니다.

할 일:

```text
/student/profile 구현
/student/onboarding 구현
폼 입력 UI 구성
프로필 카드 구현
```

완료 기준:

```text
폼 화면과 정보 표시 화면의 차이를 이해한다.
입력 UI를 공통 컴포넌트로 정리한다.
```

### Phase 9. 정리와 회고

목표: 실습 결과를 실제 프로젝트처럼 정리합니다.

할 일:

```text
README 업데이트
폴더 구조 정리
사용하지 않는 코드 제거
컴포넌트 이름 점검
빌드와 린트 확인
둘이서 코드 리뷰
```

완료 기준:

```text
npm.cmd run build 통과
npm.cmd run lint 통과
다른 사람이 README만 보고 실행할 수 있다.
이번 프로젝트에서 배운 점을 설명할 수 있다.
```

## 두 명 협업 방식

황설현과 박준석이 함께 작업할 때는 같은 파일을 동시에 오래 수정하지 않는 것이 중요합니다.

추천 분담:

```text
황설현
- LoginPage
- 공통 Button, Input, Card
- Figma 공통 스타일 정리

박준석
- StudentLayout
- StudentSidebar, StudentHeader
- StudentDashboardPage
```

이후부터는 페이지 단위로 나눕니다.

```text
한 명: /student/course, /student/course/materials
한 명: /student/quizzes, /student/quizzes/:quizId/take, /student/quizzes/:quizId/result
```

## Git 작업 규칙

브랜치 이름은 작업 단위가 보이게 만듭니다.

```text
feature/router-setup
feature/login-page
feature/student-layout
feature/student-dashboard
feature/student-quizzes
```

커밋 메시지는 아래처럼 씁니다.

```text
feat: 로그인 화면 UI 구현
feat: 수강생 레이아웃 추가
feat: 수강생 대시보드 카드 구현
style: 공통 버튼 스타일 정리
docs: 실습 로드맵 추가
```

작업 전후에는 아래 명령어로 확인합니다.

```cmd
npm.cmd run build
npm.cmd run lint
```

## Figma 소통 규칙

Figma 화면 상태를 정해두면 구현 순서가 흔들리지 않습니다.

추천 상태:

```text
[Ready] 구현 가능
[WIP] 디자인 작업 중
[Review] 확인 필요
[Done] 구현 완료
```

프론트는 `[Ready]` 화면부터 구현합니다.

프레임 이름과 코드 파일 이름은 최대한 맞춥니다.

```text
Figma: 수강생 — 대시보드
Code: StudentDashboardPage.tsx

Figma: 수강생 — 강의 홈
Code: StudentCoursePage.tsx

Figma: 수강생 — 퀴즈 목록
Code: StudentQuizzesPage.tsx
```

## 백엔드와 협업할 때의 기준

이번 실습에서는 API를 붙이지 않지만, mock 데이터는 나중에 API 계약의 초안이 될 수 있습니다.

백엔드와는 나중에 아래를 맞춥니다.

```text
API 주소
요청 method
요청 body
응답 data 형태
에러 응답 형태
role 값
날짜 포맷
페이지네이션 방식
```

예를 들어 프론트 mock이 아래와 같다면:

```ts
export const studentCourses = [
  {
    id: 'course-1',
    title: 'React 기초',
    progress: 72,
    status: 'in-progress',
  },
]
```

나중에 백엔드와 이런 응답을 약속할 수 있습니다.

```json
{
  "data": [
    {
      "id": "course-1",
      "title": "React 기초",
      "progress": 72,
      "status": "in-progress"
    }
  ]
}
```

## 지금 바로 시작할 첫 작업

첫 번째 실제 작업은 Phase 1입니다.

```text
react-router-dom 설치
router.tsx 생성
/login 연결
/student/dashboard 연결
로그인 버튼 클릭 시 /student/dashboard로 이동
```

이 작업이 끝나면 Figma 화면을 하나씩 React 페이지에 옮길 준비가 됩니다.
