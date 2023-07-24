import LoginForm from "./components/LoginForm";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import ListingIndexPage
 from "./components/ListingIndex";
function App() {
  return (
    <>
    <Navigation/>
    <Switch>
    <ListingIndexPage/>
    {/* <Route path="/" >
      <ListingIndexPage />
    </Route> */}

  </Switch>
  </>
  );
}

export default App;
