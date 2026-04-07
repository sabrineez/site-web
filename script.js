let step1Saved = false;
let step2Saved = false;
let currentReportData = null;

const prejudices = [
  { id: "T1", title: "Préjudice physique causé aux personnes physiques", levels: ["Aucun préjudice ou préjudice très faible","Inconfort physique","Douleurs physiques, blessures, traumatisme, difficultés, maladie","Incapacité physique, décès","Lourdes pertes de vie"] },
  { id: "T2", title: "Préjudice psychologique causé aux personnes physiques", levels: ["Aucun préjudice ou préjudice très faible","Stress","Détresse, traumatisme psychologique","Maladie ou trouble mental","Traumatisme psychologique généralisé"] },
  { id: "T3", title: "Perte financière pour des personnes physiques", levels: ["Aucun préjudice ou préjudice très faible","Stress ou inconfort","Incidence sur la qualité de vie","Sécurité financière compromise pour certains","Sécurité financière compromise pour beaucoup"] },
  { id: "T4", title: "Perte financière pour des entreprises et autres entités", levels: ["Aucun préjudice ou préjudice très faible","Incidence sur le rendement","Réduction de la compétitivité","Viabilité compromise pour certains","Viabilité compromise pour beaucoup"] },
  { id: "T8", title: "Préjudice causé aux services rendus à la population", levels: ["Aucun préjudice ou préjudice très faible","Incidence sur le rendement d’un service","Incidence sur les opérations d’autres organismes publics","Un ou plusieurs services indispensables à la population ne peuvent être rendus","Très élevé"] },
  { id: "T9", title: "Préjudice causé à la réputation", levels: ["Aucun préjudice ou préjudice très faible","Perte de la confiance du public","Embarras","Relations compromises","Atteinte majeure à la réputation"] }
];

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toISOString().split("T")[0];
  const dateField = document.getElementById("date_classification");
  if (dateField) dateField.value = today;

  openMainSection("intro-site", document.querySelector(".menu-btn.active"));
  buildPrejudiceTable();
  openRiskStep(1);
  loadDashboard();
  initDashboardFilters();
});

function openMainSection(sectionId, clickedBtn = null) {
  document.querySelectorAll(".main-panel").forEach(section => section.classList.remove("active"));
  document.querySelectorAll(".menu-btn").forEach(btn => btn.classList.remove("active"));

  const section = document.getElementById(sectionId);
  if (section) section.classList.add("active");
  if (clickedBtn) clickedBtn.classList.add("active");

  if (sectionId === "classification") openClassStep(1, true);
  if (sectionId === "risque") openRiskStep(1);
}

