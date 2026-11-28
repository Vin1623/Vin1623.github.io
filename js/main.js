(function () {
  const S = window.SITE, P = window.PROJECTS;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const asset = (p, f) => `assets/${p.id}/${f}`;

  // ---- shared chrome ----
  $("brand-name").textContent = S.name;
  $("footer").innerHTML = `© ${new Date().getFullYear()} ${esc(S.name)} · Built with plain HTML/CSS · Hosted free on GitHub Pages`;
  if (S.resume) { const r = $("nav-resume"); r.href = S.resume; r.target = "_blank"; r.hidden = false; }

  function links() {
    const l = [`<a class="btn" href="mailto:${esc(S.email)}">${esc(S.email)}</a>`,
      `<a class="btn ghost" href="${esc(S.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
      `<a class="btn ghost" href="${esc(S.github)}" target="_blank" rel="noopener">GitHub</a>`];
    if (S.resume) l.push(`<a class="btn ghost" href="${esc(S.resume)}" target="_blank">Resume (PDF)</a>`);
    return l.join("");
  }

  // ---- placeholder board graphic for missing media ----
  const boardSVG = (label) => `
    <svg class="ph-svg" viewBox="0 0 320 180" aria-hidden="true">
      <rect x="20" y="20" width="280" height="140" rx="10" class="ph-board"/>
      <g class="ph-trace">
        <path d="M60 60 H140 V100 H200"/><path d="M60 120 H110 V80 H170"/>
        <path d="M230 50 V130"/><path d="M250 70 H280"/><path d="M250 110 H280"/>
      </g>
      <rect x="140" y="70" width="60" height="44" rx="3" class="ph-chip"/>
      <circle cx="40" cy="40" r="5" class="ph-hole"/><circle cx="280" cy="40" r="5" class="ph-hole"/>
      <circle cx="40" cy="140" r="5" class="ph-hole"/><circle cx="280" cy="140" r="5" class="ph-hole"/>
      <text x="160" y="172" text-anchor="middle" class="ph-text">${esc(label)}</text>
    </svg>`;

  // ---- home page ----
  if ($("project-grid")) {
    $("hero-name").textContent = S.name;
    $("hero-tagline").textContent = S.tagline;
    $("hero-school").textContent = S.school;
    $("hero-about").textContent = S.about;
    $("hero-links").innerHTML = links();
    $("contact-links").innerHTML = links();

    $("project-grid").innerHTML = P.map((p) => `
      <a class="card" href="project.html?p=${p.id}">
        <div class="card-media">${p.cover ? `<img src="${asset(p, p.cover)}" alt="${esc(p.title)}" loading="lazy">` : boardSVG(p.tools[0])}</div>
        <div class="card-body">
          <p class="mono muted small">${esc(p.date)}</p>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.short)}</p>
          <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          <p class="mono role">${esc(p.role)}</p>
        </div>
      </a>`).join("");

    $("skills-list").innerHTML = Object.entries(S.skills).map(([k, v]) => `
      <div class="skill-group"><h4 class="mono">${esc(k)}</h4>
      <div class="tags">${v.map((s) => `<span>${esc(s)}</span>`).join("")}</div></div>`).join("");
  }

  // ---- project page ----
  if ($("project")) {
    const id = new URLSearchParams(location.search).get("p");
    const i = P.findIndex((x) => x.id === id);
    const p = P[i];
    if (!p) { $("project").innerHTML = `<section><h1>Project not found</h1><p><a href="./">Back to home</a></p></section>`; return; }
    document.title = `${p.title} · ${S.name}`;

    // PDF embed (or clickable image) plus an "open full-size" link; used for the schematic and PCB layout.
    const doc = (file, label) =>
      (/\.pdf$/i.test(file)
        ? `<object class="schematic" data="${asset(p, file)}#view=FitH" type="application/pdf">
             <p>Your browser can't show the PDF inline. <a href="${asset(p, file)}" target="_blank">Open ${label.toLowerCase()}</a>.</p></object>`
        : `<a href="${asset(p, file)}" target="_blank"><img class="schematic-img" src="${asset(p, file)}" alt="${label}"></a>`)
      + `<p class="mono small"><a href="${asset(p, file)}" target="_blank">Open full-size ${label.toLowerCase()} ↗</a></p>`;

    const sch = p.schematic
      ? doc(p.schematic, "Schematic")
      : `<div class="placeholder">${boardSVG("schematic coming soon")}</div>`;

    const layout = p.layout ? doc(p.layout, "PCB layout") : "";

    const model = p.model
      ? `<model-viewer src="${asset(p, p.model)}" alt="3D model of ${esc(p.title)}" camera-controls auto-rotate
           ${p.modelOrientation ? `orientation="${esc(p.modelOrientation)}"` : ""}
           shadow-intensity="0.6" exposure="1.1" environment-image="neutral" interaction-prompt="auto"></model-viewer>
         <p class="mono small muted">Drag to rotate · scroll/pinch to zoom</p>`
      : `<div class="placeholder">${boardSVG("3D board view coming soon")}</div>`;

    const photos = p.photos.length
      ? `<div class="photos">${p.photos.map((f) => `<a href="${asset(p, f)}" target="_blank"><img src="${asset(p, f)}" alt="Board photo" loading="lazy"></a>`).join("")}</div>`
      : "";

    const prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];

    $("project").innerHTML = `
      <section class="proj-head">
        <p class="mono kicker">// ${esc(p.date)}</p>
        <h1>${esc(p.title)}</h1>
        <dl class="spec">
          <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
          <div><dt>Tools</dt><dd>${p.tools.map(esc).join(" · ")}</dd></div>
          <div><dt>Status</dt><dd>${esc(p.status)}</dd></div>
        </dl>
      </section>
      <section>
        <h2>Overview</h2><p class="lead">${esc(p.overview)}</p>
      </section>
      <section class="media-2">
        <div><h2>3D Board</h2>${model}</div>
        <div><h2>Schematic</h2>${sch}</div>
      </section>
      ${layout ? `<section><h2>PCB Layout</h2>${layout}</section>` : ""}
      ${photos ? `<section><h2>Hardware</h2>${photos}</section>` : ""}
      <section>
        <h2>Technical Highlights</h2>
        <div class="highlights">${p.highlights.map(([h, t]) => `<div class="hl"><h4>${esc(h)}</h4><p>${esc(t)}</p></div>`).join("")}</div>
      </section>
      <nav class="pager mono">
        <a href="project.html?p=${prev.id}">← ${esc(prev.title)}</a>
        <a href="project.html?p=${next.id}">${esc(next.title)} →</a>
      </nav>`;
  }
})();
