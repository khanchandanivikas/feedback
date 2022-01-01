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
import cogoToast from "cogo-toast";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [plannedFeedbacks, setPlannedFeedbacks] = useState([]);
  const [progressFeedbacks, setProgressFeedbacks] = useState([]);
  const [liveFeedbacks, setLiveFeedbacks] = useState([]);
  // category
  const [feedbackCategorySelected, setFeedbackCategorySelected] = useState("");
  // datos  a la hora del login y alta userId y token
  const [datos, setDatos] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // token
  // const [token, setToken] = useState("");

  const getAllFeedbacks = async (category) => {
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/api/feedback/${category}`
      );
      const datos = await request.data;
      setFeedbacks(datos.feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlannedFeedbacks = async () => {
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/feedback/status/planned"
      );
      const datos = await request.data;
      setPlannedFeedbacks(datos.feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  const getProgressFeedbacks = async () => {
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/feedback/status/progress"
      );
      const datos = await request.data;
      setProgressFeedbacks(datos.feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  const getLiveFeedbacks = async () => {
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/feedback/status/live"
      );
      const datos = await request.data;
      setLiveFeedbacks(datos.feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  // login and signup
  const gestionarAcceso = (dato) => {
    setDatos(dato);
    // setToken(dato.token);
    setLoggedIn(true);
    localStorage.setItem(
      "logged",
      JSON.stringify({
        login: true,
      })
    );
    localStorage.setItem(
      "datosUsuario",
      JSON.stringify({
        userId: dato.userId,
        userName: dato.userName,
        email: dato.email,
        avatar: dato.avatar,
        token: dato.token,
      })
    );
  };

  // logout usuario
  const gestionarLogout = () => {
    if (datos.token) {
      setLoggedIn(false);
      // setToken(null);
      setDatos(null);
      localStorage.setItem("datosUsuario", JSON.stringify({}));
      localStorage.setItem("logged", JSON.stringify({ login: false }));
      cogoToast.success("Logout successful");
    }
  };

  useEffect(() => {
    getAllFeedbacks(feedbackCategorySelected);
    getPlannedFeedbacks();
    getProgressFeedbacks();
    getLiveFeedbacks();
    const datosRecuperar = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datosRecuperar && datosRecuperar.token) {
      // setToken(datosRecuperar.token);
      setDatos(datosRecuperar);
      setLoggedIn(true);
    }
  }, [feedbackCategorySelected]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Feedbacks
              key={feedbacks._id}
              feedbacks={feedbacks}
              datos={datos}
              loggedIn={loggedIn}
              gestionarLogout={gestionarLogout}
              feedbackCategorySelected={feedbackCategorySelected}
              setFeedbackCategorySelected={setFeedbackCategorySelected}
            />
          </Route>
          <Route path="/addFeedback">
            <AddFeedback
            datos={datos}
              loggedIn={loggedIn}
              getAllFeedbacks={getAllFeedbacks}
            />
          </Route>
          <Route path="/editFeedback">
            <EditFeedback />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/roadmap">
            <RoadmapList
              plannedFeedbacks={plannedFeedbacks}
              progressFeedbacks={progressFeedbacks}
              liveFeedbacks={liveFeedbacks}
            />
          </Route>
          <Route path="/signin">
            <Signin gestionarAcceso={gestionarAcceso} />
          </Route>
          <Route path="/signup">
            <Signup gestionarAcceso={gestionarAcceso} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
