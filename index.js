const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".weather-container");
const grantAccesContainer=document.querySelector(".grant-location-container");
const searchform=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInFoContainer=document.querySelector(".user-info-container");

let currTab=userTab;
let API_KEY="bb2e0f98535182b047bb44a7135a9fc5";
currTab.classList.add("current-tab"); 
getfromSessionStorage();  

function switchTab(clickedTab)
{
   if(clickedTab!=currTab)
   {
    currTab.classList.remove("current-tab");
    currTab=clickedTab;
    currTab.classList.add("current-tab");

    if(!searchform.classList.contains("active"))
    {
        userInFoContainer.classList.remove("active");
        grantAccesContainer.classList.remove("active");
        searchform.classList.add("active");
    }
    else{
        // pahle hm search bale pe tha ,ab hm your weather par switch karege
        searchform.classList.remove("active");
        userInFoContainer.classList.remove ("active");

        // ab hm your weather tab par aa gya hu , toh weather bhi display karna padega ,so let's check storage first
        // for coordinates,if we have saved them there
        getfromSessionStorage();
      
          

    }
     
   }
}

userTab.addEventListener('click',()=>
{
    switchTab(userTab)
});

searchTab.addEventListener('click',()=>
{
    switchTab(searchTab);
});

// check if cordinated are already present in session storage
function getfromSessionStorage()
{
    const localCoordinates=sessionStorage.getItem("user-coordinates");
    if(!localCoordinates)
    {
        grantAccesContainer.classList.add("active");
    }
    else
    {
        const coordinates=JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
 }


 async function fetchUserWeatherInfo(coordinates )
{
    const{lat,lon}=coordinates;
    //make container invisible
    grantAccesContainer.classList.remove("active");
    // maker loader vissible
    loadingScreen.classList.add("active")
    // ApI call 
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`);
        const data = await response.json();

          loadingScreen.classList.remove("active");
           userInFoContainer.classList.add("active");
           renderWeatherInfo(data);
    }
    catch(err)
    {
        loadingScreen.classList.remove("active");
        console.log("this code has an error 404");
    }
}

function renderWeatherInfo(weatherInfo)
 {
    //firstly,we have to fetch the element  
    const cityName =document.querySelector("[data-cityName]");
    const countryIcon=document.querySelector("[data-country-icon]");
    const desc=document.querySelector("[data-weatherDesc]");
    const weatherIcon=document.querySelector("[data-weatherIcon]");
    const temp=document.querySelector("[data-temp]");
    const windspeed=document.querySelector("[data-windspeed]");
    const humidity=document.querySelector("[data-humidity]");
    const cloudness=document.querySelector("[data-cloudiness]")

    //  fetch value from weatherINfo object and put it UI element
    cityName.innerText=weatherInfo?.name;
    countryIcon.src=`https://flagcdn.com/144/108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText=weatherInfo?.weather?.[0] ?.description;
    weatherIcon.src=`https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText=weatherInfo?.main?.temp;
    windspeed.innerText=weatherInfo?.wind?.speed;
    humidity.innerText=weatherInfo?.main?.humidity;
    cloudness.innerText=weatherInfo?.clouds?.all; 

 }


function getlocation()
{
    if(navigator.geolocation )
    {
        navigator.geolocation.getCurrentPosition(showPosition);

    }
    else
    {
      alert("sorry No position is found")
    }

}

function showPosition(position)
{
   const usercordinates=
   {
    
    lat:position.coords.latitude,
    lon:position.coords.longitude,


     }
     sessionStorage.setItem("user-coordinates", JSON.stringify(usercordinates));
}

 const grantAxcessBtn=document.querySelector("[data-grantAccess]");
  grantAccesContainer.addEventListener('click',getlocation);


  let searchInput=document.querySelector("[data-searchInput]");
   searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName==="")
    {
        return ;
    }
else
{
    fetchSearchWeatherInfo(cityName);
}
   })

  async function fetchSearchWeatherInfo(city)
   { 
    loadingScreen.classList.add("active");
    userInFoContainer.classList.remove("active");
    grantAccesContainer.classList.remove("active");

    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb2e0f98535182b047bb44a7135a9fc5&units=metric
`);
    const data = await response.json();

        loadingScreen.classList.remove("active");
        userInFoContainer.classList.add("active");
           renderWeatherInfo(data)
    }
    catch(error  )
    { 
    loadingScreen.classList.remove("active");
    console.log("this code has an error 404");
   }