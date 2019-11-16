import React from 'react';

export function Header(props){
  return (
    <header>
      <h1>
        Welcome {props.name}!
      </h1>
    </header>
  )
}