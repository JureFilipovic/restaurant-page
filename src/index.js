import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";
import "./styles/styles.css"

const content = document.getElementById("content");

function loadHome() {
    content.innerHTML = "";
    content.appendChild(createHome());
    
}

function loadMenu() {
    content.innerHTML = "";
    content.appendChild(createMenu());
}

function loadContact() {
    content.innerHTML = "";
    content.appendChild(createContact());
}

function switchTab() {
    const homeBtn = document.getElementById("home-btn");
    const menuBtn = document.getElementById("menu-btn");
    const contactBtn = document.getElementById("contact-btn");

    homeBtn.addEventListener("click", loadHome);
    menuBtn.addEventListener("click", loadMenu);
    contactBtn.addEventListener("click", loadContact);

}

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
    switchTab();
});
