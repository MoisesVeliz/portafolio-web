let appEducationItems = document.getElementsByTagName("app-education-item");

function buildEducationItem(
  iconClass,
  title,
  subtitle,
  description,
  badgeText
) {
  return `
    <div class="flex flex-col md:flex-row gap-5 justify-between">
      <div class="flex flex-col flex-1 md:flex-row gap-4">
          <app-icon iconClass="${iconClass}"></app-icon>
          <div class="flex flex-1 flex-col gap-2">
          <div class="flex justify-between">
            <p class="font-medium">${title}</p>
            <app-badge text="${badgeText}"></app-badge>
          </div
              <p>${subtitle}</p>
              <p class="text-sm text-neutral-400">${description}</p>
          </div>
      </div>
    </div>
        `;
}

// <div class="flex flex-col flex-1 items-end gap-4">

// </div>
for (let i = 0; i < appEducationItems.length; i++) {
  const e = appEducationItems[i];
  const iconClass = e.getAttribute("iconClass");
  const title = e.getAttribute("title");
  const subtitle = e.getAttribute("subtitle");
  const description = e.getAttribute("description");
  const badgeText = e.getAttribute("badgeText");
  e.innerHTML = buildEducationItem(
    iconClass,
    title,
    subtitle,
    description,
    badgeText
  );
}
