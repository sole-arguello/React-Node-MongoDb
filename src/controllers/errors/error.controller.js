// lo importo en app.js y por eso controla toda la app
export const errorController = (error, req, res, next) => {
    console.error(error);
    res.status(error.httpStatusCode || 500).send({...error, status: 'error'});
}