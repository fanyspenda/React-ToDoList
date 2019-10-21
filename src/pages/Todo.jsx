import React from "react";
import Header from "../Header";
import RadioTask from "../RadioButton";
import InputText from "../InputText";
import Button from "../Button";

class Todo extends React.Component {
  state = {
    textInput: "task1",
    task: [],
    done: []
  };

  addTask = () => {
    let task1 = this.state.task;
    task1.push(this.state.textInput);

    this.setState({
      task: task1
    });
    console.log(this.state.task);
  };

  onChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  checkboxHandler = event => {
    let newArr = this.state.task;
    let doneArr = this.state.done;
    let val1 = newArr[event.target.id];
    doneArr.push(val1);
    newArr.splice(event.target.id, 1);
    this.setState({
      task: newArr,
      done: doneArr
    });
  };

  render() {
    return (
      <div>
        <InputText value={this.state.textInput} onChange={this.onChange} />
        <br />

        <Button onClick={this.addTask}>Lorem ipsum</Button>
        <div className="todo" align="left">
          <Header header="Todo List" />
          <ul>
            {this.state.task.map((value, index) => {
              return (
                <li key={value + index}>
                  <RadioTask
                    id={index}
                    name={"todo"}
                    task={value}
                    onChange={this.checkboxHandler}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="Done" align="left">
          <Header header="Done" />
          <ul>
            {this.state.done.map((value, index) => {
              return (
                <li key={value + index}>
                  <RadioTask task={value} checked={true} readOnly="readOnly" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
