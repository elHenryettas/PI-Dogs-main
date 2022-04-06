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
  return async function (dispatch) {
    let querry = await axios.get(`http://localhost:3001/dogs?name=${name}`);

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

export function postDog(payload) {
  return async function (dispatch) {
    let response = await axios.post("http://localhost:3001/dog", payload);
    return response;
  };
}

export function getDetail(payload) {
  return async function (dispatch) {
    try {
      let info = await axios.get(`http://localhost:3001/dogs/${payload}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: info.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function cleanDetail() {
  return {
    type: "CLEAN_DETAIL",
    payload: {},
  };
}
