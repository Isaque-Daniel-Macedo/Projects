let activeRating;
let nota;

function selectRating(number){
    const cardRatingNumber = document.querySelectorAll('.card__rating__number')
    const selectedCardRatingNumber = cardRatingNumber[number-1]

    if(activeRating){
        const activeRatingDom = cardRatingNumber[activeRating-1]
        activeRatingDom.classList.remove('card__rating__number--active')
    }

    selectedCardRatingNumber.classList.add('card__rating__number--active')
    activeRating = number
    nota = number
}

function submit(){

    if(nota == undefined){
        alert("Avalie para prosseguir")
    }else{
        const pageOne = document.querySelectorAll('.card')[0]
        const pageTwo = document.querySelectorAll('.card')[1]
    
        pageOne.classList.add('hidden')
        pageTwo.classList.remove('hidden')
        const res = document.querySelector('.card__result__value')
        res.innerHTML = nota
    }
}