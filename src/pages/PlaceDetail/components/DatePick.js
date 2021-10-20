import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

const DatePick = ReserveInfo => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), '')
  );

  const filterPassedTime = time => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  // const happyNewYear = new Date();
  // const year = happyNewYear.getFullYear();
  // const month = happyNewYear.getMonth() + 1;
  // const date = happyNewYear.getDate();
  // const hour = happyNewYear.getHours();
  // const minutes = happyNewYear.getMinutes();

  // const ReserveInfo = `${year}-${month >= 10 ? month : '0' + month}-${
  //   date >= 10 ? date : '0' + date
  // } ${hour}:${minutes}`;

  // console.log(ReserveInfo);

  return (
    <CalendarWrap>
      <ReserveCalendar
        locale={ko}
        selected={startDate}
        onChange={date => setStartDate(date)}
        inline
        minDate={new Date()}
      />
      <TimeWrap>
        <StartEnd>
          <p>시작 시간</p>
          <Time
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h aa"
            filterTime={filterPassedTime}
          />
          <p>종료 시간</p>
          <Time
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h aa"
            filterTime={filterPassedTime}
          />
        </StartEnd>
        <Completed>
          <button>완료</button>
        </Completed>
      </TimeWrap>
    </CalendarWrap>
  );
};

export default DatePick;

const CalendarWrap = styled.div`
  display: flex;
  position: absolute;
  padding: 17px 0 0 17px;
  /* right: 207px; */
  /* width: 539px; */
  /* height: 523px; */
  right: 0;
  width: 360px;
  height: 300px;
  border: 1px solid red;
  border-radius: 8px;
  background-color: white;
  z-index: 9;
`;

const ReserveCalendar = styled(DatePicker)`
  margin: 10px 0 0 10px;
`;

const TimeWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const StartEnd = styled.div`
  margin-top: 10px;
  margin-left: 10px;

  p {
    margin-top: 10px;
    margin-bottom: 3px;
  }
`;

const Time = styled(DatePicker)`
  width: 70px;
`;

const Completed = styled.div`
  margin-top: 110px;
  width: 70px;
  height: 40px;

  border-radius: 9px;

  button {
    margin-left: 10px;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    background-color: #3c81f6;
    color: white;
  }
`;
