import React, { Component } from "react";
import "./search-bar.styles.css";

export default function SearchBox({ className, placeholder, onChangeHandler }) {
  return (
    <input
      className={` search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}
// *Creating class component
// export default class SearchBox extends Component {
//   render() {
//     // const {onSearchChange}= this.props
//     // const {className}= this.props
//     return (
//       <input
//         className={` search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }
