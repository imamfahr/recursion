// Buatlah rekursive function yang dapat menampilkan deret angka genap
// sampai N input.
// Contoh:
// Jika diberi argumen angka 5, maka hasilnya adalah 0 2 4

//latihan 2
function printEven(lim){
    if (lim%2==0){
        if(lim==0){
            return;
        }
        else{
            printEven(lim-2)
            console.log(lim-2);
        }
    }
    if(lim%2==1){
        if(lim==1){
            console.log(0)
        }
        else{
            printEven(lim-2)
            console.log(lim-1);
        }
    }
}

console.log(printEven(21))