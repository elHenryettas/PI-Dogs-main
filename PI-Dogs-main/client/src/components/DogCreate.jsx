import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../actions";

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
      e.target.value = "Temperaments";
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
      return alert("dale alguna personalidad a tu perrazo, no seas malo");
    dispatch(postDog(input));
    alert("Your dog has been uploaded succesfuly");
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
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <h1>Creá tu propio perrazo!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            required
            value={input.name}
            name="name"
            pattern="[A-Za-z]+"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Altura Maximo:</label>
          <input
            type="text"
            required
            maxLength={3}
            value={input.heightMax}
            name="heightMax"
            pattern="[0-9]+"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Altura Minimo:</label>
          <input
            type="text"
            required
            value={input.heightMin}
            name="heightMin"
            pattern="[0-9]+"
            onChange={(e) => handleChange(e)}
          />{" "}
        </div>

        <div>
          <label>Peso Maximo:</label>
          <input
            type="text"
            required
            value={input.weightMax}
            name="weightMax"
            pattern="[0-9]+"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Peso Minimo:</label>
          <input
            type="text"
            required
            value={input.weightMin}
            name="weightMin"
            pattern="[0-9]+"
            onChange={(e) => handleChange(e)}
          />{" "}
        </div>

        <div>
          <label>Tiempo de vida:</label>
          <input
            type="text"
            required
            value={input.life_span}
            name="life_span"
            pattern="[0-9]+"
            onChange={(e) => handleChange(e)}
          />{" "}
        </div>

        <div>
          <label>Url Image:</label>
          <input
            type="text"
            value={input.image}
            name="image"
            pattern="https?://.+"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <select value="disabled" onChange={(e) => handleSelect(e)}>
          <option value="">Temperaments</option>
          {temperaments.map((element) => (
            <option required value={element.name} key={element.id}>
              {element.name}
            </option>
          ))}
        </select>
        <ul>
          <li>
            {input.temperament.map((element) => {
              return (
                <button
                  key={element}
                  onClick={(e) => handleDeleteTemperament(e)}
                >
                  {element}
                </button>
              );
            })}
          </li>
        </ul>

        <button type="submit">Crear Perrazo!</button>
      </form>
    </div>
  );
}
