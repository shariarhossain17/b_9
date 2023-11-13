function solve(n) {
  if (n % 2 === 0 && n % 7 === 0) {
    console.log("Ronaldo");
  } else if (n % 2 !== 0 && n % 9 === 0) {
    console.log("Halland");
  } else {
    console.log("Messi");
  }
}

solve(126);
