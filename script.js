document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("modpacks-toggle");
  const list = document.getElementById("modpack-list");
  const modpackSections = document.querySelectorAll(".modpacks > section");

  modpackSections.forEach((section) => {
    const title = section.getAttribute("data-title") || section.id;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${section.id}`;
    a.textContent = title;
    li.appendChild(a);
    list.appendChild(li);
  });

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    list.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !list.contains(e.target)) {
      list.classList.remove("show");
    }
  });
});
