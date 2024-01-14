import { UserDto } from "../dtos/user.dto.js";
import { usersDaoService } from "../service/repositories/index.js";
export class UsersController {
    static registerUser = async (req, res) => {
        try {
            
            const newUser = req.body;
            const userDto = new UserDto(newUser);
            //res.status(201).json({message: 'Usuario creado', result: {...newUser} });
            if(userDto){
                const result = await usersDaoService.createUser(userDto);
                console.log('Registrando usuario');
                res.status(201).json({message: 'Usuario creado', result: {...newUser}});
            }else{
                res.status(400).json({message: 'No se pudo crear el usuario'});
            }
        } catch (error) {
            res.status(500).json({message: error.message, error: error.cause});
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