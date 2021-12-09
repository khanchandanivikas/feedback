import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Feedbacks from './pages/Feedbacks';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/">
            <Feedbacks />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
