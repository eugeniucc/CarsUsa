const headerBtn = document.querySelector(".header_content-btn");
const serviceBtn = document.querySelector(".services_btn");
const btnClose = document.querySelector(".popup_btn-close");
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popup_btn");
const popupOverlay = document.querySelector(".popup_overlay");

function showModal() {
  popup.classList.add("showPopup");
  popupOverlay.classList.add("showPopup");
}

function hideModal() {
  popup.classList.remove("showPopup");
  popupOverlay.classList.remove("showPopup");
}

function hideOnKey(e) {
  if (e.key === "Escape") {
    popup.classList.remove("showPopup");
    popupOverlay.classList.remove("showPopup");
  }
}

document.addEventListener("keydown", hideOnKey);

headerBtn.addEventListener("click", showModal);
serviceBtn.addEventListener("click", showModal);
popupOverlay.addEventListener("click", hideModal);

popupBtn.addEventListener("click", hideModal);
btnClose.addEventListener("click", hideModal);
