import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import ListingIndexPage from "./components/ListingIndex";
import ListingShowPage from "./components/ListingShow";

function App() {
  return (
    <>
    <Navigation/>
    <Switch>
    <Route exact path="/">
      <ListingIndexPage/>
    </Route>
    <Route path="/listings/:listingId">
       <ListingShowPage />
    </Route>

  </Switch>
  </>
  );
}

export default App;
