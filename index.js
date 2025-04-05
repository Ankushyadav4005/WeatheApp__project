// console.log("hello Ankush yadav");


//   function renderWeatherInfo( data) 
//   {
//     console.log("weather data:->",data);

// let newPara=document.createElement('p');
// newPara.textContent= `${data?.main?.temp.toFixed(2)} °C`;
// document.body.appendChild(newPara);
 
//   }
// async function showWeather()
// {
//     try{
    

// let city="delhi";
// let API_KEY="bb2e0f98535182b047bb44a7135a9fc5";
// const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
// const data=  await response.json();
// // console.log("weather data:->",data);

// // let newPara=document.createElement('p');
// // newPara.textContent= `${data?.main?.temp.toFixed(2)} °C`;
// // document.body.appendChild(newPara);
 
//      renderWeatherInfo(data);

//     }

// catch(error)
// {
// // handle the error here 
// }



// }




// function getWeather(result)
// {
//   console.log(result);
//   const newparaGraph= document.createElement('p');
//   newparaGraph.innerText=`${result?.main?.temp.toFixed(2)} °C`;
//   document.body.appendChild(newparaGraph);

// }


//  async function getCustomWeatherDetail()
// {

//   try{
//     const  lat=77.2167;
//     const lon=28.6667;
//     let API_KEY="bb2e0f98535182b047bb44a7135a9fc5";
//     const response=  await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
//     const result=  await response.json();

//       getWeather(result);

//   }
//     catch(e)
//     {
//       console.log("this function get error ",e);
//     }

   
// }



const userTab=document.querySelector("[data-userWeather]");
const sesrchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".weather-container");
const grantAccesContainer=document.querySelector(".grant-location-container");
const searchform=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInFoContainer=document.querySelector(".user-info-container");
