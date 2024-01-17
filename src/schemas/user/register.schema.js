import joi from 'joi'
import { JoiMsgError } from '../joi.messageError.js'

export const registerSchema = joi.object({
    first_name: joi
        .string()
        .min(3)
        .max(30)
        .required()
        .pattern(/^[a-zA-Z\s]+$/)
        .messages({ ...JoiMsgError.errorMessage, ...JoiMsgError.errorMsgUser }),
    last_name: joi.
        string().
        optional()
        .pattern(/^\S*$/)
        .messages({ ...JoiMsgError.errorMessage, ...JoiMsgError.errorMsgUser }),
    age: joi
        .number()
        .integer()
        .max(20)
        .optional()
        .messages(JoiMsgError.errorMessage),
    email: joi
        .string()
        .email()
        .required()
        .messages(JoiMsgError.errorMessage),
    password: joi
        .string()
        .required()
        .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.].{8,}$/)
        .messages({...JoiMsgError.errorMsgPassword, ...JoiMsgError.errorMessage})
})
