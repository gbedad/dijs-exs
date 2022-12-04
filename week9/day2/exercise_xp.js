/* 🌟 Exercise 1 : HTML Form
Instructions
Hint : Read about sending form data using the HTTP protocol

form

Create a form like the one above. The form should contain three inputs:
a small text input asking for a name,
a larger textarea input to write a message,
a submit input (“Send”)

When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
Where will the sent data appear?*/

function sendData(event) {
  event.preventDefault();
  const myForm = document.forms.sendForm;
  const elems = myForm.elements;
  myForm.action = 'index.html';
  myForm.method = 'get';
  myForm.submit();
  console.log(myForm.user.value);
  console.log(elems.comments.value);
}
// The data appear in the url as query

/* Exercise 2 : HTML Form #2
Instructions
Use the same form structure as Exercise 1.
When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
Where will the sent data appear? Hint : Look at the Network Tab*/
function sendData2(event) {
  event.preventDefault();
  const myForm = document.forms.sendForm2;
  const elems = myForm.elements;
  myForm.action = 'index.html';
  myForm.method = 'post';
  myForm.submit();
  console.log(myForm.user.value);
  console.log(elems.comments.value);
}

// Exercise 3 JSON

const marioGame = {
  detail: 'An amazing game!',
  characters: {
    mario: {
      description: 'Small and jumpy. Likes princesses.',
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: 'Big and green, Hates princesses.',
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: 'Beautiful princess.',
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

console.log(marioGame.characters);

const mario = JSON.stringify(marioGame, null, 2);
const m = JSON.parse(mario);
//console.log(mario);

console.log(m.characters.mario);
