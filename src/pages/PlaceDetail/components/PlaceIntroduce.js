import React from 'react';
import styled from 'styled-components';

export default function PlaceIntroduce({ category }) {
  return (
    <Introduce>
      <IntroduceStart>
        <IntroTitle>장소 소개</IntroTitle>
        <div dangerouslySetInnerHTML={{ __html: category.description }} />
      </IntroduceStart>
      <ButtonWrap>
        <InfoBtn>
          <i className="fas fa-vector-square" />
          <p>{category.size}</p>
        </InfoBtn>
        <InfoBtn>
          <i className="fab fa-firstdraft" />
          <p>{category.floor}</p>
        </InfoBtn>
        <InfoBtn>
          <i className="far fa-user" />
          <p>{category.capacity}</p>
        </InfoBtn>
        <InfoBtn>
          <i className="fas fa-car" />
          <p>{category.parking}</p>
        </InfoBtn>
      </ButtonWrap>
    </Introduce>
  );
}

const Introduce = styled.div`
  padding-bottom: 40px;
`;

const IntroduceStart = styled.div`
  border-top: 1px solid #cccfd1;
  margin-bottom: 15px;

  p {
    letter-spacing: 0.2mm;
    line-height: 1.6;
    font-size: 15px;
    color: #575859;
  }
`;

const IntroTitle = styled.div`
  margin: 40px 0;
  font-size: 25px;
  font-weight: bold;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: row;
`;

const InfoBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
  width: 167px;
  height: 110px;
  background-color: #fafbfb;
  border-radius: 10px;

  i {
    margin-bottom: 5px;
    font-size: 25px;
  }
`;
