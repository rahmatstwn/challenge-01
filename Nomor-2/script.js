const checkTypeNumber = (givenNumber) => {
    if( typeof givenNumber === 'number'){
        if ( givenNumber %2 === 0 ){
            return "GENAP";
        }else if( givenNumber %2 === 1 ){
            return "GANJIL";
        }
    }else{
        if(givenNumber === undefined){
            return "Error : Bro Where is the parameter"
        }else{
            return "Error : invalid data type"
        }
    }
}

console.log(checkTypeNumber("5"))