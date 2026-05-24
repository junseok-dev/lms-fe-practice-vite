# Agent 작업 지침

이 문서는 이 프로젝트에서 Codex가 작업할 때 항상 우선 확인해야 하는 기준입니다.
앞으로 사용자가 "이 기준도 추가해", "앞으로는 이렇게 해"라고 말하면 이 파일을 업데이트합니다.

## 프로젝트 기준

```text
작업 폴더: C:\Workspaces\lms-fe-practice-vite
기술 스택: React + TypeScript + Vite
목표: Figma LMS UI/UX를 기준으로 프론트엔드 실습 구현
데이터: 백엔드 API 없이 mock 데이터 사용
검증: 작업 후 npm.cmd run build, npm.cmd run lint 실행
```

## 최우선 원칙

```text
Figma 화면과 동일하게 구현하는 것이 가장 중요하다.
임의로 예쁘게 만들거나 대체 디자인을 만들지 않는다.
화면 구현 전 Figma MCP로 해당 프레임을 확인한다.
텍스트, 순서, 여백, 크기, 색상은 Figma 값을 우선한다.
Figma와 다른 부분이 보이면 기능 추가보다 디자인 정합성을 먼저 맞춘다.
```

## Figma 사용 규칙

```text
사용 중인 Figma 파일:
https://www.figma.com/design/Xt9rp01qqWNXnhB95jcFSm/LMS-UI-UX

화면을 만들거나 수정할 때는 해당 Figma node를 먼저 확인한다.
depth가 부족해서 텍스트나 하위 레이어가 안 보이면 더 깊게 다시 조회한다.
Figma에서 확인하지 않은 문구를 임의로 넣지 않는다.
Figma에 있는 데모 계정, 상태 문구, 버튼 문구를 우선 사용한다.
```

## 공통 컴포넌트 규칙

```text
Figma에 "공통 - ..." 컴포넌트로 확인된 것만 src/components/figma/common에 둔다.
반복될 것 같지만 Figma 공통인지 불확실한 것은 src/components/candidates/README.md에 후보로만 기록한다.
후보 컴포넌트를 임의로 공통 컴포넌트로 승격하지 않는다.
후보를 공통으로 승격해야 할 때는 먼저 사용자에게 설명하고 확인을 받는다.
```

현재 Figma 공통으로 확인된 컴포넌트:

```text
공통 - Header / Base
공통 - Sidebar / Base
공통 - KPI Card / Component
공통 - Tabs Bar / Base
공통 - Button / Variants
공통 - Input Field / Variants
공통 - Interactive Input / Variants
공통 - Login Error Banner / Variants
공통 - Notice Banner / Variants
공통 - Toast / Variants
공통 - Quiz Table Row / Variants
공통 - Status Badge / Variants
```

## 수강생 화면 규칙

```text
수강생 화면은 Figma의 "수강생 Pages" 캔버스를 기준으로 한다.
대시보드: 수강생 — 대시보드 (/student/dashboard)
마이 프로필: 수강생 — 마이 프로필 (/student/profile)
강의 홈: 수강생 — 강의 홈 (/student/course)
강의 자료실: 수강생 — 강의 자료실 (/student/course/materials)
퀴즈 목록: 수강생 — 퀴즈 목록 (/student/quizzes)
퀴즈 응시: 수강생 — 퀴즈 응시 (/student/quizzes/:quizId/take)
퀴즈 결과: 수강생 — 퀴즈 결과 (/student/quizzes/:quizId/result)
출결/태도: 수강생 사이드바의 출결/태도 메뉴 (/student/attendance)
기록실: 수강생 — 기록실 (/student/records)
수강 역량 증명서: 수강생 — 증명서 미리보기 (/student/certificate)
보완 요청 상세: 수강생 — 보완 요청 상세 (/student/certificate/changes-requested)
증명서 공개 설정: 수강생 — 공개 설정 (/student/certificate/publication)
프로젝트 목록: 수강생 — 프로젝트 목록 (/student/projects)
트러블슈팅 사례 목록: 수강생 — 트러블슈팅 사례 목록 (/student/troubleshooting)
동료 평가 허브: 수강생 — 동료 평가 허브 (/student/peer-evaluations), 코드 URL은 /student/peer-review
내 마일리지: 수강생 — 내 마일리지 (/student/mileage)
PLAY 게임 선택: 수강생 — PLAY 게임 선택 (/student/play)
온보딩: 수강생 — 온보딩 / Step 1 다짐 (/student/onboarding)
```

