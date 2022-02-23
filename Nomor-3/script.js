const checkEmail = (email) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(typeof email === 'string'){
       if(email.includes('@')){
            if(email.match(regexEmail)){
                return "VALID"
            }else{
                return "INVALID"
            }
        }else {
            return "Email must included @"
        }
    }
    else{
        if (email === undefined){
            return "Email tidak terisi"
        }else{
            return "Email harus string"
        }
        
    }
}

console.log(checkEmail("rahmat@gmail.co.id"))
console.log(checkEmail("rahmat@gmail.com"))
console.log(checkEmail("rahmat"))
console.log(checkEmail("rahmat@gmail"))
console.log(checkEmail(1234))
console.log(checkEmail())