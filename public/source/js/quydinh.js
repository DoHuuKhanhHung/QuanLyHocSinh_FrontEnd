// Modal 1
const EditBtn = document.querySelector(".js-edit-student");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContent = document.querySelector(".js-modal-content");

function hideModal() {
  modal.classList.remove("open");
}
function showModal() {
  modal.classList.add("open");
}

EditBtn.addEventListener("click", showModal);

modalClose.addEventListener("click", hideModal);
modal.addEventListener("click", hideModal);
modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Modal 2
const EditBtn2 = document.querySelector(".js-edit-student2");
const modal2 = document.querySelector(".js-modal2");
const modalClose2 = document.querySelector(".js-modal-close2");
const modalContent2 = document.querySelector(".js-modal-content2");

function hideModal2() {
  modal2.classList.remove("open");
}
function showModal2() {
  modal2.classList.add("open");
}

EditBtn2.addEventListener("click", showModal2);
modalClose2.addEventListener("click", hideModal2);
modal2.addEventListener("click", hideModal2);
modalContent2.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Modal 3
const EditBtn3 = document.querySelector(".js-edit-student3");
const modal3 = document.querySelector(".js-modal3");
const modalClose3 = document.querySelector(".js-modal-close3");
const modalContent3 = document.querySelector(".js-modal-content3");

function hideModal3() {
  modal3.classList.remove("open");
}
function showModal3() {
  modal3.classList.add("open");
}

EditBtn3.addEventListener("click", showModal3);
modalClose3.addEventListener("click", hideModal3);
modal3.addEventListener("click", hideModal3);
modalContent3.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Modal 4
const EditBtn4 = document.querySelector(".js-edit-student4");
const modal4 = document.querySelector(".js-modal4");
const modalClose4 = document.querySelector(".js-modal-close4");
const modalContent4 = document.querySelector(".js-modal-content4");

function hideModal4() {
  modal4.classList.remove("open");
}
function showModal4() {
  modal4.classList.add("open");
}

EditBtn4.addEventListener("click", showModal4);
modalClose4.addEventListener("click", hideModal4);
modal4.addEventListener("click", hideModal4);
modalContent4.addEventListener("click", function (event) {
  event.stopPropagation();
});
