const urls = [
  'https://www.swapi.tech/api/people/1',
  'https://www.swapi.tech/api/people/2',
  'https://www.swapi.tech/api/people/3',
  'https://www.swapi.tech/api/people/4',
];

Promise.all(
  urls.map((item) => {
    return fetch(item).then((res) => res.json());
  })
)
  .then((results) => {
    results.map((item) => console.log(item.result.uid, item.result.properties));
  })
  .catch((err) => {
    console.log(err);
  });
