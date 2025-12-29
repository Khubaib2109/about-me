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
  // Web builds
  {
    title: "Online rulebook (card game)",
    desc: "A clean, searchable online rulebook built with HTML and CSS.",
    type: "web",
    stack: ["HTML", "CSS"],
    links: [{ label: "Demo", href: "#" }, { label: "Repo", href: "#" }]
  },
  {
    title: "Multiplayer card game",
    desc: "Browser-based multiplayer card game built with JavaScript and HTML.",
    type: "web",
    stack: ["JavaScript", "HTML"],
    links: [{ label: "Demo", href: "#" }, { label: "Repo", href: "#" }]
  },
  {
    title: "Travel tracker (map + stats + export)",
    desc: "Tool to visualise trips taken, generate stats (including distances), and export files.",
    type: "data",
    stack: ["JavaScript", "Data", "Export"],
    links: [{ label: "Demo", href: "#" }, { label: "Repo", href: "#" }]
  },

  // Utilities / tools
  {
    title: "PDF merger",
    desc: "Python utility to merge PDFs into a single file with a simple workflow.",
    type: "tools",
    stack: ["Python"],
    links: [{ label: "Repo", href: "#" }]
  },
  {
    title: "Scrabble score tracker",
    desc: "A lightweight score tracker for Scrabble games with clean UX.",
    type: "tools",
    stack: ["JavaScript"],
    links: [{ label: "Demo", href: "#" }, { label: "Repo", href: "#" }]
  },
  {
    title: "Personal website",
    desc: "Responsive portfolio site hosted on GitHub Pages.",
    type: "web",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Repo", href: "https://github.com/khubaib2109/about-me" }]
  },

  // Actuarial / data analytics work (limited details)
  {
    title: "FBT submissions (government)",
    desc: "Prepared FBT submissions for Australian Government departments (details limited).",
    type: "actuarial",
    stack: ["Excel", "Data QA"],
    links: [{ label: "Summary", href: "#" }]
  },
  {
    title: "Climate risk dashboards",
    desc: "Developed climate risk dashboards to support interpretation and decision-making (details limited).",
    type: "actuarial",
    stack: ["Power BI", "Analytics"],
    links: [{ label: "Summary", href: "#" }]
  },
  {
    title: "Private hospital indexation models",
    desc: "Supported development and refinement of indexation models (details limited).",
    type: "actuarial",
    stack: ["Excel", "Modelling"],
    links: [{ label: "Summary", href: "#" }]
  },
  {
    title: "Banking financial audits",
    desc: "Contributed to audit analytics and workpapers in banking engagements (details limited).",
    type: "actuarial",
    stack: ["Analytics", "Reporting"],
    links: [{ label: "Summary", href: "#" }]
  },
  {
    title: "Budget costings (Australian school funding)",
    desc: "Built Excel-based costings to support school funding analysis and budget processes (details limited).",
    type: "actuarial",
    stack: ["Excel", "Costing", "QA"],
    links: [{ label: "Summary", href: "#" }]
  },
  {
    title: "Student enrolment projections (Australia)",
    desc: "Produced enrolment projection outputs using R, including data preparation and reporting (details limited).",
    type: "actuarial",
    stack: ["R", "Forecasting", "Data"],
    links: [{ label: "Summary", href: "#" }]
  },
  {
    title: "School funding dashboard (executive + team use)",
    desc: "Developed Power BI dashboards to visualise school funding data for executives and delivery teams (details limited).",
    type: "actuarial",
    stack: ["Power BI", "Data visualisation", "Stakeholders"],
    links: [{ label: "Summary", href: "#" }]
  }
];

const grid = document.getElementById("projectsGrid");

function renderProjects(filter) {
  if (!grid) return;

  const items = filter === "all" ? projects : projects.filter(p => p.type === filter);

  grid.innerHTML = items.map(p => {
    const stack = (p.stack || []).map(s => `<span class="tag">${escapeHtml(s)}</span>`).join("");
    const links = (p.links || []).map(l => {
      const isExternal = l.href && (l.href.startsWith("http") || l.href.startsWith("https"));
      const attrs = isExternal ? `target="_blank" rel="noopener"` : "";
      return `<a href="${l.href}" ${attrs}>${escapeHtml(l.label)}</a>`;
    }).join("");

    const badgeText =
      p.type === "web" ? "Web" :
      p.type === "tools" ? "Tools" :
      p.type === "data" ? "Data" :
      "Actuarial & Data";

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
    grid.innerHTML = `<p class="muted">No projects in this category yet.</p>`;
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
