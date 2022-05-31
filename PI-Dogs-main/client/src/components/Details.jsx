import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail, cleanDog, deleteDogs } from "../actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import "./Details.scss";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  /*  console.log(id); */

  function handleClick(e) {
    e.preventDefault();
    dispatch(cleanDetail());
    dispatch(cleanDog());
    navigate("/home");
  }

  function handleDetele(e) {
    e.preventDefault();
    dispatch(deleteDogs(id));
    alert("Dog successfully deleted");
    navigate("/home");
  }

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const myDog = useSelector((state) => state.details);

  return (
    <div id="detailsSection" className="home">
      {myDog.id ? (
        <div className="conteinerDetail">
          <section>
            <img src={myDog.image} alt={myDog.name} />
          </section>
          <section id="dataDetails">
            <h2 id="nameDetailsRace">I am {myDog.name} </h2>
            <hr />
            <div id="heightDetail">
              <h5>Height</h5>
              <span>
                {myDog.heightMax} - {myDog.heightMin}
              </span>
            </div>
            <div id="weightDetai">
              <h5>Weight</h5>
              <span>
                {myDog.weightMax} - {myDog.weightMin}
              </span>
            </div>
            <div id="lifeDetails">
              <h5>life span</h5>
              <span>{myDog.life_span}</span>
            </div>
            <div id="Temperamentsdetails">
              <h5>Temperaments</h5>
              <span>{myDog.temperament}</span>
            </div>
              {myDog.id.length > 5 ? (
                <button className="btn_back" onClick={(e) => handleDetele(e)}>Delete Dog</button>
                ) : null}
          </section>
              <button className="btn_back" onClick={(e) => handleClick(e)}>Back Home</button>
        </div>
      ) : (
        <div className="home">{<Loader />}</div>
        )}
    </div>
  );
}
