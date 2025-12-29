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

// ===== Copy email =====
const copyEmailBtn = document.getElementById("copyEmail");
copyEmailBtn?.addEventListener("click", async () => {
  const email = copyEmailBtn.getAttribute("data-email") || "";
  try {
    await navigator.clipboard.writeText(email);
    const original = copyEmailBtn.textContent;
    copyEmailBtn.textContent = "✓ Copied";
    setTimeout(() => (copyEmailBtn.textContent = original), 900);
  } catch {
    // fallback
    window.location.href = `mailto:${email}`;
  }
});

// ===== Projects =====
const projects = [
  {
    title: "Claims / experience analysis (sanitised)",
    desc: "Built a repeatable pipeline for cleaning + validating data, then produced insights for stakeholders.",
    type: "actuarial",
    stack: ["SQL", "Python/R", "Excel"],
    links: [
      { label: "Case study", href: "#" }
    ]
  },
  {
    title: "Pricing model tool (demo)",
    desc: "Interactive model prototype to test assumptions and compare scenarios without spreadsheet chaos.",
    type: "actuarial",
    stack: ["Excel", "Python/R"],
    links: [
      { label: "Write-up", href: "#" }
    ]
  },
  {
    title: "Portfolio website (this site)",
    desc: "Fast, modern, responsive site hosted on GitHub Pages. Simple structure, clean design, deploy-ready.",
    type: "web",
    stack: ["HTML", "CSS", "JS"],
    links: [
      { label: "Repo", href: "https://github.com/YOURUSERNAME/about-me" }
    ]
  },
  {
    title: "Web app / dashboard project",
    desc: "A small web build showcasing UI + data handling (swap this with your real project).",
    type: "web",
    stack: ["React", "API", "Charts"],
    links: [
      { label: "Live demo", href: "#" },
      { label: "Repo", href: "#" }
    ]
  },
  {
    title: "Board game stats tracker",
    desc: "Tracked games played + win rates + fun metrics. Because spreadsheets are my love language.",
    type: "fun",
    stack: ["Sheets", "Python"],
    links: [
      { label: "Overview", href: "#" }
    ]
  },
  {
    title: "Hiking planner map",
    desc: "Map-based planner for routes + gear checklists (great portfolio project if you want to build it).",
    type: "fun",
    stack: ["JS", "Maps"],
    links: [
      { label: "Idea notes", href: "#" }
    ]
  }
];

const grid = document.getElementById("projectsGrid");

function renderProjects(filter) {
  if (!grid) return;
  const items = (filter === "all") ? projects : projects.filter(p => p.type === filter);

  grid.innerHTML = items.map(p => {
    const stack = p.stack.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join("");
    const links = (p.links || []).map(l =>
      `<a href="${l.href}" ${l.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${escapeHtml(l.label)}</a>`
    ).join("");

    const badgeText = p.type === "actuarial" ? "Actuarial" : (p.type === "web" ? "Web" : "Fun");

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
    grid.innerHTML = `<p class="muted">No projects yet. Add one — even a small build is better than nothing.</p>`;
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
