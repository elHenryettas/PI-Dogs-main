import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currenctDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

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

  return (
    <div>
      <Link to="/dogs"></Link>
      <h1>DOGGGS GANGGGGG</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Recargar todos los Perros
      </button>
      <div>
        
        <select>
          <option value="ascendente">Raza Ascendente</option>
          <option value="descendente">Raza Descendente</option>
        </select>
        <select>
          <option value="weightMin">Peso Minimo</option>
          <option value="weightMax">Peso Maximo</option>
        </select>
        <select>
          <option value="temps">Temperamentos</option>
        </select>
        <select>
          <option value="allDogs">Todos los perros</option>
          <option value="dbDogs">Perros creados</option>
        </select>
        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginado={paginado}
        />
      </div>
      {currenctDogs?.map((e) => {
        return (
          <div key={e.id}>
            <Card
              id={e.id}
              name={e.name}
              image={e.image}
              temperament={e.temperament}
            />
          </div>
        );
      })}
    </div>
  );
}
