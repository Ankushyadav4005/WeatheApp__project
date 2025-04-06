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
          const data=await response.JSON();
          loadingScreen.classList.remove();
           userInFoContainer.classList.visible();
           renderWeatherInfo(data);
    }
    catch(err)
    {
        loadingScreen.classList.remove();
        console.log("this code has an error 404");
    }
}

function renderWeatherInfo(weather)
 {
    //firstly,we have to fetch the element  
    const cityName =document.querySelector("[data-cityName]");
    const countryIcon=document.querySelector("[data-country-icon]");
    const desc=document.querySelector("[data-weatherDesc]");
    const weatherIcon=document.querySelector("[data-weatherIcon]");
    const temp=document.querySelector("[data-temp]");
    const windspeed=document.querySelector("[data-windspeed]");
    const humidity=document.querySelector("[data-humidit]");
    const cloudness=document.querySelector("[data-cloudiness]")

    //  fetch value from weatherINfo object and put it UI element
    


 }