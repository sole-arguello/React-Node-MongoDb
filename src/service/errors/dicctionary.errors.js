export const errorCreateUser = (user)=>{
    if(!user.first_name) throw new Error('first_name is required')
    if(!user.last_name) throw new Error('last_name is required')
    if(!user.email) throw new Error('email is required')
    if(!user.password) throw new Error('password is required')

}