import React from 'react';
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Form.css";

class Form extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      items: [],
      inputVl: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.hanldleSubmit = this.hanldleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      inputVl: e.target.value
    })
  }

  hanldleSubmit(e) {
    e.preventDefault();
    this.props.addItem({
      val: this.state.inputVl,
      key: Date.now(),
      done: false
    });
  }

  render() {
    return (
      <form onSubmit={this.hanldleSubmit} className="form">
          <Input value={this.state.inputVl} onChange={this.handleInput}></Input>
          <Button type="submit">Add task</Button>
        </form>
    )
  }
}

export default Form;
