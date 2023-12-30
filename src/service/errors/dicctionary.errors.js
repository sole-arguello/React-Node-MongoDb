export const errorCreateUser = (user)=>{

    const errors = []

    if(!user.first_name) errors.push('first_name is required')
    if(user.first_name && typeof user.first_name !== 'string' ) errors.push("first_name debe ser string")
    if(!user.last_name) errors.push('last_name is required')
    if(user.age && typeof user.age !== 'number') errors.push("age debe ser number")
    if(!user.email) errors.push('email is required')
    if(user.email && !user.email.includes('@')) errors.push('email debe ser un email')
    if(!user.password) errors.push('password is required')

    return errors
    

}