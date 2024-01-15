const lift = (myPosition,liftPosition) => {


    if(myPosition===0 && liftPosition===0){
        return 0;
    }
    let timeTakenByMeToEnter = 5;
    let timeTakenByMeToExit = 5;
    let timeTakenByLiftToOpen = 3;
    let timeTakenByLiftToClose = 3;
    
    let timeTakenByLiftToReachMyFloor = Math.abs(myPosition - liftPosition) * 4;
    let timeTakenByLiftToReachGroundFloorFromMyFloor = myPosition * 4;
    
    let ans = timeTakenByLiftToReachMyFloor + timeTakenByLiftToOpen + timeTakenByMeToEnter + timeTakenByLiftToClose + timeTakenByLiftToReachGroundFloorFromMyFloor + timeTakenByLiftToOpen + timeTakenByMeToExit;

    return ans;
}

console.log(lift(1,2));