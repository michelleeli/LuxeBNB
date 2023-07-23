import LoginForm from "./components/LoginForm";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
    <Navigation/>
    <Switch>
    {/* <Route path="/login" >
      <LoginForm />
    </Route> */}
    {/* <Route path="/signup">
        <SignupForm />
      </Route> */}
  </Switch>
  </>
  );
}

export default App;
