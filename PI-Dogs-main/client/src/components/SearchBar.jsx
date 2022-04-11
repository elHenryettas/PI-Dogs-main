import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { filterByName } from "../actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(filterByName(name));
    setName("");
  }

  return (
    <div>
      <input
        className={style.input}
        type="text"
        value={name}
        placeholder="Buscar..."
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
}
