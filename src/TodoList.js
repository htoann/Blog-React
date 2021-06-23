import TodoForm from "./TodoForm";

const TodoList = ({ todolist, text }) => {
  return (
    <div className="todo-list">
      <h2>{text}</h2>
      <TodoForm></TodoForm>
      {todolist.map((todo) => (
        <div className="todo-preview" key={todo.id}>
          <input className="checkbox" type="checkbox" />
          <p className="text-todo">{todo.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
