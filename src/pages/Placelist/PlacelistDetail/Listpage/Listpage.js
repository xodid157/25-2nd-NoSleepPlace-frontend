import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

function Listpage() {
  const [result, setResult] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(`http://52.79.51.199:8000/places${location.search}`)
      .then(res => res.json())
      .then(data => setResult(data.result));
  }, [location]);
  return (
    <Container>
      {result &&
        result.map(
          (
            { place_name, price, category, capacity, city, parking, url, id },
            idx
          ) => {
            return (
              <Card key={idx}>
                <Link to={`/placeDetail/${id}`}>
                  <img alt="" src={url} />
                </Link>
                <Placeinfo>
                  <Left>
                    {category}-{city}
                  </Left>
                  <Right>
                    <Person>
                      <i className="fad fa-user" />
                      {capacity[3]}
                    </Person>
                    <Car>
                      <i className="far fa-car" />
                      {parking[3]}
                    </Car>
                  </Right>
                </Placeinfo>
                <Placename>{place_name}</Placename>
                <Price>{price.toLocaleString()}원</Price>
              </Card>
            );
          }
        )}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 125px;
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 273px;
  margin-right: 25px;
  padding-top: 30px;

  img {
    object-fit: cover;
    width: 100%;
    height: 149px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 3px;
    cursor: pointer;
  }
`;

const Placeinfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  margin-top: 3px;
  font-size: 8px;
`;

const Right = styled.div`
  display: flex;
  font-size: 8px;
`;

const Placename = styled.div`
  font-size: 1px;
  margin: 10px 0;
`;

const Price = styled.div``;

const Person = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  border-radius: 1px;
  height: 13px;
  width: 25px;

  i {
    padding-right: 5px;
  }
`;

const Car = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  border-radius: 1px;
  margin-left: 3px;
  width: 25px;
  height: 13px;

  i {
    padding-right: 5px;
  }
`;

export default Listpage;
