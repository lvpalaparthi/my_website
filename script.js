"use strict";

const modal = document.querySelector(".modal");
const contact = document.querySelector(".contact");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowDanceModal = document.querySelector(".dance-tab");
const btnShowContactModal = document.querySelector(".contact-tab");

btnShowContactModal.addEventListener("click", function () {
  contact.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnShowDanceModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
const closeModal = function () {
  modal.classList.add("hidden");
  contact.classList.add("hidden");
  overlay.classList.add("hidden");
};
document.getElementById("close-contact").addEventListener("click", closeModal);
document.getElementById("close-dance").addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (
//     (e.key === "Escape" && !modal.classList.contains("hidden")) ||
//     !contact.classList.contains("hidden")
//   ) {
//     closeModal();
//   }
// });
