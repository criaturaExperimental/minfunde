import React from 'react';
import styled from 'styled-components';

export function ProgressBarBase(props) {
  const percentage = props.percentage || 0;
  const MAX = 200;
  const mapProgress = MAX * (percentage / 100);

  return (
    <svg width="200" height="20" data-value="40">
      <path className="bg" stroke="#ccc" d="M0 10, 200 10"/>
      <path className="meter"
        stroke="#09c" d="M0 10, 200 10"
        strokeDasharray={`${mapProgress} ${MAX}`}
        strokeDashoffset={'0'}
        strokeWidth={'5'}
      />
    </svg>
  );
}

export const ProgressBar = styled(ProgressBarBase)`
`;