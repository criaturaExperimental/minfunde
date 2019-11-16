import React from 'react';
import { Button } from './Button';
import { timer } from '../domain/timer';

export function Timer(props) {
  return (
    <div>
      <p>Time {props.time}</p>
      <Button text={'Start'} clickHandler={()=> timer.startTime()} />
    </div>
  )
}