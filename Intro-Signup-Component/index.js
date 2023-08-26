let valido;

function validationEmail(field){

    const usuario = field.value.substring(0, field.value.indexOf("@"))
    const dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length)

    const msgErro = document.querySelector("#msg--error--email")

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
        msgErro.style.display = "none"
        field.style.border = "1px solid var(--Grayish-Blue)"
        valido = true
    }else{
        field.style.border = "2px solid red"
        msgErro.style.display = "block"
        valido = false
    }
}

//Variavel do botão

let btn = document.querySelector("#btn")
btn.addEventListener('click', clicou)

//Variaveis dos inputs de name e password

const fName = document.querySelector("#fName")
const lName = document.querySelector("#lName")
const pass = document.querySelector("#password")

function clicou(){

    //Variaveis das paginas

    const pageOne = document.querySelector(".login--web")
    const pageTwo = document.querySelector(".login--web--two")

    if(
        (fName.value.length >= 1) &&
        (lName.value.length >= 1) &&
        (pass.value.length >= 1) &&
        (valido == true)
        ){
        pageOne.style.display = "none"
        pageTwo.style.display = "flex"
        }else{
            exibirErroBtn()
        }
}

function fNameValid(){
    
    //Variavel da mensagem de erro

    const msgErro2 = document.querySelector("#msg--error--fName")

    if(fName.value.length <= 0){
        fName.style.border = "2px solid red"
        msgErro2.style.display = "block"
    }else{
        fName.style.border = "1px solid var(--Grayish-Blue)"
        msgErro2.style.display = "none"
    }
}

function lNameValid(){

    //Variavel da mensagem de erro

    const msgErro3 = document.querySelector("#msg--error--lName")

    if(lName.value.length <= 0){
        lName.style.border = "2px solid red"
        msgErro3.style.display = "block"
    }else{
        lName.style.border = "1px solid var(--Grayish-Blue)"
        msgErro3.style.display = "none"
    }
}

function passValid(){

    //Variavel da mensagem de erro

    const msgErro4 = document.querySelector("#msg--error--password")

    if(pass.value.length <= 0){
        pass.style.border = "2px solid red"
        msgErro4.style.display = "block"
    }else{
        pass.style.border = "1px solid var(--Grayish-Blue)"
        msgErro4.style.display = "none"
    }
}

//Função para exibir e dps de 3 segundos esconder a imagem de erro no botão

function exibirErroBtn(){
    //Variaveis do conteudo do botão

    const txtBtn = document.querySelector("#txt--btn")
    const imgBtn = document.querySelector("#img--btn")

    txtBtn.classList.add("hidden")
    imgBtn.classList.remove("hidden")
    btn.style.background = "var(--Error-Red)"
    btn.style.borderBottom = "5px solid var(--Error-Red-Shadow)"

    setTimeout(()=>{
        txtBtn.classList.remove("hidden")
        imgBtn.classList.add("hidden")
        btn.style.background = "var(--Green)"
        btn.style.borderBottom = "5px solid var(--Green-Shadow)"
    }, 3000)
}