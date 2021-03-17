let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");

let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', (e) =>
{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';
});

const getWeather = async (city) =>
{
    try {
        const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e61e6aa71179ca785569892f7ba6e4ce`,
        {mode: 'cors'}
        );
    
    const weatherData = await response.json();
    const {name} = weatherData;
    const {feels_like} = weatherData.main;
    const {id,main} = weatherData.weather[0];

    loc.textContent =name;
    climate.textContent=main;
    tempvalue.textContent=Math.round(feels_like-273);
    if( id<=209 && id>=200)
    {
        tempicon.src ="/icons/storm.png";
    }
    else if( id<=229 && id>=211)
    {
        tempicon.src ="/icons/thunder.png";
    }
    else if( id<=499 && id>=300)
    {
    tempicon.src ="/icons/rainy.png";
    }
    else if( id<=599 && id>=500)
    {
    tempicon.src ="/icons/heavyrain.png";
    }
    else if( id<=699 && id>=600)
    {
        tempicon.src ="/icons/snow.png";
    }
    else if( id<=780 && id>=700)
    {
        tempicon.src ="/icons/wind.png";
    }
    else if( id === 781)
    {
        tempicon.src ="/icons/tornado.png";
    }
    else if( id === 800)
    {
        tempicon.src ="/icons/clear.png";
    }
    else if( id<900 && id>=801)
    {
        tempicon.src ="/icons/cloud.png";
    }
    }
    catch (error)
    {
    alert('City not found');
    }  
};
                
window.addEventListener("load" , () => {
    let lon;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) => {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        const proxy ="https://cors-anywhere.herokuapp.com/";
            const api =`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e61e6aa71179ca785569892f7ba6e4ce`
            fetch(api).then((response)=> {
                return response.json();
            })
            .then(data => {
                    const { name } = data;
                    const { id, main} = data.weather[0];
                    const { feels_like } = data.main;

                    loc.textContent = name;
                    climate.textContent= main;
                    tempvalue.textContent = Math.round(feels_like-273);
                    if( id<=209 && id>=200)
                    {
                        tempicon.src ="/icons/storm.png";
                    }
                    else if( id<=229 && id>=211)
                    {
                        tempicon.src ="/icons/thunder.png";
                    }
                    else if( id<=499 && id>=300)
                    {
                        tempicon.src ="/icons/rainy.png";
                    }
                    else if( id<=599 && id>=500)
                    {
                        tempicon.src ="/icons/heavyrain.png";
                    }
                    else if( id<=699 && id>=600)
                    {
                        tempicon.src ="/icons/snow.png";
                    }
                    else if( id<=780 && id>=700)
                    {
                        tempicon.src ="/icons/wind.png";
                    }
                    else if( id === 781)
                    {
                        tempicon.src ="/icons/tornado.png";
                    }
                    else if( id === 800)
                    {
                        tempicon.src ="/icons/clear.png";
                    }
                    else if( id<900 && id>=801)
                    {
                        tempicon.src ="/icons/cloud.png";
                    }

                })
        })
    }
})
