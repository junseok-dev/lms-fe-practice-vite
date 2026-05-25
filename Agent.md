# Agent 작업 지침

이 문서는 이 프로젝트에서 Codex가 작업하기 전에 확인해야 하는 기준입니다.
사용자가 기준을 추가하거나 작업 방식을 바꾸면 이 파일도 함께 갱신합니다.

## 프로젝트 기준

```text
작업 폴더: C:\Workspaces\lms-fe-practice-vite
기술 스택: React + TypeScript + Vite
목표: Figma LMS UI/UX를 기준으로 프론트엔드 실습 구현
데이터: 백엔드 API 없이 mock 데이터 사용
검증: npm.cmd run build, npm.cmd run lint 실행
```

## 최우선 원칙

```text
Figma 화면과 최대한 동일하게 구현하는 것을 우선합니다.
임의로 새 기능을 만들거나 대체 디자인을 만들지 않습니다.
화면 구현 전 Figma MCP로 해당 프레임을 확인합니다.
텍스트, 순서, 여백, 크기, 색상은 Figma 값을 우선합니다.
Figma와 다른 부분이 보이면 기능 추가보다 디자인 정합성을 먼저 맞춥니다.
```

## Figma 사용 규칙

```text
사용 중인 Figma 파일:
https://www.figma.com/design/Xt9rp01qqWNXnhB95jcFSm/LMS-UI-UX

화면을 만들거나 수정할 때는 해당 Figma node를 먼저 확인합니다.
depth가 부족해 텍스트나 하위 레이어가 안 보이면 더 깊게 다시 조회합니다.
Figma에서 확인하지 않은 문구를 임의로 넣지 않습니다.
Figma에 있는 데모 계정, 상태 문구, 버튼 문구를 우선 사용합니다.
```

## 공통 컴포넌트 규칙

```text
Figma에서 "공통 - ..." 컴포넌트로 확인된 것만 src/components/figma/common에 둡니다.
반복되지만 Figma 공통인지 불확실한 것은 src/components/candidates/README.md에 후보로 기록합니다.
후보 컴포넌트를 임의로 공통 컴포넌트로 승격하지 않습니다.
후보를 공통으로 승격해야 할 때는 먼저 사용자에게 설명하고 확인을 받습니다.
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
공통 - Attendance Day Cell / Variants
```

## 수강생 화면 기준

```text
수강생 화면은 Figma의 "수강생 Pages" 캔버스를 기준으로 합니다.
대시보드: 수강생 - 대시보드 (/student/dashboard)
마이 프로필: 수강생 - 마이 프로필 (/student/profile)
강의 홈: 수강생 - 강의 홈 (/student/course)
강의 자료실: 수강생 - 강의 자료실 (/student/course/materials)
퀴즈 목록: 수강생 - 퀴즈 목록 (/student/quizzes)
퀴즈 응시: 수강생 - 퀴즈 응시 (/student/quizzes/:quizId/take)
퀴즈 결과: 수강생 - 퀴즈 결과 (/student/quizzes/:quizId/result)
출결/태도: 수강생 사이드바의 출결/태도 메뉴 (/student/attendance)
기록실: 수강생 - 기록실 (/student/records)
수강 역량 증명서: 수강생 - 증명서 미리보기 (/student/certificate)
보완 요청 상세: 수강생 - 보완 요청 상세 (/student/certificate/changes-requested)
증명서 공개 설정: 수강생 - 공개 설정 (/student/certificate/publication)
프로젝트 목록: 수강생 - 프로젝트 목록 (/student/projects)
트러블슈팅 로그 목록: 수강생 - 트러블슈팅 로그 목록 (/student/troubleshooting)
동료 평가 허브: 수강생 - 동료 평가 허브 (/student/peer-evaluations), 호환 URL은 /student/peer-review
마일리지: 수강생 - 마일리지 (/student/mileage)
PLAY 게임 선택: 수강생 - PLAY 게임 선택 (/student/play)
온보딩: 수강생 - 온보딩 / Step 1 역량 (/student/onboarding)
```

