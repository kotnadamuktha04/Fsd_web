document.getElementById("submit-btn").addEventListener("click", function () {
  const steps = document.getElementById("steps").value;
  const calories = document.getElementById("calories").value;

  document.getElementById("summary-steps").innerText = `Steps: ${steps}`;
  document.getElementById(
    "summary-calories"
  ).innerText = `Calories: ${calories}`;

  // Clear input fields after submission
  document.getElementById("steps").value = "";
  document.getElementById("calories").value = "";
});
