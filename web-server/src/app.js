const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs")
const {geocod,forecast_nextDay}=require("./utils/geocod")

// console.log(__dirname);
const publicDirPath=path.join(__dirname,"../public");	
const viewDirPath=path.join(__dirname,"../templates/views");
const partialDirPath=path.join(__dirname,"../templates/partials");
// console.log(publicDirPath)

//  with this below line express will look for the match with the publicDirectory and use that 
// as home directory(i.e app.com) as file has special name (index.html) 
app.use(express.static(publicDirPath));
app.set('view engine','hbs');
app.set('views',viewDirPath);
hbs.registerPartials(partialDirPath)

app.get('',(req,res)=>{
	res.render('index',{
		title:"weather home",
		name:"rohit sharma"
	})
})

app.get("/help",(req,res)=>{
	res.render('help', {
			title:"help",
			name:"rohit sharma"
		 
	})
})

app.get("/about",(req,res)=>{
	res.render('about',{

		title:"about",
		name:"rohit sharma",
		age:21
	})
})

app.get("/weather",(req,res)=>{

	if(!req.query.address)
	{
		return res.send("please provide the address or city name for weather report")
	}

	geocod(req.query.address,(error, {city} )=>   
 	{
 		if(error)
	 	{
	 		return res.send(err);
	 	}
 		// console.log("error: ",error);
 		// console.log("data: ",res);
 		// calling forecast inside this so that forcast will print after the current data
	 forecast_nextDay(city.name,(error,forecastdata)=>   // we use the city (res.city.name)
	 														// data for the of the curren													// forecast weather report of the
	 {
	 	if(error)
	 	{
	 		return res.send(error); 
	 	}
	 		 
	 		// res.send("data: ",forecastdata);

	 		res.send({
	 			 weather:forecastdata.forecast_weather,
	 			 weather_rep:forecastdata.forecast_weather.main,
	 			 max_temp:forecastdata.forecast_weather_report.temp_max,
	 			 min_temp:forecastdata.forecast_weather_report.temp_min,
	 			 city_name:forecastdata.city.name
	 		})

	 }) 

 })

	  
})


app.get("/product",(req,res)=>{

	if(!req.query.search)   // if search query is not present
	{
			return res.send("please provide search query");
	}
	// console.log(req.query)

	res.send({
		product:[]
	})
})


// if we want to access the page inside the help page  which do not exist the below code will execute
app.get("/help/*",(req,res)=>{
	res.render('404',{
		title:"help error",
		errormsg:"article not found in help",
		name:"rohit sharma"
	})
})

// if we want to access the page which do not exist the below code will execute
app.get("*" ,(req,res)=>{
	res.render('404',{
		title:"error 404",
		errormsg:"page is not found",
		name:"rohit sharma "
	})
})

app.listen(3000,()=>{
	console.log("app is listening");
})