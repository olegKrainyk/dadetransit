setInterval(function(){

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var day = currentTime.getDate();
    var dayOfWeek = currentTime.getDay();
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth();

    // Add leading zeros
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    hours = (hours < 10 ? "0" : "") + hours;

    //day of week with num
    const daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    var expMonth;
    var expYear;
    if(month != 11){
        expMonth = (month+2);
        expYear = year;
    } else if(month = 11) {
        expMonth = 1;
        expYear = (year+1);
    }
    // Compose the string for display
    var currentTimeString = hours + " : " + minutes + " : " + seconds;
    var currentDay = daysOfWeek[dayOfWeek] +" "+day;
    var expireDate = "Expires: "+ (expMonth)+"/1"+"/"+ expYear;
    $(".time").html(currentTimeString);
    $(".date").html(currentDay);
    $(".expires").html(expireDate);



},1000);