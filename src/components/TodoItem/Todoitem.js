
import React from "react";
import "./Todoitem.css";

const TodoItem = props => {
  const {item} = props;
  return (<li className={item.done ? "item-done" : "item"}
  onClick={()=> props.removeItem(item.key)}>
    {item.val}
    </li>
  )
}

export default TodoItem;
