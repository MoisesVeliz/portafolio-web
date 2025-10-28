let appProjectItems = document.getElementsByTagName("app-project-item");

function buildProjectItem(iconClass, title, subtitle, description, techs, links, imgSrc, alt) {
  let techChips = '';
  let linkButtons = '';
  
  try {
    const techArray = techs ? JSON.parse(techs) : [];
    techChips = techArray.map(tech =>
      `<app-chip variant="tech" iconClass="${tech.icon}" label="${tech.label}"></app-chip>`
    ).join('');
  } catch (e) {
    console.error('Invalid techs JSON:', techs);
  }
  
  try {
    const linkArray = links ? JSON.parse(links) : [];
    linkButtons = linkArray.map(link =>
      `<a class="rounded-full px-3 border-teal-900 text-teal-500 bg-teal-950" href="${link.href || '#'}" target="_blank"><i class="${link.icon}"></i></a>`
    ).join('');
  } catch (e) {
    console.error('Invalid links JSON:', links);
  }
  
  return `
    <div class="grid grid-cols-5 gap-4 md:flex-row gap-5 justify-between"> 
        <div class=" col-span-3 flex flex-col md:flex-row gap-4">
            <app-icon iconClass="${iconClass}"></app-icon>
            <div class="flex flex-col gap-2">
                <p class="font-medium">${title}</p>
                <p>${subtitle}</p>
                <p class="text-sm text-neutral-400">${description}</p>
                <div class="flex gap-2">
                    ${techChips}
                </div>
                <div class="flex gap-2">
                    ${linkButtons}
                </div>
            </div>
        </div>
        <div class="col-span-2 border bg-gray-500 rounded-xl overflow-hidden  h-50 self-center md:self-start">
            <img src="${imgSrc}" alt="${alt}">
        </div>
    </div>
  `;
}

for (let i = 0; i < appProjectItems.length; i++) {
  const e = appProjectItems[i];
  const iconClass = e.getAttribute('iconClass');
  const title = e.getAttribute('title');
  const subtitle = e.getAttribute('subtitle');
  const description = e.getAttribute('description');
  const techs = e.getAttribute('techs');
  const links = e.getAttribute('links');
  const imgSrc = e.getAttribute('imgSrc') || '/assets/img-default.jpg';
  const alt = e.getAttribute('alt') || 'proyecto';
  e.innerHTML = buildProjectItem(iconClass, title, subtitle, description, techs, links, imgSrc, alt);
}