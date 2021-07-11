import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./assets/BlogDetails.css";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch(process.env.REACT_APP_BLOGS + "/" + id);

  const handleDelete = () => {
    fetch(process.env.REACT_APP_BLOGS + "/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <h2>Loading...</h2>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <div>{blog.body}</div>
          <p>Written by {blog.author}</p>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
