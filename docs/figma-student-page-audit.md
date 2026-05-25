# Figma 수강생 페이지 구현 현황표
이 문서는 Figma `LMS UI/UX` 파일의 `수강생 Pages` 캔버스와 현재 React 라우팅/페이지 파일을 1:1로 대조하기 위한 작업 기준표입니다.
각 작업자는 이 표의 우선순위와 상태를 기준으로 화면을 Figma에 맞춥니다.

## 상태 기준

- `동일`: Figma 프레임과 텍스트, 레이아웃, 상태 표현까지 대조 완료.
- `다름`: 페이지는 있으나 Figma와 구조나 디자인 차이가 명확함.
- `덜됨`: 라우팅과 기본 화면은 있으나 Figma 프레임을 깊게 반영하지 못함.
- `없음`: Figma 프레임은 있으나 현재 라우팅 또는 페이지 컴포넌트가 없음.
- `상태 화면`: 같은 페이지에서 modal, toast, hash, query 상태로 처리해야 하는 화면.
- `문서용`: 앱 화면이 아니라 Figma 안의 플로우 설명 프레임.

## 1차 결론

현재 수강생 영역은 대부분 URL과 컴포넌트가 연결되어 있지만, Figma 프레임을 하나씩 보고 픽셀에 가깝게 재현한 상태라고 보기는 어렵습니다.
4번 작업은 `우선순위 A`부터 시작해 각 화면의 Figma node를 열고 실제 UI를 다시 맞추는 방식으로 진행합니다.

## 우선순위

- `A`: 사용자가 바로 체감하는 메인 페이지. 먼저 Figma와 맞춰야 함.
- `B`: 등록/상세/상태 페이지. 주요 흐름 뒤에 이어서 맞춤.
- `C`: 모달, toast, query/hash 상태. 기본 페이지가 맞은 뒤 상태별로 맞춤.
- `D`: 문서용 플로우 또는 현재 범위 제외.

## Figma 프레임 매핑표

