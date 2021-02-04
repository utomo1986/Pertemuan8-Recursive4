/*
4. Buatlah rekursive function (return) yang dapat menghasilkan angka seperti ini

// 0 -> 0
// 1 sampai 15  -> 1 
//16 sampai 30 -> 2 
// 31 sampai 45 -> 3 
// dst

*/

function interval(n) {
    if (n <= 0) {
        return 0
    } else {
        return interval(n - 15) + 1
    }
}

console.log(interval(0));
console.log(interval(5));
console.log(interval(20));
console.log(interval(35));