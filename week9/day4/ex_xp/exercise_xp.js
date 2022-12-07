// Exercise XP

let xhr = new XMLHttpRequest();

const getGif = () => {
  xhr.open(
    'GET',
    'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
  );
  xhr.responseType = 'json';
  xhr.send();
};

// Exercise 2

const getGifsAboutSun = () => {
  xhr.open(
    'GET',
    'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
  );
  xhr.responseType = 'json';
  xhr.send();
};

xhr.onload = function () {
  if (xhr.status === 200) {
    let res = xhr.response;
    console.log(res);
  }
};

//getGif(); // Exercise 1

getGifsAboutSun(); // Exercise 2
