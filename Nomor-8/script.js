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

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

const getInfoPenjualan = (dataPenjualan) => {
    let totalKeuntungan = 0, totalModal = 0, Keuntungan = 0, persentaseKeuntungan = 0, terbanyak = 0, terbanyak2 = 0;
    let namaTerbanyak
    let penulisTerlaris, penulisTerlarisKembar
    let tmp = 0
    for ( let i = 0; i < dataPenjualanNovel.length; i++){
            totalModal += dataPenjualanNovel[i].hargaBeli * (dataPenjualanNovel[i].totalTerjual + dataPenjualanNovel[i].sisaStok)
            Keuntungan += dataPenjualanNovel[i].hargaJual * dataPenjualanNovel[i].totalTerjual
            if(terbanyak < dataPenjualanNovel[i].totalTerjual){
                terbanyak = dataPenjualanNovel[i].totalTerjual
                namaTerbanyak = dataPenjualanNovel[i].namaProduk
                penulisTerlaris = dataPenjualanNovel[i].penulis
            }
    }
    for ( let i = 0; i < dataPenjualanNovel.length; i++){
        for( let j = i+1; j < dataPenjualanNovel.length; j++){
            if (dataPenjualanNovel[i].penulis === dataPenjualanNovel[j].penulis){
                terbanyak2 = dataPenjualanNovel[i].totalTerjual + dataPenjualanNovel[j].totalTerjual
                if (terbanyak2 > terbanyak){
                    terbanyak = terbanyak2
                    penulisTerlarisKembar = dataPenjualanNovel[i].penulis
                    penulisTerlaris = penulisTerlarisKembar
                }else if ( terbanyak2 < terbanyak ){
                    penulisTerlaris
                }
            }
        }
    }
        
   
    

    totalKeuntungan = Keuntungan - totalModal
    persentaseKeuntungan = totalKeuntungan/totalModal * 100

    return {
          totalKeuntungan : rupiah(totalKeuntungan),
          totalModal : rupiah(totalModal),
          persentaseKeuntungan : persentaseKeuntungan.toFixed(1) + " %",
          produkBukuTerlaris : namaTerbanyak,
          penulisTerlaris : penulisTerlaris,
          terbanyak : terbanyak,
          terbanyak2 : terbanyak2,
          tmp : tmp
    }
    
}

console.log(getInfoPenjualan(dataPenjualanNovel))