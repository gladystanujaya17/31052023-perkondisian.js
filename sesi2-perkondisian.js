// Pekondisian IF-ELSE


// CONTOH 1
var angka = 1

if (angka == 1){
    //True
    console.log('Angka 1')
} else {
    //False
    console.log('Bukan angka 1')
}

console.log(angka == 1) // -> hasilnya True karena var angka diset jadi 1

// CONTOH 2
var presiden_soekarno_urutanke = 1
var presiden_soeharto_urutanke = 2
var presiden_habibie_urutanke = 3
var presiden_gusdur_urutanke = 4
var presiden_megawati_urutanke = 5
var presiden_sby_urutanke = 6
var presiden_jokowi_urutanke = 7

if (presiden_habibie_urutanke <= 4){
    console.log('Benar')
} else {
    console.log('Salah')
}

// CONTOH 3
var menu1 = 'mie'
var menu2 = 'kwetiaw'
var menu3 = 'bihun'

if (menu1 == 'mie'){
    console.log('Benar, langsung gas pesen')
} else {
    console.log('Salah, cari lagi pesanannya')
}