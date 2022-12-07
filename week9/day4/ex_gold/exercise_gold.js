let xhr = new XMLHttpRequest();

const getGifs = () => {
  xhr.open(
    'GET',
    'https://api.giphy.com/v1/gifs/search?q=hilarious&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
  );
  xhr.responseType = 'json';
  xhr.send();
};

xhr.onload = function () {
  if (xhr.status === 200) {
    let res = xhr.response.data;
    console.log(res);
    let randomIndex = Math.round(Math.random(0, 1) * res.length);
    console.log(randomIndex);
    let randomGif = res[randomIndex].images.original.url;

    console.log(randomGif);
    let myDiv = document.getElementById('root');
    let content = `<img src=${randomGif}>`;
    myDiv.innerHTML = content;
    //document.getElementById('root').innerHTML = randomGif;
  }
};

//getGif(); // Exercise 1

getGifs(); // Exercise 2
