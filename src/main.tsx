import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// React 앱의 시작점입니다.
// index.html 안의 <div id="root"></div>를 찾아서 그 안에 <App />을 그립니다.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
