const sub = document.querySelector('.card--bigger__submit__input')
const subValue = sub.value
const msg = document.querySelector('.card--bigger__submit__error__msg')
msg.style.display = 'none'

const submit = document.querySelector('.card--bigger__submit__btn')

const pageOne = document.querySelector('.card')
const pageTwo = document.querySelector('section.card--two')

pageTwo.style.display = 'none'


function ativo(e, o, a){
    a.classList.add('active')
    e.classList.remove('hidden')
    o.classList.add('hidden')

    msg.style.display = "flex"
}

function sobre(){
    submit.classList.add('sobre')
}

function saiu(){
    submit.classList.remove('sobre')
}

function Submited(){
    const error = document.querySelector('.card--bigger__submit__btn__error')
    const ok = document.querySelector('.card--bigger__submit__btn__arrow')

    if(sub.value == 'email@gmail.com'){
        pageOne.classList.add('hidden')
        pageTwo.style.display = 'flex'
    }else if(sub.value.length == 0 || sub.value != 'isaquefight123@gmail.com'){
        ativo(error, ok, submit)

        setTimeout(function desativo(){
            submit.classList.remove('active')
            error.classList.add('hidden')
            ok.classList.remove('hidden')

            msg.style.display = "none"
            activeStates = 0
        }, 3000)}
    }