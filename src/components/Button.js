import React from 'react';
import styled from 'styled-components';

function ButtonBase(props) {
  return <button className={props.className}
    onClick={props.clickHandler}>{props.text}
  </button>;
}

export const Button = styled(ButtonBase)`
  cursor: pointer;
`;