import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "./Content";
export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/">
          <Content />
        </Route>
      </Switch>
    </Router>
  );
}
