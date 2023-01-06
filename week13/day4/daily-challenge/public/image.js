const showImage = async() => {
  const root = document.getElementById("root")
try {
    const response = await fetch('http://localhost:5000/pic')
    const data = await response.text()
    console.log(data)
    root.innerHTML = data
}
catch(e) {
  console.log(e)
}

}
