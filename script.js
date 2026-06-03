/* Version: refined portfolio v2; smaller headings; equal project cards; grouped experience; actuarial pathway progress */
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
    size: "medium",
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
    subtitle: "Actuarial Consultant and Vacationer",
    desc: "Quantitative analysis, financial modelling, dashboards, model review support, and stakeholder reporting. Project work has included healthcare and aged care analytics, climate risk dashboards, private hospital indexation, banking audit analytics, infrastructure work, and government-sector analysis.",
    note: "KPMG",
    stack: ["R", "Excel", "Power BI", "SAS", "Health", "Climate", "Banking", "Infrastructure"]
  },
  {
    title: "Administration cost study",
    subtitle: "Major analytics workstream",
    desc: "Surveying, data preparation, Power Query workflows, Excel modelling, R analysis, and Power BI reporting to support administration cost analysis.",
    note: "Details limited",
    stack: ["R", "Excel", "Power BI", "Power Query", "Surveying"]
  },
  {
    title: "Transmission network analysis",
    subtitle: "Major analytics workstream",
    desc: "Prepared, interrogated, and communicated transmission-network analysis outputs using R and Excel.",
    note: "Details limited",
    stack: ["R", "Excel", "Network analysis", "Reporting"]
  },
  {
    title: "APS 5 Data Analyst",
    subtitle: "Department of Education",
    desc: "Developed financial and costing models for school funding allocations, budget planning, and policy analysis. Work included enrolment, retention and disability-growth projections, plus school funding dashboards for executive and delivery-team users.",
    note: "Government",
    stack: ["Excel", "R", "Power BI", "Costing", "Forecasting", "Dashboards"]
  },
  {
    title: "Finance and statutory reporting",
    subtitle: "APS 4 / APS 3 Finance Officer",
    desc: "Improved financial and data management processes; prepared FBT and TPAR reporting; performed reconciliations, journals, financial statement support, compliance work, and stakeholder liaison.",
    note: "Government",
    stack: ["Excel", "Data QA", "Compliance", "Reporting", "Reconciliations"]
  },
  {
    title: "AI and Data Vacationer",
    subtitle: "EY",
    desc: "Applied Excel, SQL, and Power BI to analyse complex datasets, support evidence-based decision-making, and communicate insights through reporting and presentations.",
    note: "Consulting",
    stack: ["Excel", "SQL", "Power BI", "Presentations"]
  },
  {
    title: "Restaurant operations leadership",
    subtitle: "McDonald’s and Pattysmiths Canberra",
    desc: "Built early operational leadership experience across workforce planning, recruitment, staff training, inventory management, customer service, process improvement, and shift operations.",
    note: "Operations",
    stack: ["Operations", "Recruitment", "Training", "Process improvement"]
  },
  {
    title: "ANU Actuarial Society",
    subtitle: "President and Treasurer",
    desc: "Led the executive committee, recruited the 2024 leadership team, managed sponsor and university relationships, and oversaw budgeting, grants, financial management, and governance.",
    note: "Leadership",
    stack: ["Leadership", "Sponsors", "Governance", "Budgeting"]
  },
  {
    title: "ANU Board Games Society",
    subtitle: "President and Treasurer",
    desc: "Led the executive committee, grew member engagement, managed sponsorships and stakeholder relationships, and oversaw budgeting, financial reporting, and society operations.",
    note: "Leadership",
    stack: ["Leadership", "Events", "Sponsorships", "Finance"]
  },
  {
    title: "Core analytics toolkit",
    subtitle: "Across professional and personal projects",
    desc: "Financial modelling, forecasting, costing, statistical analysis, risk analysis, dashboards, automation, data cleaning, and lightweight web prototypes.",
    note: "Tools",
    stack: ["R", "Excel", "Power BI", "VBA", "Power Query", "HTML", "CSS", "JavaScript"]
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
        ${item.subtitle ? `<p class="work-subtitle">${escapeHtml(item.subtitle)}</p>` : ""}
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
 