| 우선순위 | Figma node | Figma 프레임 | URL | 현재 코드 파일 | 상태 | 다음 할 일 |
| --- | --- | --- | --- | --- | --- | --- |
| A | `140:5` | 수강생 - 대시보드 | `/student/dashboard` | `StudentDashboardPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Header, Sidebar, KPI, 할 일/퀴즈, 출석, 공지/알림, 프로젝트/트러블슈팅 영역을 Figma 기준 텍스트와 구조로 복구함. 기수 게시판은 라우팅 제외 정책 때문에 사이드바 구현에는 넣지 않음. |
| A | `159:27` | 수강생 - 마이 프로필 | `/student/profile` | `StudentProfilePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 프로필 완성도, 기본 정보, 외부 URL, 스킬, 공개 설정, 저장 버튼 문구를 Figma 기준으로 복구함. 사이드바 active는 Figma 기준대로 대시보드로 유지. |
| A | `165:27` | 수강생 - 강의 홈 | `/student/course` | `StudentCoursePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Tabs Bar, 과정 요약, 4개 알림 카드, 주차별 학습, 공지, 미응시 퀴즈, 마감 임박 과제, 새 자료 영역의 문구와 구조를 Figma 기준으로 복구함. |
| A | `168:27` | 수강생 - 강의 자료실 | `/student/course/materials` | `StudentCourseMaterialsPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Tabs Bar, 필터, 검색, 정렬, 자료 공유 CTA, 자료 목록 카드와 페이지네이션 문구/구조를 Figma 기준으로 복구함. #share 모달은 C 우선순위에서 별도 정밀 대조 예정. |
| A | `226:27` | 수강생 - 퀴즈 목록 | `/student/quizzes` | `StudentQuizzesPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Tabs Bar, 상태 필터, 퀴즈명 검색, 공통 Quiz Table Row 기반 테이블, 페이지네이션 문구/구조를 Figma 기준으로 복구함. |
| A | `246:27` | 수강생 - 기록실 | `/student/records` | `StudentRecordsPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 필터, 블로그 제출 CTA, 블로그 기록 카드, 상태 배지, 액션 문구를 Figma 기준으로 복구함. 삭제 모달/toast는 C 우선순위에서 별도 정밀 대조 예정. |
| A | `329:826` | 수강생 - 출결 / 태도 | `/student/attendance` | `StudentAttendancePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 KPI Card, Attendance Day Cell, Status Badge, Button을 기준으로 출석률 요약, HRD-Net 캘린더, 원본 데이터 안내, 출결 폼 제출 이력 테이블과 작성 CTA를 Figma 기준으로 복구함. |
| A | `249:27` | 수강생 - 증명서 미리보기 | `/student/certificate` | `StudentCertificatePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. PREVIEW 상태 카드, 보완 항목 3건, 탭, 증명서 미리보기, 핵심 지표, 6축 역량, 대표 프로젝트·기록, 요청 전 체크와 비활성 CTA를 Figma 기준으로 복구함. |
| A | `337:930` | 수강생 - 프로젝트 목록 | `/student/projects` | `StudentProjectsPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 참여 프로젝트 헤더, 신규 프로젝트 CTA, 3개 프로젝트 카드, 공통 Status Badge, 워크스페이스/검토 상태 버튼, 메타·스택·기여도 바를 Figma 기준으로 복구함. ProjectListCard는 Figma 공통 미확인으로 후보에 유지. |
| A | `360:1297` | 수강생 - 트러블슈팅 로그 목록 | `/student/troubleshooting` | `StudentTroubleshootingPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 내 트러블슈팅 사례 헤더, 새 사례 작성 CTA, 3개 사례 카드, 공통 Status Badge, 사례 열기 버튼, 작성/수정일, 상황 요약, 섹션 상태 배지를 Figma 기준으로 복구함. TroubleshootingCaseCard는 Figma 공통 미확인으로 후보에 유지. |
| A | `401:1586` | 수강생 - 동료 평가 허브 | `/student/peer-evaluations` | `StudentPeerReviewPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Notice Banner, PeerTag/PeerReputation 진입 카드 2개, 카드 아이콘·설명·부여 가능 동료·완료 수·CTA 문구를 Figma 기준으로 맞춤. PeerReviewActionCard는 Figma 공통 미확정이라 후보로 유지함. |
| A | `418:1850` | 수강생 - 마일리지 | `/student/mileage` | `StudentMileagePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. KPI 4개, 최근 적립·사용 내역, 구매 가능 상품, 타입별 사용 한도, 헤더 문구와 상품/전체 내역 진입 CTA를 Figma 기준으로 맞춤. |
| A | `418:2172` | 수강생 - PLAY 게임 선택 | `/student/play` | `StudentPlayPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. KPI 4개, 게임 선택 카드 3개, 사용 가능/준비 중 상태, 타자 게임 진행률, 최근 게임 기록, 기수 랭킹 Top 5와 게임 입장 CTA를 Figma 기준으로 맞춤. 게임/기록/랭킹 카드는 Figma 공통 미확정이라 페이지 전용 후보로 유지함. |
| B | `225:27` | 수강생 - 온보딩 / Step 1 다짐 | `/student/onboarding` | `StudentOnboardingPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 상단 로고/언어, WELCOME 영역, 3단계 stepper, STEP 01 다짐 카드, 0/300 카운터, 안내 문구, 하단 건너뛰기/이전/다음 버튼, Step 2/3 미리보기 레일을 Figma 기준으로 맞춤. |
| B | `2197:14961` | 수강생 - 온보딩 / Step 2 스킬 선택 | `/student/onboarding?step=skills` | `StudentOnboardingPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. `step=skills` query 진입, 완료/활성 stepper, STEP 02 카드 문구, 관심 스킬 다중 선택 영역, 선택 chip 4개와 선택 수 안내, 이전/다음 버튼을 Figma 기준으로 맞춤. |
| B | `2197:15032` | 수강생 - 온보딩 / Step 3 외부 URL | `/student/onboarding?step=links` | `StudentOnboardingPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. `step=links` query 진입, Step 1/2 완료와 Step 3 활성 stepper, 외부 URL 카드 문구, 외부 링크 선택 배지, 블로그/GitHub 입력 placeholder, 공개 설정 안내, 시작하기 CTA를 Figma 기준으로 맞춤. |
| B | `242:27` | 수강생 - 퀴즈 응시 | `/student/quizzes/:quizId/take` | `StudentQuizTakePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 독립 응시 화면의 Top/Bottom Sticky Bar, 타이머, 진행률, 제출 CTA, 문제 목록 rail, 답변/현재/미답변 상태, 중앙 문제 카드, 선택지 UI, 키 선택 안내와 임시 저장 상태를 Figma 기준으로 맞춤. |
| B | `243:27` | 수강생 - 퀴즈 결과 | `/student/quizzes/:quizId/result` | `StudentQuizResultPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 메타 행, 수동 채점 대기 배지, 자동 채점 점수 요약, 정답률/문항 구성/채점 상태 카드, 카테고리별 점수, 문제별 결과 필터와 5개 결과 카드를 Figma 기준 폭과 구성으로 맞춤. |
| B | `407:1785` | 수강생 - 과제 / 실습 | `/student/course/assignments` | `StudentAssignmentsPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Header/Sidebar/Tabs Bar, 상태 필터, 5개 과제/실습 행 카드, 상태 배지, 제출하기·제출 보기/수정·피드백 보기 CTA와 헤더 문구를 Figma 기준으로 맞춤. |
| B | `2236:10410` | 수강생 - 과제 상세·제출 | `/student/course/assignments/:assignmentId` | `StudentAssignmentDetailPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Status Badge/Textarea/Input Field/Button 기반으로 과제 상세 헤더, 요약 카드, 제출 내용 폼, 첨부/링크 자산, 제출 저장/목록으로 CTA, 제출 이력과 검토 완료 예시를 Figma 기준으로 확인함. 수정 제출 확인 모달과 제출 완료 toast는 C 우선순위 상태 화면에서 별도 대조 예정. |
| B | `267:27` | 수강생 - 블로그 등록 폼 | `/student/records/new/blog` | `StudentRecordFormPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Header 문구, 기록실 › 블로그 › 새 등록 breadcrumb, Notice Banner, 주차 선택 카드/선택 칩, 외부 블로그 URL 입력, 취소/임시 저장/제출 CTA를 Figma 기준으로 맞춤. 주차 선택 카드는 Figma 공통 컴포넌트가 아니어서 로컬 구현으로 유지함. |
| B | `273:27` | 수강생 - 자격증 등록 폼 | `/student/records/new/certificate` | `StudentRecordFormPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Header 문구, 기록실 › 자격증 › 새 등록 breadcrumb, 자격증 3종 선택 카드, 제목 Input Field, 파일 형식 Chip, 증빙 파일 미리보기/업로드 상태, 제출 조건/CTA/검토 안내를 Figma 기준으로 맞춤. 증빙 파일 패널은 Figma 공통 미확정이라 후보로 기록함. |
| B | `274:27` | 수강생 - 스터디 등록 폼 | `/student/records/new/study` | `StudentRecordFormPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Header 문구, 기록실 › 스터디 › 새 등록 breadcrumb, 제목 Input Field, 시작/종료 시간 입력, 활동 내역 textarea, 지원 형식 Chip, 다중 사진 업로드/진행률/파일 카드, 이전·취소/제출 CTA와 검토 안내를 Figma 기준으로 맞춤. 다중 업로드 패널은 Figma 공통 미확정이라 후보 설명만 확장함. |
| B | `2173:14807` | 수강생 - 블로그 기록 상세 | `/student/records/blog/:recordId` | `StudentBlogRecordDetailPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Header 문구, 기록실 › 블로그 › 상세 breadcrumb, 10주차/승인 상태, 제목, 제출·승인·멘토 확인 메타, URL row, 원문 보기, 목록으로, 승인 후 삭제 불가 안내를 Figma 기준으로 맞춤. 수정 화면은 별도 node에서 진행 예정. |
| B | `2208:16414` | 수강생 - 블로그 기록 수정 | `/student/records/blog/:recordId/edit` | `StudentBlogRecordDetailPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Header 문구, 기록실 › 블로그 › 수정 breadcrumb, 반려 사유 Notice Banner, 주차 선택 카드, 반려 기록 선택 칩, 외부 블로그 URL 입력, 기록실로 돌아가기/임시 저장/수정 제출 CTA와 수정 후 검토 안내를 Figma 기준으로 맞춤. |
| B | `248:27` | 수강생 - 보완 요청 상세 | `/student/certificate/changes-requested` | `StudentCertificateChangesRequestedPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 보완 요청 상태 카드는 빨간 테두리와 좌측 강조선, 우측 요청 메타 4개를 Figma 기준으로 재보정함. 3개 보완 사유 카드와 이동 CTA, 관련 영역 5개 바로가기, 재요청 체크리스트와 비활성 재요청 버튼을 유지. Figma 협업/채팅 아바타 J는 앱 UI에 포함하지 않음. |
| B | `255:27` | 수강생 - 공개 설정 | `/student/certificate/publication` | `StudentCertificatePublicationPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 사용자 칩, 정식 인증 완료 카드, 공개 OFF 토글과 Notice Banner, 검증 URL/복사 버튼, QR 영역, 공개 ON/OFF 차이, 개인정보 안내를 Figma 기준으로 맞춤. 공개 미리보기는 브라우저 프레임, 어두운 비공개 오버레이, `공개 OFF` 안내 모달 형태로 재보정함. |
| B | `540:2907` | 외부 검증 - 검증 URL 진입 | `/verify/:publicToken` | `PublicCertificateVerifyPage.tsx` | 동일 | 2026-05-25 MCP로 확인. 독립 외부 라우트에서 PLAYDATA 로고, 검증 중 카드, spinner, 진위/공개 상태 확인 문구와 자동 분기 안내를 Figma 기준으로 구현함. |
| B | `537:2905` | 외부 검증 - 잘못된 링크 안내 | `/verify/:publicToken?status=invalid` | `PublicCertificateVerifyPage.tsx` | 동일 | 2026-05-25 MCP로 확인. 520px 중앙 카드, 경고 아이콘, 유효하지 않은 검증 링크 안내, 발급자 문의/홈으로 버튼과 footer 문구를 Figma 기준으로 구현함. |
| B | `541:2907` | 외부 검증 - 비공개 안내 | `/verify/:publicToken?status=private` | `PublicCertificateVerifyPage.tsx` | 동일 | 2026-05-25 MCP로 확인. 560px 중앙 카드, 잠금 아이콘, 비공개 안내, 발급기관/진위 상태/검증 ID/발급 시점 메타와 홈 버튼을 Figma 기준으로 구현함. |
| B | `543:2909` | 외부 검증 - 공개 증명서 | `/verify/:publicToken?status=public` | `PublicCertificateVerifyPage.tsx` | 동일 | 2026-05-25 MCP로 확인. 1120px 공개 증명서 컬럼, 유효 badge, 발급 메타, 수강생 정보, 핵심 역량 등급, 대표 근거 3개, 검증 정보를 Figma 기준으로 구현함. |
| B | `333:877` | 수강생 - 출결 폼 | `/student/attendance/form` | `StudentAttendanceFormPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 기존 제출 Notice Banner, 대상 일자/최근 제출 요약, 3단계 폼 카드, 출결 유형 선택 카드, 공가 칩 선택 상태, 비고 Textarea, 제출/취소 액션을 Figma 기준으로 맞춤. |
| B | `2219:10605` | 수강생 - 출결 폼 Mobile | `/student/attendance/form` | `StudentAttendanceFormPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 모바일 390px 단독 폼 기준으로 사이드바/헤더 숨김, 모바일 상단바, 로그인 수강생 칩, 덮어쓰기 안내, 대상 일자 카드, 출결 유형/공가/비고 카드와 하단 취소/제출 버튼을 Figma 기준으로 맞춤. |
| B | `340:981` | 수강생 - 프로젝트 생성 4단계 마법사 / Step 1 | `/student/projects/new` | `StudentProjectWizardPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Wizard Stepper를 추가하고 신규 프로젝트 생성 헤더, 기본 정보 카드, 필수 배지, 프로젝트명/설명/시작일/종료일 입력, 하단 이전 비활성/단계 표시/다음 CTA를 Figma 기준으로 맞춤. |
| B | `347:1134` | 수강생 - 프로젝트 생성 마법사 / Step 2 팀 설정 | `/student/projects/new?step=2` | `StudentProjectWizardPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Wizard Stepper의 완료 체크 상태, 팀 설정 카드, PM 자동 지정 행, 팀원 초대 검색, 이서연/박지호/최유나 팀원 리스트, 기수 외 사용자 안내, 이전/단계 표시/다음 CTA를 Figma 기준으로 맞춤. |
| B | `349:1185` | 수강생 - 프로젝트 생성 마법사 / Step 3 상세 설정 | `/student/projects/new?step=3` | `StudentProjectWizardPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Wizard Stepper의 1~2단계 완료 체크, 상세 설정 카드, 기술 스택/도메인/산출물 형태 Chip 그룹, 선택 상태, 이전/단계 표시/다음 CTA를 Figma 기준으로 맞춤. |
| B | `353:1241` | 수강생 - 프로젝트 생성 마법사 / Step 4 생성 확인 | `/student/projects/new?step=4` | `StudentProjectWizardPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. Wizard Stepper의 1~3단계 완료 체크, 생성 확인 안내문, 기본 정보/팀/상세 설정 요약 섹션, 수정 링크, 기술 스택 pill, 마지막 단계 안내와 프로젝트 생성 CTA를 Figma 기준으로 맞춤. |
| B | `342:1032` | 수강생 - 프로젝트 워크스페이스 / 홈 탭 | `/student/projects/:projectId` | `StudentProjectWorkspacePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 프로젝트명 Header, 공통 Tabs Bar, 작업 진행률/회의록/산출물/열린 이슈 요약, 내 할 일, 최근 활동, 팀원, 성과 지표, 기술 스택, 인증 상태 카드를 Figma 기준으로 맞춤. |
| B | `420:1850` | 수강생 - 프로젝트 워크스페이스 / 보드·작업 탭 | `/student/projects/:projectId?tab=board` | `StudentProjectWorkspacePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Kanban Task Card 컴포넌트를 추가하고, 작업 추가 CTA, 할 일/진행 중/검토 대기 3열 칸반 컬럼과 카드 문구/간격/테두리를 Figma 기준으로 맞춤. |
| B | `420:1973` | 수강생 - 프로젝트 워크스페이스 / 캘린더 탭 | `/student/projects/:projectId?tab=calendar` | `StudentProjectWorkspacePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Workspace Day Cell 컴포넌트를 추가하고, 2026년 5월 캘린더, 일정 추가 CTA, 다가오는 일정 카드와 상태 배지를 Figma 기준으로 맞춤. |
| B | `420:2136` | 수강생 - 프로젝트 워크스페이스 / 회의록 탭 | `/student/projects/:projectId?tab=meetings` | `StudentProjectWorkspacePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 회의록 작성 CTA, 회의록 제목, 4개 회의록 리스트 행, 참석 정보, 요약 문구, 완료/진행 상태 배지를 Figma 기준으로 맞춤. |
| B | `420:2216` | 수강생 - 프로젝트 워크스페이스 / 문서·파일·위키 탭 | `/student/projects/:projectId?tab=docs` | `StudentProjectWorkspacePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Document File Card 컴포넌트를 추가하고, 문서 추가 CTA, 필터 칩, 6개 문서·파일·위키 카드의 문구/메타/상태/열기 버튼을 Figma 기준으로 맞춤. |
| B | `420:2322` | 수강생 - 프로젝트 워크스페이스 / 이슈 탭 | `/student/projects/:projectId?tab=issues` | `StudentProjectWorkspacePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 이슈 등록 CTA, 5개 이슈 행, 담당자 메타, P0/P1/P2 우선순위, 열림/진행/닫힘/검토 상태 배지와 상세 버튼을 Figma 기준으로 맞춤. |
| B | `420:2423` | 수강생 - 프로젝트 워크스페이스 / 팀 관리 탭 | `/student/projects/:projectId?tab=team` | `StudentProjectWorkspacePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 팀원 초대 CTA, 4명 팀원 행, PM/팀원 역할 배지, 기여도 바, 담당 영역, 상세 버튼, 역할 정책 카드를 Figma 기준으로 맞춤. |
| B | `420:2533` | 수강생 - 프로젝트 워크스페이스 / 성과·기술스택 탭 | `/student/projects/:projectId?tab=outcomes` | `StudentProjectWorkspacePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 지표 추가 CTA, API 응답 시간/테스트 커버리지/주문 처리 TPS 성과 카드, Before/After 값, 변화율 배지, 기술 스택 칩 8개를 Figma 기준으로 맞춤. |
| B | `420:2631` | 수강생 - 프로젝트 워크스페이스 / 상호평가 탭 | `/student/projects/:projectId?tab=peer-evaluation` | `StudentProjectWorkspacePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 프로젝트 상호평가 제목, 제출 현황 카드, 3/4 진행 바, 내 평가 작성 CTA, 4명 평가 상태 리스트와 제출 완료/미제출 배지를 Figma 기준으로 맞춤. |
| B | `420:2716` | 수강생 - 프로젝트 워크스페이스 / 인증 요청 탭 | `/student/projects/:projectId?tab=certification` | `StudentProjectWorkspacePage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 프로젝트 인증 요청 제목, 요청 전 체크리스트 6개, 완료/필요/진행 상태, 인증 상태 카드, 인증 요청 제출/변경 제안 보기 CTA, 최근 변경 제안 카드를 Figma 기준으로 맞춤. |
| B | `345:1083` | 수강생 - 프로젝트 변경 제안 | `/student/projects/:projectId/change-requests/new` | `StudentProjectChangeRequestPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Notice Banner/Textarea/Chip/Status Badge/Button을 사용해 인증 완료 안내, 프로젝트 요약, 변경 사유, 변경 항목 칩, 설명/산출물 변경 전후 비교, 취소/저장 액션을 Figma 기준으로 맞춤. |
| B | `394:1500` | 수강생 - 트러블슈팅 로그 작성 | `/student/troubleshooting/new` | `StudentTroubleshootingFormPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Notice Banner/Input Field/Chip/Textarea/Status Badge/Button을 사용해 작성 안내, 기본 정보, 카테고리 선택, STAR 형식 상황·해결·결과, 독립 해결 여부, 소요 일수, 첨부파일 영역과 저장 액션을 Figma 기준으로 맞춤. 첨부파일 박스는 Figma 공통 미확정이라 화면 전용으로 유지. |
| B | `362:1348` | 수강생 - 트러블슈팅 변경 제안 | `/student/troubleshooting/:id/change-requests/new` | `StudentTroubleshootingFormPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. `change-requests` 경로를 신규 작성 폼과 분리하고 공통 Notice Banner/Textarea/Chip/Status Badge/Button을 사용해 인증 완료 안내, 사례 요약, 변경 사유, 변경 항목 선택, 해결/결과 변경 전후 비교, requested 저장 안내와 CTA를 Figma 기준으로 맞춤. |
| B | `402:1644` | 수강생 - PeerTag 부여 | `/student/peer-tag` | `StudentPeerTagPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Notice Banner/Status Badge/Chip/Button을 사용해 익명 안내, 동기수 동료 23명 헤더, 6명 동료 선택 그리드, 미부여/부여 완료 상태, 이서연 태그 선택 패널, 선택 4/5와 태그 저장 CTA를 Figma 기준으로 맞춤. 동료 선택 카드는 Figma 공통 미확정이라 화면 전용으로 유지. |
| B | `404:1719` | 수강생 - PeerReputation 5축 평가 | `/student/peer-reputation` | `StudentPeerReputationPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Notice Banner/Textarea/Chip/Button을 사용해 같은 기수 평가 안내, 평가 대상 카드, 다른 동료 선택 아바타, 기술·책임감·소통·성장·팀워크 5축 별점과 코멘트, 추천도 칩, 재제출 안내와 평가 저장 CTA를 Figma 기준으로 맞춤. 별점은 Figma의 18px 별 도형에 가깝게 페이지 전용 CSS로 보정했고, 동료 선택 UI는 Figma 공통 미확정이라 화면 전용으로 유지. |
| B | `418:1961` | 수강생 - 마일리지 상품 신청 | `/student/mileage/products` | `StudentMileageProductsPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Chip/Marketplace Product Card/Button/Input Field/Textarea를 사용해 상품 목록 6개, 필터, 3열 상품 카드, 잔여 한도와 신청 CTA, 구매 요청 입력 카드, 취소/요청 제출 액션을 Figma 기준으로 맞춤. |
| B | `418:2066` | 수강생 - 마일리지 사용 내역 | `/student/mileage/history` | `StudentMileageHistoryPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Chip/Status Badge를 사용해 필터 6개, 날짜/구분/내용/마일리지/상태/처리 메모 테이블, 적립·사용·구매 요청 타입 배지, 완료·대기·반려 상태 배지와 6개 내역 행을 Figma 기준으로 맞춤. Figma에는 별도 요약 카드가 없어 테이블 중심으로 유지. |
| B | `428:3015` | 수강생 - PLAY 타자 게임 | `/student/play/typing` | `StudentPlayTypingPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 KPI Card/Status Badge/Button을 사용해 남은 시간·현재 타수·정확도·예상 점수 KPI, 제시문 카드, 입력 영역, 일시정지/나가기/결과 제출 액션, 플레이 정보, 다른 제시문 3개를 Figma 기준으로 맞춤. 실제 타수 계산은 기능 단계에서 별도 구현 예정. |
| C | `1912:14977` | 수강생 - 자료 공유 모달 | `/student/course/materials#share` | `StudentCourseMaterialsPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. #share 상태에서 공통 Notice Banner/Input Field/Textarea/Button과 페이지 전용 업로드 세그먼트·드롭존·선택 파일 행·성공 toast를 Figma 기준으로 맞춤. |
| C | `2173:15095` | 수강생 - 기록실·블로그 삭제 확인 | `/student/records?modal=delete-blog` | `StudentRecordsPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 전용 삭제 확인 모달로 dim overlay, 560x330 카드, 안내 문구, 삭제 대상 기록 요약, 반려 배지, 취소/삭제 버튼을 Figma 기준으로 맞춤. |
| C | `2173:15383` | 수강생 - 기록실·블로그 삭제 완료 | `/student/records?toast=deleted` | `StudentRecordsPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Toast에 dark/close 옵션을 추가하고, 우하단 420px 어두운 toast와 문구 `블로그 기록이 삭제되었습니다.`를 Figma 기준으로 맞춤. |
| C | `2211:15861` | 수강생 - 기록실·블로그 수정 완료 | `/student/records?toast=blog-updated` | `StudentRecordsPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 공통 Toast에 top 위치, 성공 dot, 닫기 라벨 옵션을 추가하고, 상단 우측 dark toast 문구 `블로그 기록 수정 요청이 제출되었습니다.`를 Figma 기준으로 맞춤. |
| C | `2236:10480` | 수강생 - 과제 제출 완료 | `/student/course/assignments/:assignmentId?toast=submitted` | `StudentAssignmentDetailPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 제출 완료 상태에서 제출 요약 화면으로 전환하고, 제출 완료 배지/제출 시각/URL/첨부/제출 보기·수정 CTA와 보라색 공통 Toast를 Figma 기준으로 맞춤. |
| C | `2236:10522` | 수강생 - 과제 수정 제출 확인 모달 | `/student/course/assignments/:assignmentId#confirm-resubmit` | `StudentAssignmentDetailPage.tsx` | 동일 | 2026-05-25 MCP로 재확인. 540×320 모달 카드, 제목/설명 문구, 공통 Notice Banner(warn), 계속 편집/수정 제출 공통 Button 배치와 색상을 Figma 기준으로 맞춤. |
| D | `1471:10756` | Main Flow - 01 수강생 기본 학습 흐름 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님. |
| D | `1471:10760` | Main Flow - 02 수강생 기록실·증명서·외부검증 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님. |
| D | `1471:10764` | Main Flow - 03 수강생 프로젝트 생성·워크스페이스 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님. |
| D | `1471:10768` | Main Flow - 04 수강생 트러블슈팅·동료평판 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님. |
| D | `1471:10772` | Main Flow - 05 수강생 마일리지·PLAY·게시판 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님. |
| D | `2190:14961` | Main Flow - 00 수강생 온보딩 | 없음 | 없음 | 문서용 | 앱 구현 대상 아님. |

## 현재 라우팅에서 확인한 특이사항

- `기수 게시판`은 Figma 사이드바 nav에는 포함되어 있지만 현재 구현 범위에서는 없어진 페이지로 보고 라우팅하지 않습니다.
- `/student/peer-review`는 기존 호환용 경로이고, Figma 기준 경로는 `/student/peer-evaluations`입니다.
- 프로젝트 워크스페이스의 여러 탭은 별도 컴포넌트가 아니라 `StudentProjectWorkspacePage.tsx`에서 `tab` query로 분기합니다.
- 온보딩 Step 2/3은 별도 라우트가 아니라 `StudentOnboardingPage.tsx` 내부 상태 또는 query로 표현해야 합니다.

## 다음 4번 작업 진행 순서

1. `Agent.md`, `router.tsx`, `routes.ts` 한글 깨짐 복구.
2. `A` 우선순위 페이지 중 `수강생 - 대시보드` Figma node `140:5`를 열어 실제 레이아웃/문구 대조.
3. 각 화면을 끝낼 때마다 `상태`를 `동일` 또는 남은 차이로 갱신.
4. 모달/toast는 기본 페이지가 맞은 뒤 `C` 우선순위에서 처리.
