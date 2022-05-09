const axios = require("axios");
const { Dog, Temperament } = require("../src/db");

const getInfoApi = async () => {
  const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dataApi = await apiUrl.data.map((e) => {
    const height = e.height.metric.split("-");
    const weight = e.weight.metric.split("-");
    const heightMin = parseInt(height[0].trim());
    const heightMax = parseInt(height[1]);
    const weightMin = parseInt(weight[0].trim());
    const weightMax = parseInt(weight[1]);
    const Precio = parseInt(weight[1]);
    const defaultTemp = e.temperament
      ? ` ${e.temperament}`
      : "Active, Agile, Confident, Fearless, Protective, Athletic";
    return {
      id: `${e.id}`,
      name: e.name,
      Precio: Precio ? Precio : 20,
      heightMax: heightMax ? heightMax : 35,
      heightMin: heightMin ? heightMin : 30,
      weightMax: weightMax ? weightMax : 32,
      weightMin: weightMin ? weightMin : 28,
      temperament: defaultTemp,
      life_span: e.life_span,
      image: e.image.url,
    };
  });
  return dataApi;
};

const getInfoDb = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament /* nuevo modelo */,
      attributes: ["name"] /* solamente trae name */,
      throught: { attributes: [] } /*  y lo devuelve en forma de arreglo */,
    },
  }); /* se trae toda la data (modulo) */
};
const getAllInfo = async () => {
  const infoApi = await getInfoApi(); /* Guarda la info de la api */
  const infoDb = await getInfoDb();

  let aux = await infoDb.map((e) => {
    return {
      id: e.id,
      name: e.name,
      heightMin: e.heightMin,
      heightMax: e.heightMax,
      weightMin: e.weightMin,
      weightMax: e.weightMax,
      life_span: e.life_span,
      image: e.image,

      temperament: e.temperaments
        .map((e) => {
          return e.name;
        })
        .join(", "),
    };
  });
  const allInfo = infoApi.concat(aux);
  return allInfo;
};
module.exports = { getAllInfo };
