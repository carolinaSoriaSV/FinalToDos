import React from "react";

class Item extends React.Component {
  state = {
    isFinished: false,
    isDeleted: false
  };

  finished = () => {
    this.setState({ isFinished: !this.state.isFinished })
  };

  deleted = () => {
    this.setState({ isDeleted: true }) && this.removeRow(this.key)
  };


  render() {
    return (
      <>
        <li
          className={"task" + (!this.state.isDeleted ? "show" : "hidden")}
          key={this.props.index}
        >
          <p
            style={{
              textDecoration: this.state.isFinished ? "line-through" : ""
            }}
          >
            {" "}
            {this.props.item.name}{" "}
          </p>
          <button className="btn-small" onClick={this.finished}>
            Finished
          </button>
          <button className="btn-small" onClick={this.deleted}>
            Delete
          </button>
        </li>
      </>
    );
  }
}

export default Item;
