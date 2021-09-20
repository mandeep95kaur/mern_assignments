const Todo = (props) => {
  return (
    <div>
      <input
        onChange={(event) => {
          props.handleToggleComplete(props.i);
        }}
        checked={props.todo.complete}
        type="checkbox"
      />
      {props.todo.complete ? (
        <span style={{ textDecoration: "line-through" }}>
          {props.todo.text}
        </span>
      ): (
        <span>{props.todo.text}</span>
      )}

      <button
        onClick={(event) => {
          props.handleTodoDelete(props.i);
        }}
        style={{ marginLeft: "20px" }}
      >
        Delete
      </button>
    </div>
  );
};
export default Todo;
