import React from 'react';
import Shape from './Shape'

function BoardRow(props) {
  const {cols, oddColor, evenColor, offset} = props
  const style = {
    display: 'flex',
    flexDirection: 'row'
  }

  const boxColor = (index) => {
    return (index + offset) % 2 === 0
      ? oddColor
      : evenColor
  }

  return (
    <div style={style}>
      {Array.from({
        length: cols
      }, (value, index) => {
        return <Shape bgColor={boxColor(index)}/>;
      })}
    </div>
  )
}

function Chess(props) {
  const {
    cols = 8,
    rows = 8,
    oddColor = 'white',
    evenColor = 'Blue',
    isBoarded = false
  } = props

  return (
    <div>
      {
        Array.from({length:rows}, (value,index)=>{
          return(
            <BoardRow cols ={cols} oddColor={oddColor} evenColor={evenColor} offset={index % 2 } isBoarded={true}/>
          )
        })
      }
    </div>
  )
}

export default Chess;
