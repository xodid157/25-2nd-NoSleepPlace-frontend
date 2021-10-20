import React, { useState } from 'react';
import styled from 'styled-components';
import DatePick from './DatePick';

export default function Reserve({ category }) {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [ReserveInfo, setReserveInfo] = useState([]);

  const handleCalendar = () => {
    fetch(`/data/ReserveDate.json`)
      .then(res => res.json())
      .then(res => setReserveInfo(res.result[0]));
    return setCalendarOpen(prev => !prev);
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
          {category.price}
          <p>원</p>
        </Won>
        <span>/ 시간</span>
      </Price>
      <ScheduleNPersons>
        <h4>스케줄</h4>
        <button onClick={handleCalendar}>스케줄을 입력하세요</button>
        {isCalendarOpen && <DatePick ReserveInfo={ReserveInfo} />}
        <h4>총인원</h4>
        <button>총인원 수를 입력하세요</button>
      </ScheduleNPersons>

      <ReserveBtn>
        <NowReserve>
          <button>지금 예약 요청하기</button>
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
    color: #acadaf;
  }
`;
const ReserveCall = styled.div`
  button {
    width: 96px;
    background-color: #eff3f5;
  }
`;
