function update(){
	var dateobj = new Date();

	/* ------Define Year,Month,Day,Hour,Minutes,Seconds Begin------ */
	var year = dateobj.getFullYear();
	var month = dateobj.getMonth();
	var day = dateobj.getDate();
	var hour = dateobj.getHours();
	var minutes = dateobj.getMinutes();
	var seconds = dateobj.getSeconds();
	var week = dateobj.getDay();
	/* ------Define End------*/

	var WeekName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];   //Store WeekName parameters
	var MonthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]; //Store MonthName parameters

	//The result to be printing(If the Month,Date,Hour,Minutes,Seconds are less than 10,add additional "0" String)
	var Realtime = (hour<10?"0"+hour:hour) + ":" + (minutes<10?"0"+minutes:minutes) + ":" + (seconds<10?"0"+seconds:seconds);  
	var ToDay = year + " " + MonthName[month] + " " + (day>10?day:"0"+day);

	document.getElementById("timer").innerHTML = ToDay + "<br>" + Realtime + "<br>" + WeekName[week]; //Print the result
}

setInterval(update,500);
