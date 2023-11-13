function solve(x, y, z) {
  const total_min = x * y;
  const total_day = z * 24 * 60;

  if (total_min <= total_day) {
    console.log("SUCCESS");
  } else {
    console.log("FAILURE");
  }
}

solve(5, 10, 3);
