let appChips = document.getElementsByTagName("app-chip");

function buildChip(label, iconClass, variant, href) {
  const isLink = href && href !== '#';
  const baseClasses = variant === 'tech'
    ? "border border-neutral-800 bg-neutral-800 rounded-full px-2 text-xs text-gray-300"
    : "rounded-full px-3 border border-teal-900 text-teal-500 bg-teal-950 py-1";
  
  const iconSize = variant === 'tech' ? '' : 'text-xl';
  
  const content = `<i class="${iconClass} ${iconSize}"></i> ${label}`;
  
  if (isLink) {
    return `<a class="${baseClasses}" href="${href}" target="_blank">${content}</a>`;
  } else {
    return `<span class="${baseClasses}">${content}</span>`;
  }
}


for (let i = 0; i < appChips.length; i++) {
  const e = appChips[i];
  const iconClass = e.getAttribute('iconClass');
  const label = e.getAttribute('label');
  const variant = e.getAttribute('variant') || 'default';
  const href = e.getAttribute('href') || '#';
  e.innerHTML = buildChip(label, iconClass, variant, href);
}
