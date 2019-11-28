import React from "react";

class Item extends React.Component {
  finished = () => {
    this.props.item.isFinished = !this.props.item.isFinished;
    this.props.refresh(this.props.item.name);
  };

  deleted = () => {
    this.props.item.isDeleted = true;
    this.props.refresh(this.props.item.name);
  };

  render() {
    return (
      <>
        <li
          className={"task" + (!this.props.item.isDeleted ? "show" : "hidden")}
          key={this.props.index}
        >
          <p
            className={
              "task" + (!this.props.item.isFinished ? "unfinished" : "finished")
            }
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
