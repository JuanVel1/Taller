//Estructura en formato flecha --> arrow
const logErrors = (err, req, res, next) => next(err)


//Estructura en formato funcion anonima
// const logErrors = function (err, req, res, next) {
//   console.log(err);
//   next(err)
// }

// //Estructura convencional
// function logErrors(err, req, res, next) {
//   console.log(err);
//   next(err)
// }

function errorHandler(err, req, res, next) {
  res.status(400).json({
    message:err.message,
    stack:err.stack
  })
}

function boomErrorHandler(err, req, res, next) {
  if(err.isBoom){
    const {output} = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

module.exports = {logErrors,errorHandler, boomErrorHandler}