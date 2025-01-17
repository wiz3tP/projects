function calculateResult(){
    const myForm = document.getElementById('bmiForm');
    const myButton = document.getElementsByTagName('button');
    const explanation = document.getElementsByTagName('h2');

    bmiForm.addEventListener('click', function(e){
        e.preventDefault();

        let {inputFname, inputLname, inputWeight, inputHeight} = bmiForm.elements;

        if (inputFname.value === '' || inputLname.value === '' || inputWeight.value === '' || inputHeight.value === ''){
            alert('Please fill in all fields');
            return;
        }else if (inputWeight.value <= 0 || inputHeight.value <= 0){
            alert('Please enter a valid weight and height');
            return;
        }

        let name = inputFname.value + ' ' + inputLname.value;
        let bmi = inputWeight.value / (inputHeight.value * inputHeight.value);
        let bmiRange = bmi.toFixed(2);
        myButton[0].innerText = bmiRange;

        if (bmiRange >= 18.5 && bmi < 25){
            explanation[0].innerText = name + ", you're normal";
        }else if (bmiRange >= 25 && bmiRange < 30){
            explanation[0].innerText = name + ", you're overweight";
        }else if (bmiRange >= 30 && bmiRange < 35){
            explanation[0].innerText = name + ", you're class 1 obese";
        }else if (bmiRange >= 35 && bmiRange < 40){
            explanation[0].innerText = name + ", you're class 2 obese";
        }else if (bmiRange >= 40){
            explanation[0].innerText = name + ", you're class 3 obese";
        }
        else {
            explanation[0].innerText = 'Error';
        }
    });

    // myForm.reset();
}