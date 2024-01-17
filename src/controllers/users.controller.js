import { UserDto } from "../dtos/user.dto.js";
import { usersDaoService } from "../service/index.js";
import { validateSchema } from './../helpers/validate.helper.js';
import { registerSchema } from './../schemas/user/register.schema.js';
export class UsersController {
    static registerUser = async (req, res, next) => {
        try {
            await validateSchema(registerSchema, req.body);
            const newUser = req.body;
            const userDto = new UserDto(newUser);

            if(userDto){
                const result = await usersDaoService.createUser(userDto);
                console.log('Registrando usuario');
                res.status(201).json({message: 'Usuario creado', result: {...newUser}});
            }else{
                res.status(400).json({message: 'No se pudo crear el usuario'});
            }
        } catch (error) {
            console.error(error)
            next(error);
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