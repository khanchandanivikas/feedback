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
import Swal from "sweetalert2";

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
  // comments
  const [feedbackIdSelected, setFeedbackIdSelected] = useState("");
  // the comments of the feedback
  const [feedbackSelected, setFeedbackSelected] = useState([]);
  // feedback
  const [feedbackSelectedInfo, setFeedbackInfoSelected] = useState({});

  // comments
  const getSelectedFeedback = async (id) => {
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/api/comment/feedbackId/${id}`
      );
      const datos = await request.data;
      setFeedbackSelected(datos.comments);
    } catch (error) {
      console.log(error);
    }
  };

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

  const [sort, setSort] = useState("");
  const handleSort = (e) => {
    setSort(e.target.value);
    showSortedFeedbacks(e.target.value);
  };

  const showSortedFeedbacks = (sortType) => {
    switch (sortType) {
      case "mostUpvotes": feedbacks.sort((a,b) => {
        return parseFloat(b.votes) - parseFloat(a.votes);
      })
      break;
      case "leastUpvotes": feedbacks.sort((a,b) => {
        return parseFloat(a.votes) - parseFloat(b.votes);
      })
      break;
      case "mostComments": feedbacks.sort((a,b) => {
        return parseFloat(b.comments.length) - parseFloat(a.comments.length);
      })
      break;
      case "leastComments": feedbacks.sort((a,b) => {
        return parseFloat(a.comments.length) - parseFloat(b.comments.length);
      })
      break;
      default: feedbacks.sort((a,b) => {
        return parseFloat(b.votes) - parseFloat(a.votes);
      });
    }
  }

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
        process.env.REACT_APP_BACKEND_URL + "/api/feedback/status/in-progress"
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
        name: dato.name,
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
      setDatos({});
      localStorage.setItem("datosUsuario", JSON.stringify({}));
      localStorage.setItem("logged", JSON.stringify({ login: false }));
      cogoToast.success("Logout successful");
    }
  };

  // eliminar usuario
  const deleteUser = async () => {
    await axios
      .delete(process.env.REACT_APP_BACKEND_URL + `/api/user/${datos.userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + datos.token,
        },
      })
      .then((response) => {
        console.log(response);
        setLoggedIn(false);
        cogoToast.success("User Deleted");
        localStorage.setItem("datosUsuario", JSON.stringify({}));
        localStorage.setItem("logged", JSON.stringify({ login: false }));
        setDatos({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteFeedback = async () => {
    await axios
      .delete(
        process.env.REACT_APP_BACKEND_URL +
          `/api/feedback/${feedbackIdSelected}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + datos.token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        getAllFeedbacks("");
        getPlannedFeedbacks();
        getProgressFeedbacks();
        getLiveFeedbacks();
        cogoToast.success("Feedback Deleted");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Cannot detete feedback created by other users",
          text: "Unauthorised",
        });
      });
  };

  useEffect(() => {
    getAllFeedbacks(feedbackCategorySelected);
    getPlannedFeedbacks();
    getProgressFeedbacks();
    getLiveFeedbacks();
    const datosRecuperar = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datosRecuperar && datosRecuperar.token) {
      setDatos(datosRecuperar);
      setLoggedIn(true);
    }
    const feedbackInfoRecuperar = JSON.parse(
      localStorage.getItem("feedbackInfo")
    );
    const feedbackId = JSON.parse(localStorage.getItem("feedbackSelectedId"));
    if (feedbackInfoRecuperar && feedbackInfoRecuperar.title) {
      setFeedbackInfoSelected(feedbackInfoRecuperar);
      setFeedbackIdSelected(feedbackId.id);
      getSelectedFeedback(feedbackId.id);
    }
    getSelectedFeedback(feedbackIdSelected);
  }, [feedbackCategorySelected, feedbackIdSelected]);

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
              setFeedbackIdSelected={setFeedbackIdSelected}
              setFeedbackInfoSelected={setFeedbackInfoSelected}
              getAllFeedbacks={getAllFeedbacks}
              getPlannedFeedbacks={getPlannedFeedbacks}
              getProgressFeedbacks={getProgressFeedbacks}
              getLiveFeedbacks={getLiveFeedbacks}
              plannedFeedbacks={plannedFeedbacks}
              progressFeedbacks={progressFeedbacks}
              liveFeedbacks={liveFeedbacks}
              deleteUser={deleteUser}
              sort={sort}
              handleSort={handleSort}
            />
          </Route>
          <Route path="/addFeedback">
            <AddFeedback
              datos={datos}
              loggedIn={loggedIn}
              getAllFeedbacks={getAllFeedbacks}
              getPlannedFeedbacks={getPlannedFeedbacks}
              getProgressFeedbacks={getProgressFeedbacks}
              getLiveFeedbacks={getLiveFeedbacks}
            />
          </Route>
          <Route path="/editFeedback">
            <EditFeedback
              feedbackIdSelected={feedbackIdSelected}
              feedbackSelectedInfo={feedbackSelectedInfo}
              getAllFeedbacks={getAllFeedbacks}
              setFeedbackInfoSelected={setFeedbackInfoSelected}
              getPlannedFeedbacks={getPlannedFeedbacks}
              getProgressFeedbacks={getProgressFeedbacks}
              getLiveFeedbacks={getLiveFeedbacks}
              deleteFeedback={deleteFeedback}
            />
          </Route>
          <Route path="/comments">
            <Comments
              loggedIn={loggedIn}
              datos={datos}
              key={feedbackSelected._id}
              feedbackSelected={feedbackSelected}
              feedbackSelectedInfo={feedbackSelectedInfo}
              feedbackIdSelected={feedbackIdSelected}
              getSelectedFeedback={getSelectedFeedback}
              getAllFeedbacks={getAllFeedbacks}
              getPlannedFeedbacks={getPlannedFeedbacks}
              getProgressFeedbacks={getProgressFeedbacks}
              getLiveFeedbacks={getLiveFeedbacks}
              setFeedbackInfoSelected={setFeedbackInfoSelected}
            />
          </Route>
          <Route path="/roadmap">
            <RoadmapList
              key={plannedFeedbacks._id}
              plannedFeedbacks={plannedFeedbacks}
              progressFeedbacks={progressFeedbacks}
              liveFeedbacks={liveFeedbacks}
              setFeedbackIdSelected={setFeedbackIdSelected}
              setFeedbackInfoSelected={setFeedbackInfoSelected}
              datos={datos}
              loggedIn={loggedIn}
              getPlannedFeedbacks={getPlannedFeedbacks}
              getProgressFeedbacks={getProgressFeedbacks}
              getLiveFeedbacks={getLiveFeedbacks}
              getAllFeedbacks={getAllFeedbacks}
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
