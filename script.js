
// text input
let nameI = document.getElementById("cardholder-name");
let numberI = document.getElementById("card-number");
let monthI = document.getElementById("month");
let yearI = document.getElementById("year");
let cvcI = document.getElementById("cvc");



// card's text
let cardName = document.getElementById("card-front__name");
let cardNumber = document.getElementById("card-front__number");
let cardMonth = document.getElementById("card-front__month");
let cardYear = document.getElementById("card-front__year");
let cardCvc = document.getElementById("card-back__cvc");

// error message
let nameE = document.getElementById("cardholder-name-error");
let numberE = document.getElementById("card-number-error");
let monthE = document.getElementById("month-error");
let yearE = document.getElementById("year-error");
let cvcE = document.getElementById("cvc-error");

// button
let btnConfirm = document.getElementById("confirm");
let btnContinue = document.getElementById("continue");

// contaiener
let form = document.getElementsByClassName("form")[0];
let thanks = document.getElementsByClassName("thanks-container")[0];


function setName(e) {
    cardName.innerText = e.target.value;
}

function setNumber(e) {
    cardNumber.innerText = format(e.target.value);
}

function setMonth(e) {
    cardMonth.innerText = e.target.value;
}

function setYear(e) {
    cardYear.innerText = e.target.value;
}

function setCvc(e) {
    cardCvc.innerText = e.target.value;
}

function format(string) {
    return string.toString().replace(/\d{4}(?=.)/g, "$& ");
}

function submit(e) {

    // text length
    let numberLength = numberI.value.length;
    let cvcLength = cvcI.value.length;

    e.preventDefault();
    if(!nameI.value) {
        nameE.classList.remove("hidden");
        nameI.classList.add("error-border");
    } else {
        nameE.classList.add("hidden");
        nameI.classList.remove("error-border");
    }

    if (!numberI.value) {
        numberE.classList.remove("hidden");
        numberI.classList.add("error-border");
        numberE.innerText = "Cant' be blank";
    } else if (isNaN(numberI.value)) {
        numberE.classList.remove("hidden");
        numberI.classList.add("error-border");
        numberE.innerText = "Wrong format, numbers only";
    } else if (numberLength < 16) {
        numberE.classList.remove("hidden");
        numberI.classList.add("error-border");
        numberE.innerText = "Card number must have 16 numbers"
    } else {
        numberE.classList.add("hidden");
        numberI.classList.remove("error-border");
    }

    if (!monthI.value) {
        monthE.classList.remove("hidden");
        monthI.classList.add("error-border");
    } else if (isNaN(monthI.value)) {
        monthE.classList.remove("hidden");
        monthI.classList.add("error-border");
        monthE.innerText = "Wrong format, numbers only";
    } else {
        monthE.classList.add("hidden");
        monthI.classList.remove("error-border");
    }

    if (!yearI.value) {
        yearE.classList.remove("hidden");
        yearI.classList.add("error-border");
    } else if (isNaN(yearI.value)) {
        yearE.classList.remove("hidden");
        yearI.classList.add("error-border");
        yearE.innerText = "Wrong format, numbers only";
    } else {
        yearE.classList.add("hidden");
        yearI.classList.remove("error-border");
    }

    if (!cvcI.value) {
        cvcE.classList.remove("hidden");
        cvcI.classList.add("error-border");
    } else if (isNaN(cvcI.value)) {
        cvcE.classList.remove("hidden");
        cvcI.classList.add("error-border");
        cvcE.innerText = "Wrong format, numbers only";
    } else if (cvcLength < 3) {
        cvcE.classList.remove("hidden");
        cvcI.classList.add("error-border");
        cvcE.innerText = "Cvc must have 3 numbers"
    } else {
        cvcE.classList.add("hidden");
        cvcI.classList.remove("error-border");
    }

    if(nameI.value && numberI.value && monthI.value && yearI && cvcI.value){
        thanks.classList.remove("hidden");
        form.classList.add("hidden")
    } else {
        return false;
    }
}

nameI.addEventListener("keyup", setName);
numberI.addEventListener("keyup", setNumber);
monthI.addEventListener("keyup", setMonth);
yearI.addEventListener("keyup", setYear);
cvcI.addEventListener("keyup", setCvc);
btnConfirm.addEventListener("click", submit)

thanks.addEventListener("click", function() {
    location.reload();
})