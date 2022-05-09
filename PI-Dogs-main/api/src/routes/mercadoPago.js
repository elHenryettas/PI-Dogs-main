const router = require("express").Router();
const mercadopago = require("mercadopago");
require("dotenv").config();
const { Dog } = require("../db.js");

router.post("/:id", async (req, res) => {
  const categoriabuscar = req.params.id;
  const datos = req.body.items;
  const producto = await Dog.findById(categoriabuscar);
  
  let preference = {
    transaction_amount: parseInt(producto.detalles[0].Precio * 1.15),
    net_amount: parseInt(producto.detalles[0].Precio * 1.15 * 0.968 - 800),
    taxes: [
      {
        value:
          parseInt(producto.detalles[0].Precio * 1.15) -
          parseInt(producto.detalles[0].Precio * 1.15 * 0.968 - 800),
        type: "IVA",
      },
    ],
    binary_mode: true,
    payer: {
      name: datos.nombre,
      surname: datos.apellidos,
      email: datos.email,
      phone: {
        number: parseInt(datos.telefono),
        area_code: "57",
      },
      address: {
        zip_code: datos.postal,
        street_name: datos.Barrio,
        street_number: parseInt(datos.street_number),
      },
    },
    shipments: {
      receiver_address: {
        zip_code: datos.postal,
        street_name: datos.Barrio,
        street_number: parseInt(datos.street_number),
        floor: datos.floor,
        apartment: datos.apartment,
        city_name: datos.ciudad,
        state_name: datos.estado,
        country_name: "colombia",
      },
    },
    additional_info: datos.anadirinfo,
    items: [
      {
        picture_url: datos.picture_url,
        title: producto.titulo,
        unit_price: parseInt(producto.detalles[0].Precio * 1.15),
        quantity: 1,
        description: producto.textdescripsion[0],
      },
    ],
    back_urls: {
      success: `http://localhost:3000/feedback/${categoriabuscar}`,
      failure: `http://localhost:3000/feedback/${categoriabuscar}`,
      pending: `http://localhost:3000/feedback/${categoriabuscar}`,
    },
    auto_return: "approved", 
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      console.log(response);
      res.json({
        global: response.body.id,
        postman: response,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
