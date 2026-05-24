# Figma 수강생 페이지 구현 현황표

이 문서는 Figma `LMS UI/UX` 파일의 `수강생 Pages` 캔버스와 현재 React 라우팅/페이지 파일을 1:1로 대조하기 위한 작업 기준표입니다.
내일 작업부터는 이 표의 우선순위대로 `얕음` 또는 `다름` 상태인 화면을 Figma 기준으로 다시 맞춥니다.

## 상태 기준

- `동일`: Figma 프레임과 텍스트, 레이아웃, 상태 표현까지 실제로 대조 완료.
- `다름`: 페이지는 있으나 Figma와 구조나 디자인 차이가 명확함.
- `얕음`: 라우팅과 기본 화면은 있으나 Figma 프레임을 깊게 반영하지 못한 상태.
- `없음`: Figma 프레임은 있으나 현재 라우팅 또는 페이지 컴포넌트가 없음.
- `상태 화면`: 같은 페이지의 modal, toast, hash, query 상태로 처리해야 하는 화면.
- `문서용`: 앱 화면이 아니라 Figma 안의 플로우 설명 프레임.

## 1차 결론

현재 수강생 영역은 대부분 URL과 컴포넌트는 연결되어 있지만, “Figma 프레임을 하나씩 보고 픽셀에 가깝게 재현한 상태”라고 보기 어렵습니다.
따라서 내일 4번 작업은 `우선순위 A`부터 시작해서 한 화면씩 Figma node를 열고 실제 UI를 다시 맞추는 방식으로 진행합니다.

## 우선순위

- `A`: 사용자가 바로 체감하는 메인 페이지. 먼저 Figma와 맞춰야 함.
- `B`: 등록/상세/상태 페이지. 주요 흐름 뒤에 이어서 맞춤.
- `C`: 모달, toast, query/hash 상태. 기본 페이지가 맞은 뒤 상태별로 맞춤.
- `D`: 문서용 플로우 또는 현재 범위 제외.

## Figma 프레임 매칭표

