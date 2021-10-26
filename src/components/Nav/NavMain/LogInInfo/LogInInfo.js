import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class LogInInfo extends React.Component {
  render() {
    const { kakaoList, kakaoLogOut } = this.props;

    return (
      <LogInInfoBox>
        <KakaoNinkName>{kakaoList.nickname}</KakaoNinkName>
        <BorderLine />
        <InfoContent>프로필</InfoContent>
        <InfoContent>메시지</InfoContent>
        <Link to="/reservationDetails">
          <InfoContent>예약내역</InfoContent>
        </Link>
        <BorderLine />
        <InfoContent>포인트</InfoContent>
        <InfoContent>쿠폰</InfoContent>
        <InfoContent>친구 초대</InfoContent>
        <BorderLine />
        <InfoContent>설정</InfoContent>
        <InfoContent onClick={kakaoLogOut}>로그아웃</InfoContent>
      </LogInInfoBox>
    );
  }
}
export default LogInInfo;

const LogInInfoBox = styled.div`
  position: absolute;
  top: 67px;
  right: 0%;
  display: flex;
  flex-direction: column;
  width: 220px;
  padding: 28px 30px 0;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 10%) 2px 2px 8px 0px;
  border: 1px solid rgb(239, 243, 245);
  background-color: white;

  a {
    padding: 12px 0;
    text-decoration: none;
  }
`;

const KakaoNinkName = styled.span`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const BorderLine = styled.div`
  border-top: 1px solid rgb(223, 226, 231);
  margin: 10px 0 10px;
`;

const InfoContent = styled.span`
  width: 100%;
  padding: 12px 0;
  color: #95989b;
  font-size: 15px;
  cursor: pointer;

  line &:hover {
    background-color: #f5f7f8;
  }
`;
