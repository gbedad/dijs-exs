const handleSubmit = async () => {

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  let usermsg = {
    email,
    message
  }
  console.log(usermsg);
    try {
      const response = await fetch('http://localhost:5000/formData',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usermsg)
      })
      const data = await response.json()
      console.log(data)
      document.getElementById('root').innerHTML = `
      <p>${data.email} sent you a message:</p>
       <p>${data.message}</p>`
    }
    catch(e) {
      console.log(e)
    }
}
