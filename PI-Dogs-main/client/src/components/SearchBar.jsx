import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { filterByName } from "../actions";
import "./SearchBar.scss";

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
    <form className="s_form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className=""
        type="text"
        value={name}
        placeholder="Search..."
        onChange={(e) => handleInput(e)}
      />
      <button  className="search_btn_icon" type="submit" >
      
      </button>
    </form>
  );
}
