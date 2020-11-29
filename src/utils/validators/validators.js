export const requiredField = (value) => {
    if(value){ return undefined } ;
    return 'Field is required'
}

// Использование замыкания
export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength){ return `Max length is ${maxLength}` };
    return undefined
}

export const emailValidation = (value) => {
    if(value){
        let emailRegexp = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/
        if(emailRegexp.test(value) === true){
            return undefined
        } else {
            return "Email isn't correct"
        }

    }
}



