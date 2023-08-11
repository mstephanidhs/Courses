"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal"); //querySelector -> only the first one that matches, will be selected, so instead I do querySelectorAll, which returns an object that contains every match

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  // modal.style.display = "block"; -> it does the same thing as the above, but it's not used as much
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//listen for events everywhere
//any key that is pressed, the javascript creates an object with information about it
// e -> will call the function with the event that it happened as a parameter
document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
