// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit


function validatepassword(password) {
    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;

    if (password.length < 8) {
        return "password must be atleast 8 character long."
    }

    for (let i = 0; i < password.length; i++) {

        const char = password[i];

        if (char >= "A" && char <= "Z") {
            hasUppercase = true
        }

        else if (char >= "a" && char <= "z") {
            hasLowercase = true
        }

        else if (char >= "0" && char <= "9") {
            hasDigit = true
        }

        if (hasUppercase && hasLowercase && hasDigit) {
            break
        }
    }

    if (!hasUppercase) {
        return "password must contain atleat one uppercase letter."
    }
    if (!hasLowercase) {
        return "password must contain atleat one lowercase letter."
    }
    if (!hasDigit) {
        return "password must contain atleat one digit."
    }

    return "password is valid"
}


console.log(validatepassword("hello"));
console.log(validatepassword("helloworld1"));
console.log(validatepassword("HelloWorld"));
console.log(validatepassword("Hello123"));
console.log(validatepassword("HELLO TOPG"));
console.log(validatepassword("704267908978"));