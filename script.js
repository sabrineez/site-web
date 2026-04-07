let step1Saved = false;
let step2Saved = false;

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toISOString().split("T")[0];
  const dateField = document.getElementById("date_classification");
  if (dateField) {
    dateField.value = today;
  }

  openMainSection("intro-site", document.querySelector(".menu-btn.active"));
  buildPrejudiceTable();
  openRiskStep(1);
});

function openMainSection(sectionId, clickedBtn = null) {
  document.querySelectorAll(".main-panel").forEach(section => section.classList.remove("active"));
  document.querySelectorAll(".menu-btn").forEach(btn => btn.classList.remove("active"));

  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add("active");
  }

  if (clickedBtn) {
    clickedBtn.classList.add("active");
  }

  if (sectionId !== "confirmation") {
    const confirmation = document.getElementById("confirmation");
    if (confirmation) confirmation.classList.remove("active");
  }

  if (sectionId === "classification") {
    openClassStep(1, true);
  }

  if (sectionId === "risque") {
    openRiskStep(1);
  }

  if (sectionId === "dashboard") {
    updateDashboard();
  }
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
  const required = [
    "numero_demande",
    "nom_systeme",
    "nom_objet",
    "date_classification",
    "description",
    "responsable"
  ];

  const missing = required.some(id => !document.getElementById(id).value.trim());

  if (missing) {
    alert("Veuillez remplir tous les champs de l’étape 1.");
    return;
  }

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

const prejudices = [
  {
    id: "T1",
    title: "Préjudice physique causé aux personnes physiques",
    levels: [
      "Aucun préjudice ou préjudice très faible",
      "Inconfort physique",
      "Douleurs physiques, blessures, traumatisme, difficultés, maladie",
      "Incapacité physique, décès",
      "Lourdes pertes de vie"
    ]
  },
  {
    id: "T2",
    title: "Préjudice psychologique causé aux personnes physiques",
    levels: [
      "Aucun préjudice ou préjudice très faible",
      "Stress",
      "Détresse, traumatisme psychologique",
      "Maladie ou trouble mental",
      "Traumatisme psychologique généralisé"
    ]
  },
  {
    id: "T3",
    title: "Perte financière pour des personnes physiques",
    levels: [
      "Aucun préjudice ou préjudice très faible",
      "Stress ou inconfort",
      "Incidence sur la qualité de vie",
      "Sécurité financière compromise pour certains",
      "Sécurité financière compromise pour beaucoup"
    ]
  },
  {
    id: "T4",
    title: "Perte financière pour des entreprises et autres entités",
    levels: [
      "Aucun préjudice ou préjudice très faible",
      "Incidence sur le rendement",
      "Réduction de la compétitivité",
      "Viabilité compromise pour certains",
      "Viabilité compromise pour beaucoup"
    ]
  },
  {
    id: "T8",
    title: "Préjudice causé aux services rendus à la population",
    levels: [
      "Aucun préjudice ou préjudice très faible",
      "Incidence sur le rendement d’un service",
      "Incidence sur les opérations d’autres organismes publics",
      "Un ou plusieurs services indispensables à la population ne peuvent être rendus",
      "Très élevé"
    ]
  },
  {
    id: "T9",
    title: "Préjudice causé à la réputation",
    levels: [
      "Aucun préjudice ou préjudice très faible",
      "Perte de la confiance du public",
      "Embarras",
      "Relations compromises",
      "Atteinte majeure à la réputation"
    ]
  }
];

function buildPrejudiceTable() {
  const body = document.getElementById("prejudiceBody");
  if (!body) return;

  body.innerHTML = "";
  const levelNames = ["Très faible", "Faible", "Modéré", "Élevé", "Très élevé"];

  prejudices.forEach((p) => {
    const tr = document.createElement("tr");

    let cells = `
      <td class="center">
        <input type="checkbox" name="${p.id}_active" onchange="togglePrejudiceRow('${p.id}')">
      </td>
      <td class="prejudice-name">
        <strong>${p.id}</strong><br>${p.title}
      </td>
    `;

    p.levels.forEach((txt, i) => {
      cells += `
        <td class="choice-cell ${p.id}-field" style="opacity:.45;">
          <span class="level-title">${levelNames[i]}</span>
          <div class="small">${txt}</div>
          <div class="choice-stack">
            <label><input type="radio" name="${p.id}_C" value="${i + 1}" disabled> C</label>
            <label><input type="radio" name="${p.id}_I" value="${i + 1}" disabled> I</label>
            <label><input type="radio" name="${p.id}_D" value="${i + 1}" disabled> D</label>
          </div>
        </td>
      `;
    });

    cells += `
      <td class="justification-box ${p.id}-field" style="opacity:.45;">
        <textarea name="${p.id}_justification" placeholder="Justification ${p.id}" disabled></textarea>
      </td>
    `;

    tr.innerHTML = cells;
    body.appendChild(tr);
  });
}

