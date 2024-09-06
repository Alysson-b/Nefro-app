function showpass(){
    let inputpass = document.getElementById('inputPass')
    let itempass = document.getElementById('itempass')

    if(inputpass.type === 'password'){
        inputpass.setAttribute('type','text')
        itempass.classList.replace('fa-eye', 'fa-eye-slash')
    }else{
        inputpass.setAttribute('type','password')
        itempass.classList.replace( 'fa-eye-slash','fa-eye')
    }
}
