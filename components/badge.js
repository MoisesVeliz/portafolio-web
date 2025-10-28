let appBadges = document.getElementsByTagName("app-badge");

function buildBadge(text) {
  return `
    <span class="rounded-full px-3 border-teal-900 text-teal-500 bg-teal-950 text-xs">${text}</span>
  `;
}

for (let i = 0; i < appBadges.length; i++) {
  const e = appBadges[i];
  const text = e.getAttribute('text');
  e.innerHTML = buildBadge(text);
}