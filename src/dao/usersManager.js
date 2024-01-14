import { userModel } from "./models/user.model.js";

export class UsersManager {
    constructor() {
        this.model = userModel;
    }

    async createUser(reqBody) {
        try {
            const result = await this.model.create(reqBody);
            return result;
        } catch (error) {
            throw new Error('>>> Error al crear el usuario <<<' + error);
        }
    }

}