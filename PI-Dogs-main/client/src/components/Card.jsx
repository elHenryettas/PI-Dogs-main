import React from "react";
import { Link } from "react-router-dom";

import style from "./Card.module.css";

const tranformar = (string) => {
    
  while(string.length >= 55){
    let arr = string.split(",")
    arr.pop()
    string = arr.join()
  }
  return string
};

export default function Card({ name, image, temperament, id}) {
  return (
    <div className={style.card} key={id}>
      <div className={style.imgConteiner}>
        <img className={style.img} src={image} alt="A_dog" /> <Link to={`/home/${id}`}>
          <button className={style.btn}>More Info</button>
        </Link>
      </div>
      <div>
        <h3>{name}</h3>
       {/*  <h3>{weightMin}</h3> */}
        <h4>Temperaments: </h4>
        <p>{tranformar(temperament)}</p>
       
      </div>
    </div>
  );
}
