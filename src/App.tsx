import "./App.css";
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Dashboard } from "./components/dashboard";
import { Settings } from "./components/settings";

function App() {
  return (
    <Provider theme={teamsTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
