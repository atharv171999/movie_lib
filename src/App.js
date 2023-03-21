import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Component/Navbar";
import MovieDetails from "./Component/MovieDetails";
import Pagination from "./Component/Pagination";
// import Error from "./Component/Error";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/details">
            <MovieDetails />
          </Route>
          <Route path="/profile">
            <div>This is me</div>
          </Route>
          <Route path="/">
            <NavBar title="MOVIE LIBRARY" />
          </Route>
          {/* <Route path="/error">
            <Error />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
