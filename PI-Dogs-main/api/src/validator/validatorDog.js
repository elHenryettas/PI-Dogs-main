const { check } = require("express-validator");
const { validateResult } = require("../helpers/helperValidationDog");

(req) => {
  console.log(req);
};

const validatorDog = [
  check("name")
    .exists()
    .custom((value, { req }) => {
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/.test(value))
        throw new Error("Invalid caracters");
      if (value.length < 2) throw new Error("the name entered is too short");
      return true;
    }),

  check("heightMax")
    .exists()
    .custom((value, { req }) => {
      value = Number(value);
      if (isNaN(value)) throw new Error("Max Height must be a number");
      if (value < 15 || value > 100)
        throw new Error("The Max Height must be between 15 to 100 cm");
      return true;
    }),
  check("heightMin")
    .exists()
    .custom((value, { req }) => {
      value = Number(value);
      if (isNaN(value)) throw new Error("Min Height must be a number");
      if (value < 15 || value > 70)
        throw new Error("The Min Height must be between 15 to 70 cm");
      return true;
    }),

  check("weightMax")
    .exists()
    .custom((value, { req }) => {
      value = Number(value);
      if (isNaN(value)) throw new Error("Max Weight must be a number");
      if (value < 2 || value > 80)
        throw new Error("The Max Weight must be between 2 to 80 kg");
      return true;
    }),

  check("weightMin")
    .exists()
    .custom((value, { req }) => {
      value = Number(value);
      if (isNaN(value)) throw new Error("Min Weight must be a number");
      if (value < 1 || value > 50)
        throw new Error("The Min Weight must be between 1 to 50 kg");
      return true;
    }),

  check("temperament")
    .exists()
    .custom((value, { req }) => {
      if (value.length === 0)
        throw new Error("Must have at least one temperament");
      if (value.length > 6) throw new Error("There are many temperaments");
      return true;
    }),

  check("life_span")
    .exists()

    .custom((value, { req }) => {
      value = Number(value);
      if (isNaN(value)) throw new Error("Life span must be a number");
      else if (value < 8 || value > 20)
        throw new Error("The age must be between 8 to 20 years");
      return true;
    }),

  check("image"),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validatorDog };
