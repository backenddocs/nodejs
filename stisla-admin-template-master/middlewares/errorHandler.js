const {ValidationError} = require('joi');
const customErrorHandler = require('../services/customErrorHandler');

const errorHandler = (err, req, res, next)=>{

    let statusCode = 500;
    let data = {
        message : 'Interal server error',
        originalError : err.message
    }

    if(err instanceof ValidationError){
        statusCode = 422,
        data = {
            message : err.message
        }
    }

    if(err instanceof customErrorHandler){
        statusCode = err.status,
        data = {
            message : err.message
        }
    }



    return res.status(statusCode).json(data);
}


module.exports = errorHandler;