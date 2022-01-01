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
  // category
  const [feedbackCategorySelected, setFeedbackCategorySelected] = useState("");
  // datos  a la hora del login y alta userId y token
  const [datos, setDatos] = useState({});
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

  // login and signup
  const gestionarAcceso = (dato) => {
    setDatos(dato);
    // setToken(dato.token);
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
    // setToken(null);
    setDatos(null);
    localStorage.setItem("datosUsuario", JSON.stringify({}));
    cogoToast.success("Logout successful");
  };

  useEffect(() => {
    getAllFeedbacks(feedbackCategorySelected);
    const datosRecuperar = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datosRecuperar && datosRecuperar.token) {
      // setToken(datosRecuperar.token);
      setDatos(datosRecuperar);
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
              gestionarLogout={gestionarLogout}
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
