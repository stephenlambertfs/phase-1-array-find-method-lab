// code your solution here
function superbowlWin(obj){
    let c = obj.find((val) => val.result == "W");
    if(c){
        return c.year;
    }
    else{
        return undefined;
    }
}
