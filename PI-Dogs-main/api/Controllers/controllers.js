const axios = require("axios");

const seachApi = async () => {
  const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dataApi = await apiUrl.data.map((e) => {
    const heightProm = e.height.metric.split("-");
    const weightProm = e.weight.metric.split("-");
    return {
      name: e.name,
      heightMax: heightProm[1].trim(),
      heightMin: heightProm[0].trim(),
      weightMax:
        weightProm[1].trim() /* elimina todos los espacios del string */,
      weightMin: weightProm[0].trim(),
      life_span: e.life_span,
      image: e.image.url,
    };
  });
  return dataApi;
};

const getInfoDb = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"] /* solamente trae name */,
      throught: { attributes: [] } /* lo devuelve en forma de arreglo */,
    },
  }); /* se trae toda la data (modulo) */
};
