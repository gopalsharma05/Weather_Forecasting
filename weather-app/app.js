 const request=require("request");
 const {geocod,forecast_nextDay}=require("./utils/geocod")
 // kota city weather repoprts url from openweathermapapi in hindi,unit=metric means ,we want temp in celsius
 // according to doc of weathermap api , you can use the doc for more flexibility
 // fore case to get weather report for future also
 // const url="http://api.openweathermap.org/data/2.5/forecast?q=kota&appid=4e6ec87ef755c0f8bb06ad0469764454&units=metric";
 // request({url:url,json:true},(err,response)=>
 // {
 // 		// we use json:true so that we get direct json data which we can use like object
 // 		  if(err)
 // 		  	console.log("not able to connect to api")
 // 		  else if(response.body.error)
 // 		  {
 // 		  	console.log("unable to find location")
 // 		  }
 // 		  else
 // 		  {
 // 		//console.log(response.body);  // it will giving us weather information for 5 days in a list
 // 											// we are accessing the first day 

 // 		console.log("date and time for the first day of weather report  of kota is "+
 // 			response.body.list[0].dt_txt+" and other important imformation is ",response.body.list[0].main)
	// 	}

 // })


 // if we want to check weather for many city , we have to write aboove code many times
 // so we will put above code in fucntion and call them from the geocode file of the utils

 const cityname=process.argv[2];
 if(!cityname)
 {
 	console.log("please provid the city name for which you want to see weather report");
 }
 else
 {
 	geocod(cityname,(error,{city})=>  // taking 'cityname' from the command line for 
 										// the weather report which we want to see the										// also city is there in reponse in the geocode function
 {
 		if(error)
	 	{
	 		console.log(err);
	 	}
 		// console.log("error: ",error);
 		// console.log("data: ",res);
 		// calling forecast inside this so that forcast will print after the current data
	 forecast_nextDay(city.name,(error,forecastdata)=>   // we use the city (res.city.name)
	 														// data for the of the current
	 														// forecast weather report of the
	 {
	 	if(error)
	 	{
	 		console.log(err);
	 	}
	 		 
	 		console.log("data: ",forecastdata);

	 }) 

 })





 }
 