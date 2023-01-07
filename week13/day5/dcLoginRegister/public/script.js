function register() {
  let first = document.getElementById("firstname").value;
  let last = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let userdata = {
    first,
    last,
    email,
    username,
    password
  }
  fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userdata)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('register').innerHTML = `${data.message}`
    })
    .catch(err => {
      console.log(err);
    })
}

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let userdata = {
    username,
    password
  }
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userdata)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('login').innerHTML = `${data.message}`
    })
    .catch(err => {
      console.log(err);
    })
}