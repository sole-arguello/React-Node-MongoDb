//validar schemas de joi lo importo 
import { CustomErrorHelper } from './error.helper.js'

export const validateSchema = async (schema, body) => {
    try {
        const value = await schema.validateAsync(body)
    } catch (error) {
        console.error(error)
        //sin datos dentro del parentesis da el mensaje de shemaValidationError
        //de lo contrario va reclamando los campos
        CustomErrorHelper.schemaValidationError(error.details[0]?.message)
    }
}