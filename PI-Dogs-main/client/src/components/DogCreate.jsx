import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../actions/index.ts";
import Alerts from "./FormAlerts";
import "./DogCreate.scss";

export default function DogCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let temperaments = useSelector((state) => state.TempForDogCreate);

  const [input, setInput] = useState({
    name: "",
    heightMax: "",
    heightMin: "",
    weightMax: "",
    weightMin: "",
    temperament: [],
    life_span: "",
    image: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSelect(e) {
    if (input.temperament.length < 5) {
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
      const newArray = input.temperament;
      const find = newArray.indexOf(e.target.value);

      if (find >= 0) {
        newArray.splice(find, 1);
      } else {
        newArray.push(e.target.value);
      }
      setInput({
        ...input,
        temperament: newArray,
      });
    } else {
      alert("The created dog can only have 5 temperaments at max");
    }
  }

  function handleDeleteTemperament(e) {
    e.preventDefault();
    const newArray = input.temperament;
    const find = newArray.indexOf(e.target.innerText);

    if (find >= 0) {
      newArray.splice(find, 1);
    } else {
      newArray.push(e.target.value);
    }
    setInput({
      ...input,
      temperament: newArray,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.temperament.length === 0)
      alert("The dog must have one temperament");
    alert("Your dog has been uploaded succesfuly");
    dispatch(postDog(input));
    /* setInput({
      name: "",
      heightMax: "",
      heightMin: "",
      weightMax: "",
      weightMin: "",
      temperament: [],
      life_span: "",
      image: "",
    }); */
    navigate("/home");
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <div id="createContent" className="home">
      <fieldset className="fieldset">
        <legend>Create a New Breed</legend>
        <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <div className="labels">
            <label>Nombre: </label>{" "}
            <span>
              {!input.name ? (
                <Alerts msg="empty name field" type="warning" />
              ) : Number(input.name) ? (
                <Alerts msg="name must be a string" type="warning" />
              ) : (
                <Alerts msg="OK" type="succes" />
              )}
            </span>
            <input
              required
              className="name"
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="labels">
            <label>Height Max:</label>
            <span>
              {!input.heightMax ? (
                <Alerts msg="must be a number" type="warning" />
              ) : (
                <Alerts msg="OK" type="succes" />
              )}
            </span>
            <input
              required
              className="height"
              min="1"
              max="100"
              type="number"
              value={input.heightMax}
              name="heightMax"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="labels">
            <label>Height Min:</label>
            <span>
              {!input.heightMin ? (
                <Alerts msg="must be a number" type="warning" />
              ) : (
                <Alerts msg="OK" type="succes" />
              )}
            </span>
            <input
              required
              className="height"
              min="1"
              max="100"
              type="number"
              value={input.heightMin}
              name="heightMin"
              onChange={(e) => handleChange(e)}
            />{" "}
          </div>

          <div className="labels">
            <label>Weight Max:</label>
            <span>
              {!input.weightMax ? (
                <Alerts msg="must be a number" type="warning" />
              ) : (
                <Alerts msg="OK" type="succes" />
              )}
            </span>
            <input
              required
              className="weight"
              min="1"
              max="100"
              type="number"
              value={input.weightMax}
              name="weightMax"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="labels">
            <label>Weight Min:</label>
            <span>
              {!input.weightMin ? (
                <Alerts msg="must be a number" type="warning" />
              ) : (
                <Alerts msg="OK" type="succes" />
              )}
            </span>
            <input
              required
              className="weight"
              min="1"
              max="100"
              type="number"
              value={input.weightMin}
              name="weightMin"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="labels">
            <label>Life Span aprox:</label>
            <span>
              {!input.life_span ? (
                <Alerts msg="must be a number" type="warning" />
              ) : (
                <Alerts msg="OK" type="succes" />
              )}
            </span>
            <input
              className="years"
              required
              min="1"
              max="100"
              type="number"
              value={input.life_span}
              name="life_span"
              onChange={(e) => handleChange(e)}
            />{" "}
          </div>

          <div className="labels">
            <label>Url Image:</label>
            <input
              className="fc_Image"
              type="text"
              value={input.image}
              name="image"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <select
            value="disabled"
            onChange={(e) => handleSelect(e)}
            className="labels"
          >
            <option value="">Temperaments</option>
            {temperaments.map((element) => (
              <option required value={element.name} key={element.id}>
                {element.name}
              </option>
            ))}
          </select>
          <ul>
            {input.temperament.length !== 0 ? (
              <li>
                {input.temperament.map((element) => {
                  return (
                    <button
                      className="btn_temperaments"
                      key={element}
                      onClick={(e) => handleDeleteTemperament(e)}
                    >
                      {element}
                    </button>
                  );
                })}
              </li>
            ) : null}
          </ul>
          <div className="fc_btn_group">
            <button className="fc_btn_create" type="submit">
              Create!
            </button>
            <Link to="/home">
              <button className="fc_btn_cancel">Back Home</button>
            </Link>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

