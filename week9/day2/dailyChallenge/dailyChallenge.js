function sendData(event) {
  event.preventDefault();
  const myForm = event.target;

  const firstname = myForm.firstname.value;
  const lastname = myForm.lastname.value;

  console.log(firstname);
  let res = { firstname, lastname };

  const result = document.getElementById('result');
  result.innerText = JSON.stringify(res);
}
