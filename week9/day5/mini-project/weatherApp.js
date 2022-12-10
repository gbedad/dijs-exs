let xhr = new XMLHttpRequest();

const API = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '6bc236fa8bd5e7e03f83fd8cea3eac74';

let content;
const myDiv = document.getElementById('card-weather');
let card_to_remove = document.getElementsByClassName('card');

//let city = 'Tel Aviv';
//let visitedCities = []
let visitedCities = JSON.parse(localStorage.getItem('myCities')) || [];
if (visitedCities.length > 0) {
  visitedCities.forEach((element) => {
    const card = document.createElement('div');
    const colDiv = document.createElement('div');
    card.classList = 'card';
    colDiv.classList = 'col';
    const content = `
                <div class="card-body">
                <div class="header">
                    <div>
                      <h5>${element.city}</h5>
                      <span class="badge bg-danger">${element.country}</span>
                    </div>
                  
                    <div>
                      <button class="remove" onclick="removeCard()">X</button>
                    </div>
                    
                </div>
                    
                    <div class="temp">
                        <p class="h1 temp">${Math.round(
                          element.temperature
                        )}</p><pan>°C</pan>
                    </div>
                    <div class="time">
                    <div>
                    <img src=http://openweathermap.org/img/wn/${
                      element.icon
                    }@2x.png>
                    </div>
                        <div>
                          <p>${getLocalTime(element?.sunrise)}</p>
                          <p>${getLocalTime(element?.sunset)}</p>
                        </div>
                   
                    </div>
                    
                    <p>${element.desc.toUpperCase()}</p> 
                    <p>Wind Speed: ${element?.wind ? element?.wind : ''} kts</p>
                </div>
                
                
              
                `;
    card.innerHTML = content;
    myDiv.appendChild(colDiv);
    colDiv.appendChild(card);
  });
}

//let cities = JSON.parse(localStorage.getItem('myCities'));

function getWeather(event) {
  event.preventDefault();
  let form = event.target;
  let city = form.city.value;
  xhr.open('GET', `${API}weather?q=${city}&appid=${API_KEY}&units=metric`);
  xhr.responseType = 'json';
  xhr.send();
  form.reset();
}

xhr.onload = function () {
  //console.log(xhr.response);
  let res = xhr.response;
  if (xhr.status === 200) {
    let citiesObj = {
      city: res.name,
      country: res.sys.country,
      temperature: res.main.temp,
      icon: res.weather[0].icon,
      desc: res.weather[0].description,
      sunrise: res.sys.sunrise,
      sunset: res.sys.sunset,
      wind: res.wind.speed,
    };

    if (res.name in visitedCities) {
      console.log('Already in db');
    } else {
      visitedCities.unshift(citiesObj);
      localStorage.setItem('myCities', JSON.stringify(visitedCities));
      //console.log('array cities===>', cities);

      const card = document.createElement('div');
      card.classList = 'card';
      const content = `
            <div class="card-body">
                <h5>${res.name}</h5>
                <span class="badge bg-danger">${res.sys.country}</span >
                <p>${res.main.temp}°C</p>
                <img src=http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png>
                <p>${res.weather[0].description}</p>
                <p>Wind Speed: ${res.wind.speed} kts</p>
            </div>
              `;
      card.innerHTML = content;
      myDiv.appendChild(card);
    }
    console.log(visitedCities);
    location.reload();

    //document.getElementById('root').innerHTML = xhr.response.value;

    console.log(xhr.response.weather);
  } else if (xhr.status === 404) {
    alert(`${xhr.response.message}`);
  }
};

xhr.onerror = function () {
  console.log(xhr.response);
};

let cards = document.querySelectorAll('.card');
function removeCard() {
  [...cards].forEach((card, item) => {
    card.addEventListener('click', function () {
      console.log('clicked', item);
      visitedCities.splice(item, 1);
      console.log(visitedCities);
      localStorage.setItem('myCities', JSON.stringify(visitedCities));
      location.reload();
    });
  });
}

function getLocalTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleTimeString('default');
}

console.log(getLocalTime(1661834187));
