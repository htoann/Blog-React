import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>HToan Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
        <a href="/messages">Messages</a>
        <a class="profile" href="/profile">
          User
          <div className="auth">
            <ul>
              <li>
                <a href="/auth/logout">Log out</a>
              </li>
              <li>
                <a href="/auth/signup">Sign up</a>
              </li>
            </ul>
          </div>
        </a>
        <a href="/auth/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
