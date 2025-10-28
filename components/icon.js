let appIcons = document.getElementsByTagName("app-icon");

function buildIcon(iconClass) {
  return `
    <div class="w-12 h-12 rounded-full border border-teal-900 bg-teal-950 overflow-hidden md:self-start flex items-center justify-center text-2xl text-teal-500">
        <i class="${iconClass}"></i>
    </div>
  `;
}

for (let i = 0; i < appIcons.length; i++) {
  const e = appIcons[i];
  const iconClass = e.getAttribute('iconClass');
  e.innerHTML = buildIcon(iconClass);
}