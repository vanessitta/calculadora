function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);

    // Prevent multiple operators in a row
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }

    display.value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}
