# Error Handling

## Try .. Catch

> try ... catch merupakan statement untuk menguji ketika program memungkinkan melakukan kesalahan, dan dilakukan suatu tindakan untuk mengatasi kesalahan tersebut.

```sh
try {
  // code may cause error
} catch(error){
  // code to handle error
}
```

Pada blok try, disana untuk menguji baris kode error. Jika error terjadi, maka program langsung menjalankan kode blok catch. Pada block catch dapat ditemukan error apa yang terjadi dan dijelaskan secara detail.

## Finaly

Statement ini merupakan opsional dari try...catch. yang dimana blok kode yang berada didalam statement finally, akan tetap dijalankan walaupun ada error atau tidak.

```sh
function test(){
  try {
    return 1;
  } catch(error) {
    return 2;
  } finally {
    return 3;
  }
}
console.log(test());
```
