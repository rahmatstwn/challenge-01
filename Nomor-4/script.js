const isValidPassword = (password) => {
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    // const hasilsplit = password.split(" ")
    
    if (typeof password === 'string'){
        if (password.match(regexPassword)){
            return "True"
        }else{
            return `False (karena ${password} hanya terdiri dari ${password.length} huruf)`
        }
    }else{
        if (password === undefined){
            return "Harap masukkan password"
        }else{
            return "Password harus string"
        }
    }
}

console.log(isValidPassword("Meong2"))
console.log(isValidPassword("Meong2123"))