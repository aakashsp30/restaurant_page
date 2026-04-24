import "./style.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

console.log("Ember & Oak - restaurant page loaded.");

const tabLoaders = {
    home: loadHomePage,
    menu: loadMenuPage,
    about: loadAboutPage,
};

function setActiveTab(tabName) {
    document.querySelectorAll(".nav-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
    });
}

function switchTab(tabName) {
    const loader = tabLoaders[tabName];
    if (!loader) return;
    setActiveTab(tabName);
    loader();
}

document.querySelectorAll(".nav-btn").forEach((btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
}));

document.getElementById("content").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-tab]");
    if (btn && !btn.classList.contains("nav-btn")) {
        switchTab(btn.dataset.tab);
    }
});

loadHomePage();