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
  const images = [
    "/assets/slideshow/1.png",
    "/assets/slideshow/2.png",
    "/assets/slideshow/3.png",
    "/assets/slideshow/4.png",
    "/assets/slideshow/5.jpg",
    "/assets/slideshow/6.png",
    "/assets/slideshow/7.png"
  ];

  let index = 0;
  const body = document.body;

  function changeBackground() {
    body.style.setProperty('--slideshow-img', `url(${images[index]})`);
    index = (index + 1) % images.length;
  }

  changeBackground(); // Set initial image
  setInterval(changeBackground, 60000); // Change every 60s

});
