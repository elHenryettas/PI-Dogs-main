import React from "react";

import SearchBar from "./SearchBar";
import style from "./Home.scss";
import FiltAndCards from "./FiltAndCards";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <SearchBar />
      <FiltAndCards />
    </div>
  );
}
