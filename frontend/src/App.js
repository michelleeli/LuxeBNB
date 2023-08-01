import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import ListingIndexPage from "./components/ListingIndex";
import ListingShowPage from "./components/ListingShow";
import ReservationIndexPage from "./components/ReservationIndex";
import FilteredRender from "./components/FilterMenu.js/Filtered-render";

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
      <Route exact path="/categories/:category">
        <FilteredRender />
      </Route>
      </Switch>
  </>
  );
}

export default App;
