import React from 'react';

function Fa(props) {
  const {kind, size, spin, color} = props

  // The above is the same as this...
  // const kind = props.kind
  // const size = props.size
  // const spin = props.spin
  // const color = props.color

  const fontAwesome = function() {
    let iconKind, iconSize, iconSpin

    if (kind) { iconKind = `fa-${kind}`}
    if (size) { iconSize = `fa-${size}`}
    if (spin) { iconSpin = `fa-spin`}

    return `fa ${iconKind} ${iconSize} ${iconSpin}`
  }

  const style = {
    color: color
  }

  return (
    <i className={fontAwesome()} style={style}/>
  )
}

export default Fa;
