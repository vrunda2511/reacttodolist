import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../reduxstore/actions";
import { deleteTodo } from "../reduxstore/actions";
import Button from '@material-ui/core/Button'

const Todo = ({ todo, toggleTodo,deleteTodo }) => (
  <li className="todo-item" >
   
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.value}
       {todo && todo.completed ? "  finish" : " active"}{" "}
       {todo.completed?  <Button  variant="contained"  color="primary" onClick={() => deleteTodo(todo.id)}>
                           delete
                        </Button>:
      <div>
        
        
        <Button  variant="contained"  color="primary" onClick={() => toggleTodo(todo.id)}>
                           iscomplete
                        </Button> <Button  variant="contained"  color="primary" onClick={() => deleteTodo(todo.id)}>
                           delete
                        </Button></div>}
     
    </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  {deleteTodo,toggleTodo}
)(Todo);
