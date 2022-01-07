import "./ReplyBox.scss";
import { useState } from "react";

const data = {
  content: "",
  createdAt: "Just now",
  score: 0,
  user: "MKGWar",
  replyingTo: "",
};

const ReplyBox = ({ user, postReply }) => {
  const [reply, setreply] = useState("");

  const inputHandler = (event) => {
    setreply(event.target.value);
  };

  const submitReply = (event) => {
    event.preventDefault();
    postReply({ ...data, user: user, content: reply });
    setreply("");
  };

  return (
    <div className="reply-box">
      <img src="/images/1971.jpg" alt="user" />
      <textarea value={reply} onChange={inputHandler} />
      <button onClick={submitReply}>POST</button>
    </div>
  );
};

export default ReplyBox;
