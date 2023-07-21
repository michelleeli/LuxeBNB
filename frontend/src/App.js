import LoginForm from "./components/LoginForm";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
    <h1>Hello from App</h1>
    <Navigation/>
    <Switch>
    <Route path="/login" >
      <LoginForm />
    </Route>
    <Route path="/signup">
        <SignupForm />
      </Route>
  </Switch>
  </>
  );
}

export default App;
