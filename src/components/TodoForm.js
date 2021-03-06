import { useState } from "react";
import { useHistory } from "react-router";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {
    const todo = { title };
    setIsPending(true);
    fetch(process.env.REACT_APP_TODOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      setIsPending(false);
      history.push("/todos");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="title"
        placeholder="What need to be done?"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      {!isPending && <button>Add Task</button>}
      {isPending && <button disabled>Adding...</button>}
    </form>
  );
};

export default TodoForm;
