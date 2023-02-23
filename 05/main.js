var keyboardDiv = document.querySelector('#keyboard')
var lastCountDiv = document.querySelector('#last-count')
var currentDiv = document.querySelector('#current')

var numberInCalculator = 0
var resultInCalculator = 0

var menuOperations = [
    {
        operation: '+',
        count: (numberInCalculator) => {
            resultInCalculator += numberInCalculator
            console.log('SUM')
        }
    },
    {
        operation: '-',
        count: (numberInCalculator) => resultInCalculator -= numberInCalculator
    },
    {
        operation: '/',
        count: (numberInCalculator) => resultInCalculator /= numberInCalculator
    },
    {
        operation: '*',
        count: (numberInCalculator) => resultInCalculator *= numberInCalculator
    },
    {
        operation: '%',
        count: (numberInCalculator) => resultInCalculator -= numberInCalculator
    },
    {
        operation: '=',
        count: (numberInCalculator) => resultInCalculator = numberInCalculator
    }
]


fetch("config.json").then((response) => {
    response.json().then((data) => {
        data.buttons.map((button) => {
            keyboardDiv.innerHTML += `<div class="button ${button.class}" onclick="${button.function}"> ${button.name} </div>`
        })
    })
})

function clean() {
    currentDiv.innerHTML = ""
}

function dump() {
    lastCountDiv.innerHTML = ""
    currentDiv.innerHTML = ""
    resultInCalculator = 0
}

function addNumber(number) {
    currentDiv.innerHTML += number
}

function operation(operator) {
    var numberInLastCount = lastCountDiv.textContent

    if (currentDiv.textContent != "") {
        if (lastCountDiv.textContent == "") {
            numberInCalculator = parseInt(currentDiv.textContent)
            resultInCalculator = numberInCalculator

        } else {
            numberInCalculator = parseInt(currentDiv.textContent)


            menuOperations.map((operation) => {
                if (numberInLastCount.includes(operation.operation) && operation.operation != '=') {
                    operation.count(numberInCalculator)
                }
            })


        }

        if (operator == '=') {
            lastCountDiv.innerHTML = resultInCalculator
            currentDiv.innerHTML = resultInCalculator
            console.log("AQUI")
        } else {
            lastCountDiv.innerHTML = resultInCalculator + operator
        }

        clean()
    }


}




// Primeiro número + operação

// segundo + operação

// Resultado da primeira operação + segunda operação