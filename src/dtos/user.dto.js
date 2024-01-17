export class UserDto {
    constructor({first_name,last_name,age,password,email}) {
        
        this.full_name = `${first_name} ${last_name}`.toUpperCase()
        this.first_name = first_name
        this.last_name = last_name
        this.age = age
        this.password = password
        this.email = email
        this.role = "user"
    }

    userFront(){
        return {
            full_name: this.full_name,
            age: this.age,
            email: this.email,
            role: this.role
        }
    }

}