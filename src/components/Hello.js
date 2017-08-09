import React from 'react';
// NOTE: when using JSX you must always import `React` even though you might not use the react object anywhere in your file, because JSX tags are converted to `React.createElement` methods calls
import ReactDOM from 'react-dom';

function Hello (props) {
  //this line below will set the background color to a default color which is skyblue, we can add font family.
  const {
    isBye = false,
    bgColor = 'SkyBlue',
    fontFamily = "Fantasy"
   } = props;

   const greeting = isBye? <em>Bye</em> : <strong>Hello</strong>
  // NOTE: kebab-case will turn into camelCase when we write the css properties.
  const style = {
    // NOTE font family will take the default font from the bgColor we have
    fontFamily: `${fontFamily}`,
    fontWight:500,
    // NOTE: the default color is SkyBlue which is imported from the bg color constent we have
    backgroundColor: bgColor,
    borderRadius: 30,
    width:200,
    paddingLeft:15,
    paddingTop:5,
  }
  return (
    // <h1 style={style} >Hello, {props.name}!</h1>
     <h1 style={style} >
       {greeting}, {props.name}!
     </h1>
  );
}
// NOTE: Using props with JSX;
// '<Hello name='Jon'/>
//NOTE: THe `props` object will recive all "HTML attruibtes" as properties. Meaning that the above `Hello` React element will instantiated with props having the property `name` and its value begin 'Jon'.


export default Hello;
