# Vite React src 폴더 설명

이 폴더는 브라우저에 보이는 React 화면 코드를 넣는 곳입니다.
지금 프로젝트는 Vite로 만든 기본 React 프로젝트라서 구조가 아주 단순합니다.

## 현재 구조

```text
src/
  assets/      이미지, SVG 같은 정적 파일
  App.tsx      실제 첫 화면 컴포넌트
  App.css      App.tsx 화면 전용 스타일
  index.css    앱 전체에 적용되는 공통 스타일
  main.tsx     React 앱을 브라우저에 붙이는 시작 파일
```

## 실행 흐름

브라우저는 먼저 프로젝트 루트의 `index.html`을 엽니다.
그 안에는 아래처럼 React 앱이 들어갈 빈 자리인 `root`가 있습니다.

```html
<div id="root"></div>
```

그 다음 Vite가 `src/main.tsx`를 실행합니다.
`main.tsx`는 `root` 자리를 찾아서 React의 `<App />` 컴포넌트를 넣습니다.

흐름을 간단히 쓰면 이렇습니다.

```text
index.html
  -> src/main.tsx
    -> src/App.tsx
      -> src/App.css, src/index.css
```

## 파일별 역할

### main.tsx

React 앱의 진입점입니다.
보통 처음에는 많이 수정하지 않습니다.
나중에 라우터, 전역 상태, 공통 Provider를 연결할 때 이 파일을 다시 보게 됩니다.

### App.tsx

현재 화면의 본체입니다.
처음 연습할 때는 대부분 이 파일을 수정하면서 React 문법을 익힙니다.

예를 들어:

- 글자 바꾸기
- 버튼 추가하기
- `useState`로 값 바꾸기
- 컴포넌트 분리하기

### index.css

전체 앱에 적용되는 공통 CSS입니다.
`body`, `#root`, 기본 글꼴, 전체 배경색 같은 큰 스타일을 여기에 둡니다.

### App.css

`App.tsx` 화면에서 쓰는 CSS입니다.
지금은 Vite 기본 화면의 버튼, 히어로 이미지, 다음 단계 영역 스타일이 들어 있습니다.

### assets

이미지 파일을 넣는 폴더입니다.
React 코드에서 이미지를 import해서 사용할 수 있습니다.

```tsx
import viteLogo from './assets/vite.svg'
```

## 앞으로 폴더를 늘린다면

처음부터 너무 많이 만들 필요는 없습니다.
화면이 커지기 시작하면 아래처럼 늘리면 됩니다.

```text
src/
  app/          앱 설정, 라우터, Provider
  components/   여러 화면에서 재사용하는 UI
  features/     로그인, 학생 대시보드처럼 기능 단위 코드
  lib/          공통 함수, 상수
  styles/       공통 스타일
  types/        공통 TypeScript 타입
```

예를 들어 로그인 화면을 만든다면:

```text
src/
  features/
    auth/
      LoginPage.tsx
      LoginForm.tsx
```

버튼을 여러 곳에서 쓰게 된다면:

```text
src/
  components/
    Button.tsx
```

## 로컬 개발 명령어

CMD에서 프로젝트 폴더로 이동한 뒤 실행합니다.

```cmd
cd C:\Workspaces\lms-fe-practice-vite
npm run dev
```

터미널에 나온 주소를 브라우저에서 열면 됩니다.
보통 아래 주소입니다.

```text
http://localhost:5173/
```

개발 서버를 켜둔 상태에서 `App.tsx`를 수정하고 저장하면 브라우저가 바로 갱신됩니다.
