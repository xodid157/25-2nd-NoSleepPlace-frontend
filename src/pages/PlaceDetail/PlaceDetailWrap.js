import React, { useState, useEffect } from 'react';
import PlaceDetail from './PlaceDetail';
import Reservation from '../Reservation/Reservation';

export default function PlaceDetailWrap() {
  const [isReservePageOpen, setIsReservePageOpen] = useState(true);
  const [category, setCategory] = useState(0);
  const [reservation, setReservation] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [personPlus, setPersonPlus] = useState(0);
  const [personMinus, setPersonMinus] = useState(0);
  const personNums = personPlus + personMinus;

  const handleReservation = e => {
    setReservation(e);
  };
  const handleDate = e => {
    setDate(e);
  };
  const handleMonth = e => {
    setMonth(e);
  };
  const handlePath = () => {
    setIsReservePageOpen(!isReservePageOpen);
  };
  const handlePersonPlus = () => {
    setPersonPlus(personPlus + 1);
  };
  const handlePersonMinus = () => {
    if (personPlus + personMinus > 1) {
      setPersonMinus(personMinus - 1);
    }
  };

  // useEffect(() => {
  //   fetch(`http://10.58.1.10:8000/places/${match.params.id}`)
  //     .then(res => res.json())
  //     .then(res => setCategory(res.result));
  // }, []);

  useEffect(() => {
    fetch(`/data/placeDetail.json`)
      .then(res => res.json())
      .then(res => setCategory(res.result[0]));
  }, []);

  return (
    <div>
      {isReservePageOpen === true ? (
        <PlaceDetail
          category={category}
          handleReservation={handleReservation}
          handleDate={handleDate}
          handleMonth={handleMonth}
          reservation={reservation}
          date={date}
          month={month}
          handlePath={handlePath}
          handlePersonMinus={handlePersonMinus}
          handlePersonPlus={handlePersonPlus}
          personPlus={personPlus}
          personMinus={personMinus}
          personNums={personNums}
        />
      ) : (
        <Reservation
          reservation={reservation}
          month={month}
          date={date}
          personNums={personNums}
        />
      )}
    </div>
  );
}
