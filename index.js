
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

