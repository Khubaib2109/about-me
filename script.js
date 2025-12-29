// ===== Theme =====
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeIcon.textContent = theme === "light" ? "☀" : "☾";
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

// ===== Year =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

// ===== Projects =====
const projects = [
  {
    title: "Actuarial analytics case study (sanitised)",
    desc: "End-to-end analysis workflow: data checks, modelling, and concise stakeholder-ready reporting.",
    type: "actuarial",
    stack: ["SQL", "Python/R", "Excel"],
    links: [{ label: "Details", href: "#" }]
  },
  {
    title: "Scenario / assumption testing tool (demo)",
    desc: "Prototype tool to compare scenarios consistently and present outputs clearly.",
    type: "actuarial",
    stack: ["Excel", "Python/R"],
    links: [{ label: "Details", href: "#" }]
  },
  {
    title: "Personal website (GitHub Pages)",
    desc: "Responsive site built and deployed via GitHub Pages with a clean, minimal structure.",
    type: "web",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Repo", href: "https://github.com/khubaib2109/about-me" }]
  },
  {
    title: "Web tool / dashboard (portfolio project)",
    desc: "A lightweight web build showcasing UI, data handling, and deployment (replace with your real project).",
    type: "web",
    stack: ["React", "APIs"],
    links: [
      { label: "Live", href: "#" },
      { label: "Repo", href: "#" }
    ]
  },
  {
    title: "Board game tracker (personal)",
    desc: "Simple tracking project for games played and results (replace with your actual build, if relevant).",
    type: "fun",
    stack: ["Python", "Sheets"],
    links: [{ label: "Notes", href: "#" }]
  }
];

const grid = document.getElementById("projectsGrid");

function renderProjects(filter) {
  if (!grid) return;
  const items = filter === "all" ? projects : projects.filter(p => p.type === filter);

  grid.innerHTML = items.map(p => {
    const stack = p.stack.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join("");
    const links = (p.links || []).map(l =>
      `<a href="${l.href}" ${l.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${escapeHtml(l.label)}</a>`
    ).join("");

    const badgeText = p.type === "actuarial" ? "Actuarial" : (p.type === "web" ? "Web" : "Personal");

    return `
      <article class="project">
        <div class="project-top">
          <h3>${escapeHtml(p.title)}</h3>
          <span class="badge">${badgeText}</span>
        </div>
        <p>${escapeHtml(p.desc)}</p>
        <div class="tags">${stack}</div>
        <div class="project-actions">${links}</div>
      </article>
    `;
  }).join("");

  if (items.length === 0) {
    grid.innerHTML = `<p class="muted">No projects yet.</p>`;
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Filters UI
const chips = Array.from(document.querySelectorAll(".chip"));
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");

    const filter = chip.getAttribute("data-filter") || "all";
    renderProjects(filter);
  });
});

// Initial render
renderProjects("all");
