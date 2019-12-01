import React from 'react';
import styled from 'styled-components';

export function HeaderBase(props) {
  return (
    <header className={props.className}>
      <h1>Welcome {props.name}</h1>
    </header>
  );
}

export const Header = styled(HeaderBase)`
`;