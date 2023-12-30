export class CustomError{
    static createError({name="Error", cause, message, code}){
        const error = new Error(message, {cause});
        error.name = name;
        error.cause = cause;
        error.code = code;
        throw error
    }
}