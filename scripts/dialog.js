const saveButton = document.querySelector(".save-button");
const saveDialog = document.querySelector(".save-dialog");
const closeButton = document.querySelector(".save-dialog__button");

saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (!saveDialog.open) saveDialog.showModal();
});

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  saveDialog.close();
});
