const {validationResult} = require('express-validator');


const validateResult = (req, res, next) => { 
    try {
        validationResult(req).throw();
        next();
    } catch (error) {
        const errors = error.errors.length;
        res
        .status(400)
        .json({errorsQty: errors, errors: error.errors.map((e) => e.msg)});
    }
}; 

module.exports = validateResult;