마이 프로필은 URL은 `/student/profile`이지만 Figma에서 사이드바 active가 `대시보드`로 보인다.
따라서 프로필 화면에서도 대시보드에 포함된 화면처럼 보여야 한다.

기수 게시판은 없어진 페이지로 보고 수강생 사이드바와 라우터에서 제외한다.

## 인증 화면 규칙

```text
로그인 화면은 Figma "로그인" 프레임을 기준으로 한다.
비밀번호 찾기는 "공통 — 비밀번호 재설정 안내" 프레임을 기준으로 한다.
역할 확인은 "공통 — 역할 라우팅" 프레임을 기준으로 한다.
세션 만료는 "공통 — 세션 만료 안내" 프레임을 기준으로 한다.
권한 오류는 "공통 — 권한 오류 4 variants" 프레임을 기준으로 한다.
```

로그인 데모 계정 문구는 Figma 기준을 따른다.

```text
성공: 아이디 playdata / 비번 1234 -> 대시보드
차단: 아이디 disabled / 비번 아무 값 -> 비활성 계정
서버: 아이디 server / 비번 아무 값 -> 서버 오류
오류: 아이디 그 외 / 비번 아무 값 -> 아이디·비번 불일치
공란: 아이디 빈칸 / 비번 빈칸 -> 필수값 미입력
```

## 협업/학습 목적

```text
이 프로젝트는 프론트엔드 실습용이다.
실제 백엔드 API는 아직 없다.
API 대신 mock 데이터를 사용한다.
mock 데이터는 나중에 백엔드 API 계약의 초안이 될 수 있게 작성한다.
라우팅, 레이아웃, 컴포넌트 분리, Figma 기반 구현 흐름을 익히는 것이 목적이다.
```

## 작업 방식

```text
코드 수정, 파일 생성, 폴더 생성 전에 먼저 사용자에게 작업 내용을 보고한다.
보고에는 "무슨 작업인지", "왜 하는지", "하면 무엇이 바뀌는지"를 포함한다.
사용자가 승인하면 실제 작업을 시작한다.
작업 전 관련 파일과 Figma 구조를 먼저 확인한다.
파일 수정은 apply_patch를 사용한다.
기존 사용자 변경을 되돌리지 않는다.
불필요한 리팩터링을 하지 않는다.
작업 후 변경 내용을 짧게 요약한다.
빌드/린트 실패 시 원인을 고치고 다시 검증한다.
```

## 파일/폴더 설명 규칙

```text
새 파일이나 새 폴더를 만들 때는 그 역할을 알 수 있게 설명을 남긴다.
설명은 파일 상단 주석, 가까운 README, 또는 관련 문서 중 가장 자연스러운 위치에 작성한다.
주석은 "왜 이 파일이 있는지", "어떤 책임을 갖는지"를 중심으로 짧고 명확하게 쓴다.
단순한 코드 동작을 반복 설명하는 주석은 피한다.
폴더 단위 의미가 중요하면 해당 폴더 README를 만든다.
```

## 개발 서버

```text
Windows PowerShell 환경에서는 npm 대신 npm.cmd를 사용한다.
개발 서버 실행 명령:
npm.cmd run dev
```

서버 실행에 권한 문제가 있으면 사용자에게 명확히 알린다.
