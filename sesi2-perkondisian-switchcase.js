// Perulangan SWITCH-CASE

// CONTOH 1

//switch case jangan lupa pakai break pada setiap case dan default
var pesanan = 'es teh manis'

switch(pesanan) {
    case 'air mineral':
        console.log('Anda pesan kopi')
        break;
    case 'es teh manis':
        console.log('Anda pesan es teh manis')
        break;
    case 'kopi':
        console.log('Anda pesan kopi')
        break;
    default:
        console.log('Minuman tidak ada di menu')
        break;
}

// CONTOH 2

//switch case jangan lupa pakai break pada setiap case dan default
var pesanan = 'lemon tea'

switch(pesanan) {
    case 'air mineral':
        console.log('Anda pesan kopi')
        break;
    case 'es teh manis':
        console.log('Anda pesan es teh manis')
        break;
    case 'kopi':
        console.log('Anda pesan kopi')
        break;
    default:
        console.log('Minuman tidak ada di menu')
        break;
}

// CONTOH 3

var angka = 3

switch(angka) {
    case 1:
        console.log('Angka 1')
        break;
    case 2:
        console.log('Angka 2')
        break;
    case 3:
        console.log('Angka 3')
        break;
    default:
        console.log('Tidak ada angka lagi')
        break;
}