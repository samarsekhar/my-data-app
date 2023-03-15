import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { card } = props;
  return (
    <>
      <div className="card-item">{card.title}</div>
    </>
  );
};

export default Card;
