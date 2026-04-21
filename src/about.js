export function loadAboutPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
  
    const page = document.createElement("div");
    page.classList.add("about-page");
  
    page.innerHTML = `
      <div class="about-visual">
        <div class="about-visual-inner">
          <div class="about-emblem">E&amp;O</div>
          <span class="about-year">Est. 2011</span>
        </div>
      </div>
  
      <div class="about-content">
        <p class="page-eyebrow">Our Story</p>
        <h1 class="page-title">Cooking with<br>conviction</h1>
  
        <p class="about-body">
          Ember &amp; Oak was born from a simple belief: that <strong>fire is the oldest
          and most honest cooking tool</strong> we have. In 2011, chef Maya Okafor
          converted a 1920s foundry in Portland's Pearl District into the open-hearth
          kitchen you see today.
        </p>
        <p class="about-body">
          We source every ingredient within 150 miles. Our farmers are listed on the
          back of every menu. <strong>Nothing arrives frozen. Nothing leaves ordinary.</strong>
          The menu changes each week — sometimes each day — because the seasons
          insist on it.
        </p>
        <p class="about-body">
          We're open Tuesday through Sunday for dinner, and Saturday and Sunday
          for an unhurried brunch. Reservations are recommended but walk-ins are
          always welcome at the bar.
        </p>
  
        <div class="about-team">
          <p class="about-team-label">The Team</p>
          <div class="about-person">
            <div class="about-person-name">Maya Okafor</div>
            <div class="about-person-role">Chef & Founder</div>
          </div>
          <div class="about-person">
            <div class="about-person-name">David Reyes</div>
            <div class="about-person-role">Head of Pastry</div>
          </div>
          <div class="about-person">
            <div class="about-person-name">Lena Schwartz</div>
            <div class="about-person-role">Sommelier & Beverage Director</div>
          </div>
        </div>
      </div>
    `;
  
    content.appendChild(page);
  }