import React from 'react';
import styled from 'styled-components';

export default function Surround() {
  return (
    <SurroundLoc>
      <h2>주변 정보</h2>
      <p>
        롯데월드 잠실롯데타워 잠실롯데월드몰 잠실롯데애비뉴얼 잠실 석촌호수
        잠실롯데백화점
        <br />
        올림픽공원 아산병원 jyp 몽촌토성 올림픽기념관 송리단길 종합운동장
        롯데백화점 한강시민공원 잠실대교 올림픽대교 올림픽대로 강변북로 2호선
        잠실나루역 몽촌토성역
      </p>
    </SurroundLoc>
  );
}

const SurroundLoc = styled.div`
  border-top: 1px solid #cccfd1;
  padding: 50px 0;

  h2 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    letter-spacing: 0.2mm;
    line-height: 1.6;
    font-size: 15px;
    color: #575859;
  }
`;
