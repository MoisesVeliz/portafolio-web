const cards = portfolioData.extra;

let appCardGroup = document.getElementsByTagName("app-card-group");

for (let i = 0; i < appCardGroup.length; i++) {
  const cardElements = cards.map(card => `<app-card title="${card.title}" description="${card.description}" imgSrc="${card.imgSrc}" alt="${card.alt}"></app-card>`).join('');
  appCardGroup[i].innerHTML = `
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  ${cardElements}
  </div>
  `;
}