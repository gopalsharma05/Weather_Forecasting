

console.log("client side javascript code is loaded!")




const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const ms1=document.getElementById('m-1');
const ms2=document.getElementById('m-2');

weatherform.addEventListener('submit',(e)=>{
	e.preventDefault()  
	const city=search.value;
	// console.log(city)
		

	fetch("http://localhost:3000/weather?address="+city).then((response)=>{
	response.json().then((data)=>{
		if(data.error)
		{
			console.log(data.error)
		}
		else
		{
			ms1.innerHTML="maxm temperature for tommorow will be "+data.max_temp +" and  minimum temperature will be"+data.max_temp;
			ms2.innerHTML =(JSON.stringify(data.weather));
			 		 

		}

	})
})

})
