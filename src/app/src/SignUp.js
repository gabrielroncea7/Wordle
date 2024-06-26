import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//ENCRYPT PASSWORD FROM VIEW
import { sha256 } from 'js-sha256';
import Form from './components/form/Form';
import signUp from './services/accountServices';
import Header from './components/header/Header';


function SignUp() {
//empty strings to be set
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//INITIALIZE USE HISTORY FOR NAVIGATION
  const history = useNavigate();

//update values
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
//avoid empty form (no data to create account)
  	event.preventDefault();
	
	//ENCRYPT PASSWORD
	const hashedPassword = sha256(password);

  	const data = { username, email, password: password };
	  signUp(data)
		.then(response => {
		if (response.status == 200) {
		  //get username from signup form
		  const user = { username: username };
	          history('/game');
	        } else {
		  //ERROR IN SIGNUP
	          history('/errorsignup');
	          }
	        })
  };

const elements = [
    { type: 'input', name: 'username', placeholder: 'Username', value: username, onchange: handleUsernameChange },
    { type: 'input', name: 'email', placeholder: 'Email', value: email, onchange: handleEmailChange },
    { type: 'input', name: 'password', placeholder: 'Password', value: password, onchange: handlePasswordChange }
  ];
const button = { type: 'submit', text: 'Sign Up' };
	
  return (
    <div>
	<Header />
	<h2>Create an Account</h2>
	<Form elements={elements} button={button} onSubmit={handleSubmit} />
	<p>Do you already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUp;
