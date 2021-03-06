import { Link } from "react-router-dom";
import "./assets/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/blogs/create">New Blog</Link>
        <Link to="/todolist">Todo List</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
