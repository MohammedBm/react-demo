import React from 'react';
import Hello from './Hello'

//props.names = ['Jo', 'Dave','Lana','Dane','Tom']
function Greetings(props) {
  const {
    names = []
  } = props;
  //NOTE to optimize rendergin array fo components, give each component in the list the key prop which should be given a unique key identifer. This can be the `index` of the array or much better yet the id of a row in database if working with data
  const helloElement = names.map((name, index) => <Hello
     key={index} name={name}
   />)
  return (
    <div className='Greetings'>{helloElement}</div>
  );
}

export default Greetings
