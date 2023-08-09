import React from "react";
import "../App.css";

//Pure Component
const BookItem = (props) => {
  return (
    <div className="book-item">
      <div className="img-c">
        <img src={props.image} alt="book" />
      </div>
      <div className="desc">
          <h2 className="book-title">{props.title}</h2>
          <p>by {props.author}</p>
          <p>₹{props.price}</p>
          <button>Buy</button>
      </div>
    </div>
  );
};

export default BookItem;
