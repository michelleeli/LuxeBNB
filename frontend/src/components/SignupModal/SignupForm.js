import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { clearErrors, setSignupErrors } from "../../store/errors";
import { signup } from "../../store/session";
import LoginFormModal from "../LoginForm";
import './SignupModal.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const backErrors = useSelector(state => state.errors.signup)

  useEffect(()=> {
  }, [errors])

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setErrors([])
    dispatch(clearErrors())
    dispatch(signup({email, first_name:firstName, last_name:lastName, password})) 

  };

  const stopProp = (e) => {
    e.stopPropagation()
  }
  
  return (
    <>
    <form className="signupForm" onSubmit={handleSubmit} onClick={stopProp}>
      <h4>Create an Account</h4>
      <hr/>
      <h3>Welcome to Luxebnb</h3>
        <input type="text" id="firstName" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <br/>
        <input type="text" id="lastName" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <br/>
        <br/>
        <input type="text" value={email} placeholder="Email" id ="email" onChange={(e) => setEmail(e.target.value)} required/>
        <br/>
        <div id="errors">
        {backErrors && <i class="fa-solid fa-circle-exclamation" style={{color: "#b34125",}}></i>}
        <span className="errors"> {backErrors && backErrors.map(error => <span>{error}</span>)} </span>
        </div>
        <br/>
        <input type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        <br/>
        <button type="submit" className="submit">Sign Up</button>
    </form>
    </>
  );
}

export default SignupFormPage;