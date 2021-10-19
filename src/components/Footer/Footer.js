import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
  render() {
    return (
      <FooterBox>
        <div>
          <FooterLeft>
            <span>사업자정보확인</span>
            <span>개인정보처리방침</span>
            <span>이용약관</span>
            <span>고객센터</span>
            <span>인재채용</span>
            <Email>team@nosleepplace.co.kr</Email>
          </FooterLeft>
          <FooterRight>
            <p>(주)노슬립팩토리 사업자 정보</p>
            <span>대표 노슬립</span>
            <span>
              주소 서울특별시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점)
            </span>
            <span>사업자 등록번호 123-45-67890</span>
            <span>통신판매업신고번호 2018-서울강남-04057</span>
            <span>
              (주)노슬립팩토리는 통신판매중개자로서, 통신판매의 당사자가
              아니라는 사실을 고지하며 상품의 예약, 이용 및 환불 등과 관련한
              의무와 책임은 각 판매자에게 있습니다.
            </span>
            <Mutual>© nosleepfactory Inc.</Mutual>
          </FooterRight>
        </div>
      </FooterBox>
    );
  }
}

const FooterBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: #fafbfb;

  div {
    display: flex;
    padding: 1.2em 4.5em;
    height: 310px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;

  span {
    padding: 0.6em 0;
    color: #575c61;
    font-size: 12px;
    font-weight: 700;
  }
`;

const Email = styled.p`
  margin-top: 5.3em;
  font-size: 15px;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.2em;

  p,
  span {
    color: #9ea4aa;
  }

  p {
    margin-bottom: 1em;
    padding: 0.3em 0;
    color: #a3aaaf;
    font-size: 15px;
  }

  span {
    padding: 0.4em 0;
    font-size: 12px;
    font-weight: 400;
  }
`;

const Mutual = styled.span`
  margin-top: 5em;
  font-size: 11px;
`;
