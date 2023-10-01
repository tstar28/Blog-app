import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          praesentium nobis qui odit, dolor placeat repellat obcaecati est
          excepturi harum ipsa, quo ipsum velit repellendus officiis, odio
          laborum laboriosam voluptatibus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          praesentium nobis qui odit, dolor placeat repellat obcaecati est
          excepturi harum ipsa, quo ipsum velit repellendus officiis, odio
          laborum laboriosam voluptatibus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          praesentium nobis qui odit, dolor placeat repellat obcaecati est
          excepturi harum ipsa, quo ipsum velit repellendus officiis, odio
          laborum laboriosam voluptatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          praesentium nobis qui odit, dolor placeat repellat obcaecati est
          excepturi harum ipsa, quo ipsum velit repellendus officiis, odio
          laborum laboriosam voluptatibus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          praesentium nobis qui odit, dolor placeat repellat obcaecati est
          excepturi harum ipsa, quo ipsum velit repellendus officiis, odio
          laborum laboriosam voluptatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          praesentium nobis qui odit, dolor placeat repellat obcaecati est
          excepturi harum ipsa, quo ipsum velit repellendus officiis, odio
          laborum laboriosam voluptatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          praesentium nobis qui odit, dolor placeat repellat obcaecati est
          excepturi harum ipsa, quo ipsum velit repellendus officiis, odio
          laborum laboriosam voluptatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          praesentium nobis qui odit, dolor placeat repellat obcaecati est
          excepturi harum ipsa, quo ipsum velit repellendus officiis, odio
          laborum laboriosam voluptatibus!
        </p>
      </div>
    </div>
  );
}
