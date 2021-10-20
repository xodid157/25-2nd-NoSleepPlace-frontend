import React from 'react';
import styled from 'styled-components';

export default function StickerWrap() {
  return (
    <Stickers>
      <Sticker>
        <div>
          대관비 3% 적립금 받자!
          <br />
          10.01 - 10.31 (결제일 기준)
        </div>
      </Sticker>
      <Sticker2>
        <div>
          호스트가 '예약 요청’을 승인한 뒤<br />
          메시지를 통해 문의할 수 있어요.
        </div>
      </Sticker2>
    </Stickers>
  );
}

const Stickers = styled.div``;

const Sticker = styled.div`
  padding: 22px;
  margin-top: 18px;
  height: 88px;
  border: none;
  border-radius: 10px;
  background-color: #cae2fc;
`;

const Sticker2 = styled.div`
  padding: 22px;
  margin-top: 18px;
  height: 88px;
  border: none;
  border-radius: 10px;
  background-color: pink;
  font-size: 19px;
`;
