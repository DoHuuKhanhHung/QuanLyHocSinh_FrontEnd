const EditBtns = document.querySelectorAll(".js-edit-student");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContent = document.querySelector(".js-modal-content");

function hideModal() {
  modal.classList.remove("open");
}
function showModal() {
  modal.classList.add("open");
}
for (const EditBtn of EditBtns) {
  EditBtn.addEventListener("click", showModal);
}
modalClose.addEventListener("click", hideModal);
modal.addEventListener("click", hideModal);
modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});
