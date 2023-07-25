const {check} = require("express-validator");
const validateResult = require("../middlewares/validate.middleware");

//creando arreglos de validadores
const loginUserValidator = [
  //verificar cada una de las propiedades del req.body
  check("email", "Error con el email")
    .exists()
    .withMessage("Campo de email vacío")
    .notEmpty()
    .withMessage("El email no debe estar vacio")
    .isString()
    .withMessage("El email no es un string")
    .isEmail()
    .withMessage("No tiene formato de email"),
  check("password", "Error con el password").exists().notEmpty().isString(),
  validateResult,
];

const registerUserValidator = [
  check("firstname", "error con firstname")
    .exists()
    .withMessage("Falta el firstname")
    .notEmpty()
    .withMessage("El firstname no puede estar vacío")
    .isString()
    .withMessage("El firstname debe ser un string")
    .isLength({ min: 10, max: 30 })
    .withMessage("El firstname debebe tener entre 10 y 30 carácteres"),
  check("lastname", "error con lastname")
    .exists()
    .withMessage("Falta el lastname")
    .notEmpty()
    .withMessage("El lastname no puede estar vacío")
    .isString()
    .withMessage("El lastname debe ser un string")
    .isLength({ min: 10, max: 30 })
    .withMessage("El lastname debebe tener entre 10 y 50 carácteres"),
  check("username", "error con username")
    .exists()
    .withMessage("Falta el username")
    .notEmpty()
    .withMessage("El username no puede estar vacío")
    .isString()
    .withMessage("El username debe ser un string")
    .isLength({ min: 6, max: 30 }),
  check("email", "error con el email")
    .exists()
    .withMessage("Falta el email")
    .notEmpty()
    .withMessage("El email no puede estar vacío")
    .isString()
    .withMessage("El email debe ser un string")
    .isEmail()
    .withMessage("Este campo debe ser de tipo email")
    .isLength({ min: 10, max: 50 })
    .withMessage("El correo debebe tener entre 10 y 50 carácteres"),
  check("password", "Error con el password")
    .exists()
    .withMessage("Falta el campo password")
    .notEmpty()
    .withMessage("El campo password no puede ir vacio")
    .isString()
    .withMessage("El campo password debe ser de tipo string")
    .matches(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/)
    .withMessage(
      "La contraseña debe tener minimo 8 carácteres una mayúscula, una minuscula, un número y un carácter especial"
    ),
  validateResult,
];

module.exports = {
  loginUserValidator,
  registerUserValidator,
};
