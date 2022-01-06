import "./App.scss";
import data from "./data.json";
import Comment from "./Components/Comment";

function App() {
  return (
    <div className="app">
      {data.comments.map((res) => {
        return <Comment {...res} key={res.id} />;
      })}
    </div>
  );
}

export default App;
