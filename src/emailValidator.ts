export function isValidEmail(email: string) {
    if(!email.includes("@")){
        return false;
    }

    if(email.charAt(email.length-1) === '.'){
        return false;
    }

    if(!email.includes(".")){
        return false;
    }

    if(email.includes(" ")){
        return false;
    }

    const atIndex = email.indexOf("@");

    const beforAt = email.substring(0, atIndex);
    const afterAt = email.substring(atIndex + 1);

    if(beforAt.length === 0 || afterAt.length === 0){
        return false;
    }

    return true;
}