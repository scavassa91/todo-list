import React from 'react';
import './Spinner.css';
import { CircularProgress } from '@material-ui/core';

interface MyProps {
  isHide: boolean;
}

function Spinner(props: MyProps): JSX.Element {
  const { isHide } = props;
  return (
    <div className={'spinner' + (isHide ? ' hide' : '')}>
      <CircularProgress className='spin' />
    </div>
  );
}

export default Spinner;