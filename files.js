const feet = document.querySelector("#feet");
const inch = document.querySelector("#inch");
const weight = document.querySelector("#weight");
const calculate = document.querySelector("#calculate");
const yourBMI = document.querySelector("#yourBMI");

calculate.addEventListener("click" , ()=>{
    //BMI = Body Mass Index
    //m = Mass Means Weight (KG)
    //h = Height (CM)
    //Formula = B = m/h²
    
    
    if(feet.value != "" && inch.value != "" && weight.value != ""){
        let feettometre = feet.value / 3.28084;
        let inchtometre = inch.value / 39.37;
        let height = feettometre + inchtometre;
        let bmiValue = weight.value / (height * height);
        if(bmiValue < 18.5){
            yourBMI.innerHTML = `Your BMI Is : <span> ${bmiValue.toFixed(2)} </br> Weight Status : Under Weight </span>`
        }else if(bmiValue < 25){
            yourBMI.innerHTML = `Your BMI Is : <span> ${bmiValue.toFixed(2)} </br> Weight Status : Normal </span>`
        }else if(bmiValue < 30){
            yourBMI.innerHTML = `Your BMI Is : <span> ${bmiValue.toFixed(2)} </br> Weight Status : Over Weight </span>`
        }else{
            yourBMI.innerHTML = `Your BMI Is : <span> ${bmiValue.toFixed(2)} </br> Weight Status : Obese </span>`
        }
    }
    else
        {
            yourBMI.innerHTML = `Please Enter Correct Value`;
        }
});
