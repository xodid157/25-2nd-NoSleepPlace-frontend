import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CategotyBox from './CategotyBox/CategotyBox';
import Content from './Content/Content';
import { CATEGOTY_CONTENT } from './Deta';

function ReservationDetails({ match }) {
  const [contentList, setContentList] = useState([]);

  const location = useLocation();
  useEffect(() => {
    fetch(`http://52.79.51.199:8000/books${location.search}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => setContentList(res.result));
  }, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <DetailsContainer>
        <TitleBox>
          <TitleText>신청 예약</TitleText>
        </TitleBox>
        <CategotyContainer>
          {CATEGOTY_CONTENT.map((content, index) => (
            <CategotyBox name={content.name} key={index} />
          ))}
        </CategotyContainer>
        <ContentCategoty>
          <LeftBox>
            <LeftContent>전체</LeftContent>
            <LeftCount>{contentList.length}</LeftCount>
          </LeftBox>
          <RightBox>
            <i className="fas fa-exchange-alt" />
            <RightContent>진행일순</RightContent>
          </RightBox>
        </ContentCategoty>
        <MenuBox>
          <MenyContainer>
            <MenuNumber>예약번호</MenuNumber>
            <MenuInfo>촬영정보</MenuInfo>
            <MenuHost>호스트</MenuHost>
            <MenuPrice>금액</MenuPrice>
            <MenuProgress>진행상태</MenuProgress>
          </MenyContainer>
        </MenuBox>
        <BottomLine />
        <Content contentList={contentList} />
      </DetailsContainer>
    </Main>
  );
}
export default ReservationDetails;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1160px;
  width: 100%;
  padding-bottom: 200px;
`;

const TitleBox = styled.div`
  margin-top: 20px;
`;

const TitleText = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

const CategotyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 56px;
  margin-top: 50px;
  padding: 0 8px;
  background-color: #f5f7f8;

  a {
    text-decoration: none;
  }
`;

const ContentCategoty = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;

const LeftBox = styled.div``;

const LeftContent = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const LeftCount = styled.span`
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(36, 111, 248);
`;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  border-radius: 4 px;
  border: 1px solid #dfe2e7;
  cursor: pointer;

  i {
    width: 20px;
  }
`;

const RightContent = styled.span`
  font-size: 14px;
`;

const MenuBox = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const MenyContainer = styled.div`
  display: flex;
  color: #72787f;
`;

const MenuNumber = styled.p`
  width: 80px;
  padding-right: 20px;
`;

const MenuInfo = styled.p`
  width: 600px;
  padding-right: 20px;
`;

const MenuHost = styled.p`
  width: 140px;
  padding-right: 20px;
`;

const MenuPrice = styled.p`
  width: 120px;
  padding-right: 20px;
`;

const MenuProgress = styled.p`
  width: 120px;
  padding-right: 20px;
`;

const BottomLine = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 1px;
  background-color: rgb(231, 234, 238);
`;
