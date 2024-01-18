const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const results = document.querySelector('#results');
  console.log(height);
  console.log(weight);
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    // show result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
