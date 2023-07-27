import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import ListingIndexPage from "./components/ListingIndex";
import ListingShowPage from "./components/ListingShow";
import ReservationIndexPage from "./components/ReservationIndex";

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
      <Route exact path="/reservations">
        <ReservationIndexPage/>
      </Route>
      </Switch>
  </>
  );
}

export default App;
