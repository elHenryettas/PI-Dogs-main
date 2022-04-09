import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail, cleanDog } from "../actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  /*  console.log(id); */

  function handleClick(e) {
    e.preventDefault();
    dispatch(cleanDog());
  }

  useEffect(() => {
    dispatch(cleanDetail());
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const myDog = useSelector((state) => state.details);
  console.log("CONSOLELOGGG", myDog);

  return (
    <div onClick={(e) => handleClick(e)}>
      {myDog.id ? (
        <div>
          <h1>I am {myDog.name} </h1>
          <h3>Peso Max: {myDog.weightMax} </h3>
          <h3>Peso Min: {myDog.weightMin} </h3>
          <h3>Altura Max: {myDog.heightMax} </h3>
          <h3>Altura Min: {myDog.heightMin} </h3>
          <h2>Temperamentos: {myDog.temperament}</h2>
          <h3>Tiempo de vida: {myDog.life_span} </h3>
          <img src={myDog.image} />
          <Link to="/home">
            <button>Volver</button>
          </Link>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
