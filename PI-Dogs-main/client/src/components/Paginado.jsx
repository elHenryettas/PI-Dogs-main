import React, { useState } from "react";
import style from "./Paginado.module.css";
export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  const [actual, setActual] = useState(1);

  const page = pageNumbers.slice(
    actual + 4 > pageNumbers.length
      ? pageNumbers.length -6
      : actual === 1
      ? actual - 1
      : actual === 2
      ? actual - 2
      : actual - 3,
    actual + 3 > pageNumbers.length
      ? pageNumbers.length
      : actual === 1
      ? actual + 5
      : actual === 2
      ? actual + 4
      : actual + 3
  );

  function handlePaginado(e) {
    let aux = Number(e.target.innerText);
    setActual(aux);
    paginado(aux);
  }
  function handleArrowMore() {
    if (actual !== pageNumbers.length) {
      paginado(actual + 1);
      setActual(actual + 1);
    }
  }
  function handleArrowLess() {
    if (actual !== 1) {
      paginado(actual - 1);
      setActual(actual - 1);
    }
  }

  return (
    <nav>
      <ul className={style.paginado}>
        <li className={style.numbers} onClick={() => handleArrowLess()}>
          <a>←</a>
        </li>

        {page?.map((number) => (
          <li
            className={number === actual ? style.numberActual : style.numbers}
            key={number}
            name={number}
            onClick={(e) => handlePaginado(e)}
          >
            <a>{number}</a>
          </li>
        ))}

        <li className={style.numbers} onClick={() => handleArrowMore()}>
          <a>→</a>
        </li>
      </ul>
    </nav>
  );
}
