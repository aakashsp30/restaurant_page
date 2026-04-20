export function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const section = document.createElement("section");
    section.classList.add("home-hero");

    section.innerHTML = `
        <div class="home-hero-bg"></div>

        <div class="home-hero-content">
            <p class="home-eyebrow">Est. 2011 · Portland, Oregon</p>
            <h1 class="home-headline">
                Where fire<br>meets <em>flavour</em>
            </h1>
        </div>
    `;
}