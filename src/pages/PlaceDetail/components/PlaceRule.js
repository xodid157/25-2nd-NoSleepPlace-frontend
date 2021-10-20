import React from 'react';
import styled from 'styled-components';

export default function PlaceRule() {
  return (
    <Rule>
      <h2>장소 이용 규칙</h2>
      <p>
        [시간 엄수]
        <br />
        - 계약된 시간을 꼭 준수하여 주시기 바랍니다.
        <br />
        - 이용요금은 [시작시간] 및 [종료시간]으로 계약됩니다.
        <br />
        - 촬영준비 및 세팅, 장비 철수 및 장소 원상복구 시간은 계약시간에 포함
        되어있습니다.
        <br />
        - 계약된 촬영시간을 초과할 경우 호스트가 추가결제를 요청할 수 있습니다.
        <br /> <br />
        [파손주의]
        <br />
        삼각대, 조명, 철제박스, 감독 의자, 기타 장비로 인한 나무 바닥과 벽지
        파손에 꼭 주의 해주세요.
        <br />
        - 준비물 : 간단한 돗자리나 모포, 테니스 공을 준비해서 장비 밑에 꼭 깔아
        놓아주세요.
        <br />
        - 파손시 : 현장에서 함께 확인 &gt; 사진 촬영 &gt; 견적 확인 후, 배상
        요청을 진행하게 됩니다.
        <br /> <br />
        [스탭인원]
        <br />
        설정한 최대 스탭인원이 지켜지지 않을 경우, 호스트가 촬영을 취소하거나
        추가결제를 요청할 수 있습니다.
        <br /> <br />
        [취식금지]
        <br />
        공간에서 취식은 항상 금지 되어있습니다. 부득이한 경우 호스트에게 먼저
        양해를 꼭 구해주세요.
        <br /> <br />
        [에티켓]
        <br />
        - 주변 주민들을 위해 기본 에티켓을 지켜주세요.
        <br />
        - 주변 야외 촬영은 불가능합니다.
        <br />
        - 촬영 도중 발생한 쓰레기는 모두 정리해주셔야 합니다.
        <br />
        - 주차는 안내된 주차대수에 한해 제공됩니다.
        <br />- 기존의 가구 세팅 및 구조를 필요에 의해 변경하신 경우 마감시간
        전에 원상복구 해주셔야 합니다
      </p>
    </Rule>
  );
}

const Rule = styled.div`
  padding: 50px 0;
  border-top: 1px solid #cccfd1;

  h2 {
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: bold;
  }

  p {
    letter-spacing: 0.2mm;
    line-height: 1.6;
    font-size: 15px;
    color: #575859;
  }
`;
