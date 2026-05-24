# 공통 컴포넌트 후보

이 폴더는 아직 Figma에서 `공통 - ...` 컴포넌트로 확인되지 않았지만, 코드 작업 중 반복 가능성이 높아 보이는 UI를 기록하는 공간입니다.

## Figma 공통과 후보의 차이

`src/components/figma/common`은 Figma에서 실제 공통 컴포넌트로 확인된 UI만 둡니다. 예를 들어 `공통 - Header / Base`, `공통 - Button / Variants`처럼 Figma 이름이 명확한 경우입니다.

`src/components/candidates`는 아직 승격하지 않은 후보 목록입니다. 반복될 가능성이 있어도 Figma 공통으로 확인되지 않았거나, 2개 이상 화면에서 같은 규칙으로 반복되는지 검토가 필요하면 여기 문서에만 남깁니다.

## 승격 기준

1. Figma에서 `공통 - ...` 컴포넌트로 확인되면 `src/components/figma/common`에 구현합니다.
2. Figma 공통은 아니지만 2개 이상 화면에서 같은 구조와 규칙으로 반복되면 후보에 기록합니다.
3. 후보를 실제 공통 컴포넌트로 옮길 때는 사용자에게 보고하고 승인받습니다.
4. 승격 후에는 이 문서의 `승격 완료` 목록에 이유를 남깁니다.

## 현재 후보

```text
PageTitle
- 하위 페이지 안에서 별도 제목/설명을 반복할 때 후보입니다.

SectionPanel
- 제목, 설명, 콘텐츠를 묶는 패널 구조가 여러 화면에서 반복될 때 후보입니다.

ProfilePanel
- 마이 프로필의 정보 섹션 카드가 다른 프로필/증명서 화면에서도 반복되면 후보입니다.

ToggleRow
- 공개 설정, 공가 사용 같은 ON/OFF 행이 반복되면 후보입니다.

CourseSummaryCard
- 강의 홈의 과정 요약 카드입니다. 다른 과정 화면 반복 여부를 더 확인합니다.

MaterialListRow
- 자료실의 파일/링크 행입니다. 자료 공유 모달이나 강사 자료실까지 확인 후 판단합니다.

ProjectListCard
- 프로젝트 목록 카드입니다. 프로젝트 상세/워크스페이스 반복 여부를 더 확인합니다.

TroubleshootingCaseCard
- 트러블슈팅 목록 카드입니다. 신규/상세 화면까지 확인 후 판단합니다.

PeerReviewActionCard
- 동료 평가 진입 카드입니다. PeerTag, PeerReputation 화면에서 반복되면 승격 검토합니다.

PlayGameCard
- PLAY 게임 선택 카드입니다. 다른 게임 화면에서 반복되면 승격 검토합니다.
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
```
