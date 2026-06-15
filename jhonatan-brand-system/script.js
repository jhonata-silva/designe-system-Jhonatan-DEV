const root = document.documentElement;
const toggle = document.querySelector("#themeToggle");
const copyButton = document.querySelector("#copyTokens");
const tokenCode = document.querySelector("#tokenCode");

const savedTheme = localStorage.getItem("jhonatan-brand-theme");

if (savedTheme === "light") {
  root.dataset.theme = "light";
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  const nextTheme = toggle.checked ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("jhonatan-brand-theme", nextTheme);
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(tokenCode.textContent.trim());
    copyButton.classList.add("copied");
    window.setTimeout(() => copyButton.classList.remove("copied"), 1200);
  } catch (error) {
    const range = document.createRange();
    range.selectNodeContents(tokenCode);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});
