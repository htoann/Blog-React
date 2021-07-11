import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/BlogCreate";
import BlogDetails from "./components/BlogDetails";
import About from "./components/About";
import Todo from "./components/Todo";
import NotFound from "./components/NotFound";

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
