import "./AddComment.scss";
import { useState } from "react";

const data = {
  content: "",
  createdAt: "Just now",
  score: 0,
  user: "MKGWar",
};

const AddComment = ({ commentFunction }) => {
  const [comment, setcomment] = useState("");

  const inputHandler = (event) => {
    setcomment(event.target.value);
  };

  const submitData = (event) => {
    event.preventDefault();
    commentFunction({ ...data, content: comment });
    setcomment("");
  };

  return (
    <div className="add-comment">
      <h1>Add a Comment</h1>
      <textarea onChange={inputHandler} value={comment} />
      <button onClick={submitData}>POST</button>
    </div>
  );
};

export default AddComment;
