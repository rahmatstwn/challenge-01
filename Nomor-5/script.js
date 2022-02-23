const getSplitName = (personName) => {
    if(typeof personName === 'string'){
    const hasilSplit = personName.split(" ")
        if (hasilSplit.length > 3){
            return "Error nama > 3"
        }else if (hasilSplit.length === 3){
            return {
                firstname : hasilSplit[0],
                secondname : hasilSplit[1],
                lastname  : hasilSplit[2]
            }
        }else if (hasilSplit.length === 2){
            return {
                firstname : hasilSplit[0],
                secondname : null,
                lastname  : hasilSplit[1]
            }
        }else {
            return {
                firstname : hasilSplit[0],
                secondname : null,
                lastname  : null
            }
        }
    }else if (personName === undefined){
        return "Person Name must included"
    }
}
console.log(getSplitName("Rahmat Setiawan Tabuti"))
console.log(getSplitName("Rahmat Setiawan"))
console.log(getSplitName("Rahmat"))
console.log(getSplitName("Rahmat Setiawan Rudy Tabuti"))
console.log(getSplitName())