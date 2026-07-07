// Open4D site — shared behaviors

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", links.classList.contains("open"));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") links.classList.remove("open");
  });
}

// Copy buttons on code blocks
document.querySelectorAll(".code-block").forEach((block) => {
  const btn = block.querySelector(".copy-btn");
  const pre = block.querySelector("pre");
  if (!btn || !pre) return;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pre.innerText);
      btn.textContent = "Copied!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "Copy";
        btn.classList.remove("copied");
      }, 1800);
    } catch {
      btn.textContent = "Press Ctrl+C";
    }
  });
});

// Scroll-reveal animation
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

// Docs sidebar: highlight the section currently in view
const sidebarLinks = document.querySelectorAll(".docs-sidebar a[href^='#']");
if (sidebarLinks.length && "IntersectionObserver" in window) {
  const map = new Map();
  sidebarLinks.forEach((a) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) map.set(target, a);
  });
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sidebarLinks.forEach((a) => a.classList.remove("active"));
          const link = map.get(entry.target);
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-20% 0px -70% 0px" }
  );
  map.forEach((_, target) => spy.observe(target));
}
