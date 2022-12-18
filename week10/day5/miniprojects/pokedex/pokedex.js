const getRandomNumber = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  try {
    const data = await response.json();
    let count = await data.count;
    let random = Math.floor(Math.random() * count);
    console.log(random);
    return random;
  } catch (err) {
    console.log(err);
  }
};

getRandomNumber();

const getRandomPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
getRandomPokemon();
