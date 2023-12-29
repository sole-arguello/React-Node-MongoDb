
export class UsersRepository {

    constructor(dao) {
        this.dao = dao
    }

    async createUser(userBody) {
        
        return await this.dao.createUser(userBody)
    }
}