import "./App.scss";
import data from "./data.json";
import Comment from "./Components/Comment";
import Reply from "./Components/Reply";

function App() {
  return (
    <div className="app">
      <div className="comment__container">
        {data.comments.map((res) => {
          return (
            <>
              <Comment {...res} key={res.id} />

              {res.replies.map((reply) => {
                return <Reply {...reply} key={reply.id} />;
              })}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
