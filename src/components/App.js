import React from 'react';
import ReactDOM from 'react-dom';
// NOTE: we import the Hello components here so we can use it and render it to the html file we have
import Hello from './Hello';
import Shape from './Shape';
import Greetings from './Greetings';
import Rectangle from './Rectangle';
import ShadesOfGrey from './ShadesOfGrey';
import Fa from './Fa';
import Chess from './Chess';

function App(props) {

  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
  return (
    <div className='App' style={style}>
      {/*<Hello name='Jon'/> */}{/* NOTE: we can also change the default color from here, we can add bgColor and the color we wants  */}
      {/*<Hello name='Hello' bgColor="salmon" isBye={true}/>*/}   {/*NOTE: we add isBye and gave it the value true, now it will show bye instead of hello. Remmber is hello set to default false in the `Hello.js` file so it always shows hello.*/}
      {/* <Hello name="friend" bgColor="aquamarine"/> */}
      {/* <Shape bgColor='red'/> */}
      {/* <Rectangle style={style}/> */}
      {/* <Greetings names={['Jo', 'Dave','Lana','Dane','Tom']}/> */}
      {/* <Shape bgColor='red'/> */}
      {/* <ShadesOfGrey level = {10} /> */}
      <Fa kind="plane" color='red' size='4x'spin={true} />
      <Fa kind="cog" color='SkyBlue'size="4x" spin={true} />
      <Fa kind="spinner" color="green" size="2x" spin={true} />
      <Chess />
    </div>
  )
}

export default App;
