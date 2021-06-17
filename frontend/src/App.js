import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import {PrivateRoute, PublicRoute} from "./components/Route";
import NavbarHeader from "./components/Navbar";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <NavbarHeader />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
