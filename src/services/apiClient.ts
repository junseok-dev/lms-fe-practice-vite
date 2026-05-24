// 서버 API를 호출할 때 공통으로 사용할 클라이언트 자리입니다.
// fetch 또는 axios 설정, baseURL, 공통 헤더, 에러 처리를 이 파일에서 관리합니다.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

export async function apiClient<TResponse>(path: string): Promise<TResponse> {
  const response = await fetch(`${API_BASE_URL}${path}`)

  if (!response.ok) {
    throw new Error('API 요청에 실패했습니다.')
  }

  return response.json() as Promise<TResponse>
}
