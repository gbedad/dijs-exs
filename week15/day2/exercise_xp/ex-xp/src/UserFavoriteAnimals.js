const UserFavoriteAnimals = (props) => {

  //console.log(props);
  const {animals} = props
//console.log(animals);

  return (
      <ul>
        {animals.map((animal) => {
          return <li>{animal}</li>
        })
        }
      </ul>
      )
}

export default UserFavoriteAnimals
