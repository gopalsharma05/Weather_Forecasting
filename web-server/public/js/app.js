

console.log("client side javascript code is loaded!")




const weatherform=document.querySelector('form')
const search=document.querySelector('input')

weatherform.addEventListener('submit',(e)=>{
	e.preventDefault()  
	const city=search.value;
	// console.log(city)
			const ms1=document.getElementById('m-1');
			const ms2=document.getElementById('m-2');

	fetch("http://localhost:3000/weather?address="+city).then((response)=>{
	response.json().then((data)=>{
		if(data.error)
		{
			console.log(data.error)
		}
		else
		{
			ms1.innerHTML=data.max_temp;
			ms2.innerHTML=data.weather_rep;
		  
			 

		}

	})
})

})
