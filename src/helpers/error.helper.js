//van en los try catch junto con el console.error(error) e importado

export class CustomErrorHelper {

    static conflictError = (msg, code = 'CONFLICT') => {
        let error = new Error();
        error.code = code;
        error.httpStatusCode = 409;
        error.message = msg;
        throw error;
    }

    static notFoundError = (msg, code = 'NOT_FOUND') => {
        let error = new Error();
        error.code = code;
        error.httpStatusCode = 404;
        error.message = msg;
        throw error;
    }

    static notAuthorizedError = (msg, code = 'UNAUTHORIZED') => {
        let error = new Error();
        error.code = code;
        error.httpStatusCode = 401;
        error.message = msg;
        throw error;
    }

    static forbiddenError = (msg, code = 'FORBIDDEN') => {
        let error = new Error();
        error.code = code;
        error.httpStatusCode = 403;
        error.message = msg;
        throw error;
    }

    static internalServerError = (msg, code = 'INTERNAL_SERVER_ERROR') => {
        let error = new Error();
        error.code = code;
        error.httpStatusCode = 500;
        error.message = msg;
        throw error;
    }

    static badRequestError = (msg, code = 'BAD_REQUEST') => {
        let error = new Error();
        error.code = code;
        error.httpStatusCode = 400;
        error.message = msg;
        throw error;
    }

    static sendEmailError = (msg= "Error al enviar el email", code = 'SEND_EMAIL_ERROR') => {
        this.internalServerError(msg, code);
    }

    static schemaValidationError = (msg = 'Error al validar los datos') => {
        this.badRequestError(msg, );
    }
}