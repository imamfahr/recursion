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

