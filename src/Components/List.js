import React from "react";
import Item from "./../Components/Item";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <Item
            key={index}
            item={item}
            // onClick={() => this.removeRow(this.index)}
            handleClick={this.props.handleClick}
            removeRow={this.props.removeRow}
          ></Item>
        ))}
      </ul>
    );
  }
}
export default List;
