document.getElementById('btn-about').addEventListener('click', function(){
    window.location.href = 'about.html';
});

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseInt(inputField.value);
    // inputField.value = '';
    return inputFieldValue;
}

document.getElementById('calculate').addEventListener('click', function(){
    const weight = getInputFieldValueById('weight');
    const feet = getInputFieldValueById('feet');
    const inch = getInputFieldValueById('inch');

    if (isNaN(weight) == false || weight > 0 || 
    isNaN(feet) == false || feet > 0 ||
    isNaN(inch) == false || inch > 0) {
        const feetToMeter = feet / 3.28084;
        const inchToMeter = inch / 39.37;
        const height = feetToMeter + inchToMeter;
        const bmiValue = (weight / Math.pow(height, 2)).toFixed(1);
        // console.log(bmiValue);
        if (bmiValue < 18.5) {
            document.getElementById('bmi-text').innerHTML = `
            <p class="text-center">Your BMI is: ${bmiValue} </br> Weight Status : Under Weight</p>`;
        }
        else if (bmiValue < 25) {
            document.getElementById('bmi-text').innerHTML = `
            <p class="text-center">Your BMI is: ${bmiValue} </br> Weight Status : Normal</p>`;
        }
        else if (bmiValue < 30) {
            document.getElementById('bmi-text').innerHTML = `
            <p class="text-center">Your BMI is: ${bmiValue} </br> Weight Status : Over Weight</p>`;
        }
        else {
            document.getElementById('bmi-text').innerHTML = `
            <p class="text-center">Your BMI is: ${bmiValue} </br> Weight Status : Obese</p>`;
        }
    }
    else {
        alert("Please enter a positive number");
    }
});