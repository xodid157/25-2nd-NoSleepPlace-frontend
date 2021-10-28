import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import format from 'date-fns/format';

const initialTime = setHours(setMinutes(new Date(), 0), '');
const initialEndTime = setHours(setMinutes(new Date(), 0), '');

const DatePick = ({
  ReserveInfo,
  handleReservation,
  handleMonth,
  handleDate,
  month,
  handleCalendar,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(initialTime);
  const [endTime, setEndTime] = useState(initialEndTime);

  const formatDateToArr = ReserveInfo.map(reservation => {
    const DATE_FORMAT = 'yyyy,MM,dd,HH';

    const [year, month, day] = format(
      new Date(reservation.start_time),
      DATE_FORMAT
    ).split(',');

    return [year, month, day];
  });

  console.log('for', formatDateToArr);

  const filterPassedTime = time => {
    const currentDate = new Date();
    const timeTableDate = new Date(time);
    const isPassedTimeByNow = currentDate.getTime() < timeTableDate.getTime();
    // const aa = formatDateToArr.every(formatDate => {
    const [year, month, day, datetime] = formatDateToArr;
    const reserveTime = new Date(year, month - 1, day, datetime); // 유저가 예약한 시간
    const isAlreadyReserved = timeTableDate.getTime() !== reserveTime.getTime();

    return isPassedTimeByNow && isAlreadyReserved;
  };

  // const [year, month, day] = formatDateToArr[0];
  // const reserveTime = new Date(year, month - 1, day); // 유저가 예약한 시간
  // const isAlreadyReserved = timeTableDate.getTime() !== reserveTime.getTime();
  // console.log('time', time);
  // console.log('reservedTime', reserveTime);
  // console.log('aa', aa);
  // console.log('isAlreadyReserved', isAlreadyReserved);
  // console.log('ispass', isPassedTimeByNow);
  // console.log(currentDate);
  // return isPassedTimeByNow && isAlreadyReserved;
  // isAlreadyReserve -> true ->
  // isAlreadyReserve -> false ->
  // };

  const reservationTime = {
    reservation: [
      format(startDate, 'yyyy,MM,dd'),
      format(startTime, 'HH'),
      format(endTime, 'HH'),
    ],
  };

  handleReservation(reservationTime.reservation[0]);
  handleMonth(reservationTime.reservation[1]);
  handleDate(reservationTime.reservation[2]);
  // console.log(reservationTime.reservation[0]);
  return (
    <CalendarWrap>
      <ReserveCalendar
        locale={ko}
        selected={startDate}
        onChange={setStartDate}
        inline
        minDate={new Date()}
      />
      <TimeWrap>
        <StartEnd>
          <p>시작 시간</p>

          <Time
            selected={startTime}
            onChange={time => setStartTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h aa"
            filterTime={filterPassedTime}
          />
          <p>종료 시간</p>
          <Time
            selected={endTime}
            onChange={time => setEndTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h aa"
            filterTime={filterPassedTime}
          />
        </StartEnd>
        <Completed>
          <button onClick={handleCalendar}>완료</button>
        </Completed>
      </TimeWrap>
    </CalendarWrap>
  );
};

export default DatePick;

const CalendarWrap = styled.div`
  display: flex;
  position: absolute;
  padding: 17px 0 0 25px;
  left: -34px;
  width: 400px;
  height: 300px;
  border: 1px solid #cccfd1;
  border-top: none;
  background-color: white;
  z-index: 9;
`;

const ReserveCalendar = styled(DatePicker)`
  margin: 10px 0 0 10px;
`;

const TimeWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
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
