import useFetch from "./useFetch";
import TodoList from "./TodoList";
import "./assets/TodoList.css";

const Todo = () => {
  const {
    data: todos,
    isPending,
    error,
  } = useFetch(process.env.REACT_APP_TODOS);
  return (
    <div className="todo-list">
      {error && <div>{error}</div>}
      {isPending && <h2>Loading...</h2>}
      {todos && <TodoList todos={todos} title="Todo List"></TodoList>}
    </div>
  );
};

export default Todo;
