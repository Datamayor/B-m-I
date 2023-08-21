let button = document.getElementById('btn');

button.addEventListener('click', () => {
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const result = document.getElementById('output');
  let height_status = false,
    weight_status = false;

  if (height === '' || isNaN(height) || height <= 0) { 
    document.getElementById('height_error').innerHTML =
      'please provide a valid height';
  } else {
    document.getElementById('height_error').innerHTML = '';
    height_status = true;
  }

  if (weight === '' || isNaN(weight) || weight <= 0) {
    document.getElementById('weight_error').innerHTML =
      'please provide a valid weight';
  } else {
    document.getElementById('weight_error').innerHTML = '';
    weight_status = true;
  }


if (height_status && weight_status) {
  const bmi = (weight / ((height * height)/1000)).toFixed(2);

  if (bmi > 24.29) {
    result.innerHTML = 'Your BMI is ' + bmi + ', so you are overweight.';
  } else if (bmi > 18.5 && bmi < 24.5) {
    result.innerHTML = 'Your BMI is ' + bmi + ', so you have a normal weight.';
  } else {
    result.innerHTML = 'Your BMI is ' + bmi + ', so you are underweight.';
  }
}
  else{
    alert('the form has errors');
    result.innerHTML = '';
  }
});

