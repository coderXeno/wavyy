module.exports=function msToTime(duration,format){
    var seconds=Math.floor((duration/1000)%60);
    var minutes=Math.floor((duration/(1000*60))%60);
    var hours=Math.floor((duration/(1000*60*60))%24);
    var days=Math.floor((duration/(1000*60*60*24))%24);

    days=(days<10)?"0"+days:days;
    hours=(hours<10)?"0"+hours:hours;
    minutes=(minutes<10)?"0"+minutes:minutes;
    seconds=(seconds<10)?"0"+seconds:seconds;

    if(format==="hh:mm:ss"){
        return `${hours}:${minutes}:${seconds}`;
    }else if(format==="dd:hh:mm:ss"){
        return `${days}:${hours}:${minutes}:${seconds}`;
    }
}

/**
 * taking duration and format as args
 * storing variables and calculating the amount of time in days,hours,minutes,seconds
 * then display the total time in hours,minutes,seconds
 * else display the total time in days,hours,minutes,seconds 
 */