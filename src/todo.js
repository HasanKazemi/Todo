export function Todo(props) {
    return (
      <div className="task-div">
        <input type="checkbox" />
        <textarea className="task">{props.todo.task}</textarea>
        <span
          className="delete-task"
          onClick={() => props.deleteTodo(props.todo.id)}
        >
          ×
        </span>
      </div>
    );
  }
  