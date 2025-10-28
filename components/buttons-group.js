function getLink(iconClass, href) {
  return `
    <a class="border rounded-full px-3 py-1 border-teal-900 text-teal-500 bg-teal-950" href="${href}" target="_blank"><i
                            class="${iconClass} text-xl"></i></a>
    `;
}

function buildButtons(buttons) {
  return `
    <div class="flex gap-2">
    ${buttons}
    </div>
    `;
}

const buttonList = portfolioData.contact.buttons;

const btnsResult = buttonList.map((e) => getLink(e.iconClass, e.href)).join("");

buttonsGroup = buildButtons(btnsResult);
