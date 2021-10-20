import React from 'react';
import styled from 'styled-components';

export default function ColorCheck() {
  return (
    <Check>
      <i className="far fa-check-circle" />
    </Check>
  );
}

const Check = styled.div`
  color: #246ff7;
  font-size: 24px;
`;
