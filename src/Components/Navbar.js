import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink exact to={"/"}>
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/deleted"}> Deleted </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
