import React from "react";

import SearchBar from "./SearchBar";
import style from "./Home.module.css";
import FiltAndCards from "./FiltAndCards";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className={style.home}>
      <Navbar />
      <SearchBar />
      <FiltAndCards />
    </div>
  );
}
