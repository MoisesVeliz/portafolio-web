let appCards = document.getElementsByTagName("app-card");

function buildCard(title, description, imgSrc, alt) {
  return `
    <div class="w-full border border-neutral-700 bg-neutral-900 rounded-xl overflow-hidden">
        <div class="w-full h-45 bg-gray-500 overflow-hidden">
            <img src="${imgSrc}" alt="${alt}">
        </div>
        <div class="p-3">
            <p class="font-bold text-teal-500">${title}</p>
            <p class="text-sm text-neutral-400">${description}</p>
        </div>
    </div>
  `;
}

for (let i = 0; i < appCards.length; i++) {
  const e = appCards[i];
  const title = e.getAttribute('title');
  const description = e.getAttribute('description');
  const imgSrc = e.getAttribute('imgSrc') || '/assets/img-default.jpg';
  const alt = e.getAttribute('alt') || 'img extra';
  e.innerHTML = buildCard(title, description, imgSrc, alt);
}