function solve(n,m) {
    

    let totalBalls = m * 6;
    let runsInOver = totalBalls * 6;

    if (n <= runsInOver) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}


solve(30,1);
