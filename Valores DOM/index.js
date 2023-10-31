function register(element){
    console.log(element)
    let NameUser = document.getElementById("username").value
    const password = document.getElementById("password").value
    let passwordConfirm = element.children.passwordConfirmation.value

    if (password == passwordConfirm){
        alert(`Usuário ${NameUser} registrado!`)
    }
    else{
        alert("As senhas não conferem!")
    }

    password.value = ""
    NameUser.value = ""
    passwordConfirm.value = ""
}

