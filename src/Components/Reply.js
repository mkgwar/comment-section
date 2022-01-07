import "./Reply.scss";
import { useState, useRef } from "react";

const Reply = ({ content, createdAt, score, user, replyingTo }) => {
  const [currScore, setcurrScore] = useState(score);
  const isIncClicked = useRef(false);
  const isDecClicked = useRef(false);

  const incScore = () => {
    isDecClicked.current = false;
    isIncClicked.current = !isIncClicked.current;

    if (isIncClicked.current) setcurrScore(score + 1);
    else setcurrScore(score);
  };

  const decScore = () => {
    isIncClicked.current = false;
    isDecClicked.current = !isDecClicked.current;

    if (isDecClicked.current) setcurrScore(score - 1);
    else setcurrScore(score);
  };

  return (
    <div className="Reply">
      <div className="Reply__score">
        <img
          src="/images/icon-plus.svg"
          alt="plus"
          onClick={incScore}
          className={isIncClicked.current ? "clicked" : ""}
        />
        <span>{currScore}</span>
        <img
          src="/images/icon-minus.svg"
          alt="minus"
          onClick={decScore}
          className={isDecClicked.current ? "clicked" : ""}
        />
      </div>
      <div className="Reply__text-content">
        <div className="Reply__top">
          <div className="Reply__user-and-time">
            <img src="/images/1971.jpg" alt="user" />
            <h1 className="Reply__userName">{user}</h1>
            <span className="Reply__time">{createdAt}</span>
          </div>
          <div className="Reply__reply">
            <img src="/images/icon-reply.svg" alt="reply" />
            Reply
          </div>
        </div>
        <div className="Reply__content">
          <span>@{replyingTo} </span>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Reply;
