const axios = require("axios");
const { Dog, Temperament } = require("../src/db.js");

const getInfoApi = async () => {
  const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dataApi = await apiUrl.data.map((e) => {
    const height = e.height.metric.split("-");
    const weight = e.weight.metric.split("-");
    const heightMin = parseInt(height[0].trim());
    const heightMax = parseInt(height[1]);
    const weightMin = parseInt(weight[0].trim());
    const weightMax = parseInt(weight[1]);
    return {
      name: e.name,
      heightMax: heightMax ? heightMax : "",
      heightMin: heightMin ? heightMin : "",
      weightMax: weightMax ? weightMax : "",
      weightMin: weightMin ? weightMin : "",
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
      throught: { attributes: [] } /*y lo devuelve en forma de arreglo */,
    },
  }); /* se trae toda la data (modulo) */
};
const getAllInfo = async () => {
  const infoApi = await getInfoApi(); /* Guarda la info de la api */
  const infoDb = await getInfoDb();
  const allInfo = infoApi.concat(infoDb);
  return allInfo;
};

module.exports = { getAllInfo };
