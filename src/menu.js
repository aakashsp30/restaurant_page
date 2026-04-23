const menuData = {
    starters: [
      { name: "Ember-Roasted Beets", desc: "Whipped chèvre, pistachio dukkah, wildflower honey", price: "$16" },
      { name: "Bone Marrow Toast", desc: "Charred sourdough, shallot jam, micro herbs", price: "$18" },
      { name: "Charred Octopus", desc: "Smoked paprika aioli, crispy capers, lemon oil", price: "$22" },
      { name: "Wood-Fired Burrata", desc: "Heirloom tomato, aged balsamic, basil oil", price: "$19" },
    ],
    mains: [
      { name: "Dry-Aged Ribeye", desc: "Oak-smoked compound butter, grilled broccolini, bone marrow jus", price: "$58" },
      { name: "Whole Roasted Chicken", desc: "Forty garlic cloves, thyme, hand-torn bread, pan drippings", price: "$38" },
      { name: "Cedar Plank Salmon", desc: "Miso glaze, pickled cucumber, sesame, dill", price: "$42" },
      { name: "Roasted Cauliflower", desc: "Romanesco, preserved lemon, golden raisin, harissa", price: "$28" },
    ],
    desserts: [
      { name: "Burnt Basque Cheesecake", desc: "Seasonal compote, fleur de sel", price: "$14" },
      { name: "Dark Chocolate Fondant", desc: "Single origin 72%, vanilla crème anglaise", price: "$15" },
      { name: "Roasted Stone Fruit", desc: "Cardamom labneh, honeycomb, crushed amaretti", price: "$13" },
    ],
  };

function buildSection(title, items) {
    const section = document.createElement("div");
    section.classList.add("menu-section");

    const heading = document.createElement("h2");
    heading.classList.add("menu-section-title");
    heading.textContent = title;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.classList.add("menu-grid");

    items.forEach(({ name, desc, price}) => {
        const item = document.createElement("div");
        item.classList.add("menu-item");
        item.innerHTML = `
            <div class="menu-item-info">
                <div class="menu-item-name">${name}</div>
                <div class="menu-item-desc">${desc}</div>
            </div>
            <span class="menu-item-price">${price}</span>
        `;
        grid.appendChild(item);
    });

    section.appendChild(grid);
    return section;
}

export function loadMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.classList.add("menu-page");

    const header = document.createElement("div");
    header.classList.add("page-header");
    header.innerHTML = `
        <p class="page-eyebrow">Seasonal · Wood-Fired · Local</p>
        <h1 class="page-title">Our Menu</h1>
    `;
    page.appendChild(header);

    page.appendChild(buildSection("To Begin", menuData.starters));
    page.appendChild(buildSection("From the Fire", menuData.mains));
    page.appendChild(buildSection("To Finish", menuData.desserts));

    content.appendChild(page);
}