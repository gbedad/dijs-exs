const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image: 'https://robohash.org/9?200x200',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image: 'https://robohash.org/10?200x200',
  },
];

//console.log(array);
let container = document.getElementById('card-content');

const searchInput = document.querySelector('input');
setList(robots);

searchInput.addEventListener('input', (e) => {
  //e.preventDefault();
  let value = e.target.value;

  function filterByValue(array, string) {
    return array.filter((o) =>
      Object.keys(o).some((k) =>
        o[k].toString().toLowerCase().includes(string.toString().toLowerCase())
      )
    );
  }
  if (value) {
    container.innerHTML = '';

    let results = filterByValue(robots, value);
    setList(results);

    console.log(results);
  } else {
    setList(robots);
  }

  /*   function update() {

  } */
  //document.getElementById('sub').addEventListener('click', update);
});
function setList(results) {
  results.forEach((robot) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card';

    // Construct card content
    const content = `
        <div >
              <div class="card">
                  <img src="${robot.image}" class="card-img-top" alt="..." />
                  <div class="card-body">
                      <h5 id="#name" >${robot.name}</h5>
                      <p id="#email" >${robot.email}</p>
                  </div>
              </div>
          </div>
        `;

    // Append newyly created card element to the container
    container.innerHTML += content;
  });
}
