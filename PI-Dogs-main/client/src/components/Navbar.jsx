import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDogs } from "../actions/index.ts";
import SearchBar from "./SearchBar";
import "./Navbar.scss";

export default function Navbar() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  useEffect(() => {
    let cancel = false;
    window.addEventListener("resize", (e) => {
      if (!cancel) {
        setSizeScreen(window.innerWidth);
      }
    });
    return () => {
      cancel = true;
    };
  });

  return (
    <header className="header">
      <nav className="nav">
        <div className="logoContent">
          <div className="logo"></div>
          <Link
            className="logo_title"
            onClick={(e) => {
              handleClick(e);
            }}
            to=""
          >
            Dogs App
          </Link>
        </div>
        {sizeScreen <= 1024 ? null : (
          <div>
            <SearchBar />
          </div>
        )}

        {sizeScreen <= 1024 ? null : (
          <ul className="links">
            <li>
              <Link className="link" to="/dog">
                Create your dog
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
/* <div>
      <Link to="/dogs"></Link>
      <h1>DOGGGS GANGGGGG</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Recharge
      </button>
      <SearchBar />
      <button>
        <Link className={style.addDog} to="/dog">
          Add your Dreamed dog
        </Link>
      </button>
    </div> */
