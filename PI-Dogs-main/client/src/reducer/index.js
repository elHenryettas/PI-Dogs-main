import {
  WEIGHTMAX,
  DESCENDENT,
  WEIGHTMIN,
  ASCENDENT,
  DBDOGS,
  ALLDOGS,
} from "../Auxiliar";

const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      console.log();
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case "FILTER_BY_WEIGHT":
      let chocosFiltrados;
      if (action.payload === WEIGHTMAX) {
        let weightMaxFilter = state.allDogs.sort((a, b) => {
          if (a.weightMin > b.weightMin) return -1;
          if (b.weightMin > a.weightMin) return 1;
          return 0;
        });
        chocosFiltrados = weightMaxFilter;
      }
      if (action.payload === WEIGHTMIN) {
        let weightMinFilter = state.allDogs.sort((a, b) => {
          if (a.weightMin > b.weightMin) return 1;
          if (b.weightMin > a.weightMin) return -1;
          return 0;
        });
        chocosFiltrados = weightMinFilter;
      }
      return {
        ...state,
        dogs: chocosFiltrados,
      };
    case "FILTER_BY_AORZ":
      let order;
      if (action.payload === ASCENDENT) {
        order = state.allDogs.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        });
        console.log(order);
      }
      if (action.payload === DESCENDENT) {
        order = state.allDogs.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        });
        console.log(order);
      }
      return {
        ...state,
        dogs: order,
      };
    case "FILTER_BY_BD":
      let db;
      if (action.payload === DBDOGS) {
        let aux = state.allDogs.filter((e) => e.id.length > 6);
        db = aux;
      }
      if (action.payload === ALLDOGS) {
        let aux = state.allDogs;
        db = aux;
      }
      return {
        ...state,
        dogs: db,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
