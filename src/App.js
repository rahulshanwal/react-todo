import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import TodoList from "./containers/TodoList/TodoList";

class App extends Component {

  constructor() {
    super();
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItems = this.updateItems.bind(this);
  }

  addItem (item) {
    const items = [...this.state.items, item]
    this.setState({
      items: items
    })
    console.log(items);
  }

  removeItem (key) {
    const items = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: items
    })
  }

  updateItems(data) {
    const items = [...this.state.items, ...data];
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="App">
        <Form addItem={this.addItem}></Form>
        <TodoList items={this.state.items} removeItem={this.removeItem} updateItems={this.updateItems}></TodoList>
      </div>
    );
  }
}

export default App;
