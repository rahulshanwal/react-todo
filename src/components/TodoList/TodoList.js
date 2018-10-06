import React from "react";
import TodoItem from "../TodoItem/Todoitem";

class TodoList extends React.PureComponent {
  render() {
    return <ul>
      {
        this.props.items.map((item, i) => (<TodoItem key={item.key} item={item} removeItem={this.props.removeItem}></TodoItem>))
      }
    </ul>
  }
}

export default TodoList;
