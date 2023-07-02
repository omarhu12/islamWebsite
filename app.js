const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

const calories = document.querySelector(".calories");
const calculateBtn = document.querySelector(".calculate-btn");
const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

// bmr = 10*w + 6.25*h - 5*age +5 for men
// bmr = 10*w + 6.25*h - 5*age -161 for women

const calculateBMR = (weight, height, age, gender) => {
  if (gender == "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

calculateBtn.addEventListener("click", () => {
  let genderValue = document.querySelector(
    "input[name='gender']:checked"
  ).value;

  let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);
  calories.innerHTML = BMR.toLocaleString("en-US");
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

