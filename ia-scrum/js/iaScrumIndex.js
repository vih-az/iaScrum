'use sctrict'
const botaoEntrar = document.getElementById("botaoEntrar")
const pegarUsuarios = async function(){
    const url = "https://back-login.vercel.app/usuarios"
    const response = await fetch(url)
    const data = await response.json()
    return data
}
const fazerLoginUsuario = async function(){
    const email = document.getElementById("login")
    const senha = document.getElementById("password")
    if(email.value == "" || senha.value == ""){
        alert("preencha os campos corretamente")
    }else{
        const users = await pegarUsuarios()
        users.forEach((user)=>{
            if (email.value == user.email && senha.value==user.senha){
                alert("feito login!")
            }
        })
    }
}
botaoEntrar.addEventListener('click', fazerLoginUsuario)