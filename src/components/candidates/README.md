# 공통 컴포넌트 후보

이 폴더는 아직 Figma에서 `공통 - ...` 컴포넌트로 확인되지는 않았지만, 코드 작업 중 반복 가능성이 높아 보이는 UI를 기록하는 공간입니다.

실제 구현 파일을 바로 넣기보다 먼저 후보와 판단 근거를 문서로 남깁니다. 공통 승격은 Figma 확인 또는 반복 패턴 확인 후 진행합니다.

## Figma 공통과 후보의 차이

`src/components/figma/common`에는 Figma에서 실제 공통 컴포넌트로 확인된 UI만 둡니다.

예:

```text
공통 - Header / Base
공통 - Sidebar / Base
공통 - Button / Variants
공통 - Chip / Variants
공통 - Notice Banner / Variants
```

`src/components/candidates`에는 아직 승격하지 않은 후보만 기록합니다.

예:

```text
반복 가능성은 보이지만 Figma 공통 이름이 없는 카드
두 화면 이상에서 비슷하게 반복되는 패널
페이지 전용처럼 보이지만 추후 재사용 가능성이 있는 리스트 행
```

## 승격 기준

1. Figma에서 `공통 - ...` 컴포넌트로 확인되면 `src/components/figma/common`에 구현합니다.
2. Figma 공통은 아니지만 2개 이상 화면에서 같은 구조와 규칙으로 반복되면 후보로 기록합니다.
3. 후보를 실제 공통 컴포넌트로 만들 때는 사용자에게 보고하고 승인을 받습니다.
4. 승격 후에는 이 문서의 `승격 완료` 목록으로 옮기고 이유를 남깁니다.

## 현재 후보

```text
PageTitle
- 하위 페이지 안에서 별도 제목/설명 블록이 반복될 경우 후보입니다.

SectionPanel
- 제목, 설명, 콘텐츠를 묶는 패널 구조가 여러 화면에서 반복될 경우 후보입니다.

ProfilePanel
- 마이 프로필 정보 섹션 카드가 다른 프로필/증명서 화면에서도 반복되면 후보입니다.

ToggleRow
- 공개 설정, 사용 여부처럼 ON/OFF 행이 반복될 경우 후보입니다.

CourseSummaryCard
- 강의 홈의 과정 요약 카드입니다. 다른 과정 화면 반복 여부를 더 확인합니다.

MaterialListRow
- 자료실의 파일/링크 행 타입입니다. 자료 공유 모달이나 강사 자료실까지 확인 후 판단합니다.

ProjectListCard
- 프로젝트 목록 카드입니다. 프로젝트 상세/워크스페이스 카드 반복 여부를 확인합니다.

TroubleshootingCaseCard
- 트러블슈팅 목록 카드입니다. 신규/상세 화면까지 확인 후 판단합니다.

PeerReviewActionCard
- 동료 평가 허브의 PeerTag, PeerReputation 진입 카드입니다.

PlayGameCard
- PLAY 게임 선택 카드입니다. 다른 게임 화면이 늘어날 때 승격 여부를 검토합니다.

CertificateUploadPanel
- 자격증 등록의 증빙 파일 미리보기와 업로드 상태 영역입니다.

BlogWeekSelector
- 블로그 등록 폼의 주차 선택 카드 묶음입니다.

StudyUploadPanel
- 스터디 등록 폼의 다중 사진 업로드와 파일 상태 영역입니다.

CertificatePreviewBrowser
- 공개 설정의 외부 검증 미리보기 브라우저 프레임입니다. 외부 검증 관련 화면에서 반복되면 후보로 유지합니다.

PeerStarRating
- 동료 평가 5축 화면의 `★★★★★ 5.0` 별점 표시입니다. 다른 평판/평가 화면에서 같은 규칙으로 반복되면 후보입니다.
```

## 승격 완료

```text
Button
- Figma "공통 - Button / Variants" 확인 후 FigmaButton으로 구현했습니다.

Input Field
- Figma "공통 - Input Field / Variants" 확인 후 FigmaInputField로 구현했습니다.

Textarea
- Figma "공통 - Textarea / Variants" 확인 후 FigmaTextarea로 구현했습니다.

Chip
- Figma "공통 - Chip / Variants" 확인 후 FigmaChip으로 구현했습니다.

Status Badge
- Figma "공통 - Status Badge / Variants" 확인 후 FigmaStatusBadge로 구현했습니다.

Notice Banner
- Figma "공통 - Notice Banner / Variants" 확인 후 FigmaNoticeBanner로 구현했습니다.

Marketplace Product Card
- Figma "공통 - Marketplace Product Card / Component" 확인 후 FigmaMarketplaceProductCard로 구현했습니다.

Quiz Table Row
- Figma "공통 - Quiz Table Row / Variants" 확인 후 FigmaQuizTableRow로 구현했습니다.

Toast
- Figma "공통 - Toast / Variants" 확인 후 FigmaToast로 구현했습니다.

Attendance Day Cell
- Figma "공통 - Attendance Day Cell / Variants" 확인 후 FigmaAttendanceDayCell로 구현했습니다.
```
