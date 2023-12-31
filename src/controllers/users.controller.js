
import { usersDaoService } from "../service/repositories/index.js";
import { CustomError } from "../service/errors/customErrors.js";
import { EErrors } from "../service/errors/enums.js";
import { errorCreateUser } from "../service/errors/dicctionary.errors.js";
export class UsersController {
    static registerUser = async (req, res) => {
        try {
            
            const newUser = req.body;
            //console.log("body", newUser);
            if(newUser){
                // CustomError.createError({
                //     name: "Error al registrar el usuario",
                //     message: "Campos obligatorios",
                //     cause: errorCreateUser(newUser),
                //     code: EErrors.INVALID_TYPES_ERROR
                // })
                const result = await usersDaoService.createUser(newUser);
                console.log('Registrando usuario');
                res.status(201).json({message: 'Usuario creado', result});
            }else{
                res.status(400).json({message: 'No se pudo crear el usuario'});
            }
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static loginUser = async (req, res) => {
        try {
            res.send("login")
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}