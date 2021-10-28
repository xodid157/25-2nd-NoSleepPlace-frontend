import React, { useEffect } from 'react';
import styled from 'styled-components';
const { Kakao } = window;

function Login({ handleLogInButton, handleLogInBox, kakaoLogIn }) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch('http://52.79.51.199:8000/users/account/kakao', {
          method: 'POST',
          headers: { Authorization: authObj.access_token },
        })
          .then(res => res.json())
          .then(res => {
            if (res.access_token) {
              localStorage.setItem('token', res.access_token);
              handleLogInButton();
              handleLogInBox();
              kakaoLogIn();
              alert('환영해요!');
            } else if (!res.access_token) {
              alert('다시 회원가입하세요!');
            }
          });
      },
    });
  };

  return (
    <Display>
      <>
        <Black onClick={handleLogInButton} />
        <LoginBox>
          <LoginTop>
            <div>로그인</div>
            <CloseBtn onClick={handleLogInButton}>X</CloseBtn>
          </LoginTop>
          <NosleepplaceLogo>
            <img alt="nosleepplaceLogo" src="/images/nosleep.png" />
          </NosleepplaceLogo>
          <LoginBtn>
            <LoginLetter onClick={kakaoLogin}>
              <img alt="logo" src="/images/kakaologo.png" width="30px" />
            </LoginLetter>
          </LoginBtn>
          <Explain>내가 찾던 촬영 장소, 모두 여기에</Explain>
        </LoginBox>
      </>
    </Display>
  );
}
const Display = styled.div`
  display: true;
`;
const Black = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: black;
  opacity: 0.6;
`;
const CloseBtn = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;
const LoginTop = styled.div`
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.1px;
  color: rgb(27, 29, 31);
  width: 100%;
  text-align: center;
`;
const NosleepplaceLogo = styled.div`
  margin-top: 54px;
  width: 100%;

  img {
    width: 166px;
    height: 55px;
  }
`;
const LoginBtn = styled.div`
  width: 100%;
  padding-right: 70px;
  padding-left: 70px;
  margin-top: 24px;
`;
const LoginLetter = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  height: 72px;
  border-radius: 8px;
  background-color: #fee500;
  cursor: pointer;
  width: 280px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.38;
  color: rgb(255, 255, 255);
  padding-left: 30px;
  img {
    position: absolute;
    width: 233px;
  }
`;
const LoginBox = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  z-index: 20;
`;
const Explain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 112px;
  width: 100%;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.1px;
  text-align: center;
  color: #c9cdd2;
`;

export default Login;
