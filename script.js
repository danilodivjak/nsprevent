document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("menu-overlay");
    const menuOpenButton = document.getElementById("menu-open");
    const menuCloseButton = document.getElementById("menu-close");

    function openMenu() {
        menu.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }

    function closeMenu() {
        menu.classList.add("hidden");
        overlay.classList.add("hidden");
    }

    menuOpenButton.addEventListener("click", openMenu);
    menuCloseButton.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
});



function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove("hidden");
    }

    function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add("hidden"); 
    }