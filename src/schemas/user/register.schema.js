import joi from 'joi'
import { JoiMsgError } from '../joi.messageError.js'

export const registerSchema = joi.object({
    first_name: joi
        .string()
        .min(3)
        .max(30)
        .required()
        .pattern(/^\S*$/)
        .message({ ...JoiMsgError.errorMessage, ...JoiMsgError.errorMsgUser }),
    last_name: joi.
        string().
        optional(),
    age: joi
        .number()
        .integer()
        .max(2)
        .optional(),
    email: joi
        .string()
        .email()
        .required()
        .message(JoiMsgError.errorMessage),
    password: joi
        .string()
        .required()
        .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.].{8,}$/)
        .message(JoiMsgError.errorMsgPassword)
})
