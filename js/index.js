window.onload = function () {
        // Inicializa a biblioteca de login do Google
        window.google.accounts.id.initialize({
          client_id: '209104012971-s6bs30ja2h9mocq2gnm730nfoburslmu.apps.googleusercontent.com', // Substitua pelo Client ID
          callback: handleCredentialResponse,
        });
      
        // Renderiza o botão de login invisível
        window.google.accounts.id.renderButton(
          document.getElementById('buttonDiv'),
          { theme: 'outline', size: 'large' }
        );
      };
      
function handleCredentialResponse(response) {
      const id_token = response.credential;
      console.log('Token de ID do Google:', id_token);
      
      fetch('http://localhost:5000/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: id_token }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Login bem-sucedido:', data);
            displayUserInfo(data.user);
          })
          .catch((error) => {
          console.error('Erro ao fazer login:', error);
      });
}
      

function triggerGoogleLogin() {
      document.querySelector('#buttonDiv div').click(); 
      console.log('botao acionado')
} 