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
            <p class="home-body">
                Ember &amp; Oak is a wood-fire kitchen devoted to the art of slow cooking.
                Every dish is shaped by the seasons, guided by the flame, and finished
                with the quiet confidence of two decades at the hearth.
            </p>
            <button class="home-cta" data-tab="menu">
                Explore Our Menu <span class="home-cta-arrow">→</span>
            </button>
        </div>

        <div class="home-aside">
            <div class="home-stat">
                <span class="home-stat-number">14</span>
                <span class="home-stat-label">Years open</span>
            </div>
            <div class="home-divider"></div>
            <div class="home-stat">
                <span class="home-stat-number">3</span>
                <span class="home-stat-label">James Beard nods</span>
            </div>
            <div class="home-divider"></div>
            <div class="home-stat">
                <span class="home-stat-number">100</span>
                <span class="home-stat-label">Wood-fired</span>
            </div>
        </div>
    `;

    content.appendChild(section);
}