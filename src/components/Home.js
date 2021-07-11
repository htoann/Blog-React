import "./assets/Home.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("https://60c9e7eb772a760017204b93.mockapi.io/blogs");
  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <h2>Loading...</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
    </div>
  );
};

export default Home;
