let appExperienceItems = document.getElementsByTagName("app-experience-item");

function buildExperienceItem(iconClass, title, date, subtitle, description) {
  return `
    <div class="flex flex-col md:flex-row gap-4">
        <app-icon iconClass="${iconClass}"></app-icon>
        <div class="flex-1 flex flex-col gap-2">
            <div class="flex justify-between items-start">
                <p class="font-medium">${title}</p>
                <app-badge text="${date}"></app-badge>
            </div>
            <p>${subtitle}</p>
            <p class="text-sm text-neutral-400">${description}</p>
        </div>
    </div>
  `;
}

for (let i = 0; i < appExperienceItems.length; i++) {
  const e = appExperienceItems[i];
  const iconClass = e.getAttribute('iconClass');
  const title = e.getAttribute('title');
  const date = e.getAttribute('date');
  const subtitle = e.getAttribute('subtitle');
  const description = e.getAttribute('description');
  e.innerHTML = buildExperienceItem(iconClass, title, date, subtitle, description);
}