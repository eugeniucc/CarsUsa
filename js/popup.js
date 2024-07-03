const headerBtn = document.querySelector(".header_content-btn");
const serviceBtn = document.querySelector(".services_btn");
const btnClose = document.querySelector(".popup_btn-close");
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popup_btn");

function showModal() {
  popup.classList.add("showPopup");
}

function hideModal() {
  popup.classList.remove("showPopup");
}

function hideOnKey(e) {
  if (e.key === "Escape") {
    popup.classList.remove("showPopup");
  }
}

function hideOnClick(e) {
  if (!popup.contains(e.target)) {
    popup.classList.remove("showPopup");
  }
}

document.addEventListener("keydown", hideOnKey);

headerBtn.addEventListener("click", showModal);
serviceBtn.addEventListener("click", showModal);

popupBtn.addEventListener("click", hideModal);
btnClose.addEventListener("click", hideModal);
