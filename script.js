const buttons = document.querySelector(".rating-buttons").children;
let selectedValue = 0;

for (let element of buttons) {
  element.addEventListener("click", (e) => {
    for (let button of buttons) {
      button.classList.remove("active");
    }
    element.classList.add("active");
    selectedValue = element.innerHTML;
    console.log(selectedValue);
  });
}

//SubmitButton
const submitButton = document.getElementById("submit-button");
const ratingState = document.querySelector(".rating-state");
const thankState = document.querySelector(".thank-state");

submitButton.addEventListener("click", (e) => {
  if (selectedValue > 0) {
    ratingState.style.display = "none";
    thankState.style.display = "flex";
    document.getElementById("rating-result").innerHTML = selectedValue;
  } else alert("Please select a value");
});
