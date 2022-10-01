import React, { Component } from "react";
import "./car-element.styles.css";

const CardElement = ({ monsters }) => {
  const { name, id, email } = monsters;

  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default CardElement;

// *Creating class component
// export default class CardElement extends Component {
//   render() {
//     const { name, id, email } = this.props.monsters;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={name}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
