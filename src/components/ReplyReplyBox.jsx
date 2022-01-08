import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import cogoToast from "cogo-toast";
import Swal from "sweetalert2";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/replyBox.css";

const ReplyReplyBox = (props) => {
  let history = useHistory();
  const reply = props.reply;
  const comment = props.comment;
  const datos = props.datos;
  const loggedIn = props.loggedIn;
  const toggleReplyBox = props.toggleReplyBox;
  const getSelectedFeedback = props.getSelectedFeedback;
  const [details, setDetails] = useState("");
  const handleDetails = (e) => {
    setDetails(e.target.value);
  };
  // create comment reply
  const createReplyReply = async (e) => {
    e.preventDefault();
    if (loggedIn) {
      await axios
        .post(process.env.REACT_APP_BACKEND_URL + "/api/reply/", {
          details: details,
          inResponseToUser: reply.creatorUserName,
          creator: datos.userId,
          creatorName: datos.name,
          creatorUserName: datos.userName,
          creatorAvatar: datos.avatar,
          comment_ref: reply.comment_ref,
        })
        .then((response) => {
          console.log(response);
          toggleReplyBox(null);
          setDetails("");
          getSelectedFeedback(comment.feedback_ref._id);
          cogoToast.success("Reply Created");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Not Logged",
        text: "You must be logged in to post a reply",
        confirmButtonColor: "#4661e6",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/signin");
        }
      });
    }
  };
  const animation = {
    hidden: { scaleY: 0, transformOrigin: "top" },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="reply-form-container"
    >
      <form action="" onSubmit={createReplyReply} className="reply-form">
        <textarea
          cols="30"
          rows="10"
          value={details}
          onChange={handleDetails}
          placeholder={`Replying to @${reply.creatorUserName}`}
        ></textarea>
        <div>
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ReplyReplyBox;
