import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'

// React 앱의 시작점입니다.
// index.html 안의 <div id="root"></div>를 찾아 그 안에 App을 렌더링합니다.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
