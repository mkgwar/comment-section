import "./Comment.scss";
import { useState, useRef } from "react";
import ReplyBox from "./ReplyBox";
import Reply from "./Reply";

const Comment = ({ content, createdAt, score, user }) => {
  const [currScore, setcurrScore] = useState(score);
  const [replies, setreplies] = useState([]);
  const [showReplyBox, setshowReplyBox] = useState(false);
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

  const postReply = (replyData) => {
    setreplies([...replies, replyData]);
    setshowReplyBox(false);
  };

  return (
    <main>
      <div className="comment">
        <div className="comment__score">
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
        <div className="comment__text-content">
          <div className="comment__top">
            <div className="comment__user-and-time">
              <img src="/images/1971.jpg" alt="user" />
              <h1 className="comment__userName">{user}</h1>
              <span className="comment__time">{createdAt}</span>
            </div>
            <div className="comment__reply">
              <img src="/images/icon-reply.svg" alt="reply" />
              <span onClick={() => setshowReplyBox(!showReplyBox)}>Reply</span>
            </div>
          </div>
          <div className="comment__content">{content}</div>
        </div>
      </div>
      <div className="reply">
        {replies.map((reply) => {
          return <Reply {...reply} />;
        })}
      </div>
      <div className={"reply-box__container " + (showReplyBox ? "active" : "")}>
        <ReplyBox user={user} postReply={postReply} />
      </div>
    </main>
  );
};

export default Comment;
