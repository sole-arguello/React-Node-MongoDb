export class JoiMsgError  {
    static errorMessage = {
        'any.required': 'El campo "{#key}" es requerido',
        'string.base': 'El valor de "{#key}" debe ser un string',
        'string.empty': 'El campo "{#key}" no debe estar vacio',
        'number.base': 'El valor de "{#key}" debe ser un numero',
        'string.min': 'debe tener minimo {#limit} caracteres',
        'object.base': 'El valor de "{#key}" debe ser un objeto',
        'any.only': 'Solo se permiten fotos jpeg o png',
        'string.email': 'El valor de "{#key}" debe ser un correo electronico',
        'string.min': 'El campo "{#key}" debe tener minimo {#limit} caracteres',
        'string.max': 'El campo "{#key}" debe tener maximo {#limit} caracteres',
        'object.unknown': 'No se permiten campos adicionales en este objeto',
    } 
    
    static errorMsgUser = {
        'string.pattern.base': 'El campo "{#key}" no debe contener numeros, solo letras',
    }
    
    static errorMsgPassword = {
        'string.pattern.base': 'La contraseña debe contener al menos una mayúscula, una minúscula, un caracter especial, y un número para "{#key}.',
    }
}