import React, { useState } from 'react';
import styled from 'styled-components';
import PersonBtn from './PersonBtn';
import DatePick from './DatePick';

export default function Reserve({
  category,
  handleReservation,
  handleMonth,
  handleDate,
  handlePath,
  handlePersonMinus,
  handlePersonPlus,
  personPlus,
  personMinus,
  personNums,
}) {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [ReserveInfo, setReserveInfo] = useState([]);
  const [isPersonOpen, setIsPersonOpen] = useState(false);
  // const handleCalendar = () => {
  //   fetch(`/data/ReserveDate.json`)
  //     .then(res => res.json())
  //     .then(res => setReserveInfo(res.result[0]));
  // const happyNewYear = new Date();
  // const year = happyNewYear.getFullYear();
  // const month = happyNewYear.getMonth() + 1;
  // const date = happyNewYear.getDate();
  // const hour = happyNewYear.getHours();
  // const minutes = happyNewYear.getMinutes();

  // const timeInput = `${year}-${month >= 10 ? month : '0' + month}-${
  //   date >= 10 ? date : '0' + date
  // }T${hour}:${minutes}:${'00'}`;

  // const handleCalendar = () => {
  //   fetch(`http://10.58.2.43:8000/places/1/calendar?time=${timeInput}`, {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(res => setReserveInfo(res.result[0]));

  //   return setCalendarOpen(prev => !prev);
  // };

  const handleCalendar = () => {
    fetch(`/data/ReserveDate.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setReserveInfo(res.result));

    return setCalendarOpen(prev => !prev);
  };

  const handlePersonNum = () => {
    setIsPersonOpen(!isPersonOpen);
  };

  return (
    <Reservation>
      <p>현재 단계에서는 요금이 청구되지 않습니다.</p>
      <p>호스트에게 진행이 가능한지 확인해 보세요.</p>
      <TagWrap>
        <Tag>최소2시간부터 대여가능</Tag>
      </TagWrap>
      <Price>
        <Won>
          {category.price?.toLocaleString()}
          <p>원</p>
        </Won>
        <span>/ 시간</span>
      </Price>
      <ScheduleNPersons>
        <h4>스케줄</h4>
        <button onClick={handleCalendar}>스케줄을 입력하세요</button>
        {isCalendarOpen && (
          <DatePick
            ReserveInfo={ReserveInfo}
            handleReservation={handleReservation}
            handleMonth={handleMonth}
            handleDate={handleDate}
            handleCalendar={handleCalendar}
          />
        )}
        <h4>총인원</h4>
        <Persons>
          <button onClick={handlePersonNum}>
            {personNums === 0
              ? '총인원 수를 입력하세요'
              : ` 총 ${personNums}명`}
          </button>
          {isPersonOpen && (
            <PersonBtn
              handlePersonMinus={handlePersonMinus}
              handlePersonPlus={handlePersonPlus}
              personPlus={personPlus}
              personMinus={personMinus}
              handlePersonNum={handlePersonNum}
            />
          )}
        </Persons>
      </ScheduleNPersons>

      <ReserveBtn>
        <NowReserve>
          <button onClick={handlePath}>지금 예약 요청하기</button>
        </NowReserve>
        <ReserveCall>
          <button>전화 문의</button>
        </ReserveCall>
      </ReserveBtn>
    </Reservation>
  );
}

const Reservation = styled.div`
  padding: 33px;
  width: 400px;
  border: 1px solid #cccfd1;
  border-radius: 10px;
`;

const Persons = styled.div``;

const TagWrap = styled.div``;

const Tag = styled.div`
  display: inline-block;
  margin-top: 10px;
  padding: 7px;
  background-color: #e3ecfc;
  /* display: ; */
  border-radius: 4px;
  font-size: 13px;
  color: #548ff7;
`;

const Price = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #cccfd1;

  span {
    margin-top: 3px;
    margin-left: 3px;
    font-size: 15px;
  }
`;

const Won = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 20px;
`;

const ScheduleNPersons = styled.div`
  position: relative;
  margin-top: 30px;

  h4 {
    font-weight: bold;
    font-size: 18px;
    margin: 30px 0 10px;
  }

  button {
    padding-left: 20px;
    width: 100%;
    height: 52px;
    background: transparent;
    border: 1px solid #cccfd1;
    border-radius: 5px;
    text-align: left;
    font-size: 16px;
    color: #cccfd1;
    cursor: pointer;
  }
`;

const ReserveBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    padding: 0 10px;
    height: 52px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
`;

const NowReserve = styled.div`
  button {
    width: 220px;
    background-color: #3c81f6;
    color: white;
  }
`;
const ReserveCall = styled.div`
  button {
    width: 96px;
    background-color: #eff3f5;
  }
`;
