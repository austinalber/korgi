import React from "react";
import "./style.css";

// function SearchResults(props) {
//   return (
//     <ul className="list-group search-results">
//       {props.results.map(result => (
//         <li key={result} className="list-group-item">
//           <h3>`{result.firstName} {result.lastName}`</h3>
//           <img alt="User" src={result.image} className="img-fluid" />
//         </li>
//       ))}
//     </ul>
//   );
// }
function SearchResults(props) {
  return (
    <ul 
      className="list-group search-results"
      style={{ opacity: props.search ? 1 : 0 }}
    >
      <li key={props.results._id} className="list-group-item">
        <h3>{props.results.firstName} {props.results.lastName}</h3>
        <img alt="User" src={props.results.image} className="img-fluid" />
        <button onSubmit={props.saveFriend}>Save Friend</button>
      </li>
    </ul>
  );
}

export default SearchResults;
