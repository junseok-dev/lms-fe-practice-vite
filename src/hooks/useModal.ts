import { useState } from 'react'

// 모달 열림/닫힘 상태를 재사용하기 위한 훅입니다.
// 확인창, 상세 보기, 폼 다이얼로그가 늘어나면 이 훅으로 기본 흐름을 맞춥니다.
export function useModal(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((current) => !current),
  }
}
