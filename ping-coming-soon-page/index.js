let auth;

function verify(field){
    const usuario = field.value.substring(0, field.value.indexOf("@"))
    const dominio = field.value.substring(field.value.indexOf("@") +1, field.value.length)
    const msgError = document.querySelector(".card--title__login__msgerror")
    const inputEmail = document.querySelector(".card--title__login__input")

    if(
        (usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.indexOf(".") != -1) &&
        (dominio.lastIndexOf(".") < dominio.length -1)
    ){
        inputEmail.classList.remove("card--title__login__errorstats")
        msgError.classList.add("hidden")
        auth = true;
    }else{
        inputEmail.classList.add("card--title__login__errorstats")
        msgError.classList.remove("hidden")
        auth = false;
    }
}
function submited(){
    const btn = document.querySelector(".card--title__login__btn")
    btn.classList.add("submited")
    btn.textContent = "Carregando..."
    const inputEmail = document.querySelector(".card--title__login__input")
    if(auth == true && inputEmail.value.length >1 ){
        setTimeout(()=>{
            btn.textContent = "Logedd!"
        }, 1000)
    }else if(auth == false || inputEmail.value.length == 0){
        setTimeout(()=>{
            btn.textContent = "Error!"
        }, 1000)
    }

    setTimeout(() => {
        btn.classList.remove("submited")
        btn.textContent = "Notify Me"
    }, 3000)
}

