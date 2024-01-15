const findCaseType = (r1, c1, r2, c2) => {
    r1 = Math.abs(r1 - r2);
    c1 = Math.abs(c1 - c2);

    if (r1 === c1) {
        return "1";
    } else {
        if ((r1 % 2 === 0) === (c1 % 2 === 0)) {
            return "2";
        } else {
            return "impossible";
        }
    }
};

console.log(findCaseType(1,1,5,3));