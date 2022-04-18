import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DESCENDENT,
  ASCENDENT,
  WEIGHTMAX,
  WEIGHTMIN,
  DBDOGS,
  OFICIALDOGS,
} from "../Auxiliar";

import {
  getDogs,
  filterDogsByWeight,
  filterDogsByAOrZ,
  filterDogsByBd,
  filterDogsByTemperament,
} from "../actions";

import style from "./FiltAndCards.module.css";
import Paginado from "./Paginado";
import Card from "./Card";
import Loader from "./Loader";
import NoMachCase from "./NoMachCase";

export default function () {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allTemps = useSelector((state) => state.temperaments);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currenctDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const [order, setOrder] = useState("");

  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

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

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        <select value="disabled" onChange={(e) => handleFilterDogsByAOrZ(e)}>
          <option value="">ALPHABETICAL ORDER</option>
          <option value={ASCENDENT}>A to Z</option>
          <option value={DESCENDENT}>Z to A</option>
        </select>

        <select value="disabled" onChange={(e) => handleFilterByWeight(e)}>
          <option value="">WEIGHT FILTER</option>
          <option value={WEIGHTMIN}>Peso Minimo</option>
          <option value={WEIGHTMAX}>Peso Maximo</option>
        </select>

        <select value="disabled" onChange={(e) => handleFilterByDb(e)}>
          <option value="">OFICIAL/CREATED</option>
          <option value={OFICIALDOGS}>Perros Oficiales</option>
          <option value={DBDOGS}>Perros creados</option>
        </select>

        <select
          value="disabled"
          onChange={(e) => handleGetAndFilterTemperaments(e)}
        >
          <option value="">TEMPERAMENTS</option>
          {allTemps?.map((element) => (
            <option value={element.name} key={element.id}>
              {element.name}
            </option>
          ))}
        </select>
        {allDogs.length > 8 ? (
          <Paginado
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
          />
        ) : null}
      </div>
      <div className={style.cardsConteiner}>
        {isLoading ? (
          <Loader />
        ) : currenctDogs.length === 0 ? (
          <NoMachCase />
        ) : (
          currenctDogs?.map((e) => {
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
          })
        )}
      </div>
    </div>
  );
}
