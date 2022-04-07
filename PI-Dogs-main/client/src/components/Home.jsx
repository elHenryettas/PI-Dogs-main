import React from "react";

import SeachBar from "./SeachBar";
import style from "./Home.module.css";
import FiltAndCards from "./FiltAndCards";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className={style.home}>
      <Navbar />
      <SeachBar />
      <FiltAndCards />
    </div>
  );
}
