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
  // GitHub / web builds
  {
    title: "My Travel Passport",
    desc: "An interactive 3D globe for logging trips, visualising routes, importing spreadsheet data, and exploring travel statistics.",
    type: "web",
    stack: ["HTML", "CSS", "JavaScript", "Globe.gl", "XLSX"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/my-travel-passport/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/my-travel-passport" }
    ]
  },
  {
    title: "Scrabble Score Tracker",
    desc: "A browser-based Scrabble tracker with a playable board, player scoring, and a cleaner interface for casual games.",
    type: "tools",
    stack: ["HTML", "CSS", "JavaScript", "Game logic"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/scrabble/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/scrabble" }
    ]
  },
  {
    title: "80 Points Online",
    desc: "A browser card-game build with a lobby-style interface and real-time multiplayer-oriented structure.",
    type: "web",
    stack: ["HTML", "CSS", "JavaScript", "Socket.io"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/80points-claude/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/80points-claude" }
    ]
  },
  {
    title: "Optimal Coin Flip Game",
    desc: "A probability and decision-making visualisation that explores optimal stopping through a binomial-tree style interface.",
    type: "data",
    stack: ["JavaScript", "Probability", "Visualisation"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/coinflip/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/coinflip" }
    ]
  },
  {
    title: "Chest Royale",
    desc: "A mobile-friendly chest-opening simulator with animated reveals, rarity tiers, collection tracking, and game-style UX.",
    type: "web",
    stack: ["HTML", "CSS", "JavaScript", "Animation"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/chest_opener/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/chest_opener" }
    ]
  },
  {
    title: "PDF Merger",
    desc: "A local-only Python web app for uploading, reordering, previewing, selecting page ranges, and merging PDFs without uploading files elsewhere.",
    type: "tools",
    stack: ["Python", "Streamlit", "PDF tooling", "Local app"],
    links: [{ label: "Repo", href: "https://github.com/Khubaib2109/pdf-merger" }]
  },
  {
    title: "Personal website",
    desc: "This responsive portfolio site, hosted through GitHub Pages and structured to showcase experience, skills, and selected builds.",
    type: "web",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/about-me/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/about-me" }
    ]
  },

  // Professional analytics themes — intentionally high level
  {
    title: "Healthcare and aged-care analytics",
    desc: "Quantitative analysis, dashboards, and modelling to support performance, cost-driver, risk, and strategic opportunity insights.",
    type: "actuarial",
    stack: ["R", "Excel", "Power BI", "SAS", "Stakeholder reporting"],
    links: [{ label: "Experience", href: "#experience" }]
  },
  {
    title: "Government funding and costing models",
    desc: "Financial and costing models supporting school funding allocations, budget planning, policy analysis, and implementation advice.",
    type: "actuarial",
    stack: ["Excel", "R", "Power BI", "Forecasting", "Costing"],
    links: [{ label: "Experience", href: "#experience" }]
  },
  {
    title: "Enrolment and disability-growth forecasting",
    desc: "Forecasting outputs for student retention, enrolment trends, disability growth, long-term financial planning, and funding projections.",
    type: "data",
    stack: ["Forecasting", "R", "Financial planning", "Policy data"],
    links: [{ label: "Experience", href: "#experience" }]
  },
  {
    title: "Model review and assurance support",
    desc: "Validation and interpretation of statistical methods, coding outputs, and analytical assumptions for assurance-style engagements.",
    type: "actuarial",
    stack: ["Model review", "Statistical methods", "Risk analysis", "QA"],
    links: [{ label: "Experience", href: "#experience" }]
  },
  {
    title: "Finance and compliance reporting",
    desc: "Financial reconciliations, journal processing, FBT, TPAR, statutory reporting support, and process improvement in government finance.",
    type: "actuarial",
    stack: ["Excel", "Reporting", "Compliance", "Process improvement"],
    links: [{ label: "Experience", href: "#experience" }]
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
      return `<a href="${escapeAttribute(l.href)}" ${attrs}>${escapeHtml(l.label)}</a>`;
    }).join("");

    const badgeText =
      p.type === "web" ? "Web" :
      p.type === "tools" ? "Tools" :
      p.type === "data" ? "Data" :
      "Actuarial & Consulting";

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

function escapeAttribute(str) {
  return escapeHtml(str || "#");
}

// Filters UI
const chips = Array.from(document.querySelectorAll(".chip"));
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => {
      c.classList.remove("is-active");
      c.setAttribute("aria-selected", "false");
    });
    chip.classList.add("is-active");
    chip.setAttribute("aria-selected", "true");

    const filter = chip.getAttribute("data-filter") || "all";
    renderProjects(filter);
  });
});

// Initial render
renderProjects("all");
