// import { CustomError } from "../service/errors/customErrors.js"
// import { EErrors } from "../service/errors/enums.js"
// import { errorCreateUser } from "../service/errors/dicctionary.errors.js"
// import { validateSchema } from "../helpers/validate.helper.js"
// import { registerSchema } from '../schemas/user/register.schema.js'


export class UserDto {
    constructor({first_name,last_name,age,password,email}) {
        
        //validateSchema(registerSchema, {first_name,last_name,age,password,email})

        // const errors = errorCreateUser({first_name, last_name, age, password, email})
        // if(errors.length > 0){
        //     CustomError.createError({
        //         name: "Error al registrar el usuario",
        //         message: "Campos obligatorios",
        //         cause: errors,
        //         code: EErrors.INVALID_TYPES_ERROR
        //     })
        // }


        this.full_name = `${first_name} ${last_name}`.toUpperCase()
        this.first_name = first_name
        this.last_name = last_name
        this.age = age
        this.password = password
        this.email = email
        this.role = "user"
    }

    userFront(){
        return {
            full_name: this.full_name,
            age: this.age,
            email: this.email,
            role: this.role
        }
    }

}