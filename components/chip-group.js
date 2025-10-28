const chips = portfolioData.technologies;

let appChipGroup = document.getElementsByTagName("app-chip-group");

for (let i = 0; i < appChipGroup.length; i++) {
  const chipElements = chips.map(chip => `<app-chip label="${chip.label}" iconClass="${chip.iconClass}"></app-chip>`).join('');
  appChipGroup[i].innerHTML = `
  <div class="flex flex-wrap gap-2">
  ${chipElements}
  </div>
  `;
}
