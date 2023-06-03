// Perkondisian DOUBLE (AND && ATAU OR ||)

// CONTOH 1
var cuaca = 'hujan'
var jalanan = 'lancar'

if (cuaca == 'terang' || jalanan == 'lancar') {
    console.log('letsgaur jalan-jalan')
} else {
    console.log('SEKIP DEH BEBS')
}
//-> hasilnya letsgaur jalan-jalan

// CONTOH 2
if (cuaca == 'terang' && jalanan == 'lancar') {
    console.log('letsgo cabut jalan')
} else {
    console.log('SKIP DEH')
}
// -> hasilnya SKIP DEH