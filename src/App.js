import React from "react";
import { Link } from "react-router-dom";
 
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/profile">Go back to profile</Link>
        <div>
          <img src="https://images-na.ssl-images-amazon.com/images/I/51GjhbnHsKL._SX375_BO1,204,203,200_.jpg"></img>
        </div>
      </div>
    );
  }
}