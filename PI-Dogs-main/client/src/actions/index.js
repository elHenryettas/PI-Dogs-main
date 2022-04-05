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
  return {
    type: "FILTER_BY_TEMPERAMENTS",
    payload,
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
  return {
    type: "FILTER_BY_BD",
    payload,
  };
}

export function filterByName(name) {
  /*  console.log(name); */
  return async function (dispatch) {
    let querry = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    console.log(querry.data);
    return dispatch({
      type: "QUERRY_DOGS",
      payload: querry.data,
    });
  };
}
export function getTemperaments() {
  return async function (dispatch) {
    let info = await axios.get("http://localhost:3001/temperament");
    return dispatch({ type: "GET_TEMPERAMENTS", payload: info.data });
  };
}
export function postDog(payload){
  return async function(dispatch){
    let response = await axios.post("http://localhost:3001/dog", payload)
    return response 
  }
}