import { useContext, useState } from "react";
import "./write.css";
import axios from "axios"
import { Context } from "../../Context/Context";
export default function Write() {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [file,setFile] = useState();
  const {user} = useContext(Context);

  async function handelSubmit(e){
    e.preventDefault();
    
      const newPost = {
        username: user.username,
        title,
        desc
      }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      newPost.photo = filename;
      data.append("name",filename);
      data.append("file",file);
      try{
        await axios.post("/upload",data);
      }
      catch(err){ console.log(err)};
    }
    try{
      const res = await axios.post('/post/',newPost);
      window.location.replace("/post/"+res.data._id);
    }
    catch(err){ console.log(err)}
  }

  return (
    <div className="write">
     {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handelSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e)=>{setFile(e.target.files[0])}}/>
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
