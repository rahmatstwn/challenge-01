const checkTypeNumber = (givenNumber) => {
    if ( typeof(givenNumber) %2 === 0 ){
        return "GENAP";
    }else if( typeof(givenNumber) %2 === 1 ){
        return "GANJIL";
    }else if( givenNumber === ('') ){
        return "Error: Bro where is the parameter"
    }else{
        return "Error: invalid data type"
    }
}

console.log(checkTypeNumber())