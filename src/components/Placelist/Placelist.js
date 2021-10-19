import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import PlacelistDetail from '../PlacelistDetail/PlacelistDetail';

function Placelist({ history }) {
  const [placelist, setPlacelist] = useState([]);

  useEffect(() => {
    fetch('/data/placelist.json')
      .then(res => res.json())
      .then(result => setPlacelist(result.product));
  }, []);

  const handleGotoSecond = ele => {
    history.push(`/places?menu=${ele}`);
  };

  return (
    <Wrap>
      {placelist?.length && (
        <PlacelistDetail
          handleGotoSecond={handleGotoSecond}
          placelist={placelist}
        />
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-bottom: 150px;
`;

export default Placelist;
