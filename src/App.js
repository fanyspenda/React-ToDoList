import React from "react";
import "./App.css";
import InputText from "./components/InputText";
import Button from "./components/Button";
import RadioTask from "./components/RadioButton";
import Header from "./components/Header";

class App extends React.Component {
  state = {
    textInput: "default value",
    task: []
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

  render() {
    return (
      <div className="App">
        <InputText value={this.state.textInput} onChange={this.onChange} />
        <Button onClick={this.addTask} />
        <div className="todo" align="left">
          <Header header="Todo List" />
          <ul>
            {this.state.task.map((value, index) => {
              return (
                <li key={index}>
                  <RadioTask task={value} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="Done" align="left">
          <Header header="Done" />
        </div>
      </div>
    );
  }
}

export default App;
