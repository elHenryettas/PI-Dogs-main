import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  filterDogsByWeight,
  filterDogsByAOrZ,
  filterDogsByBd,
  filterDogsByTemperament,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import {
  DESCENDENT,
  ASCENDENT,
  WEIGHTMAX,
  WEIGHTMIN,
  DBDOGS,
  OFICIALDOGS,
} from "../Auxiliar";
import SeachBar from "./SeachBar";
import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allTemps = useSelector((state) => state.temperaments);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currenctDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const [order, setOrder] = useState("");

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }
  function handleGetAndFilterTemperaments(e) {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }
  function handleFilterDogsByAOrZ(e) {
    dispatch(filterDogsByAOrZ(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleFilterByWeight(e) {
    e.preventDefault();
    dispatch(filterDogsByWeight(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }
  function handleFilterByDb(e) {
    e.preventDefault();
    dispatch(filterDogsByBd(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  return (
    <div className={style.home}>
      <Link to="/dogs"></Link>
      <h1>DOGGGS GANGGGGG</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Recargar todos los Perros
      </button>
      <SeachBar />
      <div>
        <select onChange={(e) => handleFilterDogsByAOrZ(e)}>
          <option value={ASCENDENT}>Raza Ascendente</option>
          <option value={DESCENDENT}>Raza Descendente</option>
        </select>

        <select onChange={(e) => handleFilterByWeight(e)}>
          <option value={WEIGHTMIN}>Peso Minimo</option>
          <option value={WEIGHTMAX}>Peso Maximo</option>
        </select>

        <select onChange={(e) => handleFilterByDb(e)}>
          <option value={OFICIALDOGS}>Perros Oficiales</option>
          <option value={DBDOGS}>Perros creados</option>
        </select>

        <select onChange={(e) => handleGetAndFilterTemperaments(e)}>
          {allTemps?.map((element) => (
            <option value={element.name} key={element.id}>
              {element.name}
            </option>
          ))}
        </select>
        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginado={paginado}
        />
      </div>
      <div className={style.cardsConteiner}>
        {currenctDogs?.map((e) => {
          return (
            <div key={e.id}>
              <Card
                id={e.id}
                weightMin={e.weightMin}
                name={e.name}
                image={e.image}
                temperament={e.temperament}
              />
      
            </div>
          );
        })}
      </div>
    </div>
  );
}
