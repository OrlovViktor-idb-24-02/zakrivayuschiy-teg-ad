const saveButton = document.querySelector(".save-button");
const saveDialog = document.querySelector(".save-dialog");
saveButton.addEventListener("click", () => saveDialog.showModal());
document
  .querySelector(".save-dialog__button")
  .addEventListener("click", () => saveDialog.close());
