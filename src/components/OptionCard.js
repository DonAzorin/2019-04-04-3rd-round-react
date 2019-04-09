import React from 'react';
import styled from 'styled-components';

const OptionCardStyles = styled.article`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  algin-items: center;
  border: 2px dashed black;
`;

const OptionCard = ({ option }) => {
  return(
  <OptionCardStyles>
    <h2>{option}</h2>
  </OptionCardStyles>
  )
}

export default OptionCard;