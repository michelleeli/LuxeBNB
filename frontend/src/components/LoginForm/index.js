import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Redirect } from "react-router-dom";

export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user);

    if (currentUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password }))
      }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
              {/* {errors.map(error => <li key={error}>{error}</li>)} */}
            </ul>
            <h1>Login</h1>
            <label>Username:
            <input type="text" value={username} name="username" onChange={(e)=> setUsername(e.target.value)}/>
            </label>
            <label>Password
            <input type="password" value={password} name="password" onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <input type="submit" value="Login"/>
        </form>
    )
}
    