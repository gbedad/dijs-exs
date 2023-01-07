const showData = (array) => {
  let root = document.getElementById('root');
  root.innerHTML = "";
  array.forEach(item => {
    let div = document.createElement('div');
    div.innerText = `${item.item}: ${item.quantity}`;
    root.appendChild(div)
  })
}

const getData = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/show')
    const data = await response.json()
    showData(data)
  }
  catch (e) {
    console.log(e)
  }
}

const sendData = async () => {
  let item = document.getElementById("item").value
  let quantity = document.getElementById("quantity").value

  let shoppingItem = {
    item,
    quantity
  }
  console.log(shoppingItem)

  try {
    const response = await fetch('http://localhost:5000/api/addItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(shoppingItem)
    })
    const data = await response.json()
    console.log(data)
    document.getElementById("item").innerHTML = `<span>${data.item}</span> <span>${data.quantity}</span>`
  }
  catch (e) {
    console.log(e)
  }
}





