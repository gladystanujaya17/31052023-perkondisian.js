// Perkondisian IF-ELSE IF-ELSE

// CONTOH 1
var nilai_ujian = 6

if (nilai_ujian > 10) {
    console.log('Error, nilai ujian max. 10')
} else if (nilai_ujian >= 8) {
    console.log('A')
} else if (nilai_ujian >= 7) {
    console.log('B')
} else if (nilai_ujian >= 6) {
    console.log('C')
} else {
    console.log('D')
}

// CONTOH 2

var tinggi_badan = 157

if (tinggi_badan > 200) {
    console.log('Alien ini org beneran')
} else if (tinggi_badan >= 190) {
    console.log('Alien jg sih tp masih oke deh')
} else if (tinggi_badan >= 180) {
    console.log('OKE SIH')
} else if (tinggi_badan >= 170) {
    console.log('NORMAL LAHYA')
} else if (tinggi_badan >= 160) {
    console.log('NORMAL LAHYA UNTUK CEWE')
} else if (tinggi_badan >= 150) {
    console.log('AGAK PENDEK SIH TP MASIH OKEDEH KL DI INDO')
} else {
    console.log('ya ini udah pendek sih kategorinya')
}