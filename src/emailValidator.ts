export function isValidEmail(email: string) {
    if(!email.includes("@")){
        return false;
    }
    
    return true;
}