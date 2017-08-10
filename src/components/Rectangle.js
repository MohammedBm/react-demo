import React from 'react';
import Shape from './Shape';

function Rectangle (props) {
  const {bgColor = 'Orange'} = props;

  const style = {
    backgroundColor: bgColor,
    display:'flex',
    padding: '50px 0',
    width:` ${3 * 150 + 4 *50}`,
    justifyContent:'space-around'

  }

  return (
    <div className='Rectangle' style={style}>
      <Shape />
      <Shape />
      <Shape />
    </div>


  );
}

export default Rectangle;
