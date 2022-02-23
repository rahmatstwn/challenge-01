const getAngkaTerbesarKedua = (dataAngka) => {
    let hasilSorting = dataAngka.sort((a,b) => {
        return a - b
    })
    return hasilSorting[dataAngka.length - 2]
}

const dataAngka = [100,87,65,58,109,20,30,41]
console.log(getAngkaTerbesarKedua(dataAngka))