function openClassStep(step, force = false) {
  if (!force) {
    if (step === 2 && !step1Saved) return;
    if (step === 3 && !step2Saved) return;
  }
  document.querySelectorAll(".step-panel").forEach(el => el.classList.remove("active"));
  document.getElementById(`classStep${step}`).classList.add("active");
  document.querySelectorAll(".step-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`stepBtn${step}`).classList.add("active");
}

function saveStep1() {
  const required = ["numero_demande","nom_systeme","nom_objet","date_classification","description","responsable"];
  const missing = required.some(id => !document.getElementById(id).value.trim());
  if (missing) { alert("Veuillez remplir tous les champs de l’étape 1."); return; }
  step1Saved = true;
  document.getElementById("msgStep1").style.display = "block";
  document.getElementById("stepBtn2").classList.remove("locked");
  openClassStep(2);
}

function saveStep2() {
  step2Saved = true;
  document.getElementById("msgStep2").style.display = "block";
  document.getElementById("stepBtn3").classList.remove("locked");
  openClassStep(3);
}

function buildPrejudiceTable() {
  const body = document.getElementById("prejudiceBody");
  if (!body) return;
  body.innerHTML = "";
  const levelNames = ["Très faible", "Faible", "Modéré", "Élevé", "Très élevé"];
  prejudices.forEach((p) => {
    const tr = document.createElement("tr");
    let cells = `<td class="center"><input type="checkbox" name="${p.id}_active" onchange="togglePrejudiceRow('${p.id}')"></td><td class="prejudice-name"><strong>${p.id}</strong><br>${p.title}</td>`;
    p.levels.forEach((txt, i) => {
      cells += `<td class="choice-cell ${p.id}-field" style="opacity:.45;"><span class="level-title">${levelNames[i]}</span><div class="small">${txt}</div><div class="choice-stack"><label><input type="radio" name="${p.id}_C" value="${i + 1}" disabled> C</label><label><input type="radio" name="${p.id}_I" value="${i + 1}" disabled> I</label><label><input type="radio" name="${p.id}_D" value="${i + 1}" disabled> D</label></div></td>`;
    });
    cells += `<td class="justification-box ${p.id}-field" style="opacity:.45;"><textarea name="${p.id}_justification" placeholder="Justification ${p.id}" disabled></textarea></td>`;
    tr.innerHTML = cells;
    body.appendChild(tr);
  });
}

function togglePrejudiceRow(id) {
  const active = document.querySelector(`input[name="${id}_active"]`).checked;
  const fields = document.querySelectorAll(`.${id}-field`);
  const inputs = document.querySelectorAll(`input[name="${id}_C"], input[name="${id}_I"], input[name="${id}_D"], textarea[name="${id}_justification"]`);
  fields.forEach(f => { f.style.opacity = active ? "1" : ".45"; });
  inputs.forEach(input => {
    input.disabled = !active;
    if (!active && input.type === "radio") input.checked = false;
    if (!active && input.tagName === "TEXTAREA") input.value = "";
  });
}

function prejudiceActif(id) { return document.querySelector(`input[name="${id}_active"]`)?.checked; }
function maxFor(id) {
  if (!prejudiceActif(id)) return null;
  let max = null;
  ["C","I","D"].forEach(letter => {
    const checked = document.querySelector(`input[name="${id}_${letter}"]:checked`);
    if (checked) {
      const val = Number(checked.value);
      max = max === null ? val : Math.max(max, val);
    }
  });
  return max;
}
function labelCID(v) { if (v === 1) return "Tf"; if (v === 2) return "F"; if (v === 3) return "M"; if (v === 4) return "E"; return "TE"; }

function openRiskStep(step) {
  document.querySelectorAll(".risk-panel").forEach(el => el.classList.remove("active"));
  document.getElementById(`riskStep${step}`).classList.add("active");
  document.querySelectorAll(".risk-btn").forEach(btn => btn.classList.remove("active"));
  const btn = document.getElementById(`riskBtn${step}`); if (btn) btn.classList.add("active");
  document.getElementById("riskProgressBar").style.width = `${(step / 8) * 100}%`;
}

function showConfirmation(data) {
  currentReportData = data;
  document.getElementById("detailNumero").textContent = data.numero || "-";
  document.getElementById("detailType").textContent = data.type || "-";
  document.getElementById("detailDate").textContent = data.date || "-";
  document.getElementById("detailProjet").textContent = data.projet || "-";
  document.getElementById("detailCreateur").textContent = data.createur || "-";
  document.getElementById("detailDirection").textContent = data.direction || "-";
  document.getElementById("detailResume").textContent = data.resume || "-";
  const section = document.getElementById("merci-section");
  section.classList.remove("hidden");
  section.scrollIntoView({behavior:"smooth", block:"start"});
}

function saveDashboard(items) { localStorage.setItem("proanalyse-demandes", JSON.stringify(items)); }
function getDashboardItems() { try { return JSON.parse(localStorage.getItem("proanalyse-demandes") || "[]"); } catch { return []; } }
function renderDashboard(items) {
  const body = document.getElementById("dashboardBody");
  const empty = document.getElementById("dashboardEmpty");
  if (!body) return;
  body.innerHTML = "";
  items.forEach(item => {
    const tr = document.createElement("tr");
    const statusClass = item.statut === "Complétée" ? "completed" : "progress";
    tr.innerHTML = `
      <td>${escapeHtml(item.numero || "-")}</td>
      <td>${escapeHtml(item.type || "-")}</td>
      <td>${escapeHtml(item.projet || "-")}</td>
      <td>${escapeHtml(item.createur || "-")}</td>
      <td>${escapeHtml(item.date || "-")}</td>
      <td><span class="status-pill ${statusClass}">${escapeHtml(item.statut || "En cours")}</span></td>`;
    body.appendChild(tr);
  });
  if (empty) empty.style.display = items.length ? "none" : "block";
  updateKpis(items);
}
function updateKpis(items) {
  document.getElementById("kpiTotal").textContent = items.length;
  document.getElementById("kpiClassification").textContent = items.filter(i => i.type === "Classification").length;
  document.getElementById("kpiRisque").textContent = items.filter(i => i.type === "Analyse de risque").length;
  document.getElementById("kpiCompleted").textContent = items.filter(i => i.statut === "Complétée").length;
}
function addDashboardItem(item) {
  const items = getDashboardItems();
  items.unshift(item);
  saveDashboard(items);
  renderDashboard(items);
}
function loadDashboard() { renderDashboard(getDashboardItems()); }
function initDashboardFilters() {
  const searchInput = document.getElementById("searchInput");
  const statusFilter = document.getElementById("statusFilter");
  if (!searchInput || !statusFilter) return;
  function apply() {
    const query = searchInput.value.trim().toLowerCase();
    const status = statusFilter.value.trim().toLowerCase();
    const all = getDashboardItems();
    const filtered = all.filter(item => {
      const blob = [item.numero,item.type,item.projet,item.createur,item.date,item.statut].join(" ").toLowerCase();
      const okQuery = !query || blob.includes(query);
      const okStatus = !status || (item.statut || "").toLowerCase().includes(status);
      return okQuery && okStatus;
    });
    renderDashboard(filtered);
  }
  searchInput.addEventListener("input", apply);
  statusFilter.addEventListener("change", apply);
}
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.getElementById("riskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    numero: `RIS-${Date.now().toString().slice(-6)}`,
    type: "Analyse de risque",
    projet: document.getElementById("actifs_principaux").value.trim() || "Projet non précisé",
    createur: "-",
    date: new Date().toISOString().split("T")[0],
    direction: "-",
    resume: document.getElementById("commentaires_risque").value.trim() || "Questionnaire de préanalyse complété.",
    statut: "Complétée"
  };
  addDashboardItem(data);
  showConfirmation(data);
  alert("Le questionnaire d’analyse de risque a été préparé pour être transmis à l’équipe concernée.");
});

