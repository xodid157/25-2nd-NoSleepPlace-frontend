import React, { useState, useEffect } from 'react';
import PlaceDetail from './PlaceDetail';
import Reservation from '../Reservation/Reservation';

export default function PlaceDetailWrap({ match }) {
  const [isReservePageOpen, setIsReservePageOpen] = useState(true);
  const [category, setCategory] = useState([]);
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

  useEffect(() => {
    fetch(`http://52.79.51.199:8000/places/${match.params.id}`)
      .then(res => res.json())
      .then(res => setCategory(res.result));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          date={reservation}
          end_time={date}
          start_time={month}
          head_count={personNums}
          price={category.price}
          id={category.id}
          name={category.place_name}
        />
      )}
    </div>
  );
}
