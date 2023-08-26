import { useState } from "react";
import { Todo } from "./todo";
import "./styles.css";

export default function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      isComplete: false,
      task: "Start with meditation, exercise & breakfast for a productive day"
    },
    {
      id: 2,
      isComplete: false,
      task: "Read to learn something new every day"
    },
    {
      id: 3,
      isComplete: false,
      task: "Learn something fresh & relevant"
    }
  ]);

  function addTask() {
    const newTodo = {
      id: todoList[todoList.length - 1].id + 1,
      isComplete: false,
      task: ""
    };
    setTodoList([...todoList, newTodo]);
  }
  function handleHover(id, tf) {
    todoList.forEach((todo) => {
      if (id === todo.id && tf === "true") {
        todo.isHovered = true;
      } else {
        todo.isHovered = false;
      }
    });
  }
  function deleteTodo(id) {
    const newTodo = todoList.filter((to) => {
      if (to.id === id) return false;
      else return true;
    });
    setTodoList(newTodo);
  }

  return (
    <div className="App">
      <h1 className="task-title">✔ Task List</h1>
      <p className="slogan">
        Break your life to simple tasks to get things done! <br />
        Does not matter how many tasks you done, It’s important to break to
        small tasks and be on progress.
      </p>

      <div className="card-container">
        <div className="task-card todo-card">
          <div className="d-flex">
            <span className="todo">Todo</span>
            <span className="todo-task-count">{3} Tasks</span>
          </div>

          {todoList.map((todo, index) => {
            return (
              <Todo
                key={index}
                todo={todo}
                handleHover={handleHover}
                deleteTodo={deleteTodo}
              />
            );
          })}

          <div className="new-todo" onClick={addTask}>
            <i className="plus">+</i>
            <span> New </span>
          </div>
        </div>

        <div className="task-card doing-card">
          <div className="d-flex">
            <span className="doing">
              Doing <i className="flexed-bicep">💪</i>
            </span>
            <span className="doing-task-count">{2} Tasks</span>
          </div>
          <div className="task-div">
            <input type="checkbox" name="" />
            <span>Engage & question in meetings</span>
          </div>
          <div className="task-div">
            <input type="checkbox" name="" />
            <span>Use time-blocking for effective days</span>
          </div>
          <div className="new-doing">
            <i className="plus">+</i>
            <span> New </span>
          </div>
        </div>

        <div className="task-card done-card">
          <div className="d-flex">
            <span className="done">
              Done <i className="party-popper">🎉</i>
            </span>
            <span className="done-task-count">{2} Tasks</span>
          </div>
          <div className="task-div">
            <input type="checkbox" name="" checked="checked" />
            <del>Finished online course - check!</del>
          </div>
          <div className="task-div">
            <input type="checkbox" name="" checked="checked" />
            <del>
              Congratulate yourself for incorporating healthier habits into your
              lifestyle, like regular exercise or mindful eating
            </del>
          </div>
        </div>
      </div>
    </div>
  );
}
