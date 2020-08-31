 

 const request=require("request");

 const geocod=(city,callback)=>{

 	const url="http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=4e6ec87ef755c0f8bb06ad0469764454&units=metric";

 	request({url:url, json :true},(err,response)=>{

 		if(err)
 		{
 			callback("unable to connect ",undefined);
 		}
 		else if(response.body.error)
 		{
 			callback("not find location! please try again ",undefined);
 		}

 		else
 		{
 			 
 			callback(undefined,{
 				// max_temp:response.body.list[0].main.max_temp,
 				// min_temp:response.body.list[0].main.min_temp

 				 weather_report:response.body.list[0].main,
 				 weather:response.body.list[0].weather,
 				 city:response.body.city,
 				 dateTime:response.body.list[0].dt_txt
 				 

 			});
 		}
 	})

 };

 const forecast_nextDay=(city,callback)=>{

 	const url="http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=4e6ec87ef755c0f8bb06ad0469764454&units=metric";

 	request({url:url, json :true},(err,response)=>{

 		if(err)
 		{
 			callback("unable to connect ",undefined);
 		}
 		else if(response.body.error)
 		{
 			callback("not find location! please try again ",undefined);
 		}

 		else
 		{
 			 
 			callback(undefined,{
 				// max_temp:response.body.list[0].main.max_temp,
 				// min_temp:response.body.list[0].main.min_temp

 				 forecast_weather_report:response.body.list[8].main,
 				 forecast_weather:response.body.list[8].weather,
 				 city:response.body.city,
 				 dateTime:response.body.list[8].dt_txt

 				 

 			});
 		}
 	})

 }

 module.exports={geocod,forecast_nextDay}