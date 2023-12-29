import { userModel } from "./models/user.model.js";

export class UsersManager {
    constructor() {
        this.model = userModel;
    }

    async createUser(userBody) {
        try {
            const newUser = await this.model.create(userBody);
            return newUser;
        } catch (error) {
            throw new Error('No se pudo crear el usuario <<<',error.message);
        }
    }

    async getUsers() {

    }
}