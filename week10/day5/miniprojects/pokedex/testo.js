const screenOne = document.getElementById('screen-1');
const screenTwo = document.getElementById('screen-2');

const imgElement = document.createElement('img');
const pokElement = document.createElement('div');
const messageElement = document.createElement('p');
let randomPokemon, nextPokemon, previousPokemon;

const getRandomPokemon = () => {
  //console.log(Math.floor(Math.random() * 1137));
  return Math.floor(Math.random() * 1137);
};

async function displayPokemon(num) {
  // Make a request to the URL that returns the data object
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
  try {
    const data = await response.json();

    const pokObj = {
      name: data.name,
      id: data.id,
      weight: data.weight,
      height: data.height,
    };

    content = `
                <p>Name: ${pokObj.name}</p>
                <p>id: ${pokObj.id}</p>
                <p>Weight: ${pokObj.weight}</p>
                <p>Height: ${pokObj.height}</p>
    `;

    screenTwo.appendChild(pokElement);
    pokElement.innerHTML = content;

    // Extract the image from the data object
    const imageUrl = data.sprites.front_default;

    // Make a request to the URL of the image
    const imageResponse = await fetch(imageUrl);

    // Convert the response to a blob
    const blob = await imageResponse.blob();

    // Create an image element

    // Set the src attribute of the image element to a data URI that represents the image
    imgElement.src = URL.createObjectURL(blob);

    // Append the image element to the body of the page
    screenOne.appendChild(imgElement);
  } catch (err) {
    console.log(err);

    screenTwo.appendChild(messageElement);
    messageElement.innerText = 'Oops, Pokemon not found';
  }
}
const imageElement = document.getElementById('image-id');
imageElement.addEventListener('click', function (event) {
  // Get the x and y coordinates of the click event
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x, y);

  // Use the x and y coordinates to determine which part of the image was clicked
  if (x > 769 && x < 804 && y > 455 && y < 501) {
    pokElement.remove();
    imgElement.remove();
    messageElement.remove(); // This is the top left corner of the image
    // Call the function for this specific part of the image
    randomPokemon = getRandomPokemon();
    console.log(randomPokemon);
    displayPokemon(randomPokemon);
    newPokemon = randomPokemon;
  }
  if (x > 230 && x < 269 && y > 469 && y < 485) {
    pokElement.remove();
    imgElement.remove();
    messageElement.remove();

    // This is the top right corner of the image
    // Call the function for this specific part of the image
    newPokemon += 1;
    displayPokemon(newPokemon);
  }
  if (x > 150 && x < 184 && y > 469 && y < 485) {
    pokElement.remove();
    imgElement.remove();
    messageElement.remove();

    // This is the top right corner of the image
    // Call the function for this specific part of the image
    newPokemon -= 1;
    displayPokemon(newPokemon);
  }
});
