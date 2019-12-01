import React from 'react';
import { Button } from './Button';

export function Timer(props) {
  return (
    <div>
      <p>Time {props.time}</p>
      <Button text={'Add time'} />
      <Button text={'Start!'} />
    </div>
  );
}