function togglePrejudiceRow(id) {
  const active = document.querySelector(`input[name="${id}_active"]`).checked;
  const fields = document.querySelectorAll(`.${id}-field`);
  const inputs = document.querySelectorAll(
    `input[name="${id}_C"], input[name="${id}_I"], input[name="${id}_D"], textarea[name="${id}_justification"]`
  );

  fields.forEach(f => {
    f.style.opacity = active ? "1" : ".45";
  });

  inputs.forEach(input => {
    input.disabled = !active;
    if (!active && input.type === "radio") input.checked = false;
    if (!active && input.tagName === "TEXTAREA") input.value = "";
  });
}

function prejudiceActif(id) {
  return document.querySelector(`input[name="${id}_active"]`)?.checked;
}

function maxFor(id) {
  if (!prejudiceActif(id)) return null;

  let max = null;
  ["C", "I", "D"].forEach(letter => {
    const checked = document.querySelector(`input[name="${id}_${letter}"]:checked`);
    if (checked) {
      const val = Number(checked.value);
      max = max === null ? val : Math.max(max, val);
    }
  });

  return max;
}

function labelCID(v) {
  if (v === 1) return "Tf";
  if (v === 2) return "F";
  if (v === 3) return "M";
  if (v === 4) return "E";
  return "TE";
}

function openRiskStep(step) {
  document.querySelectorAll(".risk-panel").forEach(el => el.classList.remove("active"));
  document.getElementById(`riskStep${step}`).classList.add("active");

  document.querySelectorAll(".risk-btn").forEach(btn => btn.classList.remove("active"));
  const btn = document.getElementById(`riskBtn${step}`);
  if (btn) btn.classList.add("active");

  document.getElementById("riskProgressBar").style.width = `${(step / 8) * 100}%`;
}



// ===== Dashboard + confirmation =====
let demandes = [];

document.addEventListener("DOMContentLoaded", function () {
  chargerDemandes();
  brancherDashboard();
});

function brancherDashboard() {
  const search = document.getElementById("searchInput");
  const status = document.getElementById("statusFilter");
  if (search) search.addEventListener("input", renderDashboard);
  if (status) status.addEventListener("change", renderDashboard);

  const downloadBtn = document.getElementById("downloadReportBtn");
  if (downloadBtn) downloadBtn.addEventListener("click", telechargerRapport);

  const classForm = document.getElementById("classificationForm");
  if (classForm) {
    classForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const activeValues = prejudices.map(p => maxFor(p.id)).filter(v => v !== null);
      if (activeValues.length === 0) {
        alert("Veuillez sélectionner au moins un préjudice applicable.");
        return;
      }

      const max = Math.max(...activeValues);
      let niveau = "Pa";
      if (max === 3) niveau = "Pb";
      if (max >= 4) niveau = "Pc";

      let maxC = 1;
      let maxI = 1;
      let maxD = 1;
      let hasCID = false;

      prejudices.forEach(p => {
        if (!prejudiceActif(p.id)) return;

        const c = document.querySelector(`input[name="${p.id}_C"]:checked`);
        const i = document.querySelector(`input[name="${p.id}_I"]:checked`);
        const d = document.querySelector(`input[name="${p.id}_D"]:checked`);

        if (c) { maxC = Math.max(maxC, Number(c.value)); hasCID = true; }
        if (i) { maxI = Math.max(maxI, Number(i.value)); hasCID = true; }
        if (d) { maxD = Math.max(maxD, Number(d.value)); hasCID = true; }
      });

      if (!hasCID) {
        alert("Veuillez choisir au moins un niveau C, I ou D pour un préjudice sélectionné.");
        return;
      }

      const profil = `${niveau}-${labelCID(maxC)}-${labelCID(maxI)}-${labelCID(maxD)}`;
      const numeroDemande = document.getElementById("numero_demande").value.trim();
      const nomProjet = document.getElementById("nom_objet").value.trim();

      document.getElementById("resumeDemande").textContent = `(${numeroDemande}) — ${nomProjet}`;
      document.getElementById("profilCalc").textContent = profil;
      document.getElementById("adminResult").style.display = "block";

      const data = {
        numero: numeroDemande || "-",
        type: "Classification",
        projet: nomProjet || "-",
        createur: document.getElementById("responsable").value.trim() || "-",
        date: document.getElementById("date_classification").value || new Date().toISOString().split("T")[0],
        statut: "Complétée",
        direction: "-",
        resume: document.getElementById("description").value.trim() || `Profil calculé : ${profil}`
      };

      enregistrerDemande(data);
      afficherConfirmation(data);
    });
  }

  const riskForm = document.getElementById("riskForm");
  if (riskForm) {
    riskForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = {
        numero: "-",
        type: "Analyse de risque",
        projet: document.getElementById("actifs_principaux").value.trim() || "-",
        createur: "-",
        date: new Date().toISOString().split("T")[0],
        statut: "Complétée",
        direction: "-",
        resume: document.getElementById("commentaires_risque").value.trim() || "Questionnaire complété"
      };

      enregistrerDemande(data);
      afficherConfirmation(data);
    });
  }
}

