// Buatlah rekursive function yang dapat menghasilkan angka seperti ini
// f(1) = 3
// f(2) = 6
// f(3) = 12
// f(4) = 24
// f(5) = 48
// f(n) = ...
//latihan 3

function func(input){
    if (input==1){
        return 3;
    }
    else{
        return func(1)*(2**(input-1));
    }
}

console.log(func(5));