| 우선순위 | Figma node | Figma 프레임 | URL | 현재 코드 파일 | 상태 | 내일 할 일 |
| --- | --- | --- | --- | --- | --- | --- |
| A | `140:5` | 수강생 - 대시보드 | `/student/dashboard` | `StudentDashboardPage.tsx` | 얕음 | Figma 대시보드 카드, 마이 프로필 포함 위치, 검색/헤더/사이드바를 재대조 |
| A | `159:27` | 수강생 - 마이 프로필 | `/student/profile` | `StudentProfilePage.tsx` | 얕음 | 대시보드 active 상태와 프로필 섹션 구성을 Figma 기준으로 재정렬 |
| A | `165:27` | 수강생 - 강의 홈 | `/student/course` | `StudentCoursePage.tsx` | 얕음 | 강의 홈 상단, tabhot, 학습 카드, 리포트 영역 대조 |
| A | `168:27` | 수강생 - 강의 자료실 | `/student/course/materials` | `StudentCourseMaterialsPage.tsx` | 얕음 | 자료 목록, 공유 액션, 탭 바, 카드 간격 대조 |
| A | `226:27` | 수강생 - 퀴즈 목록 | `/student/quizzes` | `StudentQuizzesPage.tsx` | 얕음 | 퀴즈 테이블/필터/상태 배지를 Figma 기준으로 재구성 |
| A | `246:27` | 수강생 - 기록실 | `/student/records` | `StudentRecordsPage.tsx` | 얕음 | 기록 카드, 필터, 액션 버튼, 삭제/수정 상태 진입점 대조 |
| A | `329:826` | 수강생 - 출결 / 태도 | `/student/attendance` | `StudentAttendancePage.tsx` | 얕음 | 출결 요약, 태도 지표, 폼 진입 버튼을 Figma 기준으로 대조 |
| A | `249:27` | 수강생 - 증명서 미리보기 | `/student/certificate` | `StudentCertificatePage.tsx` | 얕음 | 증명서 preview 레이아웃, 외부 공개 설정 CTA 대조 |
| A | `337:930` | 수강생 - 프로젝트 목록 | `/student/projects` | `StudentProjectsPage.tsx` | 얕음 | 프로젝트 리스트 카드와 생성 버튼을 Figma 기준으로 대조 |
| A | `360:1297` | 수강생 - 트러블슈팅 사례 목록 | `/student/troubleshooting` | `StudentTroubleshootingPage.tsx` | 얕음 | 사례 리스트, 태그, 변경 제안 진입점 대조 |
| A | `401:1586` | 수강생 - 동료 평가 허브 | `/student/peer-evaluations` | `StudentPeerReviewPage.tsx` | 얕음 | PeerTag/PeerReputation 카드와 안내 배너 Figma 대조 |
| A | `418:1850` | 수강생 - 내 마일리지 | `/student/mileage` | `StudentMileagePage.tsx` | 얕음 | 마일리지 잔액, 적립/사용 카드, 상품/내역 진입점 대조 |
| A | `418:2172` | 수강생 - PLAY 게임 선택 | `/student/play` | `StudentPlayPage.tsx` | 얕음 | 게임 카드, 준비 중 상태, 타자 게임 진입 CTA 대조 |
| B | `225:27` | 수강생 - 온보딩 / Step 1 다짐 | `/student/onboarding` | `StudentOnboardingPage.tsx` | 얕음 | step 1 카드, 프리뷰 레일, 하단 버튼 대조 |
| B | `2197:14961` | 수강생 - 온보딩 / Step 2 스킬 선택 | `/student/onboarding?step=skills` | `StudentOnboardingPage.tsx` | 얕음 | query 또는 내부 step 상태로 Figma step 2 재현 확인 |
| B | `2197:15032` | 수강생 - 온보딩 / Step 3 외부 URL | `/student/onboarding?step=links` | `StudentOnboardingPage.tsx` | 얕음 | query 또는 내부 step 상태로 Figma step 3 재현 확인 |
| B | `242:27` | 수강생 - 퀴즈 응시 | `/student/quizzes/:quizId/take` | `StudentQuizTakePage.tsx` | 얕음 | sticky 상단/하단, 문제 카드, 답안 선택 UI 대조 |
| B | `243:27` | 수강생 - 퀴즈 결과 | `/student/quizzes/:quizId/result` | `StudentQuizResultPage.tsx` | 얕음 | 점수 요약, 문항별 정답/오답 카드, 카테고리 영역 대조 |
| B | `407:1785` | 수강생 - 과제 / 실습 | `/student/course/assignments` | `StudentAssignmentsPage.tsx` | 얕음 | 과제 목록, 상태, 제출 CTA를 Figma 기준으로 대조 |
| B | `2236:10410` | 수강생 - 과제 상세·제출 | `/student/course/assignments/:assignmentId` | `StudentAssignmentDetailPage.tsx` | 얕음 | 상세 정보, 제출 영역, 수정 제출 진입 상태 대조 |
| B | `267:27` | 수강생 - 블로그 등록 폼 | `/student/records/new/blog` | `StudentRecordFormPage.tsx` | 얕음 | recordType별 폼 필드와 버튼 문구 대조 |
| B | `273:27` | 수강생 - 자격증 등록 폼 | `/student/records/new/certificate` | `StudentRecordFormPage.tsx` | 얕음 | 자격증 전용 필드, 첨부/날짜 입력 UI 대조 |
| B | `274:27` | 수강생 - 스터디 등록 폼 | `/student/records/new/study` | `StudentRecordFormPage.tsx` | 얕음 | 스터디 전용 필드, 참여자/기간 UI 대조 |
| B | `2173:14807` | 수강생 - 블로그 기록 상세 | `/student/records/blog/:recordId` | `StudentBlogRecordDetailPage.tsx` | 얕음 | 상세 읽기 화면과 수정/삭제 액션 대조 |
| B | `2208:16414` | 수강생 - 블로그 기록 수정 | `/student/records/blog/:recordId/edit` | `StudentBlogRecordDetailPage.tsx` | 얕음 | 수정 모드 필드, 저장 후 toast 흐름 대조 |
| B | `248:27` | 수강생 - 보완 요청 상세 | `/student/certificate/changes-requested` | `StudentCertificateChangesRequestedPage.tsx` | 얕음 | 보완 요청 리스트/상세/CTA 대조 |
| B | `255:27` | 수강생 - 공개 설정 | `/student/certificate/publication` | `StudentCertificatePublicationPage.tsx` | 얕음 | 공개 범위, URL, 외부 검증 안내 대조 |
| B | `333:877` | 수강생 - 출결 폼 | `/student/attendance/form` | `StudentAttendanceFormPage.tsx` | 얕음 | 데스크톱 폼 레이아웃, 사유/증빙 입력 대조 |
| B | `2219:10605` | 수강생 - 출결 폼 Mobile | `/student/attendance/form` | `StudentAttendanceFormPage.tsx` | 다름 | 반응형 모바일 스타일 별도 대조 필요 |
| B | `340:981` | 수강생 - 프로젝트 생성 4단계 마법사 / Step 1 | `/student/projects/new` | `StudentProjectWizardPage.tsx` | 얕음 | Step 1 화면과 stepper/입력 영역 대조 |
| B | `347:1134` | 수강생 - 프로젝트 생성 마법사 / Step 2 팀 설정 | `/student/projects/new?step=2` | `StudentProjectWizardPage.tsx` | 얕음 | 팀 설정 UI와 step query 반영 확인 |
| B | `349:1185` | 수강생 - 프로젝트 생성 마법사 / Step 3 상세 설정 | `/student/projects/new?step=3` | `StudentProjectWizardPage.tsx` | 얕음 | 상세 설정 UI와 입력 필드 대조 |
| B | `353:1241` | 수강생 - 프로젝트 생성 마법사 / Step 4 생성 확인 | `/student/projects/new?step=4` | `StudentProjectWizardPage.tsx` | 얕음 | 생성 확인 요약, 최종 CTA 대조 |
| B | `342:1032` | 수강생 - 프로젝트 워크스페이스 / 홈 탭 | `/student/projects/:projectId` | `StudentProjectWorkspacePage.tsx` | 얕음 | 홈 탭 요약, 프로젝트 헤더, 탭 바 대조 |
| B | `420:1850` | 수강생 - 프로젝트 워크스페이스 / 보드·작업 탭 | `/student/projects/:projectId?tab=board` | `StudentProjectWorkspacePage.tsx` | 얕음 | 칸반/작업 카드 UI 대조 |
| B | `420:1973` | 수강생 - 프로젝트 워크스페이스 / 캘린더 탭 | `/student/projects/:projectId?tab=calendar` | `StudentProjectWorkspacePage.tsx` | 얕음 | 일정 캘린더/마일스톤 UI 대조 |
| B | `420:2136` | 수강생 - 프로젝트 워크스페이스 / 회의록 탭 | `/student/projects/:projectId?tab=meetings` | `StudentProjectWorkspacePage.tsx` | 얕음 | 회의록 리스트/상태/작성 CTA 대조 |
| B | `420:2216` | 수강생 - 프로젝트 워크스페이스 / 문서·파일·위키 탭 | `/student/projects/:projectId?tab=docs` | `StudentProjectWorkspacePage.tsx` | 얕음 | 문서/파일/위키 카드 UI 대조 |
| B | `420:2322` | 수강생 - 프로젝트 워크스페이스 / 이슈 탭 | `/student/projects/:projectId?tab=issues` | `StudentProjectWorkspacePage.tsx` | 얕음 | 이슈 리스트와 심각도/상태 표현 대조 |
| B | `420:2423` | 수강생 - 프로젝트 워크스페이스 / 팀 관리 탭 | `/student/projects/:projectId?tab=team` | `StudentProjectWorkspacePage.tsx` | 얕음 | 팀원 리스트/역할/권한 UI 대조 |
| B | `420:2533` | 수강생 - 프로젝트 워크스페이스 / 성과·기술스택 탭 | `/student/projects/:projectId?tab=outcomes` | `StudentProjectWorkspacePage.tsx` | 얕음 | 성과/기술스택 카드 UI 대조 |
| B | `420:2631` | 수강생 - 프로젝트 워크스페이스 / 상호평가 탭 | `/student/projects/:projectId?tab=peer-evaluation` | `StudentProjectWorkspacePage.tsx` | 얕음 | 상호평가 입력/상태 UI 대조 |
| B | `420:2716` | 수강생 - 프로젝트 워크스페이스 / 인증 요청 탭 | `/student/projects/:projectId?tab=certification` | `StudentProjectWorkspacePage.tsx` | 얕음 | 인증 요청 상태/제출 CTA 대조 |
| B | `345:1083` | 수강생 - 프로젝트 변경 제안 | `/student/projects/:projectId/change-requests/new` | `StudentProjectChangeRequestPage.tsx` | 얕음 | 변경 사유/내용/제출 화면 대조 |
| B | `394:1500` | 수강생 - 트러블슈팅 새 사례 작성 | `/student/troubleshooting/new` | `StudentTroubleshootingFormPage.tsx` | 얕음 | 긴 작성 폼, 원인/해결/회고 필드 대조 |
| B | `362:1348` | 수강생 - 트러블슈팅 변경 제안 | `/student/troubleshooting/:id/change-requests/new` | `StudentTroubleshootingFormPage.tsx` | 얕음 | 변경 제안 모드 문구와 필드 대조 |
| B | `402:1644` | 수강생 - PeerTag 부여 | `/student/peer-tag` | `StudentPeerTagPage.tsx` | 얕음 | 동료 목록, 태그 선택, 익명 안내 대조 |
| B | `404:1719` | 수강생 - PeerReputation 5축 평가 | `/student/peer-reputation` | `StudentPeerReputationPage.tsx` | 얕음 | 5축 슬라이더/점수/코멘트 UI 대조 |
| B | `418:1961` | 수강생 - 마일리지 상품 신청 | `/student/mileage/products` | `StudentMileageProductsPage.tsx` | 얕음 | 상품 카드, 신청 가능 상태, CTA 대조 |
| B | `418:2066` | 수강생 - 마일리지 사용 내역 | `/student/mileage/history` | `StudentMileageHistoryPage.tsx` | 얕음 | 내역 테이블/필터/잔액 표시 대조 |
| B | `428:3015` | 수강생 - PLAY 타자 게임 | `/student/play/typing` | `StudentPlayTypingPage.tsx` | 얕음 | 게임 화면, 점수, 입력 영역, 진행 상태 대조 |
| C | `1912:14977` | 수강생 - 자료 공유 모달 | `/student/course/materials#share` | `StudentCourseMaterialsPage.tsx` | 상태 화면 | hash 상태의 모달 디자인을 Figma 기준으로 대조 |
| C | `2173:15095` | 수강생 - 기록실 · 블로그 삭제 확인 | `/student/records?modal=delete-blog` | `StudentRecordsPage.tsx` | 상태 화면 | 삭제 확인 모달 UI 대조 |
| C | `2173:15383` | 수강생 - 기록실 · 블로그 삭제 완료 | `/student/records?toast=deleted` | `StudentRecordsPage.tsx` | 상태 화면 | toast 위치/문구/색상 대조 |
| C | `2211:15861` | 수강생 - 기록실 · 블로그 수정 완료 | `/student/records?toast=blog-updated` | `StudentRecordsPage.tsx` | 상태 화면 | toast 위치/문구/색상 대조 |
| C | `2236:10480` | 수강생 - 과제 제출 완료 | `/student/course/assignments/:assignmentId?toast=submitted` | `StudentAssignmentDetailPage.tsx` | 상태 화면 | 제출 완료 toast 대조 |
| C | `2236:10522` | 수강생 - 과제 수정 제출 확인 모달 | `/student/course/assignments/:assignmentId#confirm-resubmit` | `StudentAssignmentDetailPage.tsx` | 상태 화면 | 확인 모달 UI 대조 |
| D | `1471:10756` | Main Flow - 01 수강생 기본 학습 흐름 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님 |
| D | `1471:10760` | Main Flow - 02 수강생 기록실 · 증명서 · 외부검증 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님 |
| D | `1471:10764` | Main Flow - 03 수강생 프로젝트 생성 · 워크스페이스 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님 |
| D | `1471:10768` | Main Flow - 04 수강생 트러블슈팅 · 동료평판 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님 |
| D | `1471:10772` | Main Flow - 05 수강생 마일리지 · PLAY · 게시판 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님 |
| D | `2190:14961` | Main Flow - 00 수강생 온보딩 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님 |

