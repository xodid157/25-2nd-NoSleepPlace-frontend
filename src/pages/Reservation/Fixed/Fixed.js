import React from 'react';
import styled from 'styled-components';

export default function Fixed({
  goNextPage,
  goBackPage,
  countButton,
  goToReservation,
}) {
  return (
    <FixedBox>
      <FixedContent>
        {countButton > 0 && <Back onClick={goBackPage}>이전</Back>}
        <div />
        <Next onClick={countButton < 2 ? goNextPage : goToReservation}>
          다음
        </Next>
      </FixedContent>
    </FixedBox>
  );
}

const FixedBox = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  border-top: 1px solid rgb(223, 226, 231);
  background-color: white;
`;

const FixedContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  font-size: 14px;
`;

const Back = styled.span`
  padding: 12px 25px;
  background-color: #eff3f5;
  border-radius: 5px;
  cursor: pointer;
`;

const Next = styled.span`
  padding: 12px 25px;
  background-color: #3c81fa;
  border-radius: 5px;
  color: white;
  font-style: 14px;
  cursor: pointer;
`;
