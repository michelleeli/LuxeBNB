
import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { login } from "../../store/session";
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector(state => state.errors.login)

  const handleSubmit = (e) => {
    e.stopPropagation()
    e.preventDefault();
    dispatch(login({ username, password }))
  };

  const demoLogin = (e) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(login({username: "demouser", password: "password"}))
  }
  
  const stopProp = (e) => {
    e.stopPropagation()
  }

  return (
    <form onSubmit={handleSubmit} onClick={stopProp}>
      <h4>Log In</h4>
      <hr/>
      <h3>Welcome to Luxebnb</h3>
      <p className="errors">{errors}</p>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
