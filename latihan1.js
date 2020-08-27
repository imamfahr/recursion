// Buatlah rekursive function untuk menghitung angka faktorial
// Contoh perhitungan angka faktorial:
// 4! = 4 * 3!
// 4! = 4 * 3 * 2!
// 4! = 4 * 3 * 2 * 1
// 4! = 24

//latihan 1
function factorial(n){
    if(n<0){
    return;
    }
    else if(n===0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

console.log(factorial(5));



