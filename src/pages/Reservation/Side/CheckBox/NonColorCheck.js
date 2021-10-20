import React from 'react';
import styled from 'styled-components';

export default function NonColorCheck() {
  return (
    <Check>
      <i className="far fa-check-circle" />
    </Check>
  );
}

const Check = styled.div`
  color: #c9cdd2;
  font-size: 24px;
`;
