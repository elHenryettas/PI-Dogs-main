import axios from "axios";

export function getDogs() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: "GET_DOGS",
      payload: json.data,
    });
  };
}
export function getTemperament() {
  return async function (dispatch) {
    const temperaments = await axios.get("http://localhost:3001/temperament");
    return dispatch({
      type: "GET_TEMPERAMENT",
      payload: temperaments.data,
    });
  };
}
export function filterDogsByWeight(payload) {
  return {
    type: "FILTER_BY_WEIGHT",
    payload,
  };
}
export function filterDogsByAOrZ(payload) {
  return {
    type: "FILTER_BY_AORZ",
    payload,
  };
}

export function filterDogsByBd(payload) {
  console.log(payload);
  return {
    type: "FILTER_BY_BD",
    payload,
  };
}
