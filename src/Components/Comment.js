import "./Comment.scss";

const Comment = ({ content, createdAt, score, user, replies }) => {
  return (
    <div className="comment">
      <div className="comment__score">
        <img src="/images/icon-plus.svg" alt="plus" />
        {score}
        <img src="/images/icon-minus.svg" alt="minus" />
      </div>
      <div className="comment__text-content">
        <div className="comment__top">
          <div className="comment__user-and-time">
            <img src={user.image.png} alt="user" />
            <h1 className="comment__userName">{user.username}</h1>
            <span className="comment__time">{createdAt}</span>
          </div>
          <div className="comment__reply">
            <img src="/images/icon-reply.svg" alt="reply" />
            Reply
          </div>
        </div>
        <div className="comment__content">{content}</div>
      </div>
    </div>
  );
};

export default Comment;
