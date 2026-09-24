const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const copyButton = document.querySelector("[data-copy]");
const copyStatus = document.querySelector("[data-copy-status]");

const address = "Rua Cláudio Brasil, Engenheiro Luciano Cavalcante, Fortaleza - CE, 60810-640";

window.addEventListener("scroll", () => {
  header.classList.toggle("is-stuck", window.scrollY > 8);
});

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(address);
    copyStatus.textContent = "Endereço copiado.";
  } catch {
    copyStatus.textContent = address;
  }
});
