import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Feedbacks from './pages/Feedbacks';
import AddFeedback from './pages/AddFeedback';
import EditFeedback from './pages/EditFeedback';
import Comments from './pages/Comments';
import RoadmapList from './pages/RoadmapList';

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
          <Route path="/editFeedback">
            <EditFeedback />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/roadmap">
            <RoadmapList />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
