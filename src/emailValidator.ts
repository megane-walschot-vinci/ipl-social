export function isValidEmail(email: string) {
    if(!email.includes("@")){
        return false;
    }
    
    if(email.charAt(email.length-1) === '.'){
        return false;
    }

    return true;
}