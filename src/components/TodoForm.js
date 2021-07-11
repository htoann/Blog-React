import { useState } from "react";
import { useHistory } from "react-router";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {
    const todo = { text };
    setIsPending(true);
    fetch("https://60c9e7eb772a760017204b93.mockapi.io/todolist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      setIsPending(false);
      history.push("/todolist");
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

export default TodoForm;
