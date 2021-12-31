import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Feedbacks from "./pages/Feedbacks";
import AddFeedback from "./pages/AddFeedback";
import EditFeedback from "./pages/EditFeedback";
import Comments from "./pages/Comments";
import RoadmapList from "./pages/RoadmapList";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  // category
  const [feedbackCategorySelected, setFeedbackCategorySelected] = useState("");

  const getAllFeedbacks = async (category) => {
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/api/feedback/${category}`
      );
      const datos = await request.data;
      console.log(datos);
      setFeedbacks(datos.feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFeedbacks(feedbackCategorySelected);
  }, [feedbackCategorySelected]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Feedbacks
              key={feedbacks._id}
              feedbacks={feedbacks}
              feedbackCategorySelected={feedbackCategorySelected}
              setFeedbackCategorySelected={setFeedbackCategorySelected}
            />
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
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
