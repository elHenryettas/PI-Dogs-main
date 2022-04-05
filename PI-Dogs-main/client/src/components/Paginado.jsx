import React from "react";
import style from "./Paginado.module.css";
export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    /* renderiza los numeros */ <nav>
      <ul className={style.paginado}>
        -
        {pageNumbers?.map((number) => (
          <li className="number" key={number}>
            <a onClick={() => paginado(number)}>{number}-</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
