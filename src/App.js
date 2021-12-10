import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Feedbacks from './pages/Feedbacks';
import AddFeedback from './pages/AddFeedback';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/">
            <Feedbacks />
          </Route>
          <Route path="/addFeedback">
            <AddFeedback />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
