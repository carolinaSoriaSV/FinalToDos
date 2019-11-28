import React from "react";
import Item from "./../Components/Item";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <Item key={index} item={item} refresh={this.props.refresh}></Item>
        ))}
      </ul>
    );
  }
}
export default List;
