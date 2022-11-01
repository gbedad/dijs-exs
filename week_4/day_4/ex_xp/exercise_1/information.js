const aboutMe = () => {
  return `My name is Gerald and I am studying JS.`;
};

console.log(aboutMe());

const infoAboutPerson = (personName, personAge, personFavoriteColor) => {
  return `My name is ${personName}, i am ${personAge} and my favorite color is ${personFavoriteColor}`;
};

console.log(infoAboutPerson('David', 45, 'blue'));
console.log(infoAboutPerson('Josh', 12, 'yellow'));
