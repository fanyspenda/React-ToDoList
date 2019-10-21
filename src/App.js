import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Todo from "./pages/Todo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header header="TODO LIST USING REACT"></Header>

        <Router>
          <Link to={`/about`}>About</Link>
          <Link to={`/`}>Home</Link>
          <br />
          <br />
          <Route path="/" exact component={Todo} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
