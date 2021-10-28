import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Content({ contentList }) {
  const status = e => {
    if (e === 'PENDING') {
      return '대기중';
    } else if (e === 'COMPLETED') {
      return '지난내역';
    } else if (e === 'CONFIRMED') {
      return '진행중';
    } else if (e === 'CANCELLED') {
      return '취소';
    }
  };

  return (
    <ContentBox>
      {contentList.map((content, index) => {
        return (
          <Link to={`/placeDetail/${content.book_id}`} key={index}>
            <ContentContainer>
              <ContentNumberBox>
                <NumberContent>{index + 1}</NumberContent>
              </ContentNumberBox>
              <ContentInfoBox>
                <InfoImg alt="placeImg" src={content.image} />
                <InfoContainer>
                  <InfoDate>{`${content.start_time} ~ ${content.end_time}`}</InfoDate>
                  <InfoName>{content.name}</InfoName>
                </InfoContainer>
              </ContentInfoBox>
              <ContentHostBox>
                <HostContent>{content.host_name}</HostContent>
              </ContentHostBox>
              <ContentPriceBox>
                <PriceContent>
                  {content.total_price.toLocaleString()}
                </PriceContent>
              </ContentPriceBox>
              <InProgressBox>
                <ContentProgress>{status(content.status)}</ContentProgress>
              </InProgressBox>
              <BoderLine />
            </ContentContainer>
          </Link>
        );
      })}
    </ContentBox>
  );
}

export default Content;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 30px 0 40px;

  a {
    text-decoration: none;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  color: black;
`;

const ContentNumberBox = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
`;

const NumberContent = styled.p``;

const ContentInfoBox = styled.div`
  display: flex;
  width: 600px;
`;

const InfoImg = styled.img`
  width: 135px;
  height: 90px;
  border-radius: 4px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const InfoDate = styled.p`
  margin-bottom: 8px;
`;

const InfoName = styled.p`
  margin-bottom: 8px;
`;

const ContentHostBox = styled.div`
  display: flex;
  align-items: center;
  width: 140px;
  padding-right: 20px;
`;

const HostContent = styled.p``;

const ContentPriceBox = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
`;

const PriceContent = styled.p``;

const InProgressBox = styled.div`
  display: flex;
  align-items: center;
  color: rgb(255, 75, 62);
`;

const ContentProgress = styled.p`
  width: 120px;
`;

const BoderLine = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 1px;
  background-color: rgb(231, 234, 238);
`;
