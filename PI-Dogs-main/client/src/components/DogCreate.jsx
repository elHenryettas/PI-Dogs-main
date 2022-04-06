import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../actions";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  }
  if (!input.heightMin) {
    errors.heightMin = "Minimun height is required";
  }

  if (!input.heightMax) {
    errors.heightMax = "Maximun height is required";
  }

  if (!input.weightMin) {
    errors.weightMin = "Minimun weight is required";
  }

  if (!input.weightMax) {
    errors.weightMax = "Maximun weight is required";
  }

  if (!input.life_span) {
    errors.life_span = "Life span is required";
  }
  return errors;
}

export default function DogCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const temperaments = useSelector((state) => state.TempForDogCreate);
  const [errors, setErrors] = useState({});
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
    setErrors({ ...input, [e.target.name]: e.target.value });
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
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Altura Maximo:</label>
          <input
            type="text"
            value={input.heightMax}
            name="heightMax"
            onChange={(e) => handleChange(e)}
          />{" "}
          {errors.heightMax && <p>{errors.heightMax}</p>}
        </div>

        <div>
          <label>Altura Minimo:</label>
          <input
            type="text"
            value={input.heightMin}
            name="heightMin"
            onChange={(e) => handleChange(e)}
          />
          {errors.heightMin && <p>{errors.heightMin}</p>}
        </div>

        <div>
          <label>Peso Maximo:</label>
          <input
            type="text"
            value={input.weightMax}
            name="weightMax"
            onChange={(e) => handleChange(e)}
          />
          {errors.weightMax && <p>{errors.weightMax}</p>}
        </div>

        <div>
          <label>Peso Minimo:</label>
          <input
            type="text"
            value={input.weightMin}
            name="weightMin"
            onChange={(e) => handleChange(e)}
          />
          {errors.weightMin && <p>{errors.weightMin}</p>}
        </div>

        <div>
          <label>Tiempo de vida:</label>
          <input
            type="text"
            value={input.life_span}
            name="life_span"
            onChange={(e) => handleChange(e)}
          />
          {errors.life_span && <p>{errors.life_span}</p>}
        </div>

        <div>
          <label>Imagen:</label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <select onChange={(e) => handleSelect(e)}>
          {temperaments.map((element) => (
            <option value={element.name} key={element.id}>
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
