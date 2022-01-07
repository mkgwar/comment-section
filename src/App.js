import "./App.scss";
import Comment from "./Components/Comment";
import AddComment from "./Components/AddComment";
import { useState } from "react";

function App() {
  const [comments, setcomments] = useState([]);

  const addAComment = (commentData) => {
    setcomments([...comments, commentData]);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="container__comment">
          {comments.map((comment) => {
            return <Comment {...comment} />;
          })}
        </div>
        <div className="container__addComment">
          <AddComment commentFunction={addAComment} />
        </div>
      </div>
    </div>
  );
}

export default App;
