import { RouterProvider } from 'react-router-dom'
import { router } from './router'

// App은 React 앱의 최상위 컴포넌트입니다.
// 화면을 직접 그리기보다, router.tsx에 정의한 주소별 페이지 규칙을 연결합니다.
function App() {
  return <RouterProvider router={router} />
}

export default App
