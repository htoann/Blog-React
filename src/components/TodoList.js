import TodoForm from "./TodoForm";

const TodoList = ({ todos, title }) => {
  return (
    <div className="todo-list">
      <h2>{title}</h2>
      <TodoForm></TodoForm>
      {todos.map((todo) => (
        <div className="todo-preview" key={todo.id}>
          <input className="checkbox" type="checkbox" />
          <p className="text-todo">{todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
