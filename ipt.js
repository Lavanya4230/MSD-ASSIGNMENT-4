function generateRandomDigit() {
    const minValue = parseInt(document.getElementById('min-value').value);
    const maxValue = parseInt(document.getElementById('max-value').value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Please enter valid numbers");
        return;
    }

    if (minValue > maxValue) {
        alert("Minimum value should be less than or equal to Maximum value");
        return;
    }

    const randomDigit = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById('result').textContent = `Random Digit: ${randomDigit}`;
}
