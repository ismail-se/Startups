import "../style/App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Eduction from "./Eduction";
import Community from "./Community";
import Library from "./Library";
import Products from "./Products";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/education">
            <Header />
            <Eduction />
          </Route>
          <Route path="/community">
            <Header />
            <Community />
          </Route>
          <Route path="/library">
            <Header />
            <Library />
          </Route>
          <Route path="/products">
            <Header />
            <Products />
          </Route>
          <Route path="/">
            <Header />
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
