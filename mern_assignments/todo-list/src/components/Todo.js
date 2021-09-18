const Todo= (props) => {
    return(
        <div>
            <input onChange={(event) =>{
              props.handleToggleComplete(props.i);
            }} checked={props.todo.complete} type="checkbox" />
            <span>{props.todo.text}</span>
            <button onClick={(event) =>{
              props.handleTodoDelete(props.i);
            }} style={{ marginLeft : "20px"}}>Delete</button>
          </div>
    )
}
export default Todo;