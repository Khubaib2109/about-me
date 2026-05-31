// ===== Theme =====
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeIcon) themeIcon.textContent = theme === "light" ? "☀" : "☾";
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") {
  setTheme(savedTheme);
}

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

// ===== Year =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

// ===== Personal project cards =====
const personalProjects = [
  {
    title: "My Travel Passport",
    kicker: "3D globe travel tracker",
    desc: "Interactive travel map with a rotatable globe, spreadsheet import, chronological route playback, statistics, and export-friendly trip data.",
    icon: "🌏",
    size: "large",
    stack: ["HTML", "CSS", "JavaScript", "Globe.gl", "XLSX"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/my-travel-passport/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/my-travel-passport" }
    ]
  },
  {
    title: "Scrabble Score Tracker",
    kicker: "Board game scoring tool",
    desc: "A browser-based Scrabble tracker with a playable board, player scoring, tile values, and a cleaner interface for casual games.",
    icon: "🔠",
    size: "medium",
    stack: ["HTML", "CSS", "JavaScript", "Game logic"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/scrabble/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/scrabble" }
    ]
  },
  {
    title: "Optimal Coin Flip Game",
    kicker: "Probability visualisation",
    desc: "An optimal-stopping visualisation that explores a coin-flip payoff problem through an interactive binomial-tree style interface.",
    icon: "🪙",
    size: "medium",
    stack: ["JavaScript", "Probability", "Visualisation"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/coinflip/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/coinflip" }
    ]
  },
  {
    title: "Chest Royale",
    kicker: "Animated game simulator",
    desc: "A mobile-friendly chest-opening simulator with animated card reveals, hidden rarity tiers, collection tracking, and game-style UI.",
    icon: "🎁",
    size: "small",
    stack: ["HTML", "CSS", "JavaScript", "Animation"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/chest_opener/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/chest_opener" }
    ]
  },
  {
    title: "PDF Merger",
    kicker: "Local-only productivity app",
    desc: "A local Python web app for uploading, reordering, previewing, selecting page ranges, and merging PDFs without uploading files elsewhere.",
    icon: "📎",
    size: "small",
    stack: ["Python", "Streamlit", "PDF tooling", "Local app"],
    links: [
      { label: "Repo", href: "https://github.com/Khubaib2109/pdf-merger" }
    ]
  },
  {
    title: "Personal Portfolio Website",
    kicker: "This blue portfolio site",
    desc: "A responsive homepage designed to showcase actuarial experience, analytics capability, and selected GitHub projects in a modern masonry layout.",
    icon: "💼",
    size: "small",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    links: [
      { label: "Demo", href: "https://khubaib2109.github.io/about-me/" },
      { label: "Repo", href: "https://github.com/Khubaib2109/about-me" }
    ]
  }
];

// ===== Professional work cards =====
const workHighlights = [
  {
    title: "KPMG actuarial consulting",
    desc: "Quantitative analysis, dashboards, visualisations, analytical tools, model review support, and stakeholder reporting across healthcare, aged care, financial services, infrastructure, and government-sector projects.",
    note: "Details limited where client-facing.",
    stack: ["R", "Excel", "Power BI", "SAS", "Model review"]
  },
  {
    title: "Administration cost study",
    desc: "Supported an administration cost study using survey design and analysis, data preparation, Power Query workflows, Excel modelling, R analysis, and Power BI reporting.",
    note: "Details limited.",
    stack: ["R", "Excel", "Power BI", "Power Query", "Surveying"]
  },
  {
    title: "Transmission network analysis",
    desc: "Performed analysis for a transmission network project, using R and Excel to prepare, interrogate, and communicate analytical outputs.",
    note: "Details limited.",
    stack: ["R", "Excel", "Network analysis", "Reporting"]
  },
  {
    title: "School funding and budget models",
    desc: "Developed and maintained financial and costing models to support school funding allocations, government budget planning, policy analysis, and implementation advice.",
    note: "Department of Education.",
    stack: ["Excel", "R", "Power BI", "Costing", "Forecasting"]
  },
  {
    title: "Enrolment and disability-growth forecasting",
    desc: "Forecasted student retention, enrolment trends, and disability growth to support long-term financial planning, resource allocation, and funding projections.",
    note: "Department of Education.",
    stack: ["Forecasting", "R", "Financial planning", "Policy data"]
  },
  {
    title: "Finance, compliance, and statutory reporting",
    desc: "Improved financial and data management processes, prepared FBT and TPAR reporting, performed reconciliations and journal processing, and contributed to statutory reporting deliverables.",
    note: "Department of Education finance roles.",
    stack: ["Excel", "Data QA", "Compliance", "Reporting"]
  }
];

const projectsMasonry = document.getElementById("projectsMasonry");
const workGrid = document.getElementById("workGrid");

function renderPersonalProjects() {
  if (!projectsMasonry) return;

  projectsMasonry.innerHTML = personalProjects.map((project, index) => {
    const stack = renderTags(project.stack);
    const links = renderLinks(project.links);
    const delay = `${Math.min(index * 80, 420)}ms`;

    return `
      <article class="project-card project-${project.size || "medium"} reveal" style="--delay:${delay}">
        <div class="project-thumb" aria-hidden="true">
          <span>${escapeHtml(project.icon)}</span>
          <div class="thumb-shine"></div>
        </div>
        <div class="project-body">
          <p class="project-kicker">${escapeHtml(project.kicker)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.desc)}</p>
          <div class="tags">${stack}</div>
          <div class="project-actions">${links}</div>
        </div>
      </article>
    `;
  }).join("");
}

function renderWorkHighlights() {
  if (!workGrid) return;

  workGrid.innerHTML = workHighlights.map((item, index) => {
    const stack = renderTags(item.stack);
    const delay = `${Math.min(index * 70, 350)}ms`;

    return `
      <article class="work-card reveal" style="--delay:${delay}">
        <div class="work-top">
          <span class="work-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="badge">${escapeHtml(item.note)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>
        <div class="tags">${stack}</div>
      </article>
    `;
  }).join("");
}

function renderTags(tags = []) {
  return tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
}

function renderLinks(links = []) {
  return links.map(link => {
    const isExternal = /^https?:\/\//i.test(link.href);
    const attrs = isExternal ? `target="_blank" rel="noopener"` : "";
    return `<a href="${escapeAttribute(link.href)}" ${attrs}>${escapeHtml(link.label)}</a>`;
  }).join("");
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
  return escapeHtml(str).replaceAll("`", "&#096;");
}

renderPersonalProjects();
renderWorkHighlights();

// ===== Scroll reveal animation =====
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("is-visible"));
}
