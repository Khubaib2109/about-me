/* Version: actual compact experience tiles; generic Skills section removed */
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
    subtitle: "Actuarial Consultant and Vacationer",
    desc: "Quantitative analysis, dashboards, model review support, research, and stakeholder reporting across health, aged care, financial services, infrastructure, and government-sector work.",
    note: "KPMG",
    stack: ["R", "Excel", "Power BI", "SAS", "Model review"]
  },
  {
    title: "Administration cost study",
    subtitle: "Project work",
    desc: "Surveying, data preparation, Power Query workflows, Excel modelling, R analysis, and Power BI reporting.",
    note: "Details limited",
    stack: ["R", "Excel", "Power BI", "Power Query", "Surveying"]
  },
  {
    title: "Transmission network analysis",
    subtitle: "Project work",
    desc: "Prepared, interrogated, and communicated transmission-network analysis outputs using R and Excel.",
    note: "Details limited",
    stack: ["R", "Excel", "Network analysis", "Reporting"]
  },
  {
    title: "Climate risk dashboards",
    subtitle: "Dashboard and insight delivery",
    desc: "Built dashboards to support climate risk interpretation, insight delivery, and decision-making.",
    note: "Details limited",
    stack: ["Power BI", "Climate risk", "Dashboards"]
  },
  {
    title: "Private hospital indexation",
    subtitle: "Health analytics",
    desc: "Supported development and refinement of private hospital indexation models.",
    note: "Details limited",
    stack: ["Excel", "Modelling", "Indexation", "Health"]
  },
  {
    title: "Banking audit analytics",
    subtitle: "Financial services",
    desc: "Supported analytical review, audit analytics, workpapers, and reporting for banking engagements.",
    note: "Details limited",
    stack: ["Analytics", "Audit", "Reporting"]
  },
  {
    title: "APS 5 Data Analyst",
    subtitle: "Department of Education",
    desc: "Financial and costing models for school funding allocations, budget planning, policy analysis, and operational decision-making.",
    note: "Government",
    stack: ["Excel", "R", "Power BI", "Costing", "Forecasting"]
  },
  {
    title: "Student enrolment projections",
    subtitle: "Department of Education",
    desc: "Forecasted retention, enrolment trends, and disability growth for long-term planning, resource allocation, and funding projections.",
    note: "Government",
    stack: ["R", "Forecasting", "Policy data"]
  },
  {
    title: "School funding dashboard",
    subtitle: "Executive and team use",
    desc: "Power BI dashboards visualising school funding data for executive and delivery-team users.",
    note: "Government",
    stack: ["Power BI", "Data visualisation", "Stakeholders"]
  },
  {
    title: "Finance and statutory reporting",
    subtitle: "APS 4 / APS 3 Finance Officer",
    desc: "FBT, TPAR, reconciliations, journals, process improvement, statutory reporting support, and financial compliance.",
    note: "Government",
    stack: ["Excel", "Data QA", "Compliance", "Reporting"]
  },
  {
    title: "AI and Data Vacationer",
    subtitle: "EY",
    desc: "Excel, SQL, and Power BI analysis with stakeholder reporting and presentations.",
    note: "Consulting",
    stack: ["Excel", "SQL", "Power BI", "Presentations"]
  },
  {
    title: "ANU Actuarial Society",
    subtitle: "President and Treasurer",
    desc: "Led the executive committee, recruited the 2024 leadership team, managed sponsor and university relationships, and oversaw budgeting and governance.",
    note: "Leadership",
    stack: ["Leadership", "Sponsors", "Governance", "Budgeting"]
  },
  {
    title: "ANU Board Games Society",
    subtitle: "President and Treasurer",
    desc: "Led the executive committee, grew member engagement, managed sponsorships, and oversaw budgeting, reporting, and society operations.",
    note: "Leadership",
    stack: ["Leadership", "Events", "Sponsorships", "Finance"]
  },
  {
    title: "Restaurant operations leadership",
    subtitle: "Pattysmiths Canberra",
    desc: "Workforce planning, recruitment, staff training, inventory management, and shift operations across multiple restaurant locations.",
    note: "Operations",
    stack: ["Operations", "Recruitment", "Training", "Process improvement"]
  },
  {
    title: "Core analytics toolkit",
    subtitle: "Across projects",
    desc: "Financial modelling, forecasting, costing, statistical analysis, risk analysis, dashboards, automation, and web prototypes.",
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
