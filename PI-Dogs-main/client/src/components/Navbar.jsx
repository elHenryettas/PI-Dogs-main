import React from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDogs } from "../actions";
import style from "./Navbar.module.css";
export default function Navbar() {
  const dispatch = useDispatch();

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
      <button >
        <Link className={style.addDog} to="/dog">Add your Dreamd dog</Link>
      </button>
    </div>
  );
}
