import React from "react";
import { Link } from "react-router-dom";
export default function Card({ name, image, temperament, id }) {
  return (
    <div key={id}>
      <div>
        <img src={image} alt="A_dog" />
      </div>
      <div>
        <h3>{name}</h3>
        <h4>Temperaments</h4>
        <p>{temperament}</p>
        <Link to={`/dogs/${id}`}>
          <button>More Info</button>
        </Link>
      </div>
    </div>
  );
}
