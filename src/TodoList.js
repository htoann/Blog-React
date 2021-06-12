import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const TodoList = ({ todolist, text }) => {
  const { id } = useParams();
  const history = useHistory();

  const Add = () => {
    const [text, setText] = useState("");
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = () => {
      const todo = { text };
      setIsPending(true);
      fetch("http://localhost:8000/todolist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      }).then(() => {
        setIsPending(false);
      });
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What need to be done?"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        {!isPending && <button>Add Task</button>}
        {isPending && <button disabled>Adding...</button>}
      </form>
    );
  };

  // const { data: todo, isPending } = useFetch(
  //   "http://localhost:8000/todolist/" + id
  // );

  // const handleDelete = () => {
  //   fetch("http://localhost:8000/todolist/" + id, {
  //     method: "DELETE",
  //   });
  // };

  return (
    <div className="todo-list">
      <h2>{text}</h2>
      <Add></Add>
      {todolist.map((todo) => (
        <div className="todo-preview" key={todo.id}>
          <input className="checkbox" type="checkbox" />
          <p>{todo.text}</p>
          {/* <button onClick={handleDelete}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
