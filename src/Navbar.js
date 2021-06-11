import "./assets/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>HToan Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/blog/create">New Blog</Link>
        <Link to="/todo/all">Todo List</Link>
        <Link to="/messages">Messages</Link>
        <Link className="profile" to="/profile">
          User
        </Link>
        <div className="auth">
          <ul>
            <li>
              <Link to="/auth/logout">Log out</Link>
            </li>
            <li>
              <Link to="/auth/signup">Sign up</Link>
            </li>
          </ul>
        </div>
        <Link to="/auth/login">Login</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
