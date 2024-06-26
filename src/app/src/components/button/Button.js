//Button Component
//Parameters:
// - asks for internal text
// - asks action to do


import React from 'react';
import "./Button.css";

function Button(props) {
//extracts the vaue of the text and the onClick action of the button
  const { text, onClick, type } = props;

  return (
    <button className='button' onClick={onClick} type={type}>{text}</button>
  );
}

export default Button;




//1. Handle function does action
//2. Button gives the text and the onClick action
//APP EXAMPLE
//import React from 'react';
//import Button from './Button';
//function App() {
//  const handleClick = () => {
//    console.log('Button Clicked!');
//  };

//  return (
//    <div>
//      <h1>Button Component</h1>
//      <Button text="Haz clic aquí" onClick={handleClick} />
//    </div>
//  );
//}
//export default App;