function enregistrerDemande(data) {
  demandes.unshift(data);
  localStorage.setItem("proanalyse_demandes", JSON.stringify(demandes));
  renderDashboard();
}

function chargerDemandes() {
  try {
    demandes = JSON.parse(localStorage.getItem("proanalyse_demandes") || "[]");
  } catch (e) {
    demandes = [];
  }
  renderDashboard();
}

function updateDashboard() {
  renderDashboard();
}

function renderDashboard() {
  const body = document.getElementById("dashboardBody");
  if (!body) return;

  const search = (document.getElementById("searchInput")?.value || "").toLowerCase();
  const status = (document.getElementById("statusFilter")?.value || "").toLowerCase();

  const filtered = demandes.filter(item => {
    const text = [item.numero, item.type, item.projet, item.createur, item.date, item.statut].join(" ").toLowerCase();
    const okSearch = !search || text.includes(search);
    const okStatus = !status || (item.statut || "").toLowerCase().includes(status);
    return okSearch && okStatus;
  });

  body.innerHTML = "";

  if (!filtered.length) {
    body.innerHTML = `<tr id="dashboardEmptyRow"><td colspan="6" class="center small">Aucune demande n’a encore été enregistrée.</td></tr>`;
  } else {
    filtered.forEach(item => {
      const tr = document.createElement("tr");
      const statusClass = (item.statut || "").toLowerCase().includes("compl") ? "completed" : "progress";
      tr.innerHTML = `
        <td>${escapeHtml(item.numero || "-")}</td>
        <td>${escapeHtml(item.type || "-")}</td>
        <td>${escapeHtml(item.projet || "-")}</td>
        <td>${escapeHtml(item.createur || "-")}</td>
        <td>${escapeHtml(item.date || "-")}</td>
        <td><span class="status-chip ${statusClass}">${escapeHtml(item.statut || "-")}</span></td>
      `;
      body.appendChild(tr);
    });
  }

  const total = demandes.length;
  const classifications = demandes.filter(d => d.type === "Classification").length;
  const risques = demandes.filter(d => d.type === "Analyse de risque").length;
  const completes = demandes.filter(d => (d.statut || "").toLowerCase().includes("compl")).length;

  if (document.getElementById("kpiTotal")) document.getElementById("kpiTotal").textContent = total;
  if (document.getElementById("kpiClassification")) document.getElementById("kpiClassification").textContent = classifications;
  if (document.getElementById("kpiRisque")) document.getElementById("kpiRisque").textContent = risques;
  if (document.getElementById("kpiCompleted")) document.getElementById("kpiCompleted").textContent = completes;
}

function afficherConfirmation(data) {
  document.getElementById("detailNumero").textContent = data.numero || "-";
  document.getElementById("detailType").textContent = data.type || "-";
  document.getElementById("detailDate").textContent = data.date || "-";
  document.getElementById("detailProjet").textContent = data.projet || "-";
  document.getElementById("detailCreateur").textContent = data.createur || "-";
  document.getElementById("detailDirection").textContent = data.direction || "-";
  document.getElementById("detailResume").textContent = data.resume || "-";

  const confirmation = document.getElementById("confirmation");
  if (confirmation) {
    document.querySelectorAll(".main-panel").forEach(section => section.classList.remove("active"));
    confirmation.classList.add("active");
    document.querySelectorAll(".menu-btn").forEach(btn => btn.classList.remove("active"));
    window.currentReportData = data;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function telechargerRapport() {
  const data = window.currentReportData;
  if (!data) return;

  const contenu = `Rapport de demande

Numéro : ${data.numero || "-"}
Type : ${data.type || "-"}
Projet : ${data.projet || "-"}
Créateur : ${data.createur || "-"}
Date : ${data.date || "-"}
Direction / Service : ${data.direction || "-"}

Résumé :
${data.resume || "-"}

Ce document constitue une copie des informations saisies par l’utilisateur.`;

  const blob = new Blob([contenu], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rapport-${(data.numero || "demande").replace(/[^a-zA-Z0-9-_]/g, "_")}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
