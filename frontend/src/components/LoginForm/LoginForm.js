
import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { clearErrors } from "../../store/errors";
import { login } from "../../store/session";
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector(state => state.errors.login)

  const handleSubmit = (e) => {
    e.stopPropagation()
    e.preventDefault();
    dispatch(clearErrors())
    dispatch(login({ email, password }))
  };

  const demoLogin = (e) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(login({email: "demouser@gmail.com", password: "password"}))
  }
  
  const stopProp = (e) => {
    e.stopPropagation()
  }

  return (
    <form onSubmit={handleSubmit} onClick={stopProp}>
      <h4>Log In</h4>
      <hr/>
      <h3>Welcome to Luxebnb</h3>
      <div id="errors">
        {errors && <i class="fa-solid fa-circle-exclamation" style={{color: "#b34125",}}></i>}
        <span className="errors">      {errors}</span>
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      <br/>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="submit" type="submit">Continue</button>
      <br/>
      <button className="submit" onClick={demoLogin}>Demo Login</button>
    </form>
  );
}

export default LoginForm;
