import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./BlogCreate";
import BlogDetails from "./BlogDetails";
import About from "./About";
import Todo from "./Todo";
import Animation3D from "./pages/Animation3D";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/blogs/create">
              <Create></Create>
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/todolist">
              <Todo></Todo>
            </Route>

            <Route path="/animation">
              <Animation3D></Animation3D>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
