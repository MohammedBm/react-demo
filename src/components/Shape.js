import React from 'react';

function Shape (props) {
  const {bgColor = 'Blue'} = props;

  const style = {
    width: '150px',
    height: '150px',
    backgroundColor: bgColor,
    marginleft:10
  }

  return (
    <div className='Shape' style={style} />
  );
}

export default Shape;
