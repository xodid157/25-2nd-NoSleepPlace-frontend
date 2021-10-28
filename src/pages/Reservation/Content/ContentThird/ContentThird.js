import React, { useState } from 'react';
import styled from 'styled-components';

export default function ContentThird({
  contentType,
  contentText,
  conti,
  detailPlace,
  countPeople,
  equipment,
  car,
  date,
  end_time,
  start_time,
  head_count,
  price,
  id,
  name,
}) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(prev => !prev);
  };

  return (
    <Main>
      <MainContainer>
        <MainContent>
          <ContentBox>
            <TitleName>{name}</TitleName>
            <TextBox>
              <ContentTitle>장소 번호</ContentTitle>
              <ContentText>{id}</ContentText>
            </TextBox>
            <TextBox>
              <ContentTitle>콘텐츠 종류</ContentTitle>
              <ContentText>{contentType}</ContentText>
            </TextBox>
            <TextBox>
              <ContentTitle>콘텐츠 내용</ContentTitle>
              <ContentText>{contentText}</ContentText>
            </TextBox>
            <TextBox>
              <ContentTitle>콘티</ContentTitle>
              <ContentText>{conti}</ContentText>
            </TextBox>
            <TextBox>
              <ContentTitle>세부 장소</ContentTitle>
              <ContentText>{detailPlace}</ContentText>
            </TextBox>
            <TextBox>
              <ContentTitle>총인원</ContentTitle>
              <ContentText>
                총 {head_count}명 ({countPeople})
              </ContentText>
            </TextBox>
            <TextBox>
              <ContentTitle>장비규모</ContentTitle>
              <ContentText>{equipment}</ContentText>
            </TextBox>
            <TextBox>
              <ContentTitle>차량 대수</ContentTitle>
              <ContentText>{car}</ContentText>
            </TextBox>
            <ScheduleBox>
              <ScheduleText>스케줄</ScheduleText>
              <DateText>{`${date
                .replace(',', '년 ')
                .replace(',', '월 ')
                .concat('일 ')} ${start_time}:00 ~ ${end_time}:00`}</DateText>
            </ScheduleBox>
            <ScheduleBox>
              <ScheduleText>총 시간</ScheduleText>
              <DateText>{end_time - start_time} 시간</DateText>
            </ScheduleBox>
            <BorderLine />
            <PriceBox>
              <PriceText onClick={handleModal}>
                총 금액 합계
                {modal && (
                  <Modal>
                    <ModalText>
                      총 금액에는 서비스 수수료 및 부가세(VAT)가 포함되어
                      있습니다.
                    </ModalText>
                  </Modal>
                )}
              </PriceText>
              <Price>
                {((end_time - start_time) * price).toLocaleString()} 원
              </Price>
            </PriceBox>
          </ContentBox>
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
  align-items: flex-start;
  border: 1px solid rgb(223, 226, 231);
  border-radius: 10px; ;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  width: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const TextBox = styled.div`
  border-bottom: 1px solid rgb(223, 226, 231);
  padding: 30px 0 20px;
  line-height: 1.6;
  font-size: 15px;
`;

const ContentTitle = styled.p`
  font-weight: bold;
`;

const ContentText = styled.p`
  color: rgb(114, 120, 127);
`;

const ScheduleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 52px;
  font-size: 18px;
`;

const ScheduleText = styled.p`
  color: rgb(114, 120, 127);
  font-weight: 400;
`;

const DateText = styled.p`
  font-weight: 500;
`;

const BorderLine = styled.div`
  border-top: 1px solid rgb(223, 226, 231);
  margin: 30px 0;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
`;

const PriceText = styled.p`
  position: relative;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const Modal = styled.div`
  position: absolute;
  left: -30px;
  top: 17px;
  z-index: 1;
  width: 300px;
  padding: 10px 15px;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 10%) 2px 2px 8px 0px;
  border: 1px solid rgb(239, 243, 245);
  background-color: white;
  color: rgb(114, 120, 127);
`;

const ModalText = styled.span`
  font-size: 12px;
`;

const Price = styled.p`
  font-size: 18px;
`;
