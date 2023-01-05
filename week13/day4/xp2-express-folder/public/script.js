const showData = (obj) => {
  const html = `<h2>Response from server</h2>
                <span>${obj.firstname}</span> <span>${obj.lastname}</span>`
  document.getElementById('root').innerHTML = html
}

const getUser = async () => {
  try {
    const response = await fetch('http://localhost:3000/')
    const data = await response.json()
    console.log(data);
    showAlert()
    showData(data)
  }
  catch(e) {
    console.log(e)
  }
}

function showAlert() {
  alert("Hello from Javascript")
}