마이 프로필 URL은 `/student/profile`이지만 Figma에서는 사이드바 active가 `대시보드`로 보입니다.
따라서 프로필 화면에서는 대시보드에 포함된 화면처럼 보이게 합니다.

기수 게시판은 Figma 사이드바에 보이지만 현재 구현 범위에서 없어진 페이지로 보고 라우팅에서 제외합니다.

## 수강 역량 증명서 보류 항목

```text
역량 리포트(재점검 필요) 화면은 사용자가 별도로 지시하기 전까지 구현하거나 수정하지 않습니다.
외부 검증 4개 화면은 Main 캔버스의 외부 검증 프레임을 기준으로 구현합니다.
```

외부 검증 화면:

```text
외부 검증 - 검증 URL 진입: /verify/:publicToken
외부 검증 - 잘못된 링크 안내: /verify/:publicToken?status=invalid
외부 검증 - 비공개 안내: /verify/:publicToken?status=private
외부 검증 - 공개 증명서: /verify/:publicToken?status=public
```

## 인증 화면 규칙

```text
로그인 화면은 Figma "로그인" 프레임을 기준으로 합니다.
비밀번호 찾기는 "공통 - 비밀번호 재설정 안내" 프레임을 기준으로 합니다.
역할 확인은 "공통 - 역할 라우팅" 프레임을 기준으로 합니다.
세션 만료는 "공통 - 세션 만료 안내" 프레임을 기준으로 합니다.
권한 오류는 "공통 - 권한 오류 4 variants" 프레임을 기준으로 합니다.
```

로그인 데모 계정 문구도 Figma 기준에 맞춥니다.

```text
성공: 아이디 playdata / 비번 1234 -> 대시보드
차단: 아이디 disabled / 비번 아무 값 -> 비활성 계정
서버: 아이디 server / 비번 아무 값 -> 서버 오류
오류: 아이디 그 외 / 비번 아무 값 -> 아이디/비밀번호 불일치
공백: 아이디 비움 / 비번 비움 -> 필수값 미입력
```

## 작업 목적

```text
이 프로젝트는 프론트엔드 실습용입니다.
실제 백엔드 API는 아직 없습니다.
API 대신 mock 데이터를 사용합니다.
mock 데이터는 추후 백엔드 API 계약의 초안이 될 수 있게 작성합니다.
라우팅, 레이아웃, 컴포넌트 분리, Figma 기반 구현 흐름을 익히는 것이 목적입니다.
```

## 작업 방식

```text
코드 수정, 파일 생성, 폴더 생성 전에 사용자에게 작업 내용을 보고합니다.
보고에는 "무슨 작업인지", "왜 하는지", "화면 무엇이 바뀌는지"를 포함합니다.
작업 전 관련 파일과 Figma 구조를 먼저 확인합니다.
파일 수정은 apply_patch를 사용합니다.
기존 사용자 변경을 되돌리지 않습니다.
불필요한 리팩터링은 하지 않습니다.
작업 후 변경 내용을 짧게 요약합니다.
빌드/린트 실패 시 원인을 고치고 다시 검증합니다.
```

## 파일/폴더 설명 규칙

```text
새 파일이나 새 폴더를 만들 때는 역할을 알 수 있게 설명을 남깁니다.
설명은 파일 상단 주석, 가까운 README, 또는 관련 문서 중 가장 자연스러운 위치에 작성합니다.
주석은 "이 파일이 왜 있는지", "어떤 책임을 갖는지"를 중심으로 짧고 명확하게 씁니다.
단순한 코드 동작을 반복 설명하는 주석은 피합니다.
폴더 단위 흐름이 중요하면 해당 폴더 README를 만듭니다.
```

## 개발 서버

```text
Windows PowerShell 환경에서는 npm 대신 npm.cmd를 사용합니다.
개발 서버 실행 명령:
npm.cmd run dev
```

서버 실행 중 권한 문제가 있으면 사용자에게 명확히 알립니다.
