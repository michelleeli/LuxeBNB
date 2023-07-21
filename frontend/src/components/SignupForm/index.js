import { useDispatch } from "react-redux"
import { useState } from "react"
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { signup } from "../../store/session";



export default function SignupForm() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [confirmPassword, setConfirmPassword] = useState("")
    const sessionUser = useSelector(state => state.session.user);
    
    if (sessionUser) return <Redirect to="/" />;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            return dispatch(signup({ email, username, password }))
        };
        if (!sessionUser) {
            if (password !== confirmPassword) {
                setErrors('Passwords must match')
                console.log(errors)
            } 
            if (username.length < 3 ) {
                setErrors([...errors, 'Username must be at least 3 characters'])
                console.log(errors)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>   
            {/* <ul>
                {errors.map(error => <li>{error}</li>)}
            </ul> */}
            <label>Email:
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </label>
            <label>Username:
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </label>
            <label>Password:
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <label>Confirm password:
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
            </label>
            <input type="submit" value="Sign Up"/>
        </form>
    )
}