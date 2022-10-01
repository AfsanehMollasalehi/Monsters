import React, { Component } from "react";
import "./card-list.styles.css";
import CardElement from "./card-element.components";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardElement monsters={monster} key={monster.id} />;
      })}
    </div>
  );
};
export default CardList;

// export default class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <CardElement monsters={monster} key={monster.id} />;
//         })}
//       </div>
//     );
//   }
// }
