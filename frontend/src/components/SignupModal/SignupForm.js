import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../store/errors";
import { signup } from "../../store/session";
import './SignupModal.css'

function SignupFormPage({closeModal}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const backErrors = useSelector(state => state.errors.signup)
  const emailErrors = backErrors?.filter(error => error.includes("Email"))
  const passwordErrors = backErrors?.filter(error => error.includes("Password"))
  const currentUser = useSelector(state => state.session.user)

  useEffect(()=> {
  }, [errors])

  useEffect(()=> {
    if (currentUser) {
      closeModal()
    }
  }, [currentUser])

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
          {emailErrors?.length > 0 && <>
            <i class="fa-solid fa-circle-exclamation" style={{color: "#b34125",}}></i>
            <span className="errors">{emailErrors}</span>
          </>}
        </div>
        <br/>
        <input type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        <br/>
        <div id="errors">
          {passwordErrors?.length > 0 && 
          <>
            <i class="fa-solid fa-circle-exclamation" style={{color: "#b34125",}}></i>
            <span className="errors">{passwordErrors}</span>
          </>}
        </div>
        <br/>
        <button type="submit" className="submit">Sign Up</button>
    </form>
    </>
  );
}

export default SignupFormPage;