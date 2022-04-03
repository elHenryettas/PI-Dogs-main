import React from "react";
import { Link } from "react-router-dom";

import style from "./Card.module.css";

export default function Card({ name, image, temperament, id, weightMin }) {
  return (
    <div key={id}>
      <div>
        <img className={style.img} src={image} alt="A_dog" />
      </div>
      <div>
        <h3>{name}</h3>
        <h3>{weightMin}</h3>
        <h4>Temperaments</h4>
        <p>{temperament}</p>
        <Link to={`/dogs/${id}`}>
          <button>More Info</button>
        </Link>
      </div>
    </div>
  );
}
