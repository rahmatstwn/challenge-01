const dataPenjualanNovel = [
    {
        idProduk : "BOOK002421",
        namaProduk : "Pulang - Pergi",
        penulis : "Tere Liye",
        hargaBeli : 60000,
        hargaJual : 86000,
        totalTerjual : 150,
        sisaStok : 17
    },
    {
        idProduk : "BOOK002351",
        namaProduk : "Selamat Tinggal",
        penulis : "Tere Liye",
        hargaBeli : 75000,
        hargaJual : 103000,
        totalTerjual : 171,
        sisaStok : 20
    },
    {
        idProduk : "BOOK002941",
        namaProduk : "Garis Waktu",
        penulis : "Fiersa Besari",
        hargaBeli : 67000,
        hargaJual : 99000,
        totalTerjual : 213,
        sisaStok : 5
    },
    {
        idProduk : "BOOK003091",
        namaProduk : "Laskar Pelangi",
        penulis : "Andrea Hirata",
        hargaBeli : 55000,
        hargaJual : 68000,
        totalTerjual : 20,
        sisaStok : 56
    }

]

const getInfoPenjualan = (dataPenjualan) => {
    let totalKeuntungan = 0, totalModal = 0, Keuntungan = 0, persentaseKeuntungan = 0, terbanyak = 0;
    let namaTerbanyak, penulisTerlaris;
    for ( let i = 0; i < dataPenjualanNovel.length; i++){
        totalModal += dataPenjualanNovel[i].hargaBeli * (dataPenjualanNovel[i].totalTerjual + dataPenjualanNovel[i].sisaStok)
        Keuntungan += dataPenjualanNovel[i].hargaJual * dataPenjualanNovel[i].totalTerjual
        if(terbanyak < dataPenjualanNovel[i].totalTerjual){
            terbanyak = dataPenjualanNovel[i].totalTerjual
            namaTerbanyak = dataPenjualanNovel[i].namaProduk
            penulisTerlaris = dataPenjualanNovel[i].penulis
        }

    }
    totalKeuntungan = Keuntungan - totalModal
    persentaseKeuntungan = totalKeuntungan/totalModal * 100

    return {
          totalKeuntungan : totalKeuntungan,
          totalModal : totalModal,
          persentaseKeuntungan : persentaseKeuntungan.toFixed(1) + " %",
          produkBukuTerlaris : namaTerbanyak,
          penulisTerlaris : penulisTerlaris
    }
    
}

console.log(getInfoPenjualan(dataPenjualanNovel))