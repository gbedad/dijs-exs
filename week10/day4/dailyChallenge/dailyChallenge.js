// 1st Challenge
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

const promises = Promise.all([promise1, promise2, promise3]);

promises.then((res) => console.log(res));

// Promise.all will wait until the 3 promises are fulfilled. In case one is rejected, all will be. Promise.all is still a promise. So to resolve it, we need the then method.

// 2nd Challenge
let parisSunrise, parisSunset, nySunrise, nySunset;
const getGeocode = () => {
  const latParis = document.getElementById('lat1').value;
  const lonParis = document.getElementById('long1').value;
  const latNy = document.getElementById('lat2').value;
  const lonNy = document.getElementById('long2').value;
  paris = {
    city: 'Paris',
    latitude: latParis,
    longitude: lonParis,
  };
  ny = {
    city: 'New York',
    latitude: latNy,
    longitude: lonNy,
  };
  const sun = async () => {
    const response1 = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${paris.latitude}&lng=${paris.longitude}&formatted=0`
    );
    const res1 = await response1.json();

    const response2 = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${ny.latitude}&lng=${ny.longitude}&formatted=0`
    );
    const res2 = await response2.json();
    //const resToJson = await response.json();
    const promises = Promise.all([res1, res2]);
    return promises;
  };

  sun().then((result) => {
    parisSunrise = result[0].results.sunrise;
    parisSunset = result[0].results.sunset;
    nySunrise = result[1].results.sunrise;
    nySunset = result[1].results.sunset;

    document.getElementById(
      'parisSunrise'
    ).innerHTML = `Sunrise : ${parisSunrise}`;
    document.getElementById(
      'parisSunset'
    ).innerHTML = `Sunset : ${parisSunset}`;
    document.getElementById('nySunrise').innerHTML = `Sunrise : ${nySunrise}`;
    document.getElementById('nySunset').innerHTML = `Sunset : ${nySunset}`;
  });
};

const cities = async () => {};

/* const weather = async () => {
  const response1 = await fetch(
    'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0'
  );
  const res1 = await response1.json();

  const response2 = await fetch(
    'https://api.sunrise-sunset.org/json?lat=37.7201600&lng=-2.4203400&formatted=0'
  );
  const res2 = await response2.json();
  //const resToJson = await response.json();
  const promises = Promise.all([res1, res2]);
  return promises;
};

weather().then((result) => {
  result.map((item) => {
    console.log({ sunrise: item.results.sunrise, sunset: item.results.sunset });
  });
}); */
