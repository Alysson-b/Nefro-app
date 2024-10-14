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
      { theme: "outline", size: "large" }  
    );
   
    
    document.getElementById("hrefGoogle").onclick = function(event){
        event.preventDefault()
        console.log('botao google clicado')
    google.accounts.id.prompt(); 
  }
} 
/*   function handleCredentialResponse(response) {
    try {
        const data = jwt_decode(response.credential);
        console.log('Dados do usuário:', data);
        // Adicione aqui a lógica para lidar com o login bem-sucedido
    } catch (error) {
        console.error('Erro ao decodificar credencial:', error);
    }
}

function initializeGoogle() {
    if (typeof google === 'undefined' || typeof google.accounts === 'undefined') {
        console.error('A API do Google não foi carregada corretamente');
        return;
    }

    google.accounts.id.initialize({
        client_id: "209104012971-s6bs30ja2h9mocq2gnm730nfoburslmu.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    const googleButton = document.getElementById("hrefGoogle");
    if (googleButton) {
        googleButton.onclick = function(event) {
            event.preventDefault();
            console.log('Botão do Google clicado');
            try {
                google.accounts.id.prompt();
                console.log('Prompt do Google solicitado');
            } catch (error) {
                console.error('Erro ao solicitar o prompt do Google:', error);
            }
        };
    } else {
        console.error('Botão do Google não encontrado');
    }
}

// Aguarde o carregamento do DOM e da API do Google
if (document.readyState === 'complete') {
    initializeGoogle();
} else {
    window.addEventListener('load', initializeGoogle);
} */