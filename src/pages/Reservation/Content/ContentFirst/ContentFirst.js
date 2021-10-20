import React from 'react';
import styled from 'styled-components';

export default function ContentFirst({ kakaoList }) {
  return (
    <Main>
      <MainContainer>
        <MainContent>
          <UserInfo>
            <UserImg alt="kakaoImg" src={kakaoList.profile_image} />
            <UserId>{kakaoList.ninkname}</UserId>
            <Count>진행 횟수 7</Count>
          </UserInfo>
          <InfoContainer>
            <InfoTitle>
              <MainTitleText>상세정보</MainTitleText>
              <span />
            </InfoTitle>
            <InfoTitle>
              <span>이름</span>
              <span>{kakaoList.ninkname}</span>
            </InfoTitle>
            <InfoTitle>
              <span>이메일</span>
              <span>{kakaoList.email}</span>
            </InfoTitle>
          </InfoContainer>
        </MainContent>
      </MainContainer>
    </Main>
  );
}

const Main = styled.div`
  width: 580px;
  margin-left: 60px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  border: 1px solid rgb(223, 226, 231);
  border-radius: 10px; ;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  margin: 40px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const UserImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  object-fit: cover;
`;

const UserId = styled.p`
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
`;

const Count = styled.p`
  margin-top: 4px;
  color: rgb(36, 111, 248);
  font-size: 14px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const MainTitleText = styled.span`
  font-weight: bold;
`;
