import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: yellow;
  color: white;
`;

const Header = ({ title, background }) => {
  return(
    <HeaderStyles>
      <h1>{title}</h1>
    </HeaderStyles>
  )
}

export default Header;