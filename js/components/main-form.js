const input1 = document.querySelector('.main-input');
const input2 = document.querySelector('.main-input.-mail');
const input3 = document.querySelector('.input')
const btnSend = document.querySelector('.main-button.-send')

const name = input1.value

function GetValue() {
    console.log(input1.value)
};

btnSend.addEventListener('click', GetValue())

