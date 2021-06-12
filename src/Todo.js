import useFetch from "./useFetch";
import TodoList from "./TodoList";
import "./assets/TodoList.css";

const Todo = () => {
  const {
    data: todolist,
    isPending,
    error,
  } = useFetch("http://localhost:8000/todolist");
  return (
    <div className="todo-list">
      {error && <div>{error}</div>}
      {isPending && <h2>Loading...</h2>}
      {todolist && <TodoList todolist={todolist} text="Todo List"></TodoList>}
    </div>
  );
};

export default Todo;
