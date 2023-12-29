
import { usersDaoService } from "../service/repositories/index.js";
export class UsersController {
    static registerUser = async (req, res) => {
        try {
            
            const newUser = req.body;
            console.log("body", newUser);
           
            if(newUser){
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