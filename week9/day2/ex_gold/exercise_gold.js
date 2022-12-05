const sendData = (event) => {
  event.preventDefault();
  const form = document.forms.myForm;
  const first = form.first.value;
  const last = form.last.value;

  const obj = { first, last };

  localStorage.setItem('data', JSON.stringify(obj));

  window.location.href = 'results.html';
  console.log(data);
};
