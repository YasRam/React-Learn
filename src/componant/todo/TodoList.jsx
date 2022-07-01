
const TodoList = ({ todos, deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div className="alert alert-success" key={i}>
            <strong>{todo.title}</strong><br />
            <p>{todo.content}</p><br />
            <button onClick={() => deleteTodo(i)} type="button" className="btn btn-danger">X</button>
          </div>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );
  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;