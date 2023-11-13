function solve(n,m) {

    let discount = n * 0.1;

    let remaining = n - discount;

    if (m === remaining) {
        console.log("EITHER");
    } else if (m > remaining) {
        console.log("ONLINE");
    } else {
        console.log("DINING");
    }
}


solve(100,90);
