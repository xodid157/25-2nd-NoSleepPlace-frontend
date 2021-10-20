import React from 'react';
import styled from 'styled-components';
import ColorCheck from './CheckBox/ColorCheck';
import NonColorCheck from './CheckBox/NonColorCheck';

export default function Side({ countButton }) {
  return (
    <SideBox>
      <SideContainer>
        <SideContent>
          <TitleBoxCheck>
            <ColorCheck />
            <TitleText>예약자 정보</TitleText>
          </TitleBoxCheck>
          <span>
            우선 호스트에게 진행이 가능한지 확인하는 단계이며, 요금이 청구 되지
            않습니다.
          </span>
        </SideContent>
        <SideContent>
          <TitleBoxCheck>
            {countButton < 1 ? <NonColorCheck /> : <ColorCheck />}
            <TitleText>예약 정보</TitleText>
          </TitleBoxCheck>
          <span>
            예약 시, 정확한 예약 정보를 남겨 주시면 예약 가능성이 높아집니다.
          </span>
        </SideContent>
        <SideContent>
          <TitleBoxCheck>
            {countButton < 2 ? <NonColorCheck /> : <ColorCheck />}
            <TitleText>예약 내용 확인</TitleText>
          </TitleBoxCheck>
          <span>잘못 적은 내용은 없는지 다시 한번 확인해 주세요.</span>
        </SideContent>
        <GuideBox>
          <i className="fas fa-map-marker-alt" />
          <span>예약 안내</span>
        </GuideBox>
      </SideContainer>
      <Advertisement>
        <h1>대관비 3% 적립금 받자!</h1>
        <span>10.18 ~ 10.29 </span>
        <div>
          <p>자세히 보기</p>
        </div>
      </Advertisement>
    </SideBox>
  );
}

const SideBox = styled.div`
  width: 360px;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  border: 1px solid rgb(223, 226, 231);
  border-radius: 10px;
`;

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(231, 234, 238);
  margin-top: 30px;
  padding-bottom: 25px;

  span {
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.6;
    color: rgb(69, 75, 80);
  }
`;

const TitleBoxCheck = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const TitleText = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;

const GuideBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;

  i {
    padding: 1px 1px 1.4px 1.4px;
    margin-right: 4px;
    border: 1px solid #246ff7;
    color: #246ff7;
    font-size: 8px;
  }

  span {
    color: #246ff7;
    font-size: 12px;
  }
`;

const Advertisement = styled.div`
  position: relative;
  height: 130px;
  margin-top: 30px;
  padding: 25px;
  background-color: rgb(250, 251, 251);
  border-radius: 10px;

  h1 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 112px;
    background-color: #e7eaee;
    border-radius: 5px;
    margin-top: 10px;
  }
  p {
    font-size: 14px;
    padding: 10px 0;
  }
`;
