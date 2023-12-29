

export class UsersController {
    static registerUser = async (req, res) => {
        try {
            res.json("register")
            // if(req.body) {
            //     const newUser = await UsersManager.createUser(req.body);
            //     res.status(201).json({message: 'Usuario creado', newUser});
            // }else{
            //     res.status(400).json({message: 'No se pudo crear el usuario'});
            // }
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