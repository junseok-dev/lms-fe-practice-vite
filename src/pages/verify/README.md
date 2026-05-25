# verify pages

이 폴더는 외부 검증자가 `/verify/:publicToken`으로 진입했을 때 보는 공개 검증 화면을 관리합니다.

외부 검증 화면은 수강생 앱 내부 화면이 아니므로 `StudentLayout`을 거치지 않습니다. Header, Sidebar, 수강생 전용 상태와 분리된 독립 라우트로 유지합니다.

## 지원 상태

```text
/verify/:publicToken
/verify/:publicToken?status=invalid
/verify/:publicToken?status=private
/verify/:publicToken?status=public
```

## 구현 기준

- 잘못된 링크, 비공개 안내, 공개 증명서 화면을 같은 페이지에서 query 상태로 분기합니다.
- 수강생 내부의 `수강 역량 증명서` 화면과 데이터 의미는 연결되지만, 레이아웃은 독립적으로 관리합니다.
- 공개 증명서에 노출되는 정보는 mock 데이터 기준이며, 실제 API 연결 전까지 개인정보 노출 범위를 보수적으로 유지합니다.
- Figma 협업/채팅 아바타처럼 디자인 툴의 편집 UI는 외부 검증 화면에 포함하지 않습니다.
