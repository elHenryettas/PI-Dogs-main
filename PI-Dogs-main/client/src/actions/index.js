import axios from "axios";

export function getDogs() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/dogs");
    const temperaments = await axios.get("http://localhost:3001/temperament");
    return dispatch({
      type: "GET_DOGS",
      payload: json.data,
      temperaments: temperaments.data,
    });
  };
}

export function filterDogsByTemperament(payload) {
  console.log(payload);
  return {
    type: "FILTER_BY_TEMPERAMENTS",
    payload,
  };
}
export function filterDogsByWeight(payload) {
  console.log(payload);
  return {
    type: "FILTER_BY_WEIGHT",
    payload,
  };
}
export function filterDogsByAOrZ(payload) {
  console.log(payload);
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

