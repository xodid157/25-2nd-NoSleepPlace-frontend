import React, { Component } from 'react';
import styled from 'styled-components';

export default class Local extends Component {
  render() {
    return (
      <Location>
        <h2>위치</h2>
        <button>지도 보기</button>
        <p>자세한 주소는 호스트 승인 후, 메시지로 문의 가능합니다.</p>
      </Location>
    );
  }
}

const Location = styled.div`
  border-top: 1px solid #cccfd1;
  padding: 50px 0;

  h2 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  button {
    margin-bottom: 27px;
    width: 160px;
    height: 55px;
    border-radius: 10px;
    border: 1px solid #cccfd1;
    background-color: transparent;
    font-size: 15px;
  }

  p {
    font-size: 15px;
    color: #575859;
  }
`;
