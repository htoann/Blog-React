import "./assets/Home.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(process.env.REACT_APP_BLOGS);
  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <h2>Loading...</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
    </div>
  );
};

export default Home;
