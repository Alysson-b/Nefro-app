function handleCredentialResponse(response) {
     const data = jwt_decode(response.credential)
     console.log(data)
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "209104012971-s6bs30ja2h9mocq2gnm730nfoburslmu.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    document.getElementById("hrefGoogle").onclick = function(event){
        event.preventDefault()
        console.log('botao google clicado')
    google.accounts.id.prompt(); 
  }
}

