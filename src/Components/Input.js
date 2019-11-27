import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Task"
            value={this.state.term}
            onChange={this.onChange}
          />
          <button type="submit">Add task</button>
        </form>
      </div>
    );
  }
}

export default Input;
