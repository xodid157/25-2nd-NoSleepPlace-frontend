import React from 'react';
import styled from 'styled-components';
import PlaceIntroduce from './components/PlaceIntroduce';
import PlaceRule from './components/PlaceRule';
import Local from './components/Local';
import Surround from './components/Surround';
import Reserve from './components/Reserve';
import StickerWrap from './components/StickerWrap';

export default function PlaceDetail({
  category,
  handleReservation,
  handleDate,
  handleMonth,
  month,
  handlePath,
  handlePersonMinus,
  handlePersonPlus,
  personPlus,
  personMinus,
  personNums,
}) {
  return (
    <Container>
      <PlaceName>
        <CategoryNLocal>아파트 . 서울</CategoryNLocal>
        <h1>{category.place_name}</h1>
      </PlaceName>
      <RowContainer>
        <LeftRow>
          <img alt="placePics" src={category.url} />
          <PlaceIntroduce category={category} />
          <PlaceRule />
          <Local />
          <Surround />
        </LeftRow>
        <RightRow>
          <Reserve
            category={category}
            handleReservation={handleReservation}
            handleDate={handleDate}
            handleMonth={handleMonth}
            handlePath={handlePath}
            handlePersonMinus={handlePersonMinus}
            handlePersonPlus={handlePersonPlus}
            personPlus={personPlus}
            personMinus={personMinus}
            month={month}
            personNums={personNums}
          />
          <LikeShare>
            <button>관심장소</button>
            <button>공유하기</button>
          </LikeShare>
          <StickerWrap />
        </RightRow>
      </RowContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 1160px;
  margin: 0 auto 40px;
  padding-top: 50px;
`;

const CategoryNLocal = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const PlaceName = styled.div`
  h1 {
    font-size: 29px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftRow = styled.div`
  width: 720px;

  img {
    margin-bottom: 40px;
    width: 661px;
    height: 455px;
    border-radius: 9px;
  }
`;

const RightRow = styled.div``;

const LikeShare = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;

  button {
    width: 190px;
    height: 55px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    background-color: #eff3f5;
    color: black;
  }
`;
