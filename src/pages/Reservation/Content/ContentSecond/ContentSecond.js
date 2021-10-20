import React from 'react';
import styled from 'styled-components';
import { CONTENT_SECOUND } from '../../data';

export default function ContentSecond({
  handlecontentType,
  handleContentText,
  handleConti,
  handleDetailPlace,
  handleCountPeople,
  handleEquipment,
  handleCar,
  handleInput,
  inputs,
}) {
  return (
    <Main>
      <MainContainer>
        <MainContent>
          <ContentBox>
            {CONTENT_SECOUND.map((content, index) => {
              return (
                <>
                  <TitleText key={index}>
                    <span>{content.title} </span>
                    {content.essential && <Essential> *</Essential>}
                  </TitleText>
                  <ContentText
                    type="text"
                    placeholder={content.placeholder}
                    name={content.name}
                    onChange={handleInput}
                  />
                </>
              );
            })}
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
  padding: 20px 50px;
  width: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  color: #9ea4aa;
  font-size: 12px;
  font-weight: 500;
  margin-top: 20px;
`;

const Essential = styled.span`
  font-size: 15px;
  color: #3c82fa;
`;

const ContentText = styled.textarea`
  height: 124px;
  margin-top: 8px;
  padding: 15px;
  border: 1px solid rgb(223, 226, 231);
  border-radius: 4px;
  resize: none;
  outline: none;
  line-height: 1.6;
  font-size: 15px;

  ::placeholder {
    color: #9ea4aa;
    font-weight: 300;
  }
`;
