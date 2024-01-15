const numberOfStepsNumbersToZero = (number) =>{

    let cnt=0;
    while(number!=0){
        if(number%2==0){
            number /= 2;
            cnt++;
        }
        else{
            number-=1;
            cnt++;
        }
    }

    return cnt;
}

console.log(numberOfStepsNumbersToZero(123));