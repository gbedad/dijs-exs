/*
Exercise 1

fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));
*/

const star = async () => {
  const response = await fetch('https://www.swapi.tech/api/starships/9/');
  const resJson = await response.json();
  return resJson;
};
star().then((result) => console.log(result.result.properties));

// Exercise 2

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

// Show 'Calling' and 'resolved' after 2 seconds
