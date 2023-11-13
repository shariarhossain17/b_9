function solve(arr) {
  
    arr.sort((a, b) => b - a);

    let max = arr[0];
    let sum = 0;

    for (let i = 1; i < 4; i++) {
        sum += arr[i];
    }

    if (sum < max) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
const arr=[100,90,3,4]
solve(arr);