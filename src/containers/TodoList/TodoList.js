import React from "react";
import TodolistComponent from "../../components/TodoList/TodoList";
import data from "../../dataSource";

class Todolist extends React.PureComponent {

  componentDidMount() {
    setTimeout(()=> {
      this.props.updateItems(data);
    }, 3000);
  }

  render() {
    return <TodolistComponent items={this.props.items} removeItem={this.props.removeItem}></TodolistComponent>
  }
}

export default Todolist;
