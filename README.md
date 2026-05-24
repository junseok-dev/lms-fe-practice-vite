# lms-fe-practice-vite

React 프론트엔드 연습용 프로젝트입니다.
Vite를 사용해서 React + TypeScript 개발 환경을 빠르게 실행할 수 있게 만든 기본 프로젝트입니다.

## 사용 기술

- React
- TypeScript
- Vite
- ESLint

## 실행 방법

CMD에서 프로젝트 폴더로 이동합니다.

```cmd
cd C:\Workspaces\lms-fe-practice-vite
```

패키지를 설치합니다.

```cmd
npm install
```

로컬 개발 서버를 실행합니다.

```cmd
npm run dev
```

터미널에 표시되는 주소를 브라우저에서 엽니다.
보통 아래 주소로 실행됩니다.

```text
http://localhost:5173/
```

개발 서버를 켜둔 상태에서 파일을 수정하고 저장하면 브라우저 화면이 자동으로 갱신됩니다.

## 자주 쓰는 명령어

```cmd
npm run dev
```

개발 서버를 실행합니다.

```cmd
npm run build
```

배포 가능한 결과물을 만들 수 있는지 검사합니다.
TypeScript 검사도 함께 실행됩니다.

```cmd
npm run lint
```

코드 스타일이나 잠재적인 문제를 검사합니다.

```cmd
npm run preview
```

`npm run build`로 만든 결과물을 로컬에서 미리 확인합니다.

## 현재 폴더 구조

```text
lms-fe-practice-vite/
  index.html          브라우저가 처음 여는 HTML 파일
  package.json        실행 명령어와 설치된 라이브러리 목록
  vite.config.ts      Vite 설정 파일
  tsconfig.json       TypeScript 설정 진입 파일
  eslint.config.js    ESLint 설정 파일

  public/             그대로 제공되는 정적 파일

  src/
    assets/           이미지, SVG 같은 정적 파일
    App.tsx           화면의 중심이 되는 React 컴포넌트
    App.css           App.tsx에서 사용하는 스타일
    index.css         전체 앱에 적용되는 공통 스타일
    main.tsx          React 앱을 브라우저에 연결하는 시작 파일
    README.md         src 폴더 구조 설명
```

## React 앱이 시작되는 흐름

```text
index.html
  -> src/main.tsx
    -> src/App.tsx
```

`index.html`에는 React 앱이 들어갈 빈 자리인 `<div id="root"></div>`가 있습니다.
`src/main.tsx`는 이 `root`를 찾아서 `<App />` 컴포넌트를 화면에 그립니다.
실제로 화면 내용을 바꾸는 연습은 대부분 `src/App.tsx`에서 시작하면 됩니다.

## 처음 연습할 때 보면 좋은 파일

1. `src/main.tsx`
   React 앱이 어디서 시작되는지 볼 수 있습니다.

2. `src/App.tsx`
   화면에 보이는 내용을 수정하는 가장 쉬운 시작점입니다.

3. `src/App.css`
   `App.tsx` 화면의 모양을 바꾸는 CSS입니다.

4. `src/index.css`
   전체 배경, 기본 글꼴, `body`, `#root` 같은 공통 스타일을 관리합니다.

## 앞으로 확장할 폴더 예시

프로젝트가 커지면 아래처럼 폴더를 나눌 수 있습니다.
처음부터 모두 만들 필요는 없고, 필요해질 때 하나씩 추가하면 됩니다.

```text
src/
  app/          라우터, 전체 Provider, 앱 설정
  components/   여러 화면에서 재사용하는 UI
  features/     로그인, 학생 대시보드 같은 기능 단위 코드
  lib/          공통 함수와 상수
  styles/       공통 스타일
  types/        공통 TypeScript 타입
```

## 초보자 기준 추천 순서

1. `npm run dev`로 로컬 서버를 켭니다.
2. `src/App.tsx`의 문구를 바꿔봅니다.
3. 버튼을 하나 추가해봅니다.
4. `useState`로 화면 값이 바뀌는 흐름을 익힙니다.
5. 화면이 길어지면 작은 컴포넌트로 분리합니다.
6. 컴포넌트가 여러 곳에서 쓰이면 `components` 폴더로 옮깁니다.
