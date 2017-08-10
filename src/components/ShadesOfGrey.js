import React from 'react';
import Shape from './Shape';

function ShadesOfGrey(props) {
  const { levels = 10 } = props

  console.log(props.levels)

  const greyValues = Array.from({length: levels}, (value, index) => {
    let color = Math.ceil(255/(levels) * index) + 1
    let grey = `rgb(${color}, ${color}, ${color})`
    return <Shape bgColor={grey}/>
  })

  const style = {
    display: 'flex',
    flexDirection: 'row'
  };

  return (
    <div style={style}>
      { greyValues }
    </div>
  )
}

export default ShadesOfGrey
