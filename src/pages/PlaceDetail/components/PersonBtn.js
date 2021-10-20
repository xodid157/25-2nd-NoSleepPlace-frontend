import React from 'react';
import styled from 'styled-components';

export default function PersonBtn({
  handlePersonMinus,
  handlePersonPlus,
  personPlus,
  personMinus,
  handlePersonNum,
}) {
  return (
    <Container>
      <BtnWrap>
        <span>총인원 수</span>
        <MinusPlus>
          <Minus onClick={handlePersonMinus}>-</Minus>
          <Result>{personPlus + personMinus}</Result>
          <Plus onClick={handlePersonPlus}>+</Plus>
        </MinusPlus>
      </BtnWrap>
      <CompleteBtn onClick={handlePersonNum}>완료</CompleteBtn>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  border: 1px solid #cccfd1;
  background-color: white;
  z-index: 10;
  left: -34px;
  top: 10px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 332px;
  font-size: 20px;
  padding: 70px 0;

  span {
    margin-top: 20px;
    margin-left: 25px;
  }
`;
const MinusPlus = styled.div`
  display: flex;
`;

const Result = styled.div`
  margin-right: 30px;
  padding: 20px 0;
`;

const Minus = styled.div`
  margin-right: 30px;
  padding: 17px 0;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 30px;
`;

const Plus = styled.div`
  padding: 13px 0;
  margin-top: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 30px;
`;

const CompleteBtn = styled.div`
  position: absolute;
  padding: 15px;
  bottom: 30px;
  right: 50px;
  border: 1px solid #cccfd1;
  border-radius: 9px;
  background-color: #3c81f6;
  color: white;
  cursor: pointer;
`;
