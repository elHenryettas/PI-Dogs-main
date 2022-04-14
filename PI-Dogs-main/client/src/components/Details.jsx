import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail, cleanDog, deleteDogs } from "../actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  /*  console.log(id); */

  function handleClick(e) {
    e.preventDefault();
    dispatch(cleanDetail());
    dispatch(cleanDog());
    navigate("/home");
  }

  function handleDetele(e) {
    e.preventDefault();
    dispatch(deleteDogs(id));
    alert("El perro ha sido borrado");
    navigate("/home");
  }

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const myDog = useSelector((state) => state.details);

  return (
    <div>
      {myDog.id ? (
        <div>
          {myDog.id.length > 5 ? (
            <button onClick={(e) => handleDetele(e)}> BORRAR PERRACO</button>
          ) : null}
          <h1>I am {myDog.name} </h1>
          <h3>Peso Max: {myDog.weightMax}</h3>
          <h3>Peso Min: {myDog.weightMin} </h3>
          <h3>Altura Max: {myDog.heightMax} </h3>
          <h3>Altura Min: {myDog.heightMin} </h3>
          <h2>Temperamentos: {myDog.temperament}</h2>
          <h3>Tiempo de vida: {myDog.life_span} </h3>
          <img src={myDog.image} />
          <button onClick={(e) => handleClick(e)}>Volver al home</button>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
