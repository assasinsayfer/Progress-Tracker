const goalInput = document.querySelector("#goalInput");
const addGoalBtn = document.querySelector("#addGoalBtn");
const goalList = document.querySelector("#goalList");

addGoalBtn.addEventListener("click", function () {
  if (goalInput.value.trim() === "") {
    alert("Maqsadni kiritish shart ");
    return;
  }

  const goal = goalInput.value;
  const li = document.createElement("li");
  li.innerText = `${goalList.children.length + 1}. ${goal}`;
  goalList.append(li);
  goalInput.value = "";

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeBtn");
  removeBtn.innerText = "Remove";
  removeBtn.addEventListener("click", () => li.remove());
  li.append(removeBtn);

  // Check button
  const checkBtn = document.createElement("button");
  checkBtn.classList.add("checkBtn");
  checkBtn.innerText = "✔";
  checkBtn.addEventListener("click", () => setGoalStyle(li, "green"));
  li.append(checkBtn);

  // Error button
  const errorBtn = document.createElement("button");
  errorBtn.classList.add("erorBtn");
  errorBtn.innerText = "✖";
  errorBtn.addEventListener("click", () => setGoalStyle(li, "red"));
  li.append(errorBtn);
});

// Helper function to set goal styles
function setGoalStyle(element, color) {
  element.style.backgroundColor = color;
  element.style.color = "white";
}
