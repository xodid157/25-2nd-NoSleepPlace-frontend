import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogInInfo from './LogInInfo/LogInInfo';

export default class NavMain extends Component {
  render() {
    const {
      handleCategotyButton,
      handleSerchButton,
      isLogIn,
      kakaoList,
      isInfoBytton,
      handleInfoBytton,
      handleLogInButton,
      kakaoLogOut,
    } = this.props;

    return (
      <Nav>
        <NavContent>
          <Link to="/">
            <LogImg alt="logoImg" src="/images/nosleep.png" />
          </Link>
          <CategoryBox>
            <NavItemHover onClick={handleCategotyButton}>
              모든 카테고리
            </NavItemHover>
            <NavItem>둘러보기</NavItem>
            <NavItem>인기장소</NavItem>
            <NavItem>WATCH</NavItem>
            <NavItem>매거진</NavItem>
            <i className="fas fa-search" onClick={handleSerchButton} />
            <i className="fas fa-map-marker-alt" />
            <RightLine />
            {isLogIn ? (
              <LogIn>
                <LoginDifferentColor>장소 등록</LoginDifferentColor>
                <LogInImg
                  alt="LoginKakaoImg"
                  src={kakaoList.profile_image}
                  onClick={handleInfoBytton}
                />
                <i className="far fa-bell" />
                <i className="far fa-bookmark" />
              </LogIn>
            ) : (
              <LogOut>
                <DifferentColor>장소 등록</DifferentColor>
                <DifferentColor onClick={handleLogInButton}>
                  로그인
                </DifferentColor>
              </LogOut>
            )}
          </CategoryBox>
          {isInfoBytton && (
            <LogInInfo kakaoList={kakaoList} kakaoLogOut={kakaoLogOut} />
          )}
        </NavContent>
      </Nav>
    );
  }
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #e7eaee;
  background-color: white;
`;

const NavContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
  width: 100%;
`;

const NavItem = styled.span`
  margin: 0 0.65em;
  font-size: 16px;
  font-weight: 400;
  padding: 0.7em 0.35em;
  cursor: pointer;

  &:hover {
    background-color: #f5f7f8;
  }
`;

const NavItemHover = styled.span`
  margin: 0 0.65em;
  font-size: 16px;
  font-weight: 400;
  padding: 0.7em 0.35em;
  cursor: pointer;

  &:hover {
    background-color: #f5f7f8;
  }
`;

const LogImg = styled.img`
  width: 160px;
  cursor: pointer;
`;

const RightLine = styled.div`
  margin: 0.4em;
  width: 1px;
  height: 1em;
  background: rgb(201, 205, 210);
`;

const DifferentColor = styled.span`
  padding: 0.7em 1em;
  color: #72787f;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #f5f7f8;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;

  i {
    margin: 0 0.5em 0 0.5em;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
  }
`;

const LogOut = styled.div``;

const LogIn = styled.div`
  display: flex;
  align-items: center;

  i {
    font-size: 20px;
    margin-left: 0.7em;
    color: #9ea4aa;
  }
`;

const LoginDifferentColor = styled.span`
  margin-left: 0.7em;
  padding: 0.7em 1em;
  color: #72787f;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f5f7f8;
  }
`;

const LogInImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 0.5em 0 0.7em;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
`;
