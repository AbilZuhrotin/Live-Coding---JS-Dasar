let angka = [8,3,9,2,5]
// console.log(angka)

function cariAngka (){
    let nilaiAngka = angka;

    for (nilaiAngka; nilaiAngka === 3; nilaiAngka++){
        console.log(nilaiAngka);
    }


    if (angka === 3){
        return(angka);
    } else if (angka !== 3){
        console.log("tidak ada");
    } else{
        console.log("inputan harus angka");
    }
}

cariAngka();