import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import MovieDetails from "./Component/MovieDetails";

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
            <Home title="MOVIE LIBRARY" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
