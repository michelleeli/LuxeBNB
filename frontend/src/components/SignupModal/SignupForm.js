import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../store/session";
import './SignupModal.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(signup({email, username, password}))
    // if (password === confirmPassword) {
    //   setErrors([]);
    //   return dispatch(signup({ email, username, password }))
    //     .catch(async (res) => {
    //     let data;
    //     try {
    //       data = await res.clone().json();
    //     }
    //     catch {
    //       data = await res.text();
    //     }
    //     if (data?.errors) setErrors(data.errors);
    //     else if (data) setErrors([data]);
    //     else setErrors([res.statusText]);
    //   });
    // }
    // return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const stopProp = (e) => {
    e.stopPropagation()
  }
  
  return (
    <form className="signupForm" onSubmit={handleSubmit} onClick={stopProp}>
      <h4>Create an Account</h4>
      <hr/>
      <h3>Welcome to Luxebnb</h3>
      <ul className="errors">
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
        <input type="text" value={email} placeholder="Email" id ="email" onChange={(e) => setEmail(e.target.value)} required/>
        <br/>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <br/>
        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        <br/>
        <input type="password" value={confirmPassword} id="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required/>
        <br/>
        <button type="submit" className="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;