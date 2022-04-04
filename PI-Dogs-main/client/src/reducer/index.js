import {
  WEIGHTMAX,
  DESCENDENT,
  WEIGHTMIN,
  ASCENDENT,
  DBDOGS,
  OFICIALDOGS,
} from "../Auxiliar";

const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
        temperaments: action.temperaments,
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
      console.log(chocosFiltrados);
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
      }
      if (action.payload === DESCENDENT) {
        order = state.allDogs.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        });
      }
      console.log(order);
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
      if (action.payload === OFICIALDOGS) {
        let aux = state.allDogs.filter((e) => e.id.length < 4);
        db = aux;
      }
      console.log(db);
      return {
        ...state,
        dogs: db,
      };
    case "FILTER_BY_TEMPERAMENTS":
      const perrosFiltrados = state.allDogs.filter((e) => {
        if (e.temperament && e.temperament.includes(action.payload)) return e;
      });
      return {
        ...state,
        dogs: perrosFiltrados,
      };
    default:
      return state;
  }
}

export default rootReducer;
