import { Link } from "react-router-dom";
import "./assets/NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <h2>Page Not Found</h2>
      <Link to="/">Back To The Home Page</Link>
    </div>
  );
};

export default NotFound;
