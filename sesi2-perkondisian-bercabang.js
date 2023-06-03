// Perkondisian Bercabang

// CONTOH 1
// -> melamar kerja
var umur = 18
var jeniskelamin = 'pria'
var agama = 'kristen'

//harus agama kristen
//min umur 25
//jenis kelamin pria
//tinggi minimal 160 (opsional)

if (agama == 'kristen'){
    if (umur >= 25) {
        if (jeniskelamin = 'pria'){
            console.log('Anda lolos')
        } else {
            console.log('Anda bukan pria')
        }
    } else {
        console.log('Anda terlalu muda')
    }
} else {
    console.log('Anda bukan kristen, harus kristen agar bisa masuk saat idul fitri')
}

// CONTOH 2
// -> melamar kerja
var umur = 30
var jeniskelamin = 'pria'
var agama = 'buddha'

//harus agama kristen
//min umur 25
//jenis kelamin pria
//tinggi minimal 160 (opsional)

if (agama == 'kristen') {
    if (umur >= 25) {
        if (jeniskelamin = 'pria') {
            console.log('Anda lolos')
        } else {
            console.log('Anda bukan pria')
        }
    } else {
        console.log('Anda terlalu muda')
    }
} else {
    console.log('Anda bukan kristen, harus kristen agar bisa masuk saat idul fitri')
}

// CONTOH 3 
// -> melamar kerja
var umur = 30
var jeniskelamin = 'pria'
var agama = 'kristen'

//harus agama kristen
//min umur 25
//jenis kelamin pria
//tinggi minimal 160 (opsional)

if (agama == 'kristen' && umur >= 25 && jeniskelamin == 'pria'){
    console.log('Anda lolos')
} else {
    console.log('Tidak sesuai kriteria')
}
    