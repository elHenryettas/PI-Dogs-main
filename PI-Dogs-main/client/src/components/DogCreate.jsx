import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../actions";

export default function DogCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const temperaments = useSelector((state) => state.TempForDogCreate);

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
    setInput({
      ...input,
      temperament: [...input.temperament, `${e.target.value}`],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postDog(input));
    alert("Your dog has been uploaded succesfuly");
    setInput({
      name: "",
      heightMax: "",
      heightMin: "",
      weightMax: "",
      weightMin: "",
      temperament: [],
      life_span: "",
      image: "",
    });
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
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Altura Maximo:</label>
          <input
            type="text"
            required
            value={input.heightMax}
            name="heightMax"
            onChange={(e) => handleChange(e)}
          />{" "}
        </div>

        <div>
          <label>Altura Minimo:</label>
          <input
            type="text"
            required
            value={input.heightMin}
            name="heightMin"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Peso Maximo:</label>
          <input
            type="text"
            required
            value={input.weightMax}
            name="weightMax"
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
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Tiempo de vida:</label>
          <input
            type="text"
            required
            value={input.life_span}
            name="life_span"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label>Imagen:</label>
          <input
            type="text"
            required
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <select onChange={(e) => handleSelect(e)}>
          {temperaments.map((element) => (
            <option required value={element.name} key={element.id}>
              {element.name}
            </option>
          ))}
        </select>
        <ul>
          <li>{input.temperament.map((ele) => ele + " ,")}</li>
        </ul>
        <button type="submit">Crear Perrazo!</button>
      </form>
    </div>
  );
}
