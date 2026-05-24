// 동료 평가 허브 화면에서 사용하는 mock 데이터입니다.
// 실제 API가 정해지기 전까지 Figma에 보이는 안내 문구와 카드 정보를 화면에 주입합니다.
export const studentPeerReview = {
  notice: {
    title: '동료 평가는 익명입니다',
    body: '같은 기수 동료에게만 평가를 남길 수 있고, 본인은 평가 대상이 아닙니다. 받은 동료에게 평가자 정보는 표시되지 않습니다.',
  },
  actions: [
    {
      icon: '#',
      iconTone: 'mint',
      title: 'PeerTag 부여',
      description:
        '동료에게 어울리는 작업 태그를 익명으로 부여합니다. 부여한 태그는 동료의 증명서 태그 클라우드에 반영됩니다.',
      availableLabel: '부여 가능한 동료',
      availableCount: '23명',
      completed: '12명 완료',
      buttonLabel: 'PeerTag 부여하기',
      href: '/student/peer-tag',
    },
    {
      icon: '5',
      iconTone: 'purple',
      title: 'PeerReputation 5축 평가',
      description: '기술, 책임감, 소통, 협업, 피드백 5축으로 동료를 평가하고 추천 여부를 선택합니다.',
      availableLabel: '평가 가능한 동료',
      availableCount: '23명',
      completed: '8명 완료',
      buttonLabel: '5축 평가하기',
      href: '/student/peer-reputation',
    },
  ],
} as const
