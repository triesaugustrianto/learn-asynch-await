// ASYNCH-AWAIT

// 1. asynch-await pengecekan angka
const check = (number) =>{//membuat function check dengan parameter number
    return new Promise((resolve, reject) => {//mengembalikan function promise dengan parameter resolve dan reject
        if(number >= 0)// melakukan pengecekan number yang telah diberi nilai pada function asynch
            resolve('angka positive')//mengembalikan nilai jika kondisi true
        
        reject('angka negative')//mengembalikan nilai jika kondisi false
    })
}

const tampil = async() => {//membuat variabel tampil dengan nilai asynch
    try{
        let pesan = await check(1)//membuat variabel pesan dengan nilai function check berupa awaitdan bernilai 1
        console.log (pesan)
    } catch (pesan){
        console.log(pesan)
    }
}
tampil()

/*
output :
angka positive

function tampil tidak akan di eksekusi sebelum funtion check selesai di eksekusi(tidak terjadi race condition)
*/

//2. Asynch-await menambah nilai array di akhir
const arr = [2,3,4,5]
console.log('array awal : ', arr)
const hapusArr = () => {
    return new Promise((resolve, reject) => {
        resolve('nilai berhasil ditambahkan')

        reject('gagal tampilkan array')
    })
}

const show = async() => {
    try{
        let tes = await hapusArr(arr.push(3))
        console.log(tes)
        console.log(arr)
    } catch(e) {
        console.log(e)
    }
}
show()

/*
output :
array awal :  [ 2, 3, 4, 5 ]
nilai berhasil ditambahkan
[ 2, 3, 4, 5, 3 ]
*/

//3. Asynch-await menambah nilai array biodata yang berupa objek

const biodata = []

const objBio = {
    nama : 'Tries',
    umur : 27,
    alamat : 'Bekasi',
}
const tambahBio = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('berhasil')

            reject('bio gagal ditambhakan')
        }, 5000)

    })
}
const tampil = async() => {
    try{let pesan = await tambahBio(biodata.push(objBio))
        console.log(pesan)
        console.log(biodata)
    } catch(error){
        console.log(error)
    }
}
tampil()

/*
output :
berhasil
[ { nama: 'Tries', umur: 27, alamat: 'Bekasi' } ]
*/