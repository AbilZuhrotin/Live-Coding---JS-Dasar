let angka = [8,3,9,2,5]
// console.log(angka)

function cariAngka (){
    let nilaiAngka = angka;

    for (nilaiAngka; nilaiAngka === 3; nilaiAngka++){
        return(nilaiAngka);
    }


    if (angka === 3){
        console.log(angka);
    } else if (angka !== 3){
        console.log("tidak ada");
    } else{
        console.log("inputan harus angka");
    }
}

cariAngka();