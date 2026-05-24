// 수강생 트러블슈팅 사례 목록 화면에서 사용하는 mock 데이터입니다.
// 문제 상황과 작성 섹션 상태를 Figma 카드 구조에 맞춰 주입합니다.
export const studentTroubleshootingCases = {
  summary: {
    title: '내 트러블슈팅 사례',
    count: '3건',
  },
  items: [
    {
      title: 'Kafka 컨슈머 리밸런싱으로 메시지 중복 처리',
      badges: [
        { label: '인증 완료', tone: 'ok' },
        { label: '발표 연결', tone: 'purple' },
      ],
      action: '변경 제안',
      createdAt: '작성일 2026-04-22',
      updatedAt: '최근 수정 2026-05-10',
      situation: '컨슈머 리밸런싱이 발생하면서 동일 주문 이벤트가 두 번 처리되어 재고가 잘못 차감되었습니다.',
      sections: [
        { label: '상황', tone: 'ok' },
        { label: '해결', tone: 'ok' },
        { label: '결과', tone: 'ok' },
      ],
    },
    {
      title: 'JPA N+1 쿼리로 주문 목록 응답 3초 지연',
      badges: [{ label: '검토 중', tone: 'warning' }],
      action: '변경 제안',
      createdAt: '작성일 2026-05-02',
      updatedAt: '최근 수정 2026-05-12',
      situation: '주문 목록 조회 시 연관 엔티티마다 추가 쿼리가 발생해 100건 기준 응답이 3초까지 느려졌습니다.',
      sections: [
        { label: '상황', tone: 'ok' },
        { label: '해결', tone: 'ok' },
        { label: '결과', tone: 'ok' },
      ],
    },
    {
      title: 'Redis 캐시 stampede로 DB 부하 급증',
      badges: [{ label: '작성 중', tone: 'neutral' }],
      action: '변경 제안',
      createdAt: '작성일 2026-05-13',
      updatedAt: '최근 수정 2026-05-13',
      situation: '캐시 만료 직후 다수 요청이 동시에 DB로 몰리면서 커넥션 대기 시간이 증가했습니다.',
      sections: [
        { label: '상황', tone: 'ok' },
        { label: '해결', tone: 'ok' },
        { label: '결과', tone: 'neutral' },
      ],
    },
  ],
} as const
