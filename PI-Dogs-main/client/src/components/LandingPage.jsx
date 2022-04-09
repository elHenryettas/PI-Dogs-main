import React from "react";
import { Link } from "react-router-dom";

import style from "./LandingPage.module.css";
import dogeGif from "../Multimedia/Gifs/doge-intensifies.gif";

export default function LandingPage() {
  return (
    <div className={style.bigContainer}>
      <div className={style.container}>
        <h1 className={style.title}>Welcome to my Dogs App!</h1>
        <h3 className={style.text}>Lets go to find your favorite dog!</h3>

        <Link to="/home">
          <img className={style.btn} src={dogeGif} alt="doge-intersifies" />
        </Link>
      </div>
    </div>
  );
}
{
  /* <div className={style.entireDiv}>
  <img src="../Multimedia/Gifs/doge-intensifies.gif"/>
      <h1>Welcome a mi super página</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div> */
}
