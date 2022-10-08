export function validate(input){
    let errors = {}
    if(!input.id || input.id.length === 0){
        errors.id = 'An id is required'
    }
    else if( (input.id.length > 0 ) && ((!/[0-9]/.test(input.id)) || /[a-zA-Z ]/.test(input.id)) ){
        errors.id = 'A number is required'
    }

    if((!input.name) || (input.name.length === 0)){
        errors.name = 'A name is required'
    }

    else if( (input.name > 0) && ((/[0-9]/.test(input.name)) || !/[a-zA-Z ]/.test(input.name))){
        errors.name = 'A string is required'
    }
    return errors 
}