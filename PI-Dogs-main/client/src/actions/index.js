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
  const temperaments = await axios.get("http://localhost:3001/temperament")
  return dispatch({
    type: "GET_TEMPERAMENT",
    payload: temperaments.data,
  });
 }
 
  
}
