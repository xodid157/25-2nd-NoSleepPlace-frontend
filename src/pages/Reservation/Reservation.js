import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ContentFirst from './Content/ContentFirst/ContentFirst';
import ContentSecond from './Content/ContentSecond/ContentSecond';
import ContentThird from './Content/ContentThird/ContentThird';
import Side from './Side/Side';
import Fixed from './Fixed/Fixed';

export default function Reservation({ match, history }) {
  const [countButton, setCountButton] = useState(0);
  const [kakaoList, setKakaoList] = useState([]);
  const [inputs, setInputs] = useState({
    contentType: '',
    contentText: '',
    conti: '없음',
    detailPlace: '',
    countPeople: '',
    equipment: '',
    car: '',
  });

  useEffect(() => {
    fetch('/data/kakaoData.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => setKakaoList(res.result[0]));
  }, []);

  const goToReservation = () => {
    fetch(`http://10.58.5.241:8000/books`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        place_id: 1,
        start_time: '2021-10-29T12:00:00',
        end_time: '2021-10-29T16:00:00',
        head_count: 4,
        total_price: 224000,
        content_type: inputs.contentType,
        content_info: inputs.contentText,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          alert('예약이 성공적으로 완료 되었습니다.');
          history.push('/');
        } else {
          alert('예약이 실패 했습니다.');
        }
      });
  };

  const handleInput = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const goNextPage = () => {
    if (countButton === 0 || countButton === 2 || inputsKeys !== '') {
      setCountButton(countButton + 1);
    } else {
      alert('필수 내용들을 입력해 주세요.');
    }
  };

  const goBackPage = () => {
    setCountButton(countButton - 1);
    setInputs({
      contentType: '',
      contentText: '',
      conti: '',
      detailPlace: '',
      countPeople: '',
      equipment: '',
      car: '',
    });
  };

  const inputsKeys =
    inputs.contentType &&
    inputs.contentText &&
    inputs.detailPlace &&
    inputs.countPeople &&
    inputs.equipment &&
    inputs.car;

  return (
    <ReservationMain>
      <Title>예약 가능 여부 확인</Title>
      <ReservationBox>
        <Side countButton={countButton} />
        {countButton === 0 && <ContentFirst kakaoList={kakaoList} />}
        {countButton === 1 && (
          <ContentSecond handleInput={handleInput} inputs={inputs} />
        )}
        {countButton === 2 && (
          <ContentThird
            contentType={inputs.contentType}
            contentText={inputs.contentText}
            conti={inputs.conti}
            detailPlace={inputs.detailPlace}
            countPeople={inputs.countPeople}
            equipment={inputs.equipment}
            car={inputs.car}
          />
        )}
      </ReservationBox>
      <Fixed
        goNextPage={goNextPage}
        goBackPage={goBackPage}
        countButton={countButton}
        goToReservation={goToReservation}
      />
    </ReservationMain>
  );
}

const ReservationMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 800px;
  margin-top: 20px;
  margin-bottom: 70px;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const ReservationBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 1000px;
`;
