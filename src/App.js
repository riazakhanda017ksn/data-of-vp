import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvent from './component/AddEvent/AddEvent';

function App() {
  return (
<Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/addEvent">AddEvent</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/addEvent">
          <AddEvent/>
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
