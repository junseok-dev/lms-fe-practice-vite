import { useState } from 'react'

// 목록 화면에서 공통으로 사용할 페이지네이션 상태 훅입니다.
// 운영자 목록, 멘티 목록, 강의 목록처럼 반복되는 테이블 화면에 붙일 수 있습니다.
export function usePagination(initialPage = 1) {
  const [page, setPage] = useState(initialPage)

  return {
    page,
    goToPage: setPage,
    nextPage: () => setPage((current) => current + 1),
    previousPage: () => setPage((current) => Math.max(1, current - 1)),
  }
}
