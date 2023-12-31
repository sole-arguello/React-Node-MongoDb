import { userModel } from "./models/user.model.js";
import { UserDto } from "../dtos/user.dto.js";

export class UsersManager {
    constructor() {
        this.model = userModel;
    }

    async createUser(reqBody) {
        try {

            const newUser = new UserDto(reqBody);
            const result = await this.model.create(newUser);
            return result;
        } catch (error) {
            throw new Error('>>> Error al crear el usuario <<<' + error);
        }
    }

}