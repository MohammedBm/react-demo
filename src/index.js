import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


function Hello(props){
  return(
    <h1>Hello, World!</h1>
  )
}


ReactDOM.render(
  <Hello/>, document.getElementById('root'));
registerServiceWorker();
