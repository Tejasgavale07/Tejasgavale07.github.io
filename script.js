// ============================================================
// Renders SITE_DATA (from data.js) into the page, then wires up
// the reveal-on-scroll and hero ledger animations.
// No build step needed — just edit data.js and refresh.
// ============================================================

(function render() {
  const d = SITE_DATA;

  document.title = `${d.name} — ${d.role}`;

  setText("hero-name", d.name);
  setText("hero-role", d.tagline);
  setText("hero-summary", d.summary);
  setText("about-summary", d.summary);
  setText("fact-location", d.location);
  setText("footer-name", `© ${new Date().getFullYear()} ${d.name}`);
  setText("looking-for", d.lookingFor);

  const emailEl = document.getElementById("fact-email");
  emailEl.textContent = d.email;
  emailEl.href = `mailto:${d.email}`;
  setText("fact-phone", d.phone);

  const contactEmail = document.getElementById("contact-email");
  contactEmail.href = `mailto:${d.email}`;
  document.getElementById("contact-linkedin").href = d.linkedin;
  document.getElementById("contact-github").href = d.github;

  document.getElementById("nav-resume").href = d.resumeFile;
  document.getElementById("hero-resume").href = d.resumeFile;

  // --- Hero dashboard widget ---
  setText("dash-title", d.heroDashboard.title);
  const kpiWrap = document.getElementById("dash-kpis");
  d.heroDashboard.kpis.forEach((k) => {
    const tile = document.createElement("div");
    tile.className = "dash-kpi";
    tile.innerHTML = `
      <div class="dash-kpi-value" data-target="${k.value}" data-suffix="${k.suffix || ""}" data-prefix="${k.prefix || ""}">${k.prefix || ""}0${k.suffix || ""}</div>
      <div class="dash-kpi-label">${k.label}</div>
      <div class="spark">${sparkBars()}</div>`;
    kpiWrap.appendChild(tile);
  });

  const barRows = document.getElementById("bar-rows");
  d.heroDashboard.entities.forEach((e, i) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-row-top">
        <span>${e.name}</span>
        <span class="bar-check">✓ Matched</span>
      </div>
      <div class="bar-track"><div class="bar-fill" data-pct="${e.pct}" style="transition-delay:${i * 0.15}s"></div></div>`;
    barRows.appendChild(row);
  });

  // --- Stats strip ---
  const statsGrid = document.getElementById("stats-grid");
  d.stats.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "stat";
    el.innerHTML = `<div class="stat-value" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div><div class="stat-label">${s.label}</div>`;
    statsGrid.appendChild(el);
  });

  // --- Skills ---
  const skillsGrid = document.getElementById("skills-grid");
  d.skillGroups.forEach((g) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `<h3>${g.group}</h3><ul>${g.items
      .map((i) => `<li>${i}</li>`)
      .join("")}</ul>`;
    skillsGrid.appendChild(card);
  });

  // --- Experience timeline (company header + role progression) ---
  const timeline = document.getElementById("timeline");
  d.experience.forEach((job) => {
    const wrap = document.createElement("div");
    wrap.className = "tl-company-block";
    wrap.innerHTML = `<div class="tl-company-header"><h3>${job.company}</h3><span>${job.location}</span></div>`;

    const roles = job.roles || [
      { title: job.title, period: job.period, bullets: job.bullets },
    ];

    roles.forEach((role, i) => {
      const roleEl = document.createElement("div");
      roleEl.className = "tl-item";
      const promoBadge =
        roles.length > 1 && i === 0
          ? `<span class="promo-badge">↑ Promoted</span>`
          : "";
      roleEl.innerHTML = `
        <div class="tl-period">${role.period}</div>
        <div class="tl-role">
          <h4>${role.title} ${promoBadge}</h4>
          <ul>${role.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
        </div>`;
      wrap.appendChild(roleEl);
    });

    timeline.appendChild(wrap);
  });

  // --- Projects ---
  const projectsList = document.getElementById("projects-list");
  d.projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card";
    const linkHtml =
      p.link && !p.link.startsWith("[")
        ? `<p style="margin-top:14px"><a href="${p.link}" target="_blank" rel="noopener" style="color:var(--gold);font-family:var(--mono);font-size:13px">View project →</a></p>`
        : "";
    card.innerHTML = `
      <span class="project-tag">${p.tag}</span>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <ul class="project-highlights">${p.highlights
        .map((h) => `<li>${h}</li>`)
        .join("")}</ul>
      <div class="stack-pills">${p.stack
        .map((s) => `<span class="pill">${s}</span>`)
        .join("")}</div>
      ${linkHtml}`;
    projectsList.appendChild(card);
  });

  // --- Professional projects grid ---
  const ppGrid = document.getElementById("pp-grid");
  (d.professionalProjects || []).forEach((p) => {
    const card = document.createElement("div");
    card.className = "pp-card";
    card.innerHTML = `
      <div class="pp-stack">${p.stack}</div>
      <h4>${p.name}</h4>
      <p>${p.description}</p>`;
    ppGrid.appendChild(card);
  });

  // --- Tech stack chart (share of projects each tool touches) ---
  const stackbarList = document.getElementById("stackbar-list");
  const totalProjects = d.techMatrix.rows.length;
  const toolCounts = d.techMatrix.columns
    .map((tool) => ({
      tool,
      count: d.techMatrix.rows.filter((r) => r.uses.includes(tool)).length,
      projects: d.techMatrix.rows.filter((r) => r.uses.includes(tool)).map((r) => r.project),
    }))
    .sort((a, b) => b.count - a.count);

  toolCounts.forEach((t) => {
    const pct = Math.round((t.count / totalProjects) * 100);
    const row = document.createElement("div");
    row.className = "stackbar-row";
    row.title = t.projects.join(" · ");
    row.innerHTML = `
      <div class="stackbar-top">
        <span class="stackbar-name">${t.tool}</span>
        <span class="stackbar-count">${t.count}/${totalProjects} projects</span>
      </div>
      <div class="stackbar-track">
        <div class="stackbar-fill" data-pct="${pct}"></div>
      </div>`;
    stackbarList.appendChild(row);
  });

  // --- Achievements ---
  const achList = document.getElementById("achievements-list");
  const achGrid = document.createElement("div");
  achGrid.className = "achievements-grid";
  (d.achievements || []).forEach((a, i) => {
    const item = document.createElement("div");
    item.className = "ach-item";
    item.innerHTML = `<span class="ach-num">${String(i + 1).padStart(2, "0")}</span><p>${a}</p>`;
    achGrid.appendChild(item);
  });
  achList.appendChild(achGrid);

  // --- Education ---
  const eduList = document.getElementById("education-list");
  d.education.forEach((e) => {
    const item = document.createElement("div");
    item.className = "edu-item";
    item.innerHTML = `
      <div>
        <h3>${e.degree}</h3>
        ${e.institution ? `<div class="tl-company">${e.institution}</div>` : ""}
        ${e.detail ? `<div class="tl-company">${e.detail}</div>` : ""}
      </div>
      <div class="edu-period">${e.period}</div>`;
    eduList.appendChild(item);
  });

  // --- Certifications ---
  const certRow = document.getElementById("cert-row");
  (d.certifications || []).forEach((c) => {
    const pill = document.createElement("span");
    pill.className = "cert-pill";
    pill.textContent = c;
    certRow.appendChild(pill);
  });

  initReveal();
  initScrollProgress();
  initStatCounters();
  initDashCard();
  initStackBars();
})();

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function sparkBars() {
  // Small decorative bar-chart glyph inside each KPI tile.
  const heights = [40, 65, 50, 80, 60, 95];
  return heights.map((h) => `<span style="height:${h}%"></span>`).join("");
}

function initDashCard() {
  // Hero widget is above the fold, so animate shortly after load
  // rather than waiting on a scroll observer.
  setTimeout(() => {
    document.querySelectorAll(".dash-kpi-value").forEach((el) => {
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const duration = 1000;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = (target * eased).toFixed(target < 1 ? 2 : 0);
        el.textContent = `${prefix}${current}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });

    document.querySelectorAll(".bar-fill").forEach((el) => {
      requestAnimationFrame(() => {
        el.style.width = `${el.dataset.pct}%`;
      });
    });

    document.querySelectorAll(".bar-check").forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), 300 + i * 150);
    });
  }, 300);
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    bar.style.transform = `scaleX(${Math.min(Math.max(scrolled, 0), 1)})`;
  });
}

function initStatCounters() {
  const values = document.querySelectorAll(".stat-value");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          el.textContent = `${current}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  values.forEach((v) => io.observe(v));
}

function initStackBars() {
  const bars = document.querySelectorAll(".stackbar-fill");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        requestAnimationFrame(() => {
          el.style.width = `${el.dataset.pct}%`;
        });
        io.unobserve(el);
      });
    },
    { threshold: 0.3 }
  );
  bars.forEach((b) => io.observe(b));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((item) => io.observe(item));
}