import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import data from "./../data.js";

const SinglePostPage = (props) => {
  const param = useParams();
  const postId = param.id;
  const post = data.find((post) => post.id == postId);
  // console.log(post);
  const [username, setUsername] = useState("");
  const [newCmt, setNewCmt] = useState("");
  const [postCmt, setPostCmt] = useState(post.comment);
  const focusName = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    if (username.trim() !== "" && newCmt !== "") {
      const allComments = [...postCmt];
      allComments.push({ name: username, comment: newCmt });
      setPostCmt(allComments);
      setUsername("");
      setNewCmt("");
      focusName.current.focus();
    } else {
      alert("Please fill all the inputs");
    }
  };
  return (
    <div className="singlePostpageWrapper">
      <Link to="/" className="backHome">
        back to home
      </Link>
      <h1>this is post page</h1>

      <div className="singlePostContainer">
        <img src={`../${post.img}`} alt="" />
        <div className="cmt-wrapper">
          <ul>
            {postCmt.map((cmt, i) => (
              <li key={i}>
                <strong>{cmt.name}:</strong>
                <p>{cmt.comment}</p>
              </li>
            ))}
          </ul>
          <form action="" onSubmit={submitForm}>
            <input
              type="text"
              value={username}
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
              ref={focusName}
            />
            <input
              type="text"
              value={newCmt}
              placeholder="New Comment"
              onChange={(e) => setNewCmt(e.target.value)}
            />
            <button>Add Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
