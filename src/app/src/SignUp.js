import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//ENCRYPT PASSWORD FROM VIEW
//import { sha256 } from 'js-sha256';
import Form from './components/form/Form';


function SignUp() {
//empty strings to be set
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//update values
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
//avoid empty form (no data to create account)
  	event.preventDefault();
	
	//ENCRYPT PASSWORD
	//const hashedPassword = sha256(password);

  	const data = { username, email, password }; //if want encrypted password, password: hashedPassword
	try {
		//returns account data to account manager to create account
    		const response = await fetch('/accountManager', {
			method: 'POST',
      			headers: {
        			'Content-Type': 'application/json'
      			},
      			body: JSON.stringify(data)
    		});

    		if (response.ok) {
			//SUCCESS MESSAGE
      			//console.log('Data sent successfully');
    		} else {
			//ERROR MESSAGE
      			//console.error('Error:', response.statusText);
    		}
  	} catch (error) {
		//ERROR MESSAGE
    		//console.error('Error:', error);
  	}
  };

const Elements = [
    { Type: 'input', Name: 'username', Placeholder: 'Username', Value: username, OnChange: handleUsernameChange },
    { Type: 'input', Name: 'email', Placeholder: 'Email', Value: email, OnChange: handleEmailChange },
    { Type: 'input', Name: 'password', Placeholder: 'Password', Value: password, OnChange: handlePasswordChange }
  ];
const Button = { type: 'submit', text: 'Sign Up' };
	
  return (
    <div>
      <h2>Create an Account</h2>
      <Form Elements={Elements} button={Button} onSubmit={handleSubmit} />
      <p>Do you already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
};
export default SignUp;