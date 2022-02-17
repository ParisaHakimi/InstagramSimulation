import { useState } from "react";
import { Link } from "react-router-dom";
const Post = ({ post: { id, title, img, description, isLiked } }) => {
  const [liked, setLiked] = useState(isLiked);
  const likeHandler = () => setLiked(!liked);
  return (
    <li className="post">
      {/* <h2>{title}</h2> */}
      <Link to={`/single-post-page/${id}`}>
        <img src={img} alt={title} />
      </Link>
      <div className="post-detail">
        {liked ? (
          <i onClick={likeHandler} className="fa fa-heart liked like"></i>
        ) : (
          <i onClick={likeHandler} className="fa fa-heart-o like"></i>
        )}
        <Link to={`/single-post-page/${id}`} className="cmtLink">
          <i className="fa fa-comment-o"></i>
        </Link>
      </div>
      <p>{description}</p>
    </li>
  );
};

export default Post;
