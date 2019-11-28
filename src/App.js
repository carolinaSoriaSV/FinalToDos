import React, { Component } from "react";
import List from "./Components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const lista = this.state.items;
    lista.push({
      name: this.state.term,
      isFinished: false,
      isDeleted: false
    });

    this.setState({
      items: lista,
      term: ""
    });

    localStorage.setItem("todos", JSON.stringify(this.state.items));
  };

  onClearArray = () => {
    this.setState({ list: [] });
  };

  refresh = item => {
    let todos = this.state.items;
    localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({
      items: todos
    });
  };

  componentDidMount() {
    const getTodos = JSON.parse(localStorage.getItem("todos"));
    if (getTodos) {
      this.setState({ items: getTodos });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="todo-list">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Task"
              value={this.state.term}
              onChange={this.onChange}
              onKeyPress={e => {
                if (e.key === "Enter") e.preventDefault();
              }}
            />
            {/* Hace que se pueda apretar enter */}
            {/* <input
            placeholder="Task"
            value={this.state.term}
            onChange={this.onChange}
          /> */}
            {this.state.term.length > 0 && (
              <button type="submit">Add task</button>
            )}
          </form>
          {
            <List
              items={this.state.items}
              name={this.state.term}
              refresh={this.refresh}
            />
          }
        </div>
      </div>
    );
  }
}

// https://reactjs.org/docs/faq-functions.html

export default App;
