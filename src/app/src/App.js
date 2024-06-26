import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import LogOut from './LogOut';
import Game from './Game';
import Profile from './Profile';
import ErrorSignIn from './ErrorSignIn';
import ErrorSignUp from './ErrorSignUp';
import Forbidden from './Forbidden';
import sessionServices from './services/sessionServices';


function App() {
		const hide={
			color:"white",
		};
     
      {/* login check
          //{sessionServices.getUsername().length > 0 ? <Route exact path="/game" element={<Game/>} /> : history(/forbidden) }
          //{sessionServices.getUsername().length > 0 ? <Route exact path="/logout" element={<LogOut/>} /> : history(/forbidden) }
          //{sessionServices.getUsername().length > 0 ? <Route exact path="/profile" element={<Profile/>} /> : history(/forbidden) }
          //{sessionServices.getUsername().length > 0 ? <Route exact path="/errorsignin" element={<ErrorSignIn/>} /> : history(/forbidden) }
          //{sessionServices.getUsername().length > 0 ? <Route exact path="/errorsignup" element={<ErrorSignUp/>} /> : history(/forbidden) }*/}
          
          
  return (
    <>
      <Router>
      	<p style={hide}> const history = useNavigate()</p>
      	<>
        <Routes>
        	<>
          <Route index element={<Navigate to="/signup" replace/>}/>
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/forbidden" element={<Forbidden/>} />
          	</>
      // no login check
      		<>
            <Route exact path="/game" element={<Game/>} />
            <Route exact path="/logout" element={<LogOut/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/errorsignin" element={<ErrorSignIn/>} />
            <Route exact path="/errorsignup" element={<ErrorSignUp/>} />
            	</>
      
        </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