## 현재 라우팅에서 확인한 특이사항

- `기수 게시판`은 Figma 사이드바 nav에는 남아 있지만, 현재 구현 범위에서는 없어진 페이지로 보고 라우팅하지 않습니다.
- `/student/peer-review`는 기존 호환용 경로이고, Figma 기준 경로는 `/student/peer-evaluations`입니다.
- 프로젝트 워크스페이스의 여러 탭은 별도 컴포넌트가 아니라 `StudentProjectWorkspacePage.tsx`에서 `tab` query로 분기합니다.
- 온보딩 Step 2/3은 별도 라우트가 아니라 `StudentOnboardingPage.tsx` 내부 상태 또는 query로 표현해야 합니다.
- `Agent.md`, `router.tsx`, `routes.ts` 일부 주석에 한글 깨짐이 남아 있습니다. 내일 구현 전에 기준 문서와 주석을 먼저 복구하는 것이 좋습니다.

## 내일 4번 작업 시작 순서

1. `Agent.md`, `router.tsx`, `routes.ts` 한글 깨짐 복구.
2. `A` 우선순위 페이지 중 `수강생 - 대시보드`부터 Figma node `140:5`를 열어 실제 레이아웃/문구를 대조.
3. 한 화면을 끝낼 때마다 `상태`를 `동일` 또는 남은 차이로 갱신.
4. 모달/toast는 기본 페이지가 맞은 뒤 `C` 우선순위에서 처리.
