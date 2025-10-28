const contactoComponent = document.getElementsByTagName("app-contacto");
const userEmail = portfolioData.contact.email;

function buildContainer(userEmail) {
  return `
                        <div class="flex flex-col items-center md:flex-row gap-2 mt-3">
                <div>
                    <a class="border rounded-full px-3 py-1 bg-teal-900 border-teal-900 flex items-center gap-2"
                        href="#">
                        <i class="fa-regular fa-envelope text-xl"></i>
                        ${userEmail}
                    </a>
                </div>
            ${buttonsGroup}
            </div>
            `;
}

for (let i = 0; i < contactoComponent.length; i++) {
  contactoComponent[i].innerHTML = buildContainer(userEmail);
}
