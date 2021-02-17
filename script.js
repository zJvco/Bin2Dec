const button = document.querySelector('#button')

button.addEventListener('click', () => {
    const input = document.querySelector('#number')
    const inputValue = input.value.trim()
    
    if (inputValue === '') {
        validateError(input, 'Digite até 8 Números!')
    }
    else if (checkBin(inputValue) === false) {
        validateError(input, 'Digite Apenas 0 e 1!')
    }
    else {
        validateSucess(input)
    }

    if (checkBin(inputValue) === true) {
        getBinary(inputValue, input)
    }
})

// Função Validar erro 
function validateError(input, message) {
    const txtError = document.querySelector('.txtError')
    const getInput = input.parentElement

    txtError.innerHTML = message
    getInput.classList = 'content error'
}

// Função Validar sucesso

function validateSucess(input) {
    const getInput = input.parentElement

    getInput.classList = 'content'
}

// Função verificar se o número é diferente de 0 e 1
function checkBin(input) {
    const checkValue = []

    for (let i = 0; i <= input.length-1; i++) {
        if (input[i] !== '0' && input[i] !== '1') {
            checkValue.push('false')
        }
        else {
            checkValue.push('true')
        }
    }

    if (checkValue.includes('false')) {
        return false
    }
    else {
        return true
    }
}

// Função para calcular e adicionar o resultado na tela
function getBinary(input) {
    // Calcular Bin para Dec
    const inputReverse = []

    for (let i = 0; i <= input.length-1; i++) {
        inputReverse.push(input[i])
    }

    const numReverse = inputReverse.reverse()
    let sum = 0

    for (let c = 0; c <= input.length-1; c++) {
        let p = 2 ** c
        let r = p * numReverse[c]
    
        sum += r
    }

    // colocar o resultado na tela
    const txtResult = document.querySelector('.result-space')
    const containerResult = document.querySelector('.container-result')

    txtResult.innerHTML = sum
    containerResult.classList.add('sucess')
}