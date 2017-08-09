import React from 'react';
import ReactDOM from 'react-dom';
// NOTE: we import the Hello components here so we can use it and render it to the html file we have
import Hello from './Hello';
import Shape from './Shape';
import Rectangle from './Rectangle';

function App(props) {

  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
  return (
    <div className='App' style={style}>
      <Hello name='Jon'/> {/* NOTE: we can also change the default color from here, we can add bgColor and the color we wants  */}
      <Hello name='Hello' bgColor="salmon" isBye={true}/>
      <Hello name="friend" bgColor="aquamarine"/>
      <Shape bgColor='red'/>
      <Rectangle style={style}/>
    </div>
  )
}

export default App;
