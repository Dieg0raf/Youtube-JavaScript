let calculations = localStorage.getItem('calculation') || ''

showCalculation()

function showCalculation () {
    const calcElement = document.querySelector('.js-calculations')

    calcElement.innerText = '0'
}

function addToCalculation (symbol) {
    const calcElement = document.querySelector('.js-calculations')
    let result = 0

    if (symbol === 'clear') {
        calcElement.innerText = '0'
        calculations = ''
    } else if(!(symbol === '=')) {
        calculations += symbol
        calcElement.innerText = calculations

    } else if (symbol === '=') {
        result = eval(calculations)
        calcElement.innerText = result
        calculations = result
    }

    localStorage.setItem(calculation, calculations)
}