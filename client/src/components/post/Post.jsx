import React from "react";
import "./post.css";
import { Link } from "react-router-dom";
export default function Posts({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      <img
        src={PF+post?.photo}
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((p)=>{
              <span className="postCat">{p}</span>
            })
          }
        </div>
        <span className="postTitle">
          <Link className="link" to={`/post/${post._id}`}>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}
