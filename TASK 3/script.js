function appendToDisplay(value) {
    document.getElementById('display').textContent += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function calculate() {
    var expression = document.getElementById('display').textContent;
    try {
        var result = eval(expression);
        document.getElementById('display').textContent = result;
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
    }
}