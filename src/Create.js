import "./assets/BlogCreate.css";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="create">
      <h2>Write A New Blog</h2>
      <form>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