document.getElementById("classificationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const activeValues = prejudices.map(p => maxFor(p.id)).filter(v => v !== null);
  if (activeValues.length === 0) { alert("Veuillez sélectionner au moins un préjudice applicable."); return; }
  const max = Math.max(...activeValues);
  let niveau = "Pa"; if (max === 3) niveau = "Pb"; if (max >= 4) niveau = "Pc";
  let maxC = 1, maxI = 1, maxD = 1, hasCID = false;
  prejudices.forEach(p => {
    if (!prejudiceActif(p.id)) return;
    const c = document.querySelector(`input[name="${p.id}_C"]:checked`);
    const i = document.querySelector(`input[name="${p.id}_I"]:checked`);
    const d = document.querySelector(`input[name="${p.id}_D"]:checked`);
    if (c) { maxC = Math.max(maxC, Number(c.value)); hasCID = true; }
    if (i) { maxI = Math.max(maxI, Number(i.value)); hasCID = true; }
    if (d) { maxD = Math.max(maxD, Number(d.value)); hasCID = true; }
  });
  if (!hasCID) { alert("Veuillez choisir au moins un niveau C, I ou D pour un préjudice sélectionné."); return; }
  const profil = `${niveau}-${labelCID(maxC)}-${labelCID(maxI)}-${labelCID(maxD)}`;
  const numeroDemande = document.getElementById("numero_demande").value.trim();
  const nomProjet = document.getElementById("nom_objet").value.trim();
  document.getElementById("resumeDemande").textContent = `(${numeroDemande}) — ${nomProjet}`;
  document.getElementById("profilCalc").textContent = profil;
  document.getElementById("adminResult").style.display = "block";
  const data = {
    numero: numeroDemande || `CLS-${Date.now().toString().slice(-6)}`,
    type: "Classification",
    projet: nomProjet || "Projet non précisé",
    createur: document.getElementById("responsable").value.trim() || "-",
    date: document.getElementById("date_classification").value || new Date().toISOString().split("T")[0],
    direction: "-",
    resume: document.getElementById("description").value.trim() || `Profil calculé : ${profil}`,
    statut: "Complétée"
  };
  addDashboardItem(data);
  showConfirmation(data);
  alert("La classification a été préparée pour être envoyée à l’équipe concernée.");
});

document.getElementById("downloadReportBtn").addEventListener("click", function () {
  if (!currentReportData) return;
  const htmlContent = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>${escapeHtml(currentReportData.numero || 'rapport')} - Rapport</title><style>body{font-family:Arial,sans-serif;color:#101828;margin:0;padding:40px;background:#fff}.wrap{max-width:900px;margin:0 auto}.title{font-size:28px;margin:0 0 10px}.meta{color:#667085;font-size:14px;margin-bottom:24px}.table{width:100%;border-collapse:collapse;border:1px solid #e5eaf1}.table th,.table td{padding:14px 16px;border-bottom:1px solid #edf2f7;text-align:left;vertical-align:top}.table th{width:280px;background:#f8fafc}.note{margin-top:24px;padding:18px;border:1px solid #e5eaf1;border-radius:16px;background:#fafbfd;font-size:13px;line-height:1.7;color:#475467}</style></head><body><div class="wrap"><h1 class="title">${escapeHtml(currentReportData.type === 'Analyse de risque' ? 'Rapport d’analyse de risque' : 'Rapport de classification')}</h1><div class="meta">Numéro : ${escapeHtml(currentReportData.numero || '-')} | Date : ${escapeHtml(currentReportData.date || '-')}</div><table class="table"><tr><th>Type de demande</th><td>${escapeHtml(currentReportData.type || '-')}</td></tr><tr><th>Nom du projet</th><td>${escapeHtml(currentReportData.projet || '-')}</td></tr><tr><th>Créateur</th><td>${escapeHtml(currentReportData.createur || '-')}</td></tr><tr><th>Direction / Service</th><td>${escapeHtml(currentReportData.direction || '-')}</td></tr><tr><th>Résumé / informations fournies</th><td style="white-space:pre-wrap">${escapeHtml(currentReportData.resume || '-')}</td></tr></table><div class="note"><strong>Note :</strong> Ce rapport constitue une copie des données saisies par l’utilisateur.</div></div></body></html>`;
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentReportData.numero || 'rapport'}_rapport.html`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
});

document.getElementById("openDashboardBtn").addEventListener("click", function () {
  const dashboardBtn = Array.from(document.querySelectorAll(".menu-btn")).find(btn => btn.textContent.includes("Suivi des demandes"));
  openMainSection("dashboard", dashboardBtn || null);
  document.getElementById("merci-section").classList.add("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
});
