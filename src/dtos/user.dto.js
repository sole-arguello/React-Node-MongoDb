export class UserDto {
    constructor() {

        // if(!first_name) throw new Error('first_name is required')
        // if(!last_name) throw new Error('last_name is required')
        // if(!email) throw new Error('email is required')
        // if(!password) throw new Error('password es required')
        
        this.full_name = `${first_name} ${last_name}`.toUpperCase()
        this.first_name = first_name
        this.last_name = last_name
        this.age = age
        //this.password = password
        this.email = email
        this.role = role
    }

}