const dataPenjualanPakAldi = [
    {
        namaProduk : "Sepatu Futsal Nike Vapor Academy 8",
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90
    },
    {
        namaProduk : "Sepatu Warrior Tristan Black Brown High",
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37
    },
    {
        namaProduk : "Sepatu Warrior Tristan Maroon Hight",
        hargaSatuan : 360000,
        kategori : "Sepatu Sport",
        totalTerjual : 90
    },
    {
        namaProduk : "Sepatu Warrior Rainbow Tosca Corduroy",
        hargaSatuan : 120000,
        kategori : "Sepatu Sport",
        totalTerjual : 90
    },
]

const hitungTotalPenjualan = (dataPenjualan) => {
    let total = 0
    for (let i = 0; i < dataPenjualan.length; i++){
        total += dataPenjualan[i].totalTerjual
    }
    return total
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi))