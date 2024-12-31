/* window.onload = function () {
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
} */ 

      const popUp = document.querySelector(".popUpUser");
      const profileImage = document.querySelector(".edit-User img");
      const editIcon = document.querySelector(".edit-User span");
      const nameInput = document.querySelector(".edit-User h2");
      const emailInput = document.querySelector(".containerDate input[type='text']");
      const bioInput = document.querySelector(".descriptionUser textarea");
      const ufInput = document.querySelector(".locationUser .location input");
      const cityInput = document.querySelector(".locationUser .city input");
      const updateButton = document.querySelector(".update");
      
      const imageHome = document.getElementById("profileImageHome");
      const dataUserName = document.getElementById("dataUserName");
      const dataUserEmail = document.getElementById("dataUserEmail");
      
      let isDataChanged = false;
      

      
      editIcon.addEventListener("click", () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.addEventListener("change", (event) => {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              profileImage.src = e.target.result; 
              isDataChanged = true;
              updateButton.style.backgroundColor = "#ff9600";
            };
            reader.readAsDataURL(file);
          }
        });
        fileInput.click();
      });
      
      nameInput.addEventListener("click", () => {
        const nicknameInput = document.createElement("input");
        nicknameInput.type = "text";
        nicknameInput.value = nameInput.textContent.replace("Olá, ", ""); 
        nameInput.textContent = ""; 
      
        nicknameInput.addEventListener("blur", () => {
          if (nicknameInput.value) {
            nameInput.textContent = `Olá, ${nicknameInput.value}`;
            isDataChanged = true;
            updateButton.style.backgroundColor = "#ff9600"; 
          } else {
            nameInput.textContent = "Nickname"; 
          }
        });
      
        nameInput.appendChild(nicknameInput);
        nicknameInput.focus();
      });
      
      updateButton.addEventListener("click", () => {
        const userData = {
          profileImage: profileImage.src,
          name: nameInput.textContent.replace("Olá, ", ""), 
          email: emailInput.value,
          bio: bioInput.value,
          uf: ufInput.value,
          city: cityInput.value,
        };
      
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Dados atualizados e salvos!");
      
        isDataChanged = false;
        updateButton.style.backgroundColor = "#ccc";
      
        if (imageHome) {
          imageHome.src = profileImage.src;
        }
        if (dataUserName) {
          dataUserName.textContent = `Olá, ${userData.name}`;
        }
        if (dataUserEmail) {
          dataUserEmail.textContent = emailInput.value;
        }
      });
      
      function monitorFieldChanges() {
        const inputs = [nameInput, emailInput, bioInput, ufInput, cityInput];
        inputs.forEach(input => {
          input.addEventListener("input", () => {
            isDataChanged = true;
            updateButton.style.backgroundColor = "#ff9600"; 
          });
        });
      }
      
      monitorFieldChanges();
      
      function loadUserData() {
        const savedData = JSON.parse(localStorage.getItem("userData"));
        if (savedData) {
      
          if (savedData.profileImage) profileImage.src = savedData.profileImage;
          if (savedData.name) nameInput.textContent = `Olá, ${savedData.name}`; 
          if (savedData.email) emailInput.value = savedData.email;
          if (savedData.bio) bioInput.value = savedData.bio;
          if (savedData.uf) ufInput.value = savedData.uf;
          if (savedData.city) cityInput.value = savedData.city;
          
          if (savedData.profileImage) {
            imageHome.src = savedData.profileImage; 
          }
          if (savedData.name) {
            dataUserName.textContent = `Olá, ${savedData.name}`; 
          }
          if (savedData.email) {
            dataUserEmail.textContent = savedData.email; 
          }
        }
      }
      
      window.addEventListener("load", loadUserData);



const iconCreatModal = document.querySelector('.text-icon i')
const textQuest = document.querySelector('#textQuest')
const iconsResp = document.querySelectorAll(".icon-question i");
const inputsResp = document.querySelectorAll(".input-question input");




iconCreatModal.addEventListener('click', function(){
    
  const modalText = textQuest.value.trim()

  
  if (modalText) {

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <p>${modalText}</p>
        <button class="close-modal">X</button>
      </div>
    `;
    document.body.appendChild(modal);

    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', function () {
      modal.remove();
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.remove();
      }
    });
  } else {
    console.log('Erro: o campo de texto está vazio.');
  }
});



iconsResp.forEach((icon, index) => {
  icon.addEventListener("click", function () {
    const inputValue = inputsResp[index].value.trim();

    if (inputValue) {
      const modalResposta = document.createElement("div");
      modalResposta.className = "Respostas";
      modalResposta.innerHTML = `
        <div class="modal-content">
          <p>${inputValue}</p>
          <button class="close-Respostas">X</button>
        </div>
      `;

      document.body.appendChild(modalResposta);

      modalResposta.addEventListener("click", function (e) {
        if (e.target === modalResposta) {
          modalResposta.remove();
        }
      });

      const closeModal = modalResposta.querySelector(".close-Respostas");
      closeModal.addEventListener("click", function () {
        modalResposta.remove();
      });
    } else {
      console.log("Erro: o campo de texto está vazio.");
    }
  });
});
