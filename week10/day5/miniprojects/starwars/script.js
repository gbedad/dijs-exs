const getStarWarsCharacter = () => {
  const getRandomCharacter = async () => {
    let randomNumber = Math.floor(Math.random() * (82 - 0) + 0);
    const response1 = await fetch(
      `https://www.swapi.tech/api/people/${randomNumber}`
    );
    const loader = `
    <i class="fa-solid fa-cog fa-spin"></i>
    <p>Loading...</p>`;
    document.getElementById('people').innerHTML = loader;

    try {
      if (!response1) {
        const message = `
    
    <p>Oops, no character found...</p>`;
        document.getElementById('people').innerHTML = message;
      }
      let character = await response1.json();
      const selectedCharacter = await character.result.properties;
      console.log('prop', selectedCharacter);
      const response2 = await fetch(selectedCharacter.homeworld);
      let home = await response2.json();
      const completeCharacter = await Promise.all([selectedCharacter, home]);
      console.log(completeCharacter);
      return { details: completeCharacter[0], home: completeCharacter[1] };
    } catch (err) {
      console.log(err);
    }
  };

  getRandomCharacter().then((result) => {
    const content = `
            <h2>${result.details.name}</h2>
            <p>Height: ${result.details.height}</p>
            <p>Gender: ${result.details.gender}</p>
            <p>Birth Year: ${result.details.birth_year}</p>
            <p>Home World: ${result.home.result.properties.name}</p>
  `;
    document.getElementById('people').innerHTML = content;
  });
